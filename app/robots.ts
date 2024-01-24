/*
 * @Author: JinBlack
 * @Date: 2023-10-11 16:14:53
 * @LastEditors: JinBlack
 * @LastEditTime: 2024-01-24 14:03:00
 * @FilePath: /ticket/app/robots.ts
 * @Description: dota2sites@gmail.com
 *
 * Copyright (c) 2023 by 4tmr, All Rights Reserved.
 */
import { MetadataRoute } from 'next';
import { createSupaHandler } from '@/libs/supabase';

// export const runtime = 'edge';
export const revalidate = 3600 * 24 * 30;

export default async function robots(): Promise<MetadataRoute.Robots> {
	const appConfig = await createSupaHandler().getAppConfig();
	const domain = appConfig.metas.domain;
	return {
		rules: {
			userAgent: '*',
			allow: '/'
		},
		host: `https://${domain}`,
		sitemap: `https://${domain}/sitemap.xml`
	};
}
