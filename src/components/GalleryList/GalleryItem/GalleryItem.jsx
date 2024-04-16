import { ImageItem, Image } from './GalleryItem.styled';
import { useState } from 'react';
import Modal from 'components/Modal/Modal';

const GalleryItem = ({ id, smallImage, largeImage, description }) => {
	const [modal, setModal] = useState(false);

	const openModal = () => {
		setModal(true);
	};

	const closeModal = e => {
		if (e.target.id === 'overlay' || e.key === 'escape') {
			setModal(false);
		}
	};

	return (
		<>
			<ImageItem onClick={openModal}>
				<Image src={smallImage} loading="lazy" alt={description} />
			</ImageItem>
			{modal && (
				<Modal
					largeImage={largeImage}
					tags={description}
					closeModal={closeModal}
					isOpen={modal}
				/>
			)}
		</>
	);
};

export default GalleryItem;
