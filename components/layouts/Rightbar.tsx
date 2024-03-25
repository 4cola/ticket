'use client';

import HotTags from '@/components/widgets/HotTags';
import Categories from '@/components/widgets/Categories';
import { usePathname } from 'next/navigation';

type Props = {
	categories: Category[] | null;
	tags: Tag[] | null;
};

export default function RightBar(props: Props) {
	const pathname = usePathname();
	if (!pathname.startsWith('/dashboard')) {
		return (
			<div className="lg:col-span-1 lg:flex hidden lg:flex-col lg:gap-4">
				<Categories categories={props.categories} />
				<HotTags tags={props.tags} />
			</div>
		);
	}
	return null;
}
