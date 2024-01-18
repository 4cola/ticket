/*
 * @Author: JinBlack
 * @Date: 2023-12-21 15:09:56
 * @LastEditors: JinBlack
 * @LastEditTime: 2023-12-21 15:09:56
 * @FilePath: /4tmr/packages/next-shared/libs/sites.ts
 * @Description: dota2sites@gmail.com
 *
 * Copyright (c) 2023 by 4tmr, All Rights Reserved.
 */

const promoText = ({ promo, prefix }: { promo: Promo; prefix?: string }) => {
  let t = "";
  if (promo.code) {
    t += `${prefix ?? ''}码[${promo.code}]`;
  }
  if (promo.bonus) {
    if (t) {
      t += `，${promo.bonus}`;
    } else {
      t += promo.bonus;
    }
  }
  if (!t) {
    return "快速注册";
  }
  return t;
};

const redirect = (promo: { uid: string }) => {
  return `/r/${promo.uid}`
}

export { promoText, redirect };
