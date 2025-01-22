import { FC } from 'react'
import { Text, View } from 'react-native'

import { convertPrice } from '@/utils/convertPrice'

import { IProductComponent } from '../product-page.interface'

const ProductInfo: FC<IProductComponent> = ({ product }) => {
	return (
		<View className='mt-7'>
			<Text className='font-bold text-2xl'>{product.name}</Text>
			<Text className='text-base opacity-70 mt-2'>{product.description}</Text>
			<Text className='font-semibold text-3xl text-[#47AA52] mt-6'>
				{convertPrice(product.price)}
			</Text>
		</View>
	)
}

export default ProductInfo
