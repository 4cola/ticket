###
 # @Author: JinBlack
 # @Date: 2024-01-18 14:49:39
 # @LastEditors: JinBlack
 # @LastEditTime: 2024-03-26 14:14:25
 # @FilePath: /ticket/supabase/commands.sh
 # @Description: black4jin@gmail.com
 #
 # Copyright (c) 2024 by 4tmr, All Rights Reserved.
###

supabase gen types typescript --local --schema public > ../types/supabase.ts

supabase login
# 下面这两个都不行，得用db-url来解决这个问题，因为旧的机制无法在cli中继续使用！
supabase migration squash --linked
supabase migration squash --local
