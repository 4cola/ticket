INSERT INTO "configs" ("id", "key", "value") VALUES (1, 'metas', '{"email": "black4jin@gmail.com", "title": "JinBlack的个人博客", "domain": "localhost:3100", "app_name": "JinBlack", "page_size": 10, "description": "分享和开发有关的事"}');
INSERT INTO "configs" ("id", "key", "value") VALUES (2, 'footer', '[{"url": "/", "name": "首页"}, {"url": "/posts", "name": "文章"}, {"url": "/contact", "name": "联系"}, {"url": "/privacy", "name": "隐私"}]');
INSERT INTO "configs" ("id", "key", "value") VALUES (3, 'header', '[{"url": "/", "name": "首页"}, {"url": "/posts", "name": "文章"}, {"url": "/contact", "name": "联系"}, {"url": "/privacy", "name": "隐私"}]');

INSERT INTO "public"."posts" ("title", "excerpt", "html", "is_active", "featured_image", "slug", "keywords", "author_id") VALUES ('My First Post', 'Hello World!', 'Hello World!', 't', NULL, 'hello-world', '', NULL);
