/*
 * @Author: JinBlack
 * @Date: 2023-12-18 17:33:30
 * @LastEditors: JinBlack
 * @LastEditTime: 2024-01-18 11:59:22
 * @FilePath: /ticket/libs/handler.ts
 * @Description: dota2sites@gmail.com
 *
 * Copyright (c) 2023 by 4tmr, All Rights Reserved.
 */
import { createServerClient, type CookieOptions } from '@supabase/ssr';
import { type SPClient, type Database, Handler } from './data';
// 下面是@supabase/ssr的文档
// https://supabase.com/docs/guides/auth/server-side/creating-a-client?environment=client-component
import { cookies, headers } from 'next/headers';

type HandlerTypes = 'route' | 'server';

function createServerComponentClient(revalidate?: number) {
  revalidate = revalidate || 0;
	const cookieStore = cookies();
	const customFetch = (input: URL, init?: RequestInit | undefined): Promise<Response> => {
		return fetch(input, { ...init, ...{ next: { revalidate } } });
	};
	const supabase = createServerClient<Database>(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, {
		// @ts-expect-error
		global: { fetch: customFetch },
		cookies: {
			get(name: string) {
				return cookieStore.get(name)?.value;
			}
		}
	});
	return supabase as SPClient;
}

function createServerRouterClient() {
	const cookieStore = cookies();
	const supabase = createServerClient<Database>(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, {
		global: { fetch },
		cookies: {
			get(name: string) {
				return cookieStore.get(name)?.value;
			},
			set(name: string, value: string, options: CookieOptions) {
				cookieStore.set({ name, value, ...options });
			},
			remove(name: string, options: CookieOptions) {
				cookieStore.set({ name, value: '', ...options });
			}
		}
	});
	return supabase;
}

function createSupaClient(props?: { type?: HandlerTypes; revalidate?: number }) {
	const client = props?.type === 'route' ? createServerRouterClient() : createServerComponentClient(props?.revalidate);
	return new CustomHandler(client);
}

class CustomHandler extends Handler {
	async getAppData() {
		const headersList = headers();
		let host = headersList.get('host');
		return await this.getAppDataBy({ host: host! });
	}
}

export { createSupaClient };
