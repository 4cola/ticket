INSERT INTO
  "configs" ("key", "value")
VALUES
  (
    'metas',
    '{"email": "black4jin@gmail.com", "title": "JinBlack的个人博客", "domain": "localhost:3000", "app_name": "JinBlack", "page_size": 10, "description": "分享和开发有关的事"}'
  );

INSERT INTO
  "configs" ("key", "value")
VALUES
  (
    'footer',
    '[{"url": "/", "name": "首页"}, {"url": "/posts", "name": "文章"}, {"url": "/contact", "name": "联系"}, {"url": "/privacy", "name": "隐私"}]'
  );

INSERT INTO
  "configs" ("key", "value")
VALUES
  (
    'header',
    '[{"url": "/", "name": "首页"}, {"url": "/posts", "name": "文章"}, {"url": "/contact", "name": "联系"}, {"url": "/privacy", "name": "隐私"}]'
  );

INSERT INTO
  "public"."configs" ("key", "value")
VALUES
  (
    'friendlinks',
    '[{"url": "https://github.com/4cola/ticket", "name": "ticket"},{"url": "https://www.jinblack.com", "name": "jinblack"},{"url": "https://www.4tmr.com", "name": "4tmr"}]'
  );

INSERT INTO
  "storage"."buckets" (
    "id",
    "name",
    "owner",
    "public",
    "avif_autodetection",
    "file_size_limit",
    "allowed_mime_types",
    "owner_id"
  )
VALUES
  (
    'images',
    'images',
    NULL,
    't',
    'f',
    10485760,
    '{image/*}',
    NULL
  );


-- 插入posts
INSERT INTO "public"."tags" ("name", "slug", "description")
VALUES ('test', 'test', 'default test')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO "public"."categories" ("name", "description", "slug")
VALUES ('default', 'default', 'default')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO "public"."posts" ("title", "excerpt", "html", "featured_image", "slug", "keywords", "author_id", "status")
VALUES ('My First Post', 'Hello World!', 'Hello World!', NULL, 'hello-world', '', NULL, 'published')
ON CONFLICT (slug) DO NOTHING;

-- 假设我们已知posts和tags的slug，查询它们的ID
INSERT INTO "public"."posts_tags" ("tag_id", "post_id")
SELECT (SELECT id FROM "public"."tags" WHERE slug = 'test'),
       (SELECT id FROM "public"."posts" WHERE slug = 'hello-world')
WHERE EXISTS (SELECT 1 FROM "public"."tags" WHERE slug = 'test')
  AND EXISTS (SELECT 1 FROM "public"."posts" WHERE slug = 'hello-world');

-- 同理对于posts_categories
INSERT INTO "public"."posts_categories" ("category_id", "post_id")
SELECT (SELECT id FROM "public"."categories" WHERE slug = 'default'),
       (SELECT id FROM "public"."posts" WHERE slug = 'hello-world')
WHERE EXISTS (SELECT 1 FROM "public"."categories" WHERE slug = 'default')
  AND EXISTS (SELECT 1 FROM "public"."posts" WHERE slug = 'hello-world');

-- 默认权限逻辑
DO $ $ DECLARE t VARCHAR;

BEGIN FOR t IN
SELECT
  table_name
FROM
  information_schema.tables
WHERE
  table_schema = 'public'
  and table_type = 'BASE TABLE' LOOP
INSERT INTO
  permissions (table_name, operation)
VALUES
  (t, 'create'),
  (t, 'read'),
  (t, 'update'),
  (t, 'delete');

END LOOP;

END $ $;

INSERT INTO
  "public"."groups" ("name")
VALUES
  ('admin');

DO $ $ DECLARE admin_group_id INT;

BEGIN -- 获取'admin'组的ID
SELECT
  id INTO admin_group_id
FROM
  groups
WHERE
  name = 'admin';

-- 插入所有权限给'admin'组
INSERT INTO
  groups_permissions (group_id, permission_id)
SELECT
  admin_group_id,
  id
FROM
  permissions;

END $ $;
