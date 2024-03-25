/*
 * @Author: JinBlack
 * @Date: 2023-12-21 20:08:53
 * @LastEditors: j4tmr black4jin@gmail.com
 * @LastEditTime: 2024-03-25 15:34:32
 * @FilePath: /4tmr/packages/next-shared/components/widgets/Categories.tsx
 * @Description: dota2sites@gmail.com
 *
 * Copyright (c) 2023 by 4tmr, All Rights Reserved.
 */
import Link from 'next/link';
import clsx from 'clsx';

const Categories = ({
  categories,
  className
}: {
  categories?: Category[] | null;
  className?: string;
}) => {
  if (categories) {
    const categoriesLists = categories.map((category, i) => {
      return (
        <Link
          key={i}
          href={`/posts/category/${category.slug}`}
          className="tag px-2 py-1 rounded bg-gray-200 text-gray-700 text-sm hover:bg-gray-300 transition duration-200 ease-in-out"
        >
          {category.name}
        </Link>
      );
    });
    return (
      <div className={clsx(className, 'bg-white p-4')}>
        <h2 className="flex flex-row flex-nowrap items-center justify-center">
          {/* <span className="flex-grow block border-t border-black"></span> */}
          <span className="flex-none block mx-4 px-4 py-2.5 text-md rounded leading-none font-medium bg-black text-white">
            分类
          </span>
          {/* <span className="flex-grow block border-t border-black"></span> */}
        </h2>
        <div className="tag-cloud flex justify-center flex-wrap gap-2 max-w-sm mx-auto mt-4">
          {categoriesLists}
        </div>
      </div>
    );
  }
  return null;
};

export default Categories;
