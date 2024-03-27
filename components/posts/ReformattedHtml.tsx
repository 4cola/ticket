import clsx from 'clsx'
// import parse, { HTMLReactParserOptions, Element } from 'html-react-parser';
// import Image from 'next/image';

interface HtmlProps {
  htmlString: string | null;
  className?: string;
}

const Html: React.FC<HtmlProps> = ({ htmlString, className }) => {
  // const options: HTMLReactParserOptions = {
  //   replace: (domNode) => {
  //     if (domNode instanceof Element && domNode.name === 'img') {
  //       const { src, alt, sizes, width, height } = domNode.attribs;
  //       const w = width ? parseInt(width, 10) : undefined;
  //       const h = height ? parseInt(height, 10) : undefined;
  //       if (src) {
  //         return (
  //           <Image
  //             className='w-auto h-auto max-w-full'
  //             src={src}
  //             alt={alt || ''}
  //             sizes={sizes}
  //             width={w || 800}
  //             height={h || 600}
  //             loading='lazy'
  //           />
  //         );
  //       } else {
  //         return null
  //       }
  //     }
  //   }
  // };
  if (htmlString) {
    return <div className={clsx(className)} dangerouslySetInnerHTML={{ __html: htmlString }}></div>;
    // return <div className={clsx(className)}>{parse(htmlString, options)}</div>;
  }
  return null;
};

export default Html
