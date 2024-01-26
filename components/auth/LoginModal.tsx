/*
 * @Author: JinBlack
 * @Date: 2024-01-08 13:51:22
 * @LastEditors: JinBlack
 * @LastEditTime: 2024-01-26 16:06:51
 * @FilePath: /ticket/components/auth/LoginModal.tsx
 * @Description: dota2sites@gmail.com
 *
 * Copyright (c) 2024 by 4tmr, All Rights Reserved.
 */
'use client';
import Modal from '@/components/public/Modal';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { Auth } from '@supabase/auth-ui-react';
import { create } from 'zustand';
import { useAppContext } from '@/libs/store';
import { createBrowserHandler } from '@/libs/supabase-browser';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

type LoginModalState = {
	isOpen: boolean;
	toggle: () => void;
	open: () => void;
	close: () => void;
};

const useLoginForm = create<LoginModalState>()((set) => ({
	isOpen: false,
	toggle: () =>
		set((state) => ({
			isOpen: !state.isOpen
		})),
	open: () =>
		set((state) => ({
			isOpen: true
		})),
	close: () =>
		set((state) => ({
			isOpen: false
		}))
}));

const LoginModal = () => {
	const { isOpen, close } = useLoginForm();
	const { client: supabase } = createBrowserHandler();
	const router = useRouter();
	const updateUser = useAppContext((s) => s.updateUser);
	useEffect(() => {
		const {
			data: { subscription }
		} = supabase.auth.onAuthStateChange((event, session) => {
			// console.log(event);
			if (event === 'SIGNED_OUT') {
				updateUser(undefined);
				router.push('/');
			} else if (event === 'SIGNED_IN') {
				const user = session!.user;
        close()
				updateUser({
					id: user.id,
					email: user.email,
					avatar: user.user_metadata['avatar']
				});
        router.push('/dashboard');
				// router.refresh();
			} else if (event === 'INITIAL_SESSION') {
				//
			}
		});
		return () => {
			subscription.unsubscribe();
		};
	}, [supabase, updateUser, close, router]);
	return (
		<Modal open={isOpen} onClose={close}>
			<Auth
				supabaseClient={supabase}
				appearance={{ theme: ThemeSupa }}
				theme="dark"
				socialLayout="horizontal"
				// providers={['google', 'twitter']}
        providers={[]}
				localization={{
					variables: {
						sign_in: {
							email_label: '邮箱',
							password_label: '密码',
							button_label: '登录',
							loading_button_label: '登录中...',
							link_text: '有账号？登录'
						},
						sign_up: {
							email_label: '邮箱',
							password_label: '密码',
							button_label: '注册',
							loading_button_label: '注册中...',
							link_text: '没有账号？注册',
							confirmation_text: '检查邮件中的确认链接'
						},
						forgotten_password: {
							email_label: '邮箱',
							password_label: '密码',
							button_label: '修改密码',
							loading_button_label: '修改中...',
							link_text: '忘记密码？',
							confirmation_text: '检查邮件中修改密码的链接'
						}
					}
				}}
			/>
		</Modal>
	);
};

export { useLoginForm, LoginModal };
