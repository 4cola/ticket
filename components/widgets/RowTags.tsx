/*
 * @Author: JinBlack
 * @Date: 2023-11-13 17:28:38
 * @LastEditors: JinBlack
 * @LastEditTime: 2023-11-20 14:56:54
 * @FilePath: /4tmr/components/widgets/RowTags.tsx
 * @Description: dota2sites@gmail.com
 *
 * Copyright (c) 2023 by 4tmr, All Rights Reserved.
 */
import Link from "next/link";

type Props = {
  tags?: Tag[]
}

const RowTags = ({ tags }: Props) => {
  const tagList = tags?.map((tag, i) => {
    return (
      <Link
        key={i}
        className="px-2 py-1 rounded bg-gray-200 text-gray-700 text-sm hover:bg-gray-300 transition duration-200 ease-in-out"
        href={tag.slug}
        prefetch={false}
      >
        {tag.name}
      </Link>
    );
  });
  return (
    <div className="flex justify-start flex-wrap gap-2 my-4">
      {tagList}
    </div>
  );
};

export default RowTags
