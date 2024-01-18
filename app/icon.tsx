/*
 * @Author: JinBlack
 * @Date: 2023-11-02 11:11:51
 * @LastEditors: JinBlack
 * @LastEditTime: 2023-12-26 17:03:19
 * @FilePath: /4tmr/apps/r18/app/icon.tsx
 * @Description: dota2sites@gmail.com
 *
 * Copyright (c) 2023 by 4tmr, All Rights Reserved.
 */
import { ImageResponse } from 'next/og'

// 这个不能去除，不然vercel正式部署就会出现bug
export const runtime = 'edge'
// Image metadata
export const size = {
  width: 64,
  height: 64,
}
export const contentType = 'image/png'

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 48,
          background: 'black',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
        }}
      >
        V
      </div>
    ),
    {
      ...size
    }
  )
}
