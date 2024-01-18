/*
 * @Author: JinBlack
 * @Date: 2023-07-19 10:45:42
 * @LastEditors: JinBlack
 * @LastEditTime: 2023-09-27 16:52:21
 * @FilePath: /66cases.com/@/components/widgets/Rating.tsx
 * @Description: dota2sites@gmail.com
 *
 * Copyright (c) 2023 by 4tmr, All Rights Reserved.
 */
import { StarIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";

type Props = {
  rating: number;
  color?: string
};

const Rating = ({ rating, color }: Props) => {
  const COLOR = color ?? 'text-yellow-400'
  const stars = [1, 2, 3, 4, 5].map((i) => (
    <StarIcon
      key={i}
      className={clsx(
        rating > i - 0.5 ? COLOR : "text-gray-200",
        "h-5 w-5 flex-shrink-0"
      )}
      aria-hidden="true"
    />
  ));
  return <div className="flex items-center">{stars}{`(${rating})`}</div>;
};

export default Rating;
