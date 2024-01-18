/*
 * @Author: JinBlack
 * @Date: 2024-01-03 14:41:55
 * @LastEditors: JinBlack
 * @LastEditTime: 2024-01-03 17:11:14
 * @FilePath: /4tmr/packages/next-shared/components/public/Notification.tsx
 * @Description: dota2sites@gmail.com
 *
 * Copyright (c) 2024 by 4tmr, All Rights Reserved.
 */
'use client';
import { Fragment, useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import { CheckCircleIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline';
import { XMarkIcon } from '@heroicons/react/20/solid';
import { create } from 'zustand';

export type Notification = {
	status: 'success' | 'error';
	title: string;
	message: string;
};

type NotificationState = {
	notifications: Notification[];
	lastNotificationTime: number;
	pushNotification: (n: Notification) => void;
	clearNotifications: () => void;
};

export const useNotifications = create<NotificationState>()((set) => ({
	notifications: [],
	lastNotificationTime: Date.now(),
	pushNotification: (notification) =>
		set((state) => ({
			notifications: [...state.notifications, notification],
			lastNotificationTime: Date.now()
		})),
	clearNotifications: () =>
		set((state) => ({
			notifications: [],
			lastNotificationTime: state.lastNotificationTime
		}))
}));

export const Notifications = () => {
	const { notifications, lastNotificationTime, clearNotifications } = useNotifications();
	useEffect(() => {
		const timer = setTimeout(() => {
			const timeNow = Date.now();
			if (timeNow - lastNotificationTime >= 5000) {
				// 如果5秒内没有新的通知
				clearNotifications();
			}
		}, 5000);
		return () => clearTimeout(timer); // 组件卸载时清除定时器
	}, [notifications, lastNotificationTime, clearNotifications]);
	return (
		<div
			aria-live="assertive"
			className="pointer-events-none fixed top-0 right-0 flex flex-col items-start px-4 py-6 sm:items-start sm:p-6 z-[1000] gap-4"
		>
			{notifications.map((notification, key) => (
				<NotificationItem key={key} notification={notification} />
			))}
		</div>
	);
};

export function NotificationItem({ notification }: { notification: Notification }) {
	const [show, setShow] = useState(true);
	const [notif, setNotif] = useState<Notification | null>(notification);

	const close = async () => {
		await new Promise((resolve) =>
			setTimeout(() => {
				setShow(false);
				setNotif(null);
			}, 3000)
		);
	};

	useEffect(() => {
		close();
	}, []);

	if (notif) {
		return (
			<div className="flex w-64 md:w-96 flex-col items-center space-y-4 sm:items-end">
				<Transition
					show={show}
					as={Fragment}
					enter="transform ease-out duration-300 transition"
					enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
					enterTo="translate-y-0 opacity-100 sm:translate-x-0"
					leave="transition ease-in duration-100"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
						<div className="p-4">
							<div className="flex items-start">
								<div className="flex-shrink-0">
									{notif.status === 'success' ? (
										<CheckCircleIcon className="h-6 w-6 text-green-400" aria-hidden="true" />
									) : (
										<ExclamationCircleIcon className="h-6 w-6 text-red-400" aria-hidden="true" />
									)}
								</div>
								<div className="ml-3 w-0 flex-1 pt-0.5">
									<p className="text-sm font-medium text-gray-900">{notif.title}</p>
									<p className="mt-1 text-sm text-gray-500">{notif.message}</p>
								</div>
								<div className="ml-4 flex flex-shrink-0">
									<button
										type="button"
										className="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
										onClick={() => {
											setShow(false);
										}}
									>
										<span className="sr-only">Close</span>
										<XMarkIcon className="h-5 w-5" aria-hidden="true" />
									</button>
								</div>
							</div>
						</div>
					</div>
				</Transition>
			</div>
		);
	}

	return null;
}
