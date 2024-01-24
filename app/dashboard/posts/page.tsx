/*
 * @Author: JinBlack
 * @Date: 2024-01-02 17:02:39
 * @LastEditors: JinBlack
 * @LastEditTime: 2024-01-24 14:22:18
 * @FilePath: /ticket/app/dashboard/posts/page.tsx
 * @Description: dota2sites@gmail.com
 *
 * Copyright (c) 2024 by 4tmr, All Rights Reserved.
 */
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';
import Link from 'next/link';
import { createSupaHandler } from '@/libs/supabase';

const statuses = {
	unverified: 'text-gray-500 bg-gray-100/10',
	verified: 'text-green-400 bg-green-400/10'
};
const environments = {
	unverified: 'text-gray-400 bg-gray-400/10 ring-gray-400/20',
	verified: 'text-indigo-400 bg-indigo-400/10 ring-indigo-400/30'
};
const deployments: {
	id: number;
	href: string;
	projectName: string;
	teamName: string;
	status: 'offline' | 'online' | 'error';
	statusText: string;
	description: string;
	environment: 'Preview' | 'Production';
}[] = [
	{
		id: 1,
		href: '#',
		projectName: 'ios-app',
		teamName: 'Planetaria',
		status: 'offline',
		statusText: 'Initiated 1m 32s ago',
		description: 'Deploys from GitHub',
		environment: 'Preview'
	},
	{
		id: 2,
		href: '#',
		projectName: 'mobile-api',
		teamName: 'Planetaria',
		status: 'online',
		statusText: 'Deployed 3m ago',
		description: 'Deploys from GitHub',
		environment: 'Production'
	},
	{
		id: 3,
		href: '#',
		projectName: 'tailwindcss.com',
		teamName: 'Tailwind Labs',
		status: 'offline',
		statusText: 'Deployed 3h ago',
		description: 'Deploys from GitHub',
		environment: 'Preview'
	},
	{
		id: 4,
		href: '#',
		projectName: 'api.protocol.chat',
		teamName: 'Protocol',
		status: 'error',
		statusText: 'Failed to deploy 6d ago',
		description: 'Deploys from GitHub',
		environment: 'Preview'
	}
];

function Header() {
	return (
		<div className="border-b border-gray-200 pb-5 sm:flex sm:items-center sm:justify-between">
			<h3 className="text-base font-semibold leading-6 text-gray-900">我的文章</h3>
			<div className="mt-3 sm:ml-4 sm:mt-0">
				<Link
					type="button"
					className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
					href="/dashboard/posts/editor"
				>
					新建文章
				</Link>
			</div>
		</div>
	);
}

type PostRaw = {
	title: string;
	post: {
		id: number;
		slug: string;
	};
	is_verified: boolean;
	created_at: string;
};

export default async function Posts() {
	const handler = createSupaHandler();
	const { user } = await handler.getUser();
	if (!user) {
		return null;
	}
	const { data: posts, error } = await handler.client
		.from('posts_raw')
		.select('title, excerpt, posts(slug), is_verified, created_at')
		.eq('author_id', user.id);
	console.log(posts);
	console.log(error);
	const rows = posts?.map((raw, i) => {
		// console.log(post.posts)
		const v = raw.is_verified && raw.posts?.slug ? 'verified' : 'unverified';
		// console.log(post.post)
		return (
			<li key={i} className="relative flex items-center space-x-4 py-4">
				<div className="min-w-0 flex-auto">
					<div className="flex items-center gap-x-3">
						<div className={clsx(statuses[v], 'flex-none rounded-full p-1')}>
							<div className="h-2 w-2 rounded-full bg-current" />
						</div>
						<h2 className="min-w-0 text-sm font-semibold leading-6">
							{/* <Link href={`/posts/${}`} className="flex gap-x-2"> */}
							<span className="truncate">{raw.title}</span>
							{/* <span className="text-gray-400">/</span> */}
							{/* <span className="whitespace-nowrap">{deployment.projectName}</span> */}
							{/* <span className="absolute inset-0" /> */}
							{/* </Link> */}
						</h2>
					</div>
					<p className="mt-1 truncate text-md text-gray-400">{raw.excerpt}</p>
					<div className="mt-1 flex items-center gap-x-2.5 text-xs leading-5 text-gray-400">
						<svg viewBox="0 0 2 2" className="h-0.5 w-0.5 flex-none fill-gray-300">
							<circle cx={1} cy={1} r={1} />
						</svg>
						<p className="whitespace-nowrap">{raw.created_at.slice(0, 10)}</p>
					</div>
				</div>
				<div className={clsx(environments[v], 'rounded-full flex-none py-1 px-2 text-xs font-medium ring-1 ring-inset')}>
					{v}
					{/* {deployment.environment} */}
				</div>
				<ChevronRightIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
			</li>
		);
	});
	return (
		<>
			<Header />
			<ul role="list" className="divide-y divide-black/5">
				{rows}
			</ul>
		</>
	);
}
