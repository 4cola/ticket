/*
 * @Author: JinBlack
 * @Date: 2023-12-26 15:38:28
 * @LastEditors: JinBlack
 * @LastEditTime: 2023-12-28 11:56:53
 * @FilePath: /4tmr/packages/next-shared/components/posts/Article.tsx
 * @Description: dota2sites@gmail.com
 *
 * Copyright (c) 2023 by 4tmr, All Rights Reserved.
 */
const Article = ({ children }: { children: React.ReactNode }) => {
  return <article className="prose prose-slate w-full max-w-none break-all overflow-hidden">{ children }</article>
}

export default Article
