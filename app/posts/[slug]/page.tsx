/*
 * @Author: JinBlack
 * @Date: 2023-10-24 11:39:28
 * @LastEditors: JinBlack
 * @LastEditTime: 2024-01-24 14:06:50
 * @FilePath: /ticket/app/posts/[slug]/page.tsx
 * @Description: dota2sites@gmail.com
 *
 * Copyright (c) 2023 by 4tmr, All Rights Reserved.
 */
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { createSupaHandler } from '@/libs/supabase';
import Detail from '@/components/posts/Detail';

type Props = {
	params: {
		slug: string;
	};
};

export const revalidate = 60;

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
			// images: post.featured_image ?? ''
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
	const { posts } = await handler.getPosts({
		page: 1,
		pageSize: 10
	});
	return <Detail post={post} relatedPosts={posts} />;
}
