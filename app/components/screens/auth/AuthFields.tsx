import { FC } from 'react'
import { Control } from 'react-hook-form'

import Field from '@/components/ui/field/Field'

import { IAuthFormData } from '@/types/auth.interface'

import { validEmail } from './email.regex'

interface IAuthFields {
	control: Control<IAuthFormData>
}

const AuthFields: FC<IAuthFields> = ({ control }) => {
	return (
		<>
			<Field<IAuthFormData>
				control={control}
				name='email'
				placeholder='Enter email'
				rules={{
					required: 'Email is required',
					pattern: {
						value: validEmail,
						message: 'Please enter a valid email address'
					}
				}}
				keyboardType='email-address'
			/>

			<Field<IAuthFormData>
				control={control}
				name='password'
				placeholder='Enter password'
				rules={{
					required: 'Password is required',
					minLength: {
						value: 6,
						message: 'Password should be minimum 6 characters long'
					}
				}}
				secureTextEntry
			/>
		</>
	)
}

export default AuthFields
