export const SerachLayout = ({
	modal,
	setModal,
	onSubmit,
	value,
	setValue,
	cancel,
	onCancel,
}) => {
	return (
		<>
			{!cancel ? (
				<button type="button" onClick={() => setModal(true)} className="button">
					Поиск
				</button>
			) : (
				<button type="button" onClick={onCancel} className="button">
					Отменить
				</button>
			)}

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
							type="search"
							name="search"
							id="search"
							name="loo"
							id="loo"
							value={value}
							placeholder="..."
							onChange={({ target }) => setValue(target.value)}
						/>
						<button type="submit" className="submit">
							Найти
						</button>
					</form>
				</div>
			)}
		</>
	);
};
