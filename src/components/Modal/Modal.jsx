import { Overlay, Popup } from './Modal.styled';
import React, { useEffect } from 'react';

const Modal = ({ largeImage, tags, closeModal }) => {
	useEffect(() => {
		window.addEventListener('keydown', closeModal);
		return () => window.removeEventListener('keydown', closeModal);
	}, [closeModal]);

	return (
		<Overlay id="overlay" onClick={closeModal}>
			<Popup>
				<img src={largeImage} alt={tags} />
			</Popup>
		</Overlay>
	);
};

export default Modal;
