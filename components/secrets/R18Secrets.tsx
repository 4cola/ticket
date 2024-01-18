/*
 * @Author: jhd jhd2215583@qq.com
 * @Date: 2023-09-04 16:32:08
 * @LastEditors: JinBlack
 * @LastEditTime: 2024-01-18 17:28:20
 * @FilePath: /ticket/components/secrets/R18Secrets.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import type { Json } from '../../types/supabase';

type SecretBag = {
  version: string | null;
  data: Json | null;
};

type SecretV1 = {
  name: string;
  link: string | null;
  hints: {
    name: string;
    value: string;
  }[];
};

import { XCircleIcon } from '@heroicons/react/20/solid';

const placeholder = (
  <div className="rounded-md bg-red-50 p-4 my-4">
    <div className="flex">
      <div className="flex-shrink-0">
        <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
      </div>
      <div className="ml-3">
        <h3 className="text-sm font-medium text-red-800">
          下载资源仅给登录用户开放
        </h3>
        {/* <div className="mt-2 text-sm text-red-700">
          <ul role="list" className="list-disc space-y-1 pl-5">
            <li>Your password must be at least 8 characters</li>
            <li>Your password must include at least one pro wrestling finishing move</li>
          </ul>
        </div> */}
      </div>
    </div>
  </div>
);

const R18Secrets = (props: { secrets: any | null; authenticated: boolean }) => {
  if (!props.authenticated) {
    return placeholder;
  }
  if (props.secrets) {
    const bag = props.secrets as SecretBag;
    let secrets;
    if (bag.version === '1.0.1' || bag.version === 'hmoe') {
      secrets = props.secrets.data as SecretV1[];
    } else {
      secrets = props.secrets.data as SecretV1[];
    }
    const downloadsLis = secrets.map((secret, i) => {
      const hints = secret.hints?.map((hint, j) => {
        return (
          <div
            key={j}
            className="mt-1 gap-x-2 text-xs leading-5 text-gray-500 flex items-start"
          >
            <p className="whitespace-nowrap mt-0.5 py-0.5 text-xs font-medium">
              {hint.name}
            </p>
            <p className="rounded-md whitespace-nowrap mt-0.5 px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset text-yellow-800 bg-yellow-50 ring-yellow-600/20">
              {hint.value}
            </p>
          </div>
        );
      });

      return (
        <li key={i} className="gap-x-6 py-5">
          <p className="text-sm font-semibold leading-6 text-gray-900">
            {secret.name}:
          </p>
          <p className="break-all mt-0.5 py-0.5 text-xs font-medium">
            {secret.link}
          </p>
          {hints}
        </li>
      );
    });
    return (
      <>
        <div className="px-4 sm:px-0 mb-4">
          <h3
            id="downloads"
            className="text-lg font-semibold leading-7 text-gray-900"
          >
            可下载内容
          </h3>
        </div>
        <ul role="list" className="divide-y divide-gray-100">
          {downloadsLis}
        </ul>
      </>
    );
  }
  return <></>;
};

export default R18Secrets;
