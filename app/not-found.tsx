/*
 * @Author: JinBlack
 * @Date: 2023-11-06 10:36:16
 * @LastEditors: JinBlack
 * @LastEditTime: 2023-12-04 11:32:44
 * @FilePath: /4tmr/app/not-found.tsx
 * @Description: dota2sites@gmail.com
 *
 * Copyright (c) 2023 by 4tmr, All Rights Reserved.
 */
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="prose prose-slate max-w-none">
      <h2>404 Not Found</h2>
      <p>找不到资源</p>
      <Link href="/">返回首页</Link>
    </div>
  )
}
