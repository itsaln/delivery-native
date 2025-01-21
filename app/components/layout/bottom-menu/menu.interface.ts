import { TypeRootStackParamList } from '@/navigation/navigation.types'

import { TypeFeatherIconNames } from '@/types/icon.interface'

export type TypeNavigate = (screenName: keyof TypeRootStackParamList) => void

export interface IMenuItem {
	icon: TypeFeatherIconNames
	path: keyof TypeRootStackParamList
}
