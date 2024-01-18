/*
 * @Author: JinBlack
 * @Date: 2023-10-23 14:49:55
 * @LastEditors: JinBlack
 * @LastEditTime: 2024-01-18 15:35:43
 * @FilePath: /ticket/types/global.d.ts
 * @Description: dota2sites@gmail.com
 *
 * Copyright (c) 2023 by 4tmr, All Rights Reserved.
 */
type AppConfig = {
  metas: {
    title: string
    description: string
    app_name: string
    page_size: string
    domain: string
    email: string
  }
  header: Route[]
  footer: Route[]
}

type AppData = {
  title: string;
  description: string;
  app_name: string;
  domain: string;
  page_size: number;
  email: string;

  categories: string[];
  header: Route[];
  footer: Route[];
  featured_image: string;

  avatar: string;
  navigations: Route[];
};

type User = {
  id: string
  email?: string
  avatar?: string
}

type Tag = {
  name: string;
  slug: string;
};

type Category = Tag

type Promo = {
  code: string;
  bonus: string;
  uid: string;
};

type Route = {
  name: string;
  url: string;
};

type Secret = {
  version: string
  data: any
}

type Ad = {
  name: string
  banner: string | null
  square_image: string | null
  sides_image: string | null
  uid: string
  url: string
  order: number
}

type SiteLite = {
  name: string;
  short_name: string;
  short_description: string;
  description: string;
  avatar: string | null;
  banner: string | null
  square_image: string | null
  rating: number;
  is_cn: boolean
  is_lower_priority: boolean
  is_active: boolean
} & Promo;

type PostSite = {
  categories: string[]
  promos: Promo[];
} & SiteLite;

type SiteDetail = {
  banner: string | null;
  keywords: string;
  promos: Promo[];
  tags: Tag[];
  posts: { title: string; excerpt: string, slug: string }[];
  detail_posts: { title: string; html: string }[]
} & SiteLite &
  Promo;

type PostLite = {
  title: string;
  excerpt: string;
  slug: string;
  ghost_id: string
  featured_image: string | null;
  created_at: string;
  tags?: Tag[];
};

type PostDetail = {
  html: string | null;
  sites: PostSite[];
  categories: string[]
  secrets: Secret[] | null
} & PostLite;

type FriendLink = {
  url_source: string;
  name: string;
};
