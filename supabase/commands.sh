###
 # @Author: JinBlack
 # @Date: 2024-01-18 14:49:39
 # @LastEditors: JinBlack
 # @LastEditTime: 2024-03-26 11:32:36
 # @FilePath: /ticket/supabase/commands.sh
 # @Description: black4jin@gmail.com
 #
 # Copyright (c) 2024 by 4tmr, All Rights Reserved.
###

supabase gen types typescript --local --schema public > ../types/supabase.ts

supabase login
supabase migration squash --linked
# 只是本地吗？这个是干嘛的，还得验证
supabase migration squash --local
