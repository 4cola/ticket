/*
 * @Author: JinBlack
 * @Date: 2024-01-04 15:50:02
 * @LastEditors: JinBlack
 * @LastEditTime: 2024-01-08 16:15:18
 * @FilePath: /4tmr/apps/r18/app/actions.ts
 * @Description: dota2sites@gmail.com
 *
 * Copyright (c) 2024 by 4tmr, All Rights Reserved.
 */
'use server'
import { revalidatePath } from 'next/cache'

export const clearPathCache = (path: string) => {
  revalidatePath(path)
}
