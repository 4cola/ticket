/*
 * @Author: JinBlack
 * @Date: 2024-01-24 14:21:05
 * @LastEditors: JinBlack
 * @LastEditTime: 2024-03-26 14:28:50
 * @FilePath: /ticket/app/dashboard/layout.tsx
 * @Description: black4jin@gmail.com
 *
 * Copyright (c) 2024 by 4tmr, All Rights Reserved.
 */
import type { Metadata } from 'next';
import { createSupaHandler } from '@/libs/supabase';

export const metadata: Metadata = {
	title: '个人中心',
	description: '个人中心'
};

export default async function Layout(props: { children: React.ReactNode }) {
	const handler = createSupaHandler();
	const { user } = await handler.getUser();
	if (user) {
		return <>{props.children}</>;
	} else {
		return null;
	}
}
