import { FC } from 'react'
import { Image, Pressable, Text, View } from 'react-native'

import Heading from '@/components/ui/Heading'
import Loader from '@/components/ui/Loader'

import { useTypedNavigation } from '@/hooks/useTypedNavigation'

import { getMediaSource } from '@/utils/getMediaSource'

import { useGetAllCategories } from './useGetAllCategories'

const Categories: FC = () => {
	const { navigate } = useTypedNavigation()
	const { categories, isLoading } = useGetAllCategories()

	return isLoading ? (
		<Loader />
	) : (
		<View className='flex flex-col mt-5 mb-4'>
			<Heading>Categories</Heading>

			<View className='flex-row justify-center mt-5'>
				{categories?.map((category, index) => (
					<Pressable
						key={`${category.id}_${index}`}
						onPress={() => navigate('Category', { slug: category.slug })}
						className='bg-gray-100 rounded-xl p-5 mx-2'
					>
						<Image
							source={getMediaSource(category.image)}
							className='w-10 h-8 p-3 mb-2'
							style={{ resizeMode: 'cover' }}
						/>
						<Text className='font-normal text-xs text-center'>
							{category.name}
						</Text>
					</Pressable>
				))}
			</View>
		</View>
	)
}

export default Categories
