import { FC } from 'react'
import { Text, View } from 'react-native'

import Layout from '@/components/layout/Layout'
import Heading from '@/components/ui/Heading'
import Button from '@/components/ui/button/Button'

import { useCart } from '@/hooks/useCart'

import { convertPrice } from '@/utils/convertPrice'

import CartItem from './cart-item/CartItem'

const Cart: FC = () => {
	const { items, total } = useCart()

	return (
		<>
			<Layout>
				<Heading>Cart</Heading>

				{items.length ? (
					items.map((item, index) => (
						<CartItem key={`${item.id}_${index}`} item={item} />
					))
				) : (
					<Text className='mt-2'>Products not found</Text>
				)}
			</Layout>

			{items.length ? (
				<View className='absolute w-[90%] bottom-8 mx-5'>
					<Text className='font-bold text-xl'>
						Total: {convertPrice(total)}
					</Text>
					<Button onPress={() => {}}>Place order</Button>
				</View>
			) : null}
		</>
	)
}

export default Cart
