/*
 * @Author: JinBlack
 * @Date: 2023-07-19 11:50:44
 * @LastEditors: JinBlack
 * @LastEditTime: 2024-01-22 17:18:19
 * @FilePath: /ticket/components/layouts/Footer.tsx
 * @Description: dota2sites@gmail.com
 *
 * Copyright (c) 2023 by 4tmr, All Rights Reserved.
 */
import Link from 'next/link';
import defaultTheme from '../../styles/default';

export default function Footer({ routers, domain }: { routers: Route[]; domain: string }) {
	const links = routers.map((router, i) => {
		return (
			<Link
				key={i}
				href={router.url}
				className={defaultTheme.Link}
				// title={router.description}
			>
				{router.name}
			</Link>
		);
	});
	return (
		<footer className="bg-white hidden md:block border-t border-zinc-100 dark:border-zinc-700/40">
			<div className="sm:px-8">
				<div className="mx-auto max-w-7xl lg:px-8">
					<div className="pb-16 pt-10">
						<div className="relative px-4 sm:px-8 lg:px-12">
							<div className="mx-auto max-w-2xl lg:max-w-5xl">
								<div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
									<div className="flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">{links}</div>
									<p className="text-sm text-zinc-400 dark:text-zinc-500">
										&copy; {new Date().getFullYear()} {domain}. All rights reserved. Powered by{' '}
										<Link className="hover:text-emerald-600 text-emerald-400" href="https://github.com/4cola/ticket" target="_blank">
											Ticket
										</Link>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
