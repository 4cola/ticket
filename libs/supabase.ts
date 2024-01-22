/*
 * @Author: JinBlack
 * @Date: 2023-12-18 17:33:30
 * @LastEditors: JinBlack
 * @LastEditTime: 2024-01-18 17:29:06
 * @FilePath: /ticket/libs/supabase.ts
 * @Description: dota2sites@gmail.com
 *
 * Copyright (c) 2023 by 4tmr, All Rights Reserved.
 */
import { createServerClient, type CookieOptions } from '@supabase/ssr';
import { type SPClient, type Database, Handler } from './data';
// 下面是@supabase/ssr的文档
// https://supabase.com/docs/guides/auth/server-side/creating-a-client?environment=client-component
import { cookies } from 'next/headers';

function createClient(cookieStore: ReturnType<typeof cookies>) {
	const supabase = createServerClient<Database>(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, {
		cookies: {
			get(name: string) {
				return cookieStore.get(name)?.value;
			},
			set(name: string, value: string, options: CookieOptions) {
				try {
					cookieStore.set({ name, value, ...options });
				} catch (error) {
					// The `set` method was called from a Server Component.
					// This can be ignored if you have middleware refreshing
					// user sessions.
				}
			},
			remove(name: string, options: CookieOptions) {
				try {
					cookieStore.set({ name, value: '', ...options });
				} catch (error) {
					// The `delete` method was called from a Server Component.
					// This can be ignored if you have middleware refreshing
					// user sessions.
				}
			}
		}
	});
	return supabase as SPClient;
}

function createSupaHandler() {
	const cookieStore = cookies();
	const client = createClient(cookieStore);
	return new Handler(client);
}

export { createSupaHandler };
