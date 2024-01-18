/*
 * @Author: j4tmr black4jin@gmail.com
 * @Date: 2024-01-18 10:05:52
 * @LastEditors: j4tmr black4jin@gmail.com
 * @LastEditTime: 2024-01-18 10:24:27
 * @FilePath: /ticket/tailwind.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  plugins: [
    require("@tailwindcss/typography"),
    require('@tailwindcss/forms')
  ],
};
