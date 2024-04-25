import PropTypes from 'prop-types';
import styles from './information.module.css';

export const InformationLayout = ({ children }) => (
	<h2 className={styles.heading}>{children}</h2>
);

InformationLayout.propTypes = {
	children: PropTypes.string,
};
