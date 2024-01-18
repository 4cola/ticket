/*
 * @Author: JinBlack
 * @Date: 2023-10-11 15:18:55
 * @LastEditors: JinBlack
 * @LastEditTime: 2023-12-28 11:46:02
 * @FilePath: /4tmr/packages/next-shared/components/posts/ClientHint.tsx
 * @Description: dota2sites@gmail.com
 *
 * Copyright (c) 2023 by 4tmr, All Rights Reserved.
 */
"use client";

import defaultTheme from "../../styles/default";
import Link from "next/link";
import { useEffect, useState } from "react";

const ClientHint = ({ slug, title }: { slug: string, title: string }) => {
  const [origin, setOrigin] = useState("");

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setOrigin(window.location.origin);
    }
  }, []);
  return (
    <p className="py-2">
      转载请注明出处
      <br />
      原文链接:{" "}
      <Link
        className={defaultTheme.Link}
        href={`${origin}/posts/${slug}`}
        prefetch={false}
      >
        {origin}/{title}
      </Link>
    </p>
  );
};

export default ClientHint;
