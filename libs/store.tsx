/*
 * @Author: JinBlack
 * @Date: 2024-01-03 14:48:47
 * @LastEditors: JinBlack
 * @LastEditTime: 2024-01-24 14:09:09
 * @FilePath: /ticket/libs/store.tsx
 * @Description: dota2sites@gmail.com
 *
 * Copyright (c) 2024 by 4tmr, All Rights Reserved.
 */
'use client';
import { useRef, useContext, createContext } from 'react'
import { create, createStore, useStore } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

type AppProps = {
  user?: User
}

type AppState = {
  updateUser: (user?: User) => void;
}

type AppAttributes = AppProps & AppState
type AppStore = ReturnType<typeof createAppState>

const createAppState = (props: AppProps) => {
	const defaultValues = {
		user: undefined,
	};
	return createStore<AppAttributes>()((set) => ({
    updateUser: (user) =>
			set((state) => ({
				user
			})),
		...defaultValues,
		...props,
	}));
};

export const AppContext = createContext<AppStore | null>(null)

type AppProviderProps = React.PropsWithChildren<AppProps>

export function AppProvider({ children, ...props }: AppProviderProps) {
  const storeRef = useRef<AppStore>()
  if (!storeRef.current) {
    storeRef.current = createAppState(props)
  }
  return (
    <AppContext.Provider value={storeRef.current}>
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext<T>(selector: (state: AppAttributes) => T): T {
  const store = useContext(AppContext)
  if (!store) throw new Error('Missing AppContext.Provider in the tree')
  return useStore(store, selector)
}
