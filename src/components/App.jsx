import Container from './Container/Container';
import SearchBar from './SearchBar/SearchBar';
import GalleryList from './GalleryList/GalleryList';
import getImages from 'services/imageApi';
import Loader from './Loader/Loader';
import Pagination from './Pagination/Pagination';
import { useState, useEffect } from 'react';
import { Notify } from 'notiflix';

const STATUS = {
	IDLE: 'idle',
	REJECTED: 'rejected',
	PENDING: 'pending',
	RESOLVED: 'resolved',
};

export const App = () => {
	const [query, setQuery] = useState('');
	const [images, setImages] = useState([]);
	const [page, setPage] = useState(1);
	const [status, setStatus] = useState(STATUS.IDLE);

	useEffect(() => {
		const fetchData = async () => {
			setStatus(STATUS.PENDING);

			try {
				const { totalHits, hits } = await getImages(query, page);
				setImages([...images, ...hits]);
				setStatus(
					Math.ceil(totalHits / 12) <= page ? STATUS.PENDING : STATUS.RESOLVED
				);
			} catch {
				setImages([]);
				setStatus(STATUS.REJECTED);
				Notify.failure('Cant find your image');
			}
		};
		if (query) {
			fetchData();
		}
	}, [query, page]);

	const handleSubmit = async ({ value }) => {
		if (value === '') {
			Notify.failure('Please enter your search word');
			return;
		}
		if (value === query) {
			Notify.info('You have to write new keyword... Try again!');
			return;
		}
		if (images.length === 0) {
			Notify.info('Sorry cant find images');
		}
		setQuery(value.trim());
		setImages([]);
		setPage(1);
		setStatus(STATUS.PENDING);
	};

	const updatePage = async () => {
		setPage(prevPage => page + 1);
		setStatus(STATUS.PENDING);
	};

	return (
		<>
			<SearchBar onSubmit={handleSubmit} />
			<GalleryList query={images} />
			{status === STATUS.RESOLVED && <Pagination handleClick={updatePage} />}
			{status === STATUS.PENDING && <Loader />}
		</>
	);
};
