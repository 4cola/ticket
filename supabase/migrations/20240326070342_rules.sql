INSERT INTO
  "public"."configs" ("key", "value")
VALUES
  (
    'metas',
    '{"email": "black4jin@gmail.com", "title": "JinBlack的个人博客", "domain": "localhost:3000", "app_name": "JinBlack", "page_size": 10, "description": "分享和开发有关的事"}'
  ),
  (
    'footer',
    '[{"url": "/", "name": "首页"}, {"url": "/posts", "name": "文章"}, {"url": "/contact", "name": "联系"}, {"url": "/privacy", "name": "隐私"}]'
  ),
  (
    'header',
    '[{"url": "/", "name": "首页"}, {"url": "/posts", "name": "文章"}, {"url": "/contact", "name": "联系"}, {"url": "/privacy", "name": "隐私"}]'
  ),
  (
    'friendlinks',
    '[{"url": "https://github.com/4cola/ticket", "name": "ticket"},{"url": "https://www.jinblack.com", "name": "jinblack"},{"url": "https://www.4tmr.com", "name": "4tmr"}]'
  ),
  (
    'test',
    '[{"url": "https://github.com/4cola/ticket", "name": "ticket"},{"url": "https://www.jinblack.com", "name": "jinblack"},{"url": "https://www.4tmr.com", "name": "4tmr"}]'
  )
  ON CONFLICT (key) DO NOTHING;
