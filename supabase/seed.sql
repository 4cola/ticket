INSERT INTO "configs" ("id", "key", "value") VALUES (1, 'metas', '{"email": "black4jin@gmail.com", "title": "JinBlack的个人博客", "domain": "localhost:3100", "app_name": "JinBlack", "page_size": 10, "description": "分享和开发有关的事"}');
INSERT INTO "configs" ("id", "key", "value") VALUES (2, 'footer', '[{"url": "/", "name": "首页"}, {"url": "/posts", "name": "文章"}, {"url": "/contact", "name": "联系"}, {"url": "/privacy", "name": "隐私"}]');
INSERT INTO "configs" ("id", "key", "value") VALUES (3, 'header', '[{"url": "/", "name": "首页"}, {"url": "/posts", "name": "文章"}, {"url": "/contact", "name": "联系"}, {"url": "/privacy", "name": "隐私"}]');

INSERT INTO "storage"."buckets" ("id", "name", "owner", "public", "avif_autodetection", "file_size_limit", "allowed_mime_types", "owner_id") VALUES ('images', 'images', NULL, 't', 'f', 5242880, '{image/*}', NULL);
