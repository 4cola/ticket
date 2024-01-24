'use client';

import { usePathname, useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';
import { Fragment } from 'react';
import defaultAvatar from '@/assets/images/avatar.jpeg';
import { useAppContext } from '@/libs/store';
import { createBrowserHandler } from '@/libs/supabase-browser';

import { useLoginForm } from '../auth/LoginModal';

const checkPath = ({ currentPath, url }: { currentPath: string | null; url: string }) => {
	if (url === '/' || url === '') {
		return currentPath === url;
	} else {
		if (currentPath) {
			return currentPath.startsWith(url);
		}
	}
	return false;
};

const WebLinks = ({ routes, hasSearch }: { routes: Route[]; hasSearch: boolean }) => {
	const currentPath = usePathname();
	const links = routes.map((route, i) => {
		if (route.url === '/search') {
			return (
				<Link
					key={999}
					href="/search"
					className={clsx(
						'inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium',
						'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
					)}
				>
					<MagnifyingGlassIcon className="h-5 w-5" />
				</Link>
			);
		} else {
			return (
				<Link
					href={route.url}
					key={i}
					className={clsx(
						'inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium',
						checkPath({ currentPath: currentPath, url: route.url })
							? 'border-indigo-500 text-gray-900'
							: 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
					)}
					title={route.name}
					prefetch={false}
				>
					{route.name}
				</Link>
			);
		}
	});
	return (
		<div className="hidden md:ml-6 md:flex md:space-x-8">
			{links}
			{hasSearch ? (
				<Link
					href="/search"
					className={clsx(
						'inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium',
						'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
					)}
				>
					<MagnifyingGlassIcon className="h-5 w-5" />
				</Link>
			) : (
				<></>
			)}
		</div>
	);
};

const Avatar = ({ avatar }: { avatar?: string }) => {
	return (
		<Image
			className="h-8 w-8 rounded-full"
			src={avatar || defaultAvatar}
			priority={false}
			alt="user avatar"
			width={32}
			height={32}
			quality={100}
		/>
	);
};

const NaviDrawer = ({ routes, hasLogin }: { routes: Route[]; hasLogin: boolean }) => {
	const { open } = useLoginForm();
	const { client: supabase } = createBrowserHandler();
	const user = useAppContext((s) => s.user);
	let loginPart;
	if (hasLogin) {
		loginPart = (
			<div className="border-t border-gray-200 pb-3 pt-4">
				{user ? (
					<>
						<div className="flex items-center px-4 sm:px-6">
							<div className="flex-shrink-0">
								<Avatar avatar={user?.avatar || ''} />
							</div>
							<div className="ml-3">
								<div className="text-base font-medium text-gray-800">Anonymous</div>
								<div className="text-sm font-medium text-gray-500">{user?.email}</div>
							</div>
						</div>
						<div className="mt-3 space-y-1">
							{/* <Disclosure.Button
            as="a"
            href="#"
            className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800 sm:px-6"
          >
            个人中心
          </Disclosure.Button> */}
							<Disclosure.Button
								as="button"
								className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800 sm:px-6 w-full text-left"
								onClick={async () => {
									await supabase.auth.signOut();
								}}
							>
								登出
							</Disclosure.Button>
						</div>
					</>
				) : (
					<div className="space-y-1">
						<Disclosure.Button
							as="button"
							className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800 sm:px-6 w-full text-left"
							onClick={open}
						>
							登录
						</Disclosure.Button>
					</div>
				)}
			</div>
		);
	}

	const defaultClass =
		'block border-l-4 py-2 pl-3 pr-4 text-base font-medium hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6';
	const activeClass = 'bg-indigo-50 border-indigo-500 text-indigo-700';
	const inactiveClass = 'text-gray-500 border-transparent';
	const links = routes.map((route) => {
		return (
			<Disclosure.Button
				as="a"
				key={route.url}
				href={route.url}
				className={clsx(defaultClass, route.url === usePathname() ? activeClass : inactiveClass)}
			>
				{route.name}
			</Disclosure.Button>
		);
	});
	return (
		<Disclosure.Panel className="md:hidden">
			<div className="space-y-1 pb-3 pt-2">
				{links}
				<Disclosure.Button as="a" href="/search" className={clsx(defaultClass, inactiveClass)}>
					<MagnifyingGlassIcon className="h-5 w-5" />
				</Disclosure.Button>
			</div>
			{loginPart}
		</Disclosure.Panel>
	);
};

const UserInteract = () => {
	const { open } = useLoginForm();
	const { client: supabase } = createBrowserHandler();
	const user = useAppContext((s) => s.user);
	return user ? (
		<Menu as="div" className="relative ml-3">
			<div>
				<Menu.Button className="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
					<span className="sr-only">Open user menu</span>
					<Avatar avatar={user.avatar || ''} />
					<span className="hidden lg:flex lg:items-center">
						<span className="ml-4 font-semibold leading-8 text-gray-900" aria-hidden="true">
							{user.email}
						</span>
						<ChevronDownIcon className="ml-2 h-5 w-5 text-gray-400" aria-hidden="true" />
					</span>
				</Menu.Button>
			</div>
			<Transition
				as={Fragment}
				enter="transition ease-out duration-200"
				enterFrom="transform opacity-0 scale-95"
				enterTo="transform opacity-100 scale-100"
				leave="transition ease-in duration-75"
				leaveFrom="transform opacity-100 scale-100"
				leaveTo="transform opacity-0 scale-95"
			>
				<Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
					<Menu.Item>
						{({ active }) => (
							<Link href="/dashboard" className={clsx(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}>
								个人中心
							</Link>
						)}
					</Menu.Item>
					<Menu.Item>
						{({ active }) => (
							<button
								className={clsx(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700', 'w-full text-left')}
								onClick={async () => {
									await supabase.auth.signOut();
								}}
							>
								登出
							</button>
						)}
					</Menu.Item>
				</Menu.Items>
			</Transition>
		</Menu>
	) : (
		<div className="hidden ml-2 lg:flex lg:flex-1 lg:justify-end" onClick={open}>
			<button className="text-sm font-semibold leading-6 text-gray-900">
				登录 <span aria-hidden="true">&rarr;</span>
			</button>
		</div>
	);
};

export default function Header({
	appConfig,
	hasSearch,
	logo,
	hasLogin
}: {
	appConfig: AppConfig;
	hasSearch?: boolean;
	logo: React.ReactNode;
	hasLogin?: boolean;
}) {
	const searh = hasSearch ?? false;
	let userInteract: React.ReactNode | undefined;
	let naviDrawer: React.ReactNode;
	if (hasLogin) {
		userInteract = (
			<div className="flex items-center">
				<div className="hidden md:ml-4 md:flex md:flex-shrink-0 md:items-center">
					{/* Profile dropdown */}
					<UserInteract />
				</div>
			</div>
		);
		naviDrawer = <NaviDrawer routes={appConfig.header} hasLogin={hasLogin} />;
	} else {
		naviDrawer = <NaviDrawer routes={appConfig.header} hasLogin={false} />;
	}
	return (
		<Disclosure as="nav" className="bg-white shadow w-full z-40 sticky top-0">
			{({ open }) => (
				<>
					<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
						<div className="flex h-16 justify-between">
							<div className="flex">
								<div className="-ml-2 mr-2 flex items-center md:hidden">
									{/* Mobile menu button */}
									<Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
										<span className="sr-only">Open main menu</span>
										{open ? (
											<XMarkIcon className="block h-6 w-6" aria-hidden="true" />
										) : (
											<Bars3Icon className="block h-6 w-6" aria-hidden="true" />
										)}
									</Disclosure.Button>
								</div>
								<div className="flex flex-shrink-0 items-center">
									<Link
										className="h-full max-w-[240px] sm:hidden lg:flex p-2 flex justify-center align-middle"
										title={appConfig.metas.title}
										href="/"
									>
										{logo}
									</Link>
								</div>
								<div className="hidden md:ml-6 md:flex md:space-x-8">
									<WebLinks routes={appConfig.header} hasSearch={searh} />
								</div>
							</div>
							{userInteract}
						</div>
					</div>
					{naviDrawer}
				</>
			)}
		</Disclosure>
	);
}
