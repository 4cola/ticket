/*
 * @Author: JinBlack
 * @Date: 2023-10-20 15:17:15
 * @LastEditors: JinBlack
 * @LastEditTime: 2023-10-20 16:21:01
 * @FilePath: /zui/packages/@/helpers/image.ts
 * @Description: dota2sites@gmail.com
 *
 * Copyright (c) 2023 by 4tmr, All Rights Reserved.
 */
const imageURL = (url: string | undefined | null) => {
  if (url) {
    if (url.startsWith('/uploads/')) {
      return url
    } else {
      if (!url.startsWith('/')) {
        url = `/${url}`
      }
      return `/uploads${url}`
    }
  } else {
    return '/uploads/p.jpeg'
  }
}

export { imageURL }
