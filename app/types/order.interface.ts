import { IUser } from '@/types/user.interface'
import { ICartItem } from '@/types/cart.interface'

export interface IOrder {
	id: string
	createdAt: Date | string
	items: ICartItem[]
	user: IUser
	total: number
}
