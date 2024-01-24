/*
 * @Author: JinBlack
 * @Date: 2024-01-04 16:55:11
 * @LastEditors: JinBlack
 * @LastEditTime: 2024-01-05 14:01:41
 * @FilePath: /4tmr/apps/r18/components/posts/editor/CategoryButtons.tsx
 * @Description: dota2sites@gmail.com
 *
 * Copyright (c) 2024 by 4tmr, All Rights Reserved.
 */
import React, { useState } from 'react';

interface MemoryOption {
	name: string;
	inStock: boolean;
}

const memoryOptions: MemoryOption[] = [
	{ name: '4 GB', inStock: true },
	{ name: '8 GB', inStock: true },
	{ name: '16 GB', inStock: true },
	{ name: '32 GB', inStock: true },
	{ name: '64 GB', inStock: true },
	{ name: '128 GB', inStock: false }
];

interface Category {
	// 根据实际情况定义 Category 类型
}

interface CategoryButtonsProps {
	categories?: Category[];
}

const CategoryButtons: React.FC<CategoryButtonsProps> = ({ categories }) => {
	const [selectedMemories, setSelectedMemories] = useState<MemoryOption[]>([]);

	const toggleMemory = (memory: MemoryOption) => {
		setSelectedMemories((prevSelectedMemories) =>
			prevSelectedMemories.includes(memory) ? prevSelectedMemories.filter((m) => m !== memory) : [...prevSelectedMemories, memory]
		);
	};

	return (
		<div>
			<div className="flex items-center justify-between">
				<h2 className="text-sm font-medium leading-6 text-gray-900">选择文章所属分类</h2>
				<a href="#" className="text-sm font-medium leading-6 text-indigo-600 hover:text-indigo-500">
					See performance specs
				</a>
			</div>
			<div className="grid sm:grid-cols-2 gap-2">
				<label className="flex p-3 w-full bg-white border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
					<input
						type="checkbox"
						className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
						id="hs-checkbox-in-form"
					/>
					<span className="text-sm text-gray-500 ms-3 dark:text-gray-400">Default checkbox</span>
				</label>

				<label className="flex p-3 w-full bg-white border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
					<input
						type="checkbox"
						className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
						id="hs-checkbox-checked-in-form"
						checked
					/>
					<span className="text-sm text-gray-500 ms-3 dark:text-gray-400">Checked checkbox</span>
				</label>
			</div>

			<div className="mt-2 grid grid-cols-4 gap-3 sm:grid-cols-8">
				{memoryOptions.map((option) => (
					<label key={option.name} className="flex items-center justify-center rounded-md p-1 text-sm font-semibold uppercase sm:flex-1">
						<input
							type="checkbox"
							value={option.name}
							checked={selectedMemories.includes(option)}
							onChange={() => toggleMemory(option)}
							disabled={!option.inStock}
							className="mr-2"
						/>
						{option.name}
					</label>
				))}
			</div>
		</div>
	);
};

export default CategoryButtons;
