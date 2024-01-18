import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from '@heroicons/react/20/solid';
import Link from 'next/link';
import clsx from 'clsx';

type Props = {
  currentIndex: number;
  count: number;
  pageSize?: number;
  basePath: string
  searchParams?: string
};

const createData = ({ currentIndex, pageSize, count }: Props) => {
  pageSize = pageSize || 10
  const totalVisible = 6;
  // const silbingVisible = 3;
  const totalPage = Math.ceil(count / pageSize);
  let data: any[];
  if (totalPage === 1) {
    data = [1];
  } else if (totalPage > 1 && totalPage <= totalVisible) {
    data = Array.from({ length: totalPage }, (_, i) => i + 1);
  } else if (totalPage > totalVisible) {
    if (currentIndex <= 2 || currentIndex >= totalPage - 1) {
      data = [1, 2, 3, '...', totalPage - 2, totalPage - 1, totalPage];
    } else if (currentIndex == 3) {
      data = [1, 2, 3, 4, '...', totalPage - 1, totalPage];
    } else if (currentIndex == totalPage - 2) {
      data = [
        1,
        2,
        '...',
        totalPage - 3,
        totalPage - 2,
        totalPage - 1,
        totalPage,
      ];
    } else {
      data = [1, 2];
      if (currentIndex - 1 - 1 > 2) {
        data.push('...');
      }
      data.push(currentIndex - 1);
      data.push(currentIndex);
      data.push(currentIndex + 1);
      if (currentIndex + 1 + 1 < totalPage - 1) {
        data.push('...');
      }
      data.push(totalPage - 1);
      data.push(totalPage);
    }
  } else {
    data = [];
  }
  const hasPrev = currentIndex > 1;
  const hasNext = currentIndex < totalPage;
  return {
    hasPrev,
    indices: data,
    hasNext,
  };
};

export default function Pagination(props: Props) {
  // const basePath = usePathname().replace(/\/page\/\d+$/, '').replace(/\/posts.*/, '')
  // const searchParams = useSearchParams().toString()
  // const basePath = props.basePath.replace(/\/page\/\d+$/, '')
  const basePath = props.basePath
  const searchParams = props.searchParams
  const generateURL = (index: number) => {
    const suffix = searchParams ? `?${searchParams}` : ''
    return `${basePath}/page/${index}${suffix}`
  }
  const ActiveClass = 'border-indigo-500 text-indigo-600';
  const inActiveClass = 'border-transparent text-gray-500';
  const defaultClass =
    'hover:text-gray-700 hover:border-gray-300 px-4 py-4 text-sm font-medium border-t-2 inline-flex items-center';
  const { hasPrev, hasNext, indices } = createData(props);
  const prev = hasPrev ? (
    <Link
      href={generateURL(props.currentIndex - 1)}
      className={clsx(inActiveClass, defaultClass)}
      prefetch={false}
    >
      <ArrowLongLeftIcon
        className="mr-3 h-5 w-5 text-gray-400"
        aria-hidden="true"
      />
      上一页
    </Link>
  ) : (
    <></>
  );
  const next = hasNext ? (
    <Link
      href={generateURL(props.currentIndex + 1)}
      className={clsx(inActiveClass, defaultClass)}
      prefetch={false}
    >
      下一页
      <ArrowLongRightIcon
        className="ml-3 h-5 w-5 text-gray-400"
        aria-hidden="true"
      />
    </Link>
  ) : (
    <></>
  );
  const links = indices.map((i) => {
    if (i === '...') {
      return (
        <span key={i} className={clsx(defaultClass, inActiveClass)}>
          {i}
        </span>
      );
    } else {
      return (
        <Link
          key={i}
          href={generateURL(i)}
          className={clsx(
            defaultClass,
            props.currentIndex == i ? ActiveClass : inActiveClass
          )}
          prefetch={false}
        >
          {i}
        </Link>
      );
    }
  });

  return (
    <nav className="flex items-center justify-between border-t border-gray-200 px-4 sm:px-0">
      <div className="-mt-px flex w-0 flex-1">{prev}</div>
      <div className="hidden md:-mt-px md:flex">{links}</div>
      <div className="-mt-px flex w-0 flex-1 justify-end">{next}</div>
    </nav>
  );
}
