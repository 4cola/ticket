/*
 * @Author: JinBlack
 * @Date: 2023-07-19 11:50:44
 * @LastEditors: JinBlack
 * @LastEditTime: 2023-12-28 11:18:38
 * @FilePath: /4tmr/packages/next-shared/components/layouts/Footer.tsx
 * @Description: dota2sites@gmail.com
 *
 * Copyright (c) 2023 by 4tmr, All Rights Reserved.
 */
import Link from "next/link";
import defaultTheme from "../../styles/default";

export default function Footer({
  routers,
  domain,
}: {
  routers: Route[];
  domain: string;
}) {
  const links = routers.map((router, i) => {
    return (
      <Link
        key={i}
        href={router.url}
        className={defaultTheme.Link}
        // title={router.description}
      >
        {router.name}
      </Link>
    );
  });
  return (
    <footer className="bg-white hidden md:block">
      <div className="sm:px-8">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
            <div className="relative px-4 sm:px-8 lg:px-12">
              <div className="mx-auto max-w-2xl lg:max-w-5xl">
                <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                  <div className="flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                    {links}
                  </div>
                  <p className="text-sm text-zinc-400 dark:text-zinc-500">
                    &copy; 2020-{new Date().getFullYear()} {domain}. All rights
                    reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
