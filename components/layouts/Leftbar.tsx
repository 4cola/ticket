/*
 * @Author: JinBlack
 * @Date: 2023-12-26 16:31:32
 * @LastEditors: JinBlack
 * @LastEditTime: 2024-01-08 16:55:36
 * @FilePath: /4tmr/packages/next-shared/components/layouts/Leftbar.tsx
 * @Description: dota2sites@gmail.com
 *
 * Copyright (c) 2023 by 4tmr, All Rights Reserved.
 */
'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
// import dynamic from 'next/dynamic';
// const Bar = dynamic(() => import('@4tmr/next-shared/components/layouts/LeftBar'), {
// 	ssr: false
// });

type Navigation = {
  name: string
  href: string
  icon: string
  count?: string
  current: boolean
}

const navigation: Navigation[] = [
	{ name: '个人中心', href: '/dashboard', icon: 'HomeIcon', count: '12', current: true },
	// { name: '我的文章', href: '/dashboard/posts', icon: 'UsersIcon', current: false },
	// { name: 'Projects', href: '#', icon: 'FolderIcon', count: '12', current: false },
	// { name: 'Calendar', href: '#', icon: 'CalendarIcon', count: '20+', current: false },
	// { name: 'Documents', href: '#', icon: 'DocumentDuplicateIcon', current: false },
	// { name: 'Reports', href: '#', icon: 'ChartPieIcon', current: false }
];
const secondaryNavigation = [
  { name: '退出登录', href: '#', initial: 'W', current: false },
	// { name: 'Website redesign', href: '#', initial: 'W', current: false },
	// { name: 'GraphQL API', href: '#', initial: 'G', current: false },
	// { name: 'Customer migration guides', href: '#', initial: 'C', current: false },
	// { name: 'Profit sharing program', href: '#', initial: 'P', current: false }
];

export default function LeftBar() {
  const pathname = usePathname()
  // const pathname = '/dashboard'
  // return 123
	// return <Bar navigation={navigation} secondaryNavigation={secondaryNavigation} />
  if (pathname.startsWith('/dashboard')) {
    return (
      <div className="col-span-4 lg:col-span-1 lg:flex lg:flex-col lg:gap-4">
        <nav className="flex flex-1 flex-col p-4 bg-white" aria-label="Sidebar">
          <ul role="list" className="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" className="-mx-2 space-y-1">
                {navigation?.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={clsx(
                        pathname === item.href ? 'bg-gray-50 text-indigo-600' : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
                        'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                      )}
                    >
                      {/* <item.icon
                        className={clsx(
                          usePathname() === item.href ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-600',
                          'h-6 w-6 shrink-0'
                        )}
                        aria-hidden="true"
                      /> */}
                      {item.name}
                      {item.count ? (
                        <span
                          className="ml-auto w-9 min-w-max whitespace-nowrap rounded-full bg-white px-2.5 py-0.5 text-center text-xs font-medium leading-5 text-gray-600 ring-1 ring-inset ring-gray-200"
                          aria-hidden="true"
                        >
                          {item.count}
                        </span>
                      ) : null}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <div className="text-xs font-semibold leading-6 text-gray-400">Projects</div>
              <ul role="list" className="-mx-2 mt-2 space-y-1">
                {secondaryNavigation?.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={clsx(
                        pathname === item.href ? 'bg-gray-50 text-indigo-600' : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
                        'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                      )}
                    >
                      <span
                        className={clsx(
                          pathname === item.href
                            ? 'text-indigo-600 border-indigo-600'
                            : 'text-gray-400 border-gray-200 group-hover:border-indigo-600 group-hover:text-indigo-600',
                          'flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white'
                        )}
                      >
                        {item.initial}
                      </span>
                      <span className="truncate">{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </nav>
        <div className="hidden lg:flex lg:flex-col lg:gap-4 sticky top-20">
          <ins id="1032626" data-width="300" data-height="262"></ins>
          <ins id="1037223" data-width="300" data-height="262"></ins>
        </div>
      </div>
    );
  }
  return null
}