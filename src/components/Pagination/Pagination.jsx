const Pagination = ({ handleClick }) => {
	return (
		<button
			className="block mx-auto border-2 border-indigo-800 mt-5 mb-5 py-2 px-6 rounded-xl bg-indigo-700 hover:bg-indigo-600 transition-colors duration-300 text-slate-100 font-medium"
			onClick={handleClick}
		>
			Load more
		</button>
	);
};

export default Pagination;
