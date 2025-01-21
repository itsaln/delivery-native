import { getUsersUrl } from '@/config/api.config'

import { request } from '@/services/api/request.api'

import { IUser } from '@/types/user.interface'

export const UserService = {
	async getProfile() {
		return request<IUser>({
			url: getUsersUrl('/profile'),
			method: 'GET'
		})
	},

	async toggleFavorite(productId: string) {
		return request<IUser>({
			url: getUsersUrl(`/profile/favorites/${productId}`),
			method: 'PATCH'
		})
	}
}
