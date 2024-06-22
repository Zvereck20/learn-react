import styles from './styles.module.css';

export const AddListItemLayout = ({ onSubmit, value, setValue, modal, setModal }) => {
	return (
		<>
			<button
				type="button"
				onClick={() => setModal(true)}
				className={styles.button}
			>
				Создать дело
			</button>

			{modal && (
				<div className="modal">
					<button
						type="button"
						className="close"
						onClick={() => setModal(false)}
					></button>
					<form onSubmit={onSubmit} className="form">
						<input
							className="input"
							type="text"
							name="case"
							id="case"
							value={value}
							placeholder="..."
							onChange={({ target }) => setValue(target.value)}
						/>
						<button type="submit" className="submit">
							Добавить дело
						</button>
					</form>
				</div>
			)}
		</>
	);
};
