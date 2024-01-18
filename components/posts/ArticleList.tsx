/*
 * @Author: JinBlack
 * @Date: 2023-12-21 16:03:26
 * @LastEditors: JinBlack
 * @LastEditTime: 2023-12-28 11:38:09
 * @FilePath: /4tmr/packages/next-shared/components/posts/ArticleList.tsx
 * @Description: dota2sites@gmail.com
 *
 * Copyright (c) 2023 by 4tmr, All Rights Reserved.
 */
import clsx from 'clsx';
import Link from 'next/link';
import ClientImage from '../public/ClientImage';

export type ArticleType = Omit<PostLite, 'ghost_id' | 'tags'>;

const Article = ({ post }: { post: ArticleType }) => {
	return (
		<Link className="relative block py-4 lg:py-8" title={post.title} href={`/posts/${post.slug}`} prefetch={false}>
			<article className="isolate flex flex-col gap-4 lg:gap-8 lg:flex-row group">
				<div className="relative aspect-[2/1] lg:aspect-square w-32 lg:w-56 lg:shrink-0 self-start">
					<ClientImage
						src={post.featured_image}
						className="absolute inset-0 h-full w-full sm:rounded lg:rounded-2xl bg-gray-50 object-cover"
					/>
					{/* <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" /> */}
				</div>
				<div className='flex-1'>
					<div className="flex items-center gap-x-4 text-xs">
						<time dateTime={post.created_at} className="text-gray-500">
							{post.created_at.slice(0, 10)}
						</time>
						{/* <time dateTime={post.created_at.toISOString()} className="text-gray-500">
            {post.created_at.toISOString().slice(0, 10)}
          </time>
          <time dateTime={post.created_at} className="text-gray-500">
            {post.created_at.slice(0, 10)}
          </time> */}
						{/* <a
                        href={post.category.href}
                        className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                      >
                        {post.category.title}
                      </a> */}
					</div>
					<div className="group relative">
						<h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-teal-600">{post.title}</h3>
						<p className="mt-5 text-sm leading-6 text-gray-600 break-all text-ellipsis overflow-hidden">{post.excerpt}</p>
					</div>
					{/* <div className="mt-6 flex border-t border-gray-900/5 pt-6">
                      <div className="relative flex items-center gap-x-4">
                        <img
                          src={post.author.imageUrl}
                          alt=""
                          className="h-10 w-10 rounded-full bg-gray-50"
                        />
                        <div className="text-sm leading-6">
                          <p className="font-semibold text-gray-900">
                            <a href={post.author.href}>
                              <span className="absolute inset-0" />
                              {post.author.name}
                            </a>
                          </p>
                          <p className="text-gray-600">{post.author.role}</p>
                        </div>
                      </div>
                    </div> */}
				</div>
			</article>
		</Link>
	);
};

const ArticleList = ({ posts, className }: { posts?: ArticleType[] | null; className?: string }) => {
	return (
		<div role="list" className={clsx('divide-y divide-gray-200', className)}>
			{posts?.map((post, i) => <Article key={i} post={post} />)}
		</div>
	);
};

export default ArticleList;
