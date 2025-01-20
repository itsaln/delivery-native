import { FC } from 'react'
import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import MenuItem from './MenuItem'
import { menuItems } from './menu.data'
import { TypeNavigate } from './menu.interface'

interface IBottomMenu {
	nav: TypeNavigate
	currentRoute?: string
}

const BottomMenu: FC<IBottomMenu> = (props) => {
	const { bottom } = useSafeAreaInsets()

	return (
		<View
			className='flex-row justify-between items-center w-full border-t border-t-solid border-t-[#bbbbbb] bg-white pt-5 px-2'
			style={{
				paddingBottom: bottom + 20
			}}
		>
			{menuItems.map((item, index) => (
				<MenuItem key={`${item.path}_${index}`} item={item} {...props} />
			))}
		</View>
	)
}

export default BottomMenu
