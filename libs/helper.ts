/*
 * @Author: JinBlack
 * @Date: 2023-11-01 15:26:42
 * @LastEditors: j4tmr black4jin@gmail.com
 * @LastEditTime: 2024-03-27 11:19:39
 * @FilePath: /4tmr/packages/next-shared/libs/helper.ts
 * @Description: dota2sites@gmail.com
 *
 * Copyright (c) 2023 by 4tmr, All Rights Reserved.
 */
const placeholderImage = 'https://img.4tr.cc/blog-placeholder.png'
const defaultAvatar = 'https://img.4tr.cc/avatar.jpeg'

export { placeholderImage, defaultAvatar };

export function generateUUID(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = Math.random() * 16 | 0;
      const v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
  });
}
