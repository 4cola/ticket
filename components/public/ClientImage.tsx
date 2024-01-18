'use client';
/*
 * @Author: JinBlack
 * @Date: 2023-12-21 16:18:20
 * @LastEditors: JinBlack
 * @LastEditTime: 2023-12-21 16:21:14
 * @FilePath: /4tmr/packages/next-shared/components/public/ClientImage.tsx
 * @Description: dota2sites@gmail.com
 *
 * Copyright (c) 2023 by 4tmr, All Rights Reserved.
 */
import Image, { StaticImageData } from 'next/image';
import placeholer from '../../assets/images/blog-placeholder.png';
import { placeholderDataImage } from '../../libs/helper';
import { useState } from 'react';
import clsx from 'clsx';

const ArticleListImage = (props: { src: string | null; className?: string; width?: number; height?: number }) => {
	const defaultValue = { width: 256, height: 256 };
	const { width, height, src, className } = {
		...defaultValue,
		...props
	};
	const [imageUrl, setImageUrl] = useState<string | StaticImageData>(src || placeholer);
	return (
		<Image
			src={imageUrl}
			placeholder={placeholderDataImage}
			alt="post featured image"
			priority={false}
			width={width}
			height={height}
			loading="lazy"
			className={clsx(className)}
			onError={(event) => {
				setImageUrl(placeholer);
			}}
		/>
	);
};

export default ArticleListImage;
