import PropTypes from 'prop-types';
import styles from './field.module.css';

export const FieldLayout = ({ field, cellClick }) => {
	return (
		<div className={styles.fieldList}>
			{field.map((f, index) => {
				return (
					<button
						key={index}
						className={styles.fieldItem}
						onClick={() => cellClick(index)}
					>
						{f}
					</button>
				);
			})}
		</div>
	);
};

FieldLayout.propTypes = {
	field: PropTypes.array,
	cellClick: PropTypes.func,
};
