/*
 * @Author: JinBlack
 * @Date: 2023-11-01 15:26:42
 * @LastEditors: JinBlack
 * @LastEditTime: 2024-01-09 10:54:35
 * @FilePath: /4tmr/packages/next-shared/libs/helper.ts
 * @Description: dota2sites@gmail.com
 *
 * Copyright (c) 2023 by 4tmr, All Rights Reserved.
 */
const placeholderImage = 'blog-placeholder.png'
const defaultAvatar = 'avatar.jpeg'

export { placeholderImage, defaultAvatar };

export function generateUUID(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = Math.random() * 16 | 0;
      const v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
  });
}
