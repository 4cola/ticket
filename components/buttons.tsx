/*
 * @Author: JinBlack
 * @Date: 2024-01-05 17:30:57
 * @LastEditors: JinBlack
 * @LastEditTime: 2024-01-24 14:24:34
 * @FilePath: /ticket/components/buttons.tsx
 * @Description: dota2sites@gmail.com
 *
 * Copyright (c) 2024 by 4tmr, All Rights Reserved.
 */
import React, { useState, useCallback } from 'react';

interface LoadingButtonProps {
	onClick: () => Promise<void>; // 假设 onClick 是一个返回 Promise 的异步函数
	buttonText: string; // 按钮文本
}

export const LoadingButton: React.FC<LoadingButtonProps> = ({ onClick, buttonText }) => {
	const [isLoading, setIsLoading] = useState(false);

	const handleClick = useCallback(async () => {
		setIsLoading(true);
		try {
			await onClick();
		} finally {
			setIsLoading(false);
		}
	}, [onClick]);

	return (
		<button
			onClick={handleClick}
			type="button"
			className="flex items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-50"
			disabled={isLoading}
		>
			{isLoading ? (
				<>
					<span className="animate-spin h-5 w-5 mr-2 border-t-2 border-b-2 border-white rounded-full"></span>
					{`${buttonText}中...`}
				</>
			) : (
				buttonText
			)}
		</button>
	);
};

export function VercelDeployButton() {
  return (
    <a
      className="py-2 px-3 flex rounded-md no-underline hover:bg-btn-background-hover border"
      href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fnext.js%2Ftree%2Fcanary%2Fexamples%2Fwith-supabase&project-name=nextjs-with-supabase&repository-name=nextjs-with-supabase&demo-title=nextjs-with-supabase&demo-description=This%20starter%20configures%20Supabase%20Auth%20to%20use%20cookies%2C%20making%20the%20user's%20session%20available%20throughout%20the%20entire%20Next.js%20app%20-%20Client%20Components%2C%20Server%20Components%2C%20Route%20Handlers%2C%20Server%20Actions%20and%20Middleware.&demo-url=https%3A%2F%2Fdemo-nextjs-with-supabase.vercel.app%2F&external-id=https%3A%2F%2Fgithub.com%2Fvercel%2Fnext.js%2Ftree%2Fcanary%2Fexamples%2Fwith-supabase&demo-image=https%3A%2F%2Fdemo-nextjs-with-supabase.vercel.app%2Fopengraph-image.png&integration-ids=oac_VqOgBHqhEoFTPzGkPd7L0iH6"
      target="_blank"
      rel="noreferrer"
    >
      <svg
        aria-label="Vercel logomark"
        role="img"
        viewBox="0 0 74 64"
        className="h-4 w-4 mr-2"
      >
        <path
          d="M37.5896 0.25L74.5396 64.25H0.639648L37.5896 0.25Z"
          fill="currentColor"
        ></path>
      </svg>
      Deploy to Vercel
    </a>
  );
}

