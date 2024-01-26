/*
 * @Author: JinBlack
 * @Date: 2023-10-11 16:31:45
 * @LastEditors: JinBlack
 * @LastEditTime: 2024-01-26 17:03:40
 * @FilePath: /ticket/app/sitemap.ts
 * @Description: dota2sites@gmail.com
 *
 * Copyright (c) 2023 by 4tmr, All Rights Reserved.
 */
import { MetadataRoute } from 'next';
import { createSupaHandler } from '@/libs/supabase';

// export const runtime = 'edge';
export const revalidate = 7 * 24 * 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const handler = createSupaHandler();
	const appConfig = await handler.getAppConfig();
	const { domain } = appConfig.metas;
	const domainURL = (url: string) => {
		let u = url;
		if (!u.startsWith('/')) {
			u = `/${u}`;
		}
		return `https://${domain}${u}`;
	};
	let sitemaps: MetadataRoute.Sitemap = appConfig.header.map((navi) => {
		return {
			url: domainURL(navi.url),
			lastModified: new Date()
		};
	});
	// posts
	const { data: posts } = await handler.client
		.from('v_posts')
		.select('updated_at, slug')
		.eq('is_active', true);
	sitemaps = [
		...sitemaps,
		...(posts
			?.filter((post) => post.slug !== null)
			.map((post) => {
				return {
					url: domainURL(`/posts/${post.slug!}`),
					lastModified: post.updated_at!
				};
			}) ?? [])
	];
	// tags
	const { data: tags } = await handler.client.from('tags').select('slug');
	sitemaps = [
		...sitemaps,
		...(tags?.map((tag) => {
			return {
				url: domainURL(`/posts/tag/${tag.slug}`),
				lastModified: new Date()
			};
		}) ?? [])
	];
	// categories
	const { data: categories } = await handler.client.from('categories').select('slug');
	sitemaps = [
		...sitemaps,
		...(categories?.map((category) => {
			return {
				url: domainURL(`/posts/category/${category.slug}`),
				lastModified: new Date()
			};
		}) ?? [])
	];
	return sitemaps;
}
