/*
 * @Author: JinBlack
 * @Date: 2023-10-23 14:49:55
 * @LastEditors: JinBlack
 * @LastEditTime: 2024-01-18 17:30:17
 * @FilePath: /ticket/app/posts/tag/[tag]/layout.tsx
 * @Description: dota2sites@gmail.com
 *
 * Copyright (c) 2023 by 4tmr, All Rights Reserved.
 */
import type { Metadata } from 'next';
import { createSupaHandler } from '@/libs/supabase';
import { revalidate } from '../../page'

export { revalidate }


const getTagString = async ({ slug }: { slug: string }) => {
	const tag = await createSupaHandler().getTag({
		slug
	});
	return tag?.name || slug;
};

export const generateMetadata = async ({ params }: { params: { tag: string } }): Promise<Metadata> => {
	const tagString = await getTagString({ slug: params.tag });
	return {
		title: `标签 ${tagString}`,
		description: `标签 ${tagString}`,
		keywords: `${tagString}`
	};
};

export default async function TagLayout({ children, params }: { children: React.ReactNode; params: { tag: string } }) {
	const tagString = await getTagString({ slug: params.tag });
	return (
		<>
			<h2 className="pl-4 text-2xl font-bold tracking-tigh md:text-3xl">标签:{tagString}</h2>
			{children}
		</>
	);
}
