/*
 * @Author: JinBlack
 * @Date: 2024-01-22 15:34:24
 * @LastEditors: JinBlack
 * @LastEditTime: 2024-03-25 16:11:46
 * @FilePath: /ticket/next.config.js
 * @Description: black4jin@gmail.com
 *
 * Copyright (c) 2024 by 4tmr, All Rights Reserved.
 */
/** @type {import('next').NextConfig} */

const NEXT_PUBLIC_SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL
// const NEXT_PUBLIC_SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

const nextConfig = {
  images: {
    // unoptimized: true,
    disableStaticImages: true,
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
