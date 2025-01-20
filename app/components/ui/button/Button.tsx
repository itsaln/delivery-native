import { FC, PropsWithChildren } from 'react'
import { Pressable, Text } from 'react-native'
import cn from 'clsx'

import { IButton } from './button.interface'

const Button: FC<PropsWithChildren<IButton>> = ({
	className,
	children,
	...rest
}) => {
	return (
		<Pressable
			className={cn(
				'self-center bg-[#47AA52] w-full font-light rounded-lg py-3 mt-3.5',
				className
			)}
			{...rest}
		>
			<Text className='font-medium text-lg text-white text-center'>
				{children}
			</Text>
		</Pressable>
	)
}

export default Button
