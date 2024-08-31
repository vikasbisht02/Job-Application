const Input = ({ icon: Icon, ...props }) => {
	return (
		<div className='relative mb-4 md:mb-6'>
			<div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
				<Icon className='w-5 h-5 text-green-500 md:w-6 md:h-6' />
			</div>
			<input
				{...props}
				className='w-full pl-10 pr-3 py-2 md:py-3 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-500 text-white placeholder-gray-400 transition duration-200 text-sm md:text-base'
			/>
		</div>
	);
};
export default Input;
