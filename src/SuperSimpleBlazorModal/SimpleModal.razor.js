export function showModal(id) {
	const modal = document.getElementById(id);
	modal.showModal();
}

export function closeModal(id) {
	const modal = document.getElementById(id);
	modal.close();
}