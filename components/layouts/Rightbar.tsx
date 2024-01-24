/*
 * @Author: JinBlack
 * @Date: 2023-10-11 16:31:45
 * @LastEditors: JinBlack
 * @LastEditTime: 2024-01-24 11:42:16
 * @FilePath: /ticket/components/layouts/Rightbar.tsx
 * @Description: dota2sites@gmail.com
 *
 * Copyright (c) 2023 by 4tmr, All Rights Reserved.
 */
import HotTags from '@/components/widgets/HotTags';
import Categories from '@/components/widgets/Categories';
import { createSupaHandler } from '@/libs/supabase';

export default async function RightBar() {
	const handler = createSupaHandler();
	const appData = await handler.getAppConfig();
	const { data: categories } = await handler.client
		.from('v_categories')
		.select('name,slug')
		.order('count', { ascending: false })
		.returns<Category[] | null>();
	const { data: tags } = await handler.client
		.from('v_tags')
		.select('name,slug')
		.order('count', { ascending: false })
		.returns<Tag[] | null>();
	return (
		<div className="lg:col-span-1 lg:flex hidden lg:flex-col lg:gap-4">
			<Categories categories={categories} />
			<HotTags tags={tags} />
		</div>
	);
}
