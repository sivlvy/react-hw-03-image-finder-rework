import { ThreeDots } from 'react-loader-spinner';

const Loader = () => {
	return (
		<div className="flex justify-center">
			<ThreeDots
				height={80}
				width={80}
				radius={8}
				color="#3f51b5"
				ariaLabel="three-dots-loading"
				wrapperStyle={{ margin: '0 auto' }}
				wrapperClassName=""
				visible={true}
			/>
		</div>
	);
};

export default Loader;
