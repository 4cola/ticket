/*
 * @Author: JinBlack
 * @Date: 2023-12-29 15:36:07
 * @LastEditors: JinBlack
 * @LastEditTime: 2024-01-24 14:21:47
 * @FilePath: /ticket/app/dashboard/page.tsx
 * @Description: dota2sites@gmail.com
 *
 * Copyright (c) 2023 by 4tmr, All Rights Reserved.
 */
import ProfileForm from '@/components/dashboard/ProfileForm';
import { createSupaHandler } from '@/libs/supabase';

const Dashboard = async () => {
  const handler = createSupaHandler()
  const { user } = await handler.getUser()
  return <ProfileForm user={user!} />;
};

export default Dashboard;
