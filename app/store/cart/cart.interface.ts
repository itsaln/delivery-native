import { IProduct } from '@/types/product.interface'

export interface ICartItem {
	id: string
	product: IProduct
	quantity: number
	price: number
}

export interface ICartInitialState {
	items: ICartItem[]
}

export interface IAddToCartPayload extends Omit<ICartItem, 'id'> {}

export interface IChangeQuantityPayload extends Pick<ICartItem, 'id'> {
	type: 'minus' | 'plus'
}
