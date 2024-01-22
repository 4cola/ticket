/*
 * @Author: JinBlack
 * @Date: 2023-10-23 14:49:55
 * @LastEditors: JinBlack
 * @LastEditTime: 2024-01-18 17:29:58
 * @FilePath: /ticket/app/posts/category/[category]/layout.tsx
 * @Description: dota2sites@gmail.com
 *
 * Copyright (c) 2023 by 4tmr, All Rights Reserved.
 */
import type { Metadata } from 'next';
import { createSupaHandler } from '@/libs/supabase';
import { revalidate } from '../../page';

export { revalidate };

const getCategoryString = async ({ slug }: { slug: string }) => {
	const category = await createSupaHandler().getCategory({
		slug
	});
	return category?.name || slug;
};

export const generateMetadata = async ({ params }: { params: { category: string } }): Promise<Metadata> => {
	const categoryString = await getCategoryString({ slug: params.category });
	return {
		title: `分类 ${categoryString}`,
		description: `分类 ${categoryString}`,
		keywords: `${categoryString}`
	};
};

export default async function TagLayout({ children, params }: { children: React.ReactNode; params: { category: string } }) {
	const categoryString = await getCategoryString({ slug: params.category });
	return (
		<>
			<h2 className="pl-4 text-2xl font-bold tracking-tigh md:text-3xl">分类:{categoryString}</h2>
			{children}
		</>
	);
}
