import cn from 'clsx'
import { FC, PropsWithChildren } from 'react'
import { Text } from 'react-native'

interface IHeading {
	isCenter?: boolean
	className?: string
}

const Heading: FC<PropsWithChildren<IHeading>> = ({
	isCenter = false,
	className,
	children
}) => {
	return (
		<Text
			className={cn(
				'font-medium text-xl text-black',
				isCenter && 'text-center',
				className
			)}
		>
			{children}
		</Text>
	)
}

export default Heading
