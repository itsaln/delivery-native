import { FC } from 'react'
import { Image, Pressable, Text, View } from 'react-native'

import { useTypedNavigation } from '@/hooks/useTypedNavigation'

import { ICartItem } from '@/store/cart/cart.interface'

import { convertPrice } from '@/utils/convertPrice'
import { getMediaSource } from '@/utils/getMediaSource'

import CartActions from './CartActions'

const CartItem: FC<{ item: ICartItem }> = ({ item }) => {
	const { navigate } = useTypedNavigation()

	return (
		<View className='flex-row mt-5'>
			<Pressable
				onPress={() => navigate('Product', { slug: item.product.slug })}
				className='w-28 bg-gray-100 rounded-xl items-center overflow-hidden p-3'
			>
				<Image
					source={getMediaSource(item.product.image)}
					width={80}
					height={80}
				/>
			</Pressable>

			<View className='mt-2 ml-5'>
				<Text className='font-semibold text-xl'>{item.product.name}</Text>
				<Text className='mt-1'>{convertPrice(item.price)}</Text>
				<CartActions item={item} />
			</View>
		</View>
	)
}

export default CartItem
