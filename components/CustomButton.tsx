'use client';
import { CustomButtonProps } from '@/types';
import Image from 'next/image';

export const CustomButton = ({ title, containerStyles, handleClick, btnType, rightIcon, textStyle, isDisabled }: CustomButtonProps) => {
	return (
		<button
			disabled={false}
			type={btnType || 'button'}
			className={`custom-btn ${containerStyles}`}
			onClick={handleClick}
		>
			<span className={`flex-1 ${textStyle}`}>
				{title}
			</span>
			{rightIcon && (
				<div className='relative w-6 h-6'>
					<Image
						src={rightIcon}
						alt='right icon'
						fill
						className='object-contain'
					/>
				</div>
			)}
		</button>
	)
}