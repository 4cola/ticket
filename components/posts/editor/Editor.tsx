/*
 * @Author: JinBlack
 * @Date: 2024-01-02 15:34:19
 * @LastEditors: JinBlack
 * @LastEditTime: 2024-01-04 14:15:54
 * @FilePath: /4tmr/packages/next-shared/components/posts/Editor.tsx
 * @Description: dota2sites@gmail.com
 *
 * Copyright (c) 2024 by 4tmr, All Rights Reserved.
 */
'use client';
import '@mdxeditor/editor/style.css';
import {
	MDXEditor,
	type MDXEditorMethods,
	headingsPlugin,
	markdownShortcutPlugin,
	imagePlugin,
	linkPlugin,
	listsPlugin,
	ListsToggle,
	UndoRedo,
	BoldItalicUnderlineToggles,
	BlockTypeSelect,
	CreateLink,
	InsertImage,
	linkDialogPlugin,
	InsertTable,
	tablePlugin,
	diffSourcePlugin,
	DiffSourceToggleWrapper
} from '@mdxeditor/editor';
import { toolbarPlugin } from '@mdxeditor/editor/plugins/toolbar';
import { FC } from 'react';
import { create } from 'zustand';

interface EditorProps {
	editorRef?: React.MutableRefObject<MDXEditorMethods | null>;
}

export { MDXEditorMethods }

type EditorState = {
	markdown: string;
	updateMarkdown: (markdown: string) => void;
};

export const useEditor = create<EditorState>()((set) => ({
	markdown: '# 标题',
	updateMarkdown: (markdown) => set((state) => ({ markdown }))
}));

/**
 * Extend this Component further with the necessary plugins or props you need.
 * proxying the ref is necessary. Next.js dynamically imported components don't support refs.
 */
const Editor: FC<EditorProps> = ({ editorRef }) => {
  const { markdown, updateMarkdown } = useEditor()
	return (
		<MDXEditor
			className="bg-zinc-50 prose prose-slate max-w-none"
      readOnly={false}
			onChange={updateMarkdown}
			markdown={markdown}
      ref={editorRef}
			plugins={[
				headingsPlugin(),
				markdownShortcutPlugin(),
				linkPlugin(),
				linkDialogPlugin(),
				imagePlugin(),
				listsPlugin(),
				tablePlugin(),
				diffSourcePlugin(),
				toolbarPlugin({
					toolbarContents: () => (
						<>
							<UndoRedo />
							<BoldItalicUnderlineToggles />
							<BlockTypeSelect />
							<ListsToggle />
							<CreateLink />
							<InsertImage />
							<InsertTable />
							<DiffSourceToggleWrapper>
								<></>
							</DiffSourceToggleWrapper>
						</>
					)
				})
			]}
		/>
	);
};

export default Editor;
