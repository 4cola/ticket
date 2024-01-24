/*
 * @Author: JinBlack
 * @Date: 2024-01-18 15:26:50
 * @LastEditors: JinBlack
 * @LastEditTime: 2024-01-24 11:42:32
 * @FilePath: /ticket/app/layout.tsx
 * @Description: black4jin@gmail.com
 *
 * Copyright (c) 2024 by 4tmr, All Rights Reserved.
 */
import '@/assets/css/globals.css';
import type { Metadata } from 'next';
import { createSupaHandler } from '@/libs/supabase';
import Html from '@/components/layouts/Html';

export const dynamic = 'auto';
export const dynamicParams = true;
export const revalidate = 60;
export const runtime = 'nodejs';
export const preferredRegion = 'global';

export const generateMetadata = async (): Promise<Metadata> => {
	const config = await createSupaHandler().getAppConfig();
	if (config) {
		const { title, description, app_name, domain } = config.metas;
		const domainURL = `https://${domain}`;
		let meta: Metadata = {
			title: {
				default: `${title} | ${app_name}`,
				template: `%s | ${app_name}`
			},
			description: description,
			metadataBase: new URL(domainURL),
			openGraph: {
				type: 'website',
				url: domainURL,
				title: title,
				description: description,
				siteName: app_name
				// images: ''
			},
			twitter: {
				// images: ''
			},
			applicationName: app_name
		};
		return meta;
	}
	return {};
};

export const viewport = {
	width: 'device-width',
	'initial-scale': 1.0,
	'minimum-scale': 1.0,
	'maximum-scale': 1.0,
	'user-scalable': 'yes',
	themeColor: 'light'
};

export default async function RootLayout(props: { children: React.ReactNode }) {
	const handler = createSupaHandler();
	const config = await handler.getAppConfig();
	const { user } = await handler.getUser();
	return <Html {...props} appConfig={config} user={user} logo={null} banner={null} moreContents={null} hasLogin={true} />;
}
