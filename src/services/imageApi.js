import axios from 'axios';

const API_KEY = '40870479-78b31d6ebe4b8efc40d0da54d';

axios.defaults.baseURL = 'https://pixabay.com';

const getImages = async (value, currentPage = 1) => {
	const params = new URLSearchParams({
		q: value,
		page: currentPage,
		key: API_KEY,
		image_type: 'photo',
		orientation: 'horizontal',
		per_page: 12,
	});

	const { data } = await axios.get('/api/', { params });
	return data;
};

export default getImages;
