import PropTypes from 'prop-types';
import { FieldLayout } from './FieldLayout';

export const Field = ({ field, cellClick }) => {
	return <FieldLayout field={field} cellClick={cellClick} />;
};

Field.propTypes = {
	field: PropTypes.array,
};
