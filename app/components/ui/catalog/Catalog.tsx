import { FC } from 'react'
import { Text, View } from 'react-native'

import Heading from '@/components/ui/Heading'

import { ICatalog } from './catalog.interface'
import ProductItem from './product-item/ProductItem'

const Catalog: FC<ICatalog> = ({ title, products }) => {
	return (
		<View className='mb-16'>
			{title && <Heading>{title}</Heading>}
			{products.length ? (
				<View className='flex-row flex-wrap justify-between mt-4 -mx-2'>
					{products.map((product, index) => (
						<View key={`${product.id}_${index}`} className='w-1/2 px-2'>
							<ProductItem product={product} />
						</View>
					))}
				</View>
			) : (
				<Text className='mt-2'>Products not found</Text>
			)}
		</View>
	)
}

export default Catalog
