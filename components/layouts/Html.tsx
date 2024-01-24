/*
 * @Author: JinBlack
 * @Date: 2023-12-28 10:44:33
 * @LastEditors: JinBlack
 * @LastEditTime: 2024-01-24 14:03:58
 * @FilePath: /ticket/components/layouts/Html.tsx
 * @Description: dota2sites@gmail.com
 *
 * Copyright (c) 2023 by 4tmr, All Rights Reserved.
 */
import Header from './Header';
import Footer from './Footer';
import Leftbar from './Leftbar';
import Rightbar from './Rightbar';
import { Notifications } from '../public/Notification';
import NextTopLoader from 'nextjs-toploader';
import { LoginModal } from '@/components/auth/LoginModal';
import { AppProvider } from '@/libs/store';

type HtmlProps = {
	user?: User;
	categories: Category[] | null;
	tags: Tag[] | null;
	children: React.ReactNode;
	logo?: React.ReactNode;
	appConfig: AppConfig;
	hasLogin: boolean;
};

const Html = (props: HtmlProps) => {
	const { user, appConfig, logo, hasLogin, children, categories, tags } = props;
	return (
		<html lang="zh-cn">
			<body className="bg-zinc-50 antialiased flex flex-col">
				<NextTopLoader />
				<AppProvider user={user}>
					<Header appConfig={appConfig} logo={logo} hasLogin={hasLogin} />
					<div className="w-full flex-1">
						<div className="mx-auto max-w-full lg:max-w-7xl md:py-4">
							<div className="grid grid-rows-1 grid-cols-4 grid-flow-row gap-4">
								<Leftbar />
								<div className="col-span-4 lg:col-span-3 flex flex-col gap-4">
									{/* <div className="hidden md:block">{banner}</div> */}
									<main className="p-4 md:p-8 lg:py-12 bg-white">{children}</main>
								</div>
								<Rightbar categories={categories} tags={tags} />
							</div>
						</div>
						<Footer routers={appConfig.footer} domain={appConfig.metas.domain} />
					</div>
					<Notifications />
					<LoginModal />
				</AppProvider>
			</body>
		</html>
	);
};

export default Html;
