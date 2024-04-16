import GalleryItem from './GalleryItem/GalleryItem';
import { List } from './GalleryList.styled';
const GalleryList = ({ query }) => {
	return (
		<List>
			{query.map(({ id, webformatURL, largeImageURL, tags }) => (
				<GalleryItem
					key={id}
					description={tags}
					smallImage={webformatURL}
					largeImage={largeImageURL}
				/>
			))}
		</List>
	);
};

export default GalleryList;
