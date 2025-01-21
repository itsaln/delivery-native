import { useQuery } from '@tanstack/react-query'

import { UserService } from '@/services/user.service'

export const useProfile = () => {
	const { data: profile, isPending: isProfileLoading } = useQuery({
		queryKey: ['get profile'],
		queryFn: () => UserService.getProfile()
	})

	return { profile, isProfileLoading }
}
