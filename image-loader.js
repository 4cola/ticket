/*
 * @Author: JinBlack
 * @Date: 2023-11-23 17:29:44
 * @LastEditors: JinBlack
 * @LastEditTime: 2024-03-25 16:13:59
 * @FilePath: /ticket/image-loader.js
 * @Description: dota2sites@gmail.com
 *
 * Copyright (c) 2023 by 4tmr, All Rights Reserved.
 */
'use client'
export default function imageLoader({ src, width, quality }) {
  // if (src.startsWith('/_next/static')) {
  //   return src
  // }
  return `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/images/${src}?w=${width}&q=${quality || 75}`
}
