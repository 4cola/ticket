/*
 * @Author: JinBlack
 * @Date: 2023-10-23 14:49:55
 * @LastEditors: JinBlack
 * @LastEditTime: 2024-01-22 15:30:19
 * @FilePath: /ticket/app/posts/page.tsx
 * @Description: dota2sites@gmail.com
 *
 * Copyright (c) 2023 by 4tmr, All Rights Reserved.
 */
import type { Metadata } from 'next';
import ArticleList from '@/components/posts/ArticleList';
import Pagination from '@/components/public/Pagination';
import { createSupaHandler } from '@/libs/supabase';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
	title: '文章列表',
	description: '文章列表'
};

type Props = {
	params: { page: string; category?: string; tag?: string };
};

export const revalidate = 3;

export default async function PostsPage(props: Props) {
	const { category, tag } = props.params;
	const currentPage = parseInt(props.params.page || '1');
	const handler = createSupaHandler();
	const config = await handler.getAppConfig();
	const { posts, count, page_size } = await handler.getPosts({
		page: currentPage,
    pageSize: config.metas.page_size,
    category,
    tag
		// categories: categories,
		// tags: tags
	});
  console.log(posts)
	if (!posts) {
		notFound();
	}
	const postViews = posts.map((post) => {
		return {
			...post,
			href: `/posts/${post.slug}`
		};
	});
	let basePath = '/posts';
	if (props.params.tag) {
		basePath += `/tag/${props.params.tag}`;
	} else if (props.params.category) {
		basePath += `/category/${props.params.category}`;
	}
	return (
		<>
			<ArticleList posts={postViews} />
			<div className="mt-12">
				<Pagination currentIndex={currentPage} pageSize={page_size} count={count} basePath={basePath} />
			</div>
		</>
	);
}
