'use client';
/*
 * @Author: JinBlack
 * @Date: 2023-10-12 16:07:23
 * @LastEditors: JinBlack
 * @LastEditTime: 2023-12-04 11:17:11
 * @FilePath: /4tmr/app/global-error.tsx
 * @Description: dota2sites@gmail.com
 *
 * Copyright (c) 2023 by 4tmr, All Rights Reserved.
 */

import Link from 'next/link';
import { Metadata } from 'next';
import { useEffect } from 'react'

export const metadata: Metadata = {
  title: '错误',
};

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void;
}) {

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <html className="h-full">
      <body className="h-full">
        <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center">
            <p className="text-base font-semibold text-indigo-600">
              {error.name}
            </p>
            {/* <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              {error.message}
            </h1> */}
            {/* <p className="mt-6 text-base leading-7 text-gray-600">
              {error.stack}
            </p> */}
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                返回首页
              </Link>
              <Link
                href='/contact'
                className="text-sm font-semibold text-gray-900"
              >
                联系站长 <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
