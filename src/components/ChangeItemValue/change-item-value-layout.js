import styles from './styles.module.css';

export const ChangeItemValueLayout = ({ modal, setModal, onSubmit, value, setValue }) => {
	return (
		<>
			<button
				type="button"
				className={styles.button}
				onClick={() => setModal(true)}
			>
				Изменить
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
							name="newValue"
							id="newValue"
							value={value}
							placeholder="..."
							onChange={({ target }) => setValue(target.value)}
						/>
						<button type="submit" className="submit">
							Сохранить
						</button>
					</form>
				</div>
			)}
		</>
	);
};
