/*
 * @Author: jhd
 * @Date: 2023-09-07 17:13:38
 * @LastEditors: JinBlack
 * @LastEditTime: 2023-12-25 16:46:24
 * @FilePath: /4tmr/packages/next-shared/components/widgets/Loading.tsx
 * @Description:
 *
 * Copyright (c) 2023 by 4tmr, All Rights Reserved.
 */
export default function Loading() {
	return (
		<div className="w-full aspect-video flex items-center justify-center">
			<svg
				className="animate-spin text-black lg:h-8 lg:w-8 lg:my-8 h-6 w-6 my-6"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
			>
				<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
				<path
					className="opacity-75"
					fill="currentColor"
					d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
				></path>
			</svg>
		</div>
	);
}
