import { FC } from 'react'
import { Image, Pressable, Text, View } from 'react-native'

import { useTypedNavigation } from '@/hooks/useTypedNavigation'

const Banner: FC = () => {
	const { navigate } = useTypedNavigation()

	return (
		<View className='w-full bg-[#47AA52] flex-row justify-between rounded-2xl p-5 mt-5'>
			<View>
				<Text className='w-56 font-medium text-xl text-white'>
					Fast delivery - delicious choice every time!
				</Text>

				<Pressable
					onPress={() => navigate('Explorer')}
					className='bg-black rounded-full w-28 py-2 mt-4'
				>
					<Text className='font-medium text-white text-center'>Order now</Text>
				</Pressable>
			</View>

			<View className='absolute w-28 h-28 right-4 bottom-0'>
				<Image
					source={require('@/assets/images/banner.png')}
					className='w-full h-full'
				/>
			</View>
		</View>
	)
}

export default Banner
