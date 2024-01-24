/*
 * @Author: JinBlack
 * @Date: 2024-01-04 16:43:41
 * @LastEditors: JinBlack
 * @LastEditTime: 2024-01-24 15:05:18
 * @FilePath: /ticket/components/posts/editor/EditorForm.tsx
 * @Description: dota2sites@gmail.com
 *
 * Copyright (c) 2024 by 4tmr, All Rights Reserved.
 */
'use client';
import dynamic from 'next/dynamic';
const Editor = dynamic(() => import('@/components/posts/editor/Editor'), {
	ssr: false
});
import { type MDXEditorMethods } from '@/components/posts/editor/Editor';
import CategoryButtons from './CategoryButtons';
import { useNotifications } from '@/components/public/Notification';
import { LoadingButton } from '@/components/buttons';
import { createBrowserHandler } from '@/libs/supabase-browser';
import { useRef, Suspense } from 'react';
import { clearPathCache } from '@/app/actions';
import { useRouter } from 'next/navigation';
import showdown from 'showdown';

function extractTextFromHtml(htmlString: string, length: number): string {
	// 创建一个新的 DOM 解析器
	const parser = new DOMParser();
	// 将 HTML 字符串解析为文档
	const doc = parser.parseFromString(htmlString, 'text/html');
	// 提取文本内容
	const text = doc.body.textContent || '';
	// 截取前 'length' 个字符
	return text.slice(0, length);
}

type Form = {
  markdown: string
}

const EditorForm = ({ uid, categories }: { uid: string; categories?: Category[] }) => {
	const { client: supabase } = createBrowserHandler();
	const { pushNotification } = useNotifications();
	const ref = useRef<MDXEditorMethods>(null);
	const router = useRouter();

	const savePost = async () => {
		const markdown = ref.current?.getMarkdown();
		if (!markdown) {
			pushNotification({
				title: '错误',
				message: '获取输入内容失败',
				status: 'error'
			});
			return;
		}
		let title;
		if (markdown.startsWith('# ')) {
			title = markdown.split(/\r?\n/)[0]?.slice(2);
		} else {
			pushNotification({
				title: '错误',
				message: '请先输入标题',
				status: 'error'
			});
			return;
		}
		const converter = new showdown.Converter();
		const html = converter.makeHtml(markdown).split(/\r?\n/).slice(1).join('\n');
		const { error } = await supabase.from('posts_raw').insert({
			author_id: uid,
			title: title,
			markdown: markdown,
			html: html,
			excerpt: extractTextFromHtml(html, 250),
			is_verified: false,
			is_cn: true
		});
		if (error) {
			pushNotification({
				title: '错误',
				message: error.message,
				status: 'error'
			});
		} else {
			ref.current?.setMarkdown('# 标题');
			pushNotification({
				title: '成功',
				message: '发布文章成功',
				status: 'success'
			});
			const path = '/dashboard/posts';
			clearPathCache(path);
			router.push(path);
		}
	};
	return (
		<form>
			<div className="space-y-12">
				<div className="pb-12">
					<h2 className="text-base font-semibold leading-7 text-gray-900">上传一篇文章</h2>
					<div className="mt-2">
						<Suspense fallback={null}>
							<Editor editorRef={ref} />
						</Suspense>
					</div>
				</div>
			</div>
      <CategoryButtons categories={categories} />
			<div className="mt-6 flex items-center justify-end gap-x-6">
				<button type="button" className="text-sm font-semibold leading-6 text-gray-900">
					取消
				</button>
				<LoadingButton onClick={savePost} buttonText="保存" />
			</div>
		</form>
	);
};

export default EditorForm;
