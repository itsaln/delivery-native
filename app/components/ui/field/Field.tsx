import cn from 'clsx'
import { Controller } from 'react-hook-form'
import { Text, TextInput, View } from 'react-native'

import { IField } from './field.interface'

const Field = <T extends Record<string, any>>({
	control,
	rules,
	name,
	className,
	...rest
}: IField<T>): JSX.Element => {
	return (
		<Controller
			control={control}
			name={name}
			rules={rules}
			render={({
				field: { value, onChange, onBlur },
				fieldState: { error }
			}) => (
				<>
					<View
						className={cn(
							'bg-white w-full rounded-lg border pt-2.5 pb-4 px-4 my-1.5',
							error ? 'border-red-500' : 'border-gray-400'
						)}
					>
						<TextInput
							autoCapitalize='none'
							onChangeText={onChange}
							onBlur={onBlur}
							value={(value || '').toString()}
							placeholderTextColor='#6A6A6A'
							className='text-base text-black'
							{...rest}
						/>
					</View>
					{error && <Text className='text-red-500'>{error.message}</Text>}
				</>
			)}
		/>
	)
}

export default Field
