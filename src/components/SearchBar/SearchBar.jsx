import { Formik } from 'formik';
import { SearchBarr, Button, Formm, Input } from './SearchBar.styled';
import { BiSearchAlt } from 'react-icons/bi';
const initialValues = {
	value: '',
};

const SearchBar = ({ onSubmit }) => {
	const handleSubmit = (values, { resetForm }) => {
		onSubmit(values);
		resetForm();
	};

	return (
		<SearchBarr className="mb-10">
			<Formik onSubmit={handleSubmit} initialValues={initialValues}>
				<Formm>
					<Input
						placeholder="Image"
						className="text-slate-950"
						type="text"
						name="value"
					/>
					<Button>
						<BiSearchAlt />
					</Button>
				</Formm>
			</Formik>
		</SearchBarr>
	);
};

export default SearchBar;
