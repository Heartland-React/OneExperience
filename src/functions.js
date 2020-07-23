export const createSelector = (name) => {
	return name
		.replace(/[^a-zA-Z0-9\s]+/g, "")
		.trim()
		.replace(/\s+/g, "-")
		.toLowerCase();
};
