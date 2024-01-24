/*
 * @Author: JinBlack
 * @Date: 2024-01-24 15:03:48
 * @LastEditors: JinBlack
 * @LastEditTime: 2024-01-24 15:03:48
 * @FilePath: /ticket/libs/supabase-browser.ts
 * @Description: black4jin@gmail.com
 *
 * Copyright (c) 2024 by 4tmr, All Rights Reserved.
 */
'use client'
import { createBrowserClient } from '@supabase/ssr';
import { Handler } from './data';
import { type Database } from '@/types/supabase';

export function createBrowserHandler(props?: { url?: string; key?: string }) {
	const supabase = createBrowserClient<Database>(
		props?.url || process.env.NEXT_PUBLIC_SUPABASE_URL!,
		props?.key || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
	);
	return new Handler(supabase);
}
