import { Ionicons } from '@expo/vector-icons'
import { FC } from 'react'
import { Pressable, Text, View } from 'react-native'

import { useProfile } from '@/components/screens/profile/useProfile'

import { useTypedNavigation } from '@/hooks/useTypedNavigation'

const Header: FC = () => {
	const { navigate } = useTypedNavigation()
	const { profile } = useProfile()

	return (
		<View className='flex-row items-center justify-between'>
			<Text>Hello, {profile?.name}</Text>

			<Pressable onPress={() => navigate('Cart')}>
				<Ionicons name='cart' size={26} color='#374151' />
			</Pressable>
		</View>
	)
}

export default Header
