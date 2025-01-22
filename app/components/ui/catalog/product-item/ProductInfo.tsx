import { FC } from 'react'
import { Text, View } from 'react-native'

import { IProduct } from '@/types/product.interface'

import { convertPrice } from '@/utils/convertPrice'

interface IProductInfo {
	product: IProduct
}

const ProductInfo: FC<IProductInfo> = ({ product }) => {
	return (
		<View className='my-3'>
			<Text className='font-semibold text-base'>{product.name}</Text>
			<Text className='py-1.5'>{product.category.name}</Text>
			<Text className='bg-[#47AA52] rounded-full w-[55px] font-normal text-sm text-white text-center py-0.5 mt-1'>
				{convertPrice(product.price)}
			</Text>
		</View>
	)
}

export default ProductInfo
