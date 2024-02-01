###
 # @Author: JinBlack
 # @Date: 2024-01-18 14:49:39
 # @LastEditors: j4tmr black4jin@gmail.com
 # @LastEditTime: 2024-02-01 17:15:52
 # @FilePath: /ticket/supabase/commands.sh
 # @Description: black4jin@gmail.com
 #
 # Copyright (c) 2024 by 4tmr, All Rights Reserved.
###

supabase gen types typescript --local --schema public > ../types/supabase.ts

supabase login
supabase migration squash --linked
supabase migration squash --local
