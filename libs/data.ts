/*
 * @Author: JinBlack
 * @Date: 2023-12-12 15:42:39
 * @LastEditors: JinBlack
 * @LastEditTime: 2024-01-24 14:10:28
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

	async getPosts(props?: { page?: number; pageSize?: number; category?: string; tag?: string }) {
		const defaultValue = {
			page: 1,
			pageSize: 10
		};
		const { page, pageSize, tag, category } = {
			...defaultValue,
			...props
		};
		let select = 'title, excerpt, slug, featured_image, created_at, tags(name,slug)';
		let query = this.client.from('v_posts').select(select, {
			count: 'exact'
		});
		if (tag) {
			query = query.contains('tags', [tag]);
		}
		if (category) {
			query = query.contains('categories', [category]);
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

	getPost = async ({ slug }: { slug: string }) => {
		let query = this.client
			.from('v_posts')
			.select(
				`
        title,
        excerpt,
        slug,
        featured_image,
        created_at,
        html,
        categories,
        tags(name, slug)`
			)
			.eq('is_active', true)
			.eq('slug', slug);
		const { data: post, error } = await query.single<PostDetail>();
		// console.log(error);
		return post;
	};

	getCategory = async (props: { slug: string }) => {
		const { data: category } = await this.client.from('categories').select('name, slug').eq('slug', props.slug).single();
		return category;
	};

	getTag = async (props: { slug: string }) => {
		const { data: tag } = await this.client.from('tags').select(`name, slug`).eq('slug', props.slug).single();
		return tag;
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

}

export function createBrowserHandler(props?: { url?: string; key?: string }) {
	const supabase = createClient<Database>(
		props?.url || process.env.NEXT_PUBLIC_SUPABASE_URL!,
		props?.key || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
	);
	return new Handler(supabase);
}
