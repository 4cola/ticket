/*
 * @Author: JinBlack
 * @Date: 2023-12-21 17:33:39
 * @LastEditors: JinBlack
 * @LastEditTime: 2024-01-24 11:35:23
 * @FilePath: /ticket/components/widgets/HotTags.tsx
 * @Description: dota2sites@gmail.com
 *
 * Copyright (c) 2023 by 4tmr, All Rights Reserved.
 */
import Link from 'next/link';
import clsx from 'clsx';

const HotTags = ({
  tags,
  className
}: {
  tags?: Tag[] | null;
  className?: string;
}) => {
  if (tags) {
    const tagsLists = tags.map((tag, i) => {
      return (
        <Link
          key={i}
          href={`/posts/tag/${tag.slug}`}
          className="tag px-2 py-1 rounded bg-gray-200 text-gray-700 text-sm hover:bg-gray-300 transition duration-200 ease-in-out"
        >
          {tag.name}
        </Link>
      );
    });
    return (
      <div className={clsx(className, 'bg-white p-4')}>
        <h2 className="flex flex-row flex-nowrap items-center justify-center">
          {/* <span className="flex-grow block border-t border-black"></span> */}
          <span className="flex-none block mx-4 px-4 py-2.5 text-md rounded leading-none font-medium bg-black text-white">
            标签
          </span>
          {/* <span className="flex-grow block border-t border-black"></span> */}
        </h2>
        <div className="tag-cloud flex justify-center flex-wrap gap-2 max-w-sm mx-auto mt-4">
          {tagsLists}
        </div>
      </div>
    );
  }
  return null;
};

export default HotTags;
