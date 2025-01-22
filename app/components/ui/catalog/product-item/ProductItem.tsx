import { FC } from 'react'
import { Image, Pressable, View } from 'react-native'

import { useTypedNavigation } from '@/hooks/useTypedNavigation'

import { IProduct } from '@/types/product.interface'

import { getMediaSource } from '@/utils/getMediaSource'

import ProductInfo from './ProductInfo'

interface IProductItem {
	product: IProduct
}

const ProductItem: FC<IProductItem> = ({ product }) => {
	const { navigate } = useTypedNavigation()

	return (
		<View className='flex-col rounded-lg mb-3.5'>
			<Pressable
				onPress={() => navigate('Product', { slug: product.slug })}
				className='relative flex items-center justify-center bg-gray-100 rounded-xl overflow-hidden p-2'
			>
				<Image
					source={getMediaSource(product.image)}
					width={130}
					height={130}
				/>
			</Pressable>
			<ProductInfo product={product} />
		</View>
	)
}

export default ProductItem
