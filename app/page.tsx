/*
 * @Author: JinBlack
 * @Date: 2024-01-23 09:58:23
 * @LastEditors: JinBlack
 * @LastEditTime: 2024-01-23 14:26:10
 * @FilePath: /ticket/app/page.tsx
 * @Description: black4jin@gmail.com
 *
 * Copyright (c) 2024 by 4tmr, All Rights Reserved.
 */
import { createSupaHandler } from '@/libs/supabase';
import React from 'react';
import More from '@/components/index/More';
import Title from '@/components/index/Title';
import ArticleList from '@/components/posts/ArticleList';

export const revalidate = 3;

export default async function Index() {
  const handler = createSupaHandler()
  const { posts } = await handler.getPosts();
  let content: JSX.Element[] = [];
  const postViews = posts.map((post) => {
    return {
      ...post,
      href: `/posts/${post.slug}`
    };
  });
  content.push(
    <React.Fragment key="posts">
      <Title title="文章列表" />
      <ArticleList posts={postViews} />
      <More className="my-10" href="/posts" />
    </React.Fragment>
  );
  return <>{content}</>;
}
