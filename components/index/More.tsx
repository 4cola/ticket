import Link from "next/link";
import clsx from "clsx";

const More = ({ href, className }: { href: string; className?: string }) => {
  return (
    <div className={clsx("flex items-center gap-x-6", className)}>
      <Link
        href={href}
        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        查看更多
      </Link>
    </div>
  );
};

export default More
