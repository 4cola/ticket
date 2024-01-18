/*
 * @Author: JinBlack
 * @Date: 2023-10-11 16:31:45
 * @LastEditors: JinBlack
 * @LastEditTime: 2024-01-18 16:47:18
 * @FilePath: /ticket/app/contact/page.tsx
 * @Description: dota2sites@gmail.com
 *
 * Copyright (c) 2023 by 4tmr, All Rights Reserved.
 */
import Link from 'next/link';
import { createSupaHandler } from '@/libs/supabase';
import Article from '@/components/posts/Article';

export const metadata = {
	title: '联系&合作',
	description: 'Contact and Business!'
};

export const revalidate = 60;

type Props = {
	email: string;
	friendLinks?: FriendLink[] | null;
};

const Contact = (props: Props) => {
	const friendLinksList = (
		<ul>
			{props.friendLinks?.map((site, i) => {
				return (
					<li key={i}>
						<Link prefetch={false} title={site.name} href={site.url_source} target="_blank">
							{site.url_source.replace('https://', '').replace('http://', '')}
						</Link>
					</li>
				);
			})}
		</ul>
	);
	return (
		<Article>
			<h2>Contact</h2>
			<p>
				Email:{' '}
				<Link title="mail" href={`mailto:${props.email}`}>
					{props.email}
				</Link>
			</p>
			<h2>Friend Links</h2>
			{friendLinksList}
		</Article>
	);
};

export default async function ContactPage() {
	const handler = createSupaHandler();
	const config = await handler.getAppConfig();
	return <Contact email={config.metas.email} friendLinks={[]} />;
}
