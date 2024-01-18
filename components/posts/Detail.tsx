/*
 * @Author: JinBlack
 * @Date: 2023-07-19 10:45:42
 * @LastEditors: JinBlack
 * @LastEditTime: 2024-01-18 15:55:18
 * @FilePath: /ticket/components/posts/Detail.tsx
 * @Description: dota2sites@gmail.com
 *
 * Copyright (c) 2023 by 4tmr, All Rights Reserved.
 */
import Link from 'next/link';
import ClientHint from './ClientHint';
import Article from './Article';
import RowTags from '@/components/widgets/RowTags';
import ClientImage from '@/public/ClientImage';
import ReformattedHtml from '@/posts/ReformattedHtml';

function RelatedPosts(props: { relatedPosts?: PostLite[] }) {
	const articles = props.relatedPosts?.slice(0, 6).map((post, i) => {
		let tag = null;
		if (post.tags) {
			tag = post.tags.length > 0 && (
				<Link
					href={`/posts/tag/${post.tags[0]!.slug}`}
					prefetch={false}
					className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
				>
					{post.tags[0]!.name}
				</Link>
			);
		}
		return (
			<article key={i} className="flex flex-col items-start justify-start">
				<div className="relative w-full">
					<ClientImage
						src={post.featured_image}
						className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
					/>
					<div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
				</div>
				<div className="w-full">
					<div className="mt-6 flex items-center gap-x-4 text-xs">
						<time dateTime={post.created_at} className="text-gray-500">
							{post.created_at.split('T')[0]}
						</time>
						{tag}
					</div>
					<Link href={`/posts/${post.slug}`} prefetch={false} className="group relative">
						<h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">{post.title}</h3>
						<p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 break-words">{post.excerpt}</p>
					</Link>
				</div>
			</article>
		);
	});
	return <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">{articles}</div>;
}

type Props = {
	post: PostDetail;
	relatedPosts: PostLite[];
	secrets?: React.ReactNode;
};

const Detail = ({ post, relatedPosts, secrets }: Props) => {
	const tags = post.tags?.map((tag) => {
		return {
			name: tag.name,
			slug: `/posts/tag/${tag.slug}`
		};
	});
	const tagList = <RowTags tags={tags} />;
	return (
		<>
			<Article>
				<h1>{post.title}</h1>
				<ReformattedHtml className="py-4" htmlString={post.html} />
				<ClientHint slug={post.slug} title={post.title} />
			</Article>
			{tagList}
			{secrets}
			<RelatedPosts relatedPosts={relatedPosts} />
		</>
	);
};

export default Detail;
