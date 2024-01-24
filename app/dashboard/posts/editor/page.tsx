/*
 * @Author: JinBlack
 * @Date: 2023-12-27 14:27:34
 * @LastEditors: JinBlack
 * @LastEditTime: 2024-01-24 14:45:33
 * @FilePath: /ticket/app/dashboard/posts/editor/page.tsx
 * @Description: dota2sites@gmail.com
 *
 * Copyright (c) 2023 by 4tmr, All Rights Reserved.
 */
import EditorForm from '@/components/posts/editor/EditorForm';
import { createSupaHandler } from '@/libs/supabase';

export default async function Page() {
	const handler = createSupaHandler();
	const { data: categories } = await handler.client.from('categories').select('name,slug');
	const { user } = await handler.getUser();
	return <EditorForm uid={user!.id} categories={categories ?? []} />;
}
