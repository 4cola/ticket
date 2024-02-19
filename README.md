<!--
 * @Author: JinBlack
 * @Date: 2024-01-23 10:31:31
 * @LastEditors: j4tmr black4jin@gmail.com
 * @LastEditTime: 2024-02-19 17:15:45
 * @FilePath: /ticket/README.md
 * @Description: black4jin@gmail.com
 * 
 * Copyright (c) 2024 by 4tmr, All Rights Reserved. 
-->
# ticket(under development)

## self host blog(CMS) based on
- <a href="https://nextjs.org/docs" target="_blank">nextjs</a>
- <a href="https://supabase.com/" target="_blank">supabase</a>
- <a href="https://tailwindcss.com/" target="_blank">tailwindcss</a>

## DEMO
<p>
 <a href="https://www.jinblack.com" target="_blank">www.jinblack.com</a>
</p>

## How to begin

### Supabase
1. Register a supabase account
2. Create a new Organization
3. Create a new project
4. Go to https://supabase.com/dashboard/project/[ProjectID]/auth/url-configuration to set your Site URL
5. Using supabase cli to init database
   1. git clone https://github.com/4cola/ticket
   2. cd supabase
   3. <a href="https://supabase.com/docs/guides/cli/getting-started" target="_blank">install supabase cli</a>
   4. login supabase ```supabase login```
   5. link to project ```supabase link --project-ref [ProjectID]```
   6. push migrations ```supabase db push --password=[DatabasePassword]```
   7. Copy seed sqls from ./supabase/seed.sql to https://supabase.com/dashboard/project/[ProjectID]/sql/new and run

### Deploy to Vercel

Vercel deployment will guide you through creating a Supabase account and project.

After installation of the Supabase integration, all relevant environment variables will be assigned to the project so the deployment is fully functioning.

### 权限
权限控制类似于Django，有groups表，permissions表，groups_permissions表，需要在users_groups中，将对应的用户加入到group中，才能获取对应权限，permissions表中存在所有public下表的crud权限，groups_permissions中去选择，哪些权限属于对应group，而判断逻辑在Row Level Security中，比如posts表，用户的插入有一条policy，需要过has_permission方法，方法传入uid，tableName和operation，只有在对应表中拥有权限的用户才能进行crud操作，后续也可以自行分group。

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/4cola/ticket&project-name=ticket&repository-name=ticket)
