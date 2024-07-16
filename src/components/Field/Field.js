import { fieldsStore } from '../../store/fields-store';
import styles from './field.module.css';

export const Field = ({ cellClick }) => {
	const fields = fieldsStore.getState();

	return (
		<div className={styles.fieldList}>
			{fields.map((f, index) => {
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
