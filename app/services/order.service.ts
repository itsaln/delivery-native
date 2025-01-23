import { getOrdersUrl } from '@/config/api.config'

import { request } from '@/services/api/request.api'

import { IOrder } from '@/types/order.interface'

type TypeData = {
	items: {
		quantity: number
		price: number
		productId: string
	}[]
}

export const OrderService = {
	async getAll() {
		return request<IOrder[]>({
			url: getOrdersUrl(''),
			method: 'GET'
		})
	},

	async getByUserId() {
		return request<IOrder[]>({
			url: getOrdersUrl('/by-user'),
			method: 'GET'
		})
	},

	async place(data: TypeData) {
		return request<{ clientSecret: string }>({
			url: getOrdersUrl(''),
			method: 'POST',
			data
		})
	}
}
