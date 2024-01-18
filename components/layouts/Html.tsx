/*
 * @Author: JinBlack
 * @Date: 2023-12-28 10:44:33
 * @LastEditors: JinBlack
 * @LastEditTime: 2024-01-18 15:46:00
 * @FilePath: /ticket/components/layouts/Html.tsx
 * @Description: dota2sites@gmail.com
 *
 * Copyright (c) 2023 by 4tmr, All Rights Reserved.
 */
import Header from './Header';
import Footer from './Footer';
import Leftbar from './Leftbar';
import { Notifications } from '../public/Notification';
import NextTopLoader from 'nextjs-toploader';
import { LoginModal } from '@/components/auth/LoginModal';
import { AppProvider } from '@/libs/store';

type ContentProps = {
	leftbar?: React.ReactNode;
	banner: React.ReactNode;
	children: React.ReactNode;
	// rightbar?: React.ReactNode;
	logo?: React.ReactNode;
	appConfig: AppConfig;
	moreContents: React.ReactNode;
	hasLogin: boolean;
};

const Content = ({ banner, logo, children, appConfig, moreContents, hasLogin }: ContentProps) => {
	return (
		<>
			<Header appConfig={appConfig} logo={logo} hasLogin={hasLogin} />
			<div className="w-full flex-1">
				<div className="mx-auto max-w-full lg:max-w-7xl md:py-4">
					<div className="grid grid-rows-1 grid-cols-4 grid-flow-row gap-4">
						<Leftbar />
						<div className="col-span-4 lg:col-span-3 flex flex-col gap-4">
							<div className="hidden md:block">{banner}</div>
							<main className="p-4 md:p-8 lg:py-12 bg-white">{children}</main>
						</div>
						{/* {rightbar} */}
					</div>
				</div>
				<Footer routers={appConfig.footer} domain={appConfig.metas.domain} />
			</div>
			<div className="w-full md:hidden sticky bottom-0">{banner}</div>
			{moreContents}
		</>
	);
};

type HtmlProps = {
	user?: User;
};

const Html = (props: HtmlProps & ContentProps) => {
	const { user, ...contentProps } = props;
	return (
		<html lang="zh-cn">
			<body className="bg-zinc-50 antialiased flex flex-col">
				<NextTopLoader />
				<AppProvider user={user}>
					<Content {...contentProps} />
					<Notifications />
					<LoginModal />
				</AppProvider>
			</body>
		</html>
	);
};

export default Html;
