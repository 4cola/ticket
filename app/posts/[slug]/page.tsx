/*
 * @Author: JinBlack
 * @Date: 2023-10-24 11:39:28
 * @LastEditors: JinBlack
 * @LastEditTime: 2024-01-18 17:31:36
 * @FilePath: /ticket/app/posts/[slug]/page.tsx
 * @Description: dota2sites@gmail.com
 *
 * Copyright (c) 2023 by 4tmr, All Rights Reserved.
 */
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { createSupaHandler } from '@/libs/supabase';
import R18Secrets from '@/components/secrets/R18Secrets';
import Detail from '@/components/posts/Detail';

type Props = {
	params: {
		slug: string;
	};
};

export const revalidate = 3600 * 24 * 180;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const post = await createSupaHandler().getPost({
		slug: params.slug
	});
	if (!post) {
		return notFound();
	}
	return {
		title: post.title,
		description: post.excerpt,
		openGraph: {
			images: post.featured_image ?? 'https://img.v2dao.com/p.jpeg'
		}
	};
}

export default async function PostDetailPage({ params }: Props) {
	const handler = createSupaHandler();
	const post = await handler.getPost({
		slug: params.slug
	});
	if (!post) {
		return notFound();
	}
	const appData = await handler.getAppConfig();
	const {
		data: { user }
	} = await handler.client.auth.getUser();
	const { posts } = await handler.getPosts({
		page: 1,
		pageSize: 10,
		// categories: appData.categories,
	});
	const secrets = <R18Secrets authenticated={user !== null} secrets={post.secrets} />;
	return <Detail post={post} relatedPosts={posts} secrets={secrets} />;
}
