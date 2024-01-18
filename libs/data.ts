/*
 * @Author: JinBlack
 * @Date: 2023-12-12 15:42:39
 * @LastEditors: JinBlack
 * @LastEditTime: 2024-01-18 16:11:42
 * @FilePath: /ticket/libs/data.ts
 * @Description: dota2sites@gmail.com
 *
 * Copyright (c) 2023 by 4tmr, All Rights Reserved.
 */
import { SupabaseClient, createClient } from '@supabase/supabase-js';
import type { Database, Json } from '../types/supabase';

export type SPClient = SupabaseClient<Database>;
export type { Database, Json };
export { createClient };

export class Handler {
	client: SPClient;

	constructor(client: SPClient) {
		this.client = client;
	}

	async getAppConfig() {
		const { data: configs, error } = await this.client.from('configs').select('key,value');
		if (error) throw error;
		let config: { [key: string]: Json } = {};
		for (const c of configs) {
			config[c.key] = c.value;
		}
		return config as AppConfig;
	}

	// async getAppDataBy({ host }: { host: string }) {
	// 	const { data: site, error } = await this.client
	// 		.from('sites')
	// 		.select(
	// 			'domains,id,name,short_name,description,avatar,config:sites_configs(header,footer,page_size,email),categories:categories(slug)'
	// 		)
	// 		.contains('domains', [host])
	// 		.single<site>();
	// 	// if (error) throw error;
	// 	if (!site) {
	// 		throw new Error('no site');
	// 	}
	// 	return {
	// 		domain: host,
	// 		title: site.name,
	// 		featured_image: site.avatar,
	// 		description: site.description,
	// 		app_name: site.short_name,
	// 		categories: site.categories.map((c) => c.slug),
	// 		...site.config
	// 	} as AppData;
	// }

	async getUser() {
		const {
			data: { user }
		} = await this.client.auth.getUser();
		if (user) {
			return {
				user: {
					id: user.id,
					email: user.email,
					avatar: user.user_metadata['avatar']
				}
			};
		}
		return {};
	}

	async getUserDetail() {
		// const { data: profile } = await this.client.from('profiles').select('*').eq('id', user.id).single();
		// if (profile) {
		//   return {
		//     user: {
		//       id: user.id,
		//       email: user.email || '',
		//       avatar: profile.avatar || ''
		//     }
		//   };
		// }
	}

	async getSites(props?: { categories?: string[]; isPromo?: boolean; isChinese?: boolean; limit?: number }) {
		const defaultValue = {
			isChinese: true,
			isPromo: true,
			limit: 100
		};
		const { isPromo, isChinese, categories, limit } = {
			...defaultValue,
			...props
		};
		const langKeys = isChinese
			? 'name:name_cn,bonus:bonus_cn,description:description_cn,short_description:short_description_cn'
			: 'name,bonus,description,short_description';
		let query = this.client.from('v_sites').select(
			` uid,
        code,
        ${langKeys},
        short_name,
        avatar,
        rating,
        is_cn,
        is_lower_priority,
        is_active,
        categories`
		);
		if (categories) {
			query = query.containedBy('categories', categories).contains('categories', categories);
		}
		if (isPromo) {
			query = query.eq('is_lower_priority', false).eq('is_active', true);
		} else {
			query = query.eq('is_lower_priority', true);
		}
		const { data: sites, error } = await query
			.eq('type', 'promo')
			.range(0, limit - 1)
			.order('order', { ascending: false })
			.returns<SiteLite[]>();
		return sites || [];
	}

	getSiteLite = async (props: { isChinese?: boolean; shortName: string }) => {
		const defaultValue = {
			isChinese: true
		};
		const { isChinese, shortName } = {
			...defaultValue,
			...props
		};
		const langKeys = isChinese
			? 'name:name_cn,bonus:bonus_cn,description:description_cn,short_description:short_description_cn'
			: 'name,bonus,description,short_description';
		const { data: site, error } = await this.client
			.from('v_sites')
			.select(`short_name,avatar,banner,square_image,rating,uid,code,${langKeys}`)
			.eq('short_name', shortName)
			.single<SiteLite>();
		return site;
	};

	getSite = async (props: { isChinese?: boolean; shortName: string }) => {
		const defaultValue = {
			isChinese: true
		};
		const { isChinese, shortName } = {
			...defaultValue,
			...props
		};
		const bonusKey = !isChinese ? 'bonus' : 'bonus:bonus_cn';
		const tagKey = !isChinese ? 'name' : 'name:name_cn';
		const langKeys = isChinese
			? 'name:name_cn,bonus:bonus_cn,description:description_cn,short_description:short_description_cn'
			: 'name,bonus,description,short_description';
		const { data: site, error } = await this.client
			.from('v_sites')
			.select(
				`
        uid,
        code,
        short_name,
        avatar,
        banner,
        rating,
        keywords,
        ${langKeys},
        promos(
          uid,
          code,
          ${bonusKey}
        ),
        tags(
          ${tagKey},
          slug
        ),
        posts!posts_sites(
          title,
          excerpt,
          slug
        ),
        detail_posts:posts!sites_detail_posts(
          title,
          html
        ),
        is_cn
      `
			)
			.eq('short_name', shortName)
			.limit(20, { foreignTable: 'posts' })
			.order('id', { referencedTable: 'posts', ascending: false })
			.single<SiteDetail>();
		return site;
	};

	async getPosts(props?: {
		page?: number;
		tag?: string;
		category?: string;
		pageSize?: number;
		categories?: string[];
		is_important?: boolean;
		isChinese?: boolean;
	}) {
		const defaultValue = {
			page: 1,
			pageSize: 10,
			is_important: false,
			isChinese: true
		};
		const { page, pageSize, tag, category, categories, is_important, isChinese } = {
			...defaultValue,
			...props
		};
		const tagKey = !isChinese ? 'name' : 'name:name_cn';
		let select = 'title, excerpt, slug, ghost_id, featured_image, created_at';
		if (tag) {
			select = `${select},tags!inner(${tagKey},slug)`;
		}
		let query = this.client.from('v_posts').select(select, {
			count: 'exact'
		});
		if (tag) {
			query = query.eq('tags.slug', tag);
		}
		if (category) {
			query = query.contains('categories', [category]);
		}
		if (categories) {
			query = query.containedBy('categories', categories);
		}
		if (is_important) {
			query = query.eq('is_important', true);
		}
		const {
			data: posts,
			count,
			error
		} = await query
			.eq('is_active', true)
			.range(pageSize * (page - 1), pageSize * page - 1)
			.order('created_at', { ascending: false })
			.returns<PostLite[] | null>();
		return {
			posts: posts || [],
			count: count || 0,
			page_size: pageSize
		};
	}

	getPost = async (props: { slug?: string; isChinese?: boolean; title?: string }) => {
		const defaultValue = {
			isChinese: true
		};
		const { slug, title, isChinese } = {
			...defaultValue,
			...props
		};
		const tagKey = !isChinese ? 'name' : 'name:name_cn';
		const bonusKey = !isChinese ? 'bonus' : 'bonus:bonus_cn';
		const langKeys = isChinese
			? 'name:name_cn,bonus:bonus_cn,description:description_cn,short_description:short_description_cn'
			: 'name,bonus,description,short_description';
		let query = this.client
			.from('v_posts')
			.select(
				`
        title,
        excerpt,
        slug,
        ghost_id,
        featured_image,
        created_at,
        html,
        categories,
        tags(${tagKey}, slug),
        sites:v_sites!posts_sites(short_name,avatar,rating,uid,${bonusKey},code,${langKeys},categories),
        secrets:posts_secrets(version, data)`
			)
			.eq('sites.type', 'promo')
			.eq('is_active', true)
			.order('order', { foreignTable: 'v_sites', ascending: false });
		if (slug) {
			query = query.or(`slug.eq.${slug},ghost_id.eq.${slug}`);
		}
		if (title) {
			query = query.eq('title', title);
		}
		const { data: post, error } = await query.single<PostDetail>();
		// console.log(error)
		return post;
	};

	getFriendLinks = async (props: { categories: string[] }) => {
		const { data: sites } = await this.client
			.from('v_sites')
			.select('url_source, name, short_name')
			.eq('is_active', true)
			.eq('type', 'navi')
			.containedBy('categories', props.categories)
			.order('order', {
				ascending: false
			})
			.returns<FriendLink[] | null>();
		return sites || [];
	};

	getCategory = async (props: { slug: string }) => {
		const { data: category, error } = await this.client.from('categories').select('name, slug').eq('slug', props.slug).single();
		return category;
	};

	getTag = async (props: { slug: string; isChinese?: boolean }) => {
		const defaultValue = {
			isChinese: true
		};
		const { slug, isChinese } = {
			...defaultValue,
			...props
		};
		const langKeys = !isChinese ? 'name' : 'name:name_cn';
		const { data: tag, error } = await this.client.from('tags').select(`${langKeys}, slug`).eq('slug', slug).single();
		return tag;
	};

	getTags = async (props: { categories: string[]; isChinese?: boolean; is_important?: boolean }) => {
		const defaultValue = {
			isChinese: true,
			is_important: false
		};
		const { categories, isChinese, is_important } = {
			...defaultValue,
			...props
		};
		const langKeys = isChinese ? 'name:name_cn' : 'name';
		let query = this.client
			.from('tags')
			.select(`${langKeys}, slug, v_posts!inner(categories)`)
			.containedBy('v_posts.categories', categories)
			.eq('v_posts.is_cn', isChinese)
			.gt('count', 5)
			.order('count', { ascending: false })
			.limit(36);
		if (is_important) {
			query = query.eq('posts.is_important', true);
		}
		const { data: tags, error } = await query;
		return tags || [];
	};

	getAds = async (props: { categories: string[] }) => {
		const defaultValue = {
			isChinese: true
		};
		const { isChinese, categories } = {
			...defaultValue,
			...props
		};
		const nameKey = isChinese ? 'name:name_cn' : 'name';
		const { data: ads, error } = await this.client
			.from('ads')
			.select(`position,sites:v_sites!inner(${nameKey},uid,url,square_image,banner,sides_image,order),end_at`)
			.containedBy('v_sites.categories', categories)
			.eq('is_active', true)
			.returns<
				| {
						position: 'banner' | 'sides' | 'right-sticky';
						end_at: string | null;
						sites: Ad;
				  }[]
				| null
			>();
		ads?.sort((a, b) => b.sites.order - a.sites.order);
		return ads;
	};

	redirect = async (uid: string) => {
		const regex = /[a-zA-Z0-9]{8}/;
		let url;
		if (regex.test(uid)) {
			const { data: promo, error } = await this.client
				.from('promos')
				.select('sites!inner(is_lower_priority), uid, url')
				.eq('sites.is_lower_priority', false)
				.eq('uid', uid)
				.single();
			if (promo && promo.url) {
				url = promo.url;
			} else {
				// const appData = await SupaData.getAppDataBy(client);
				const { data: sites, error } = await this.client
					.from('v_sites')
					.select('url')
					.eq('is_recommended', true)
					// .containedBy('categories', appData.categories)
					.limit(5);
				if (sites && sites.length > 0) {
					const randomIndex = Math.floor(Math.random() * sites.length);
					url = sites[randomIndex]!.url;
				}
			}
		}
		return url;
	};
}

export function createBrowserClient(props?: { url?: string; key?: string }) {
	const supabase = createClient<Database>(
		props?.url || process.env.NEXT_PUBLIC_SUPABASE_URL!,
		props?.key || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
	);
	return new Handler(supabase);
}
