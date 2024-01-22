/*
 * @Author: JinBlack
 * @Date: 2024-01-22 15:34:24
 * @LastEditors: JinBlack
 * @LastEditTime: 2024-01-22 17:28:33
 * @FilePath: /ticket/next.config.js
 * @Description: black4jin@gmail.com
 *
 * Copyright (c) 2024 by 4tmr, All Rights Reserved.
 */
/** @type {import('next').NextConfig} */

const NEXT_PUBLIC_SUPABASE_URL = 'http://127.0.0.1:54321'
const NEXT_PUBLIC_SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0'

const nextConfig = {
  env: {
    NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY
  },
  images: {
		// unoptimized: true,
		dangerouslyAllowSVG: true,
		loader: 'custom',
		loaderFile: './image-loader.js',
		remotePatterns: [
			{
				protocol: 'https',
				hostname: NEXT_PUBLIC_SUPABASE_URL,
				port: '',
				pathname: '/**'
			}
		]
	}
};

module.exports = nextConfig;
