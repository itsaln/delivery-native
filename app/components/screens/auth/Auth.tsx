import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Pressable, Text, View } from 'react-native'

import AuthFields from './AuthFields'
import Loader from '@/components/ui/Loader'
import Button from '@/components/ui/button/Button'
import { IAuthFormData } from '@/types/auth.interface'

const Auth: FC = () => {
	const [isReg, setIsReg] = useState(false)

	const { handleSubmit, reset, control } = useForm<IAuthFormData>({
		mode: 'onChange'
	})

	const onSubmit: SubmitHandler<IAuthFormData> = (data) => {
		console.log(data)
	}

	const isLoading = false

	return (
		<View className='mx-2 items-center justify-center h-full'>
			<View className='w-9/12'>
				<Text className='font-medium text-3xl text-black text-center mb-6'>
					{isReg ? 'Sign Up' : 'Login'}
				</Text>
				{isLoading ? (
					<Loader />
				) : (
					<>
						<AuthFields control={control} />

						<Button onPress={handleSubmit(onSubmit)}>
							{isReg ? 'Sign Up' : 'Login'}
						</Button>

						<Pressable onPress={() => setIsReg(!isReg)}>
							<Text className='text-base text-black text-center mt-6'>
								{isReg ? 'Already have an account' : "Don't have an account?"}
								<Text className='text-[#47AA52]'>
									{' '}{isReg ? 'Login' : 'Sign up'}
								</Text>
							</Text>
						</Pressable>
					</>
				)}
			</View>
		</View>
	)
}

export default Auth
