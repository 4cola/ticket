/*
 * @Author: JinBlack
 * @Date: 2023-10-11 16:31:45
 * @LastEditors: JinBlack
 * @LastEditTime: 2024-01-24 13:52:34
 * @FilePath: /ticket/components/layouts/Rightbar.tsx
 * @Description: dota2sites@gmail.com
 *
 * Copyright (c) 2023 by 4tmr, All Rights Reserved.
 */
'use client';
import HotTags from '@/components/widgets/HotTags';
import Categories from '@/components/widgets/Categories';
import { usePathname } from 'next/navigation';

type Props = {
	categories: Category[] | null;
	tags: Tag[] | null;
};

export default async function RightBar(props: Props) {
	const pathname = usePathname();
	if (!pathname.startsWith('/dashboard')) {
		return (
			<div className="lg:col-span-1 lg:flex hidden lg:flex-col lg:gap-4">
				<Categories categories={props.categories} />
				<HotTags tags={props.tags} />
			</div>
		);
	}
	return null;
}
