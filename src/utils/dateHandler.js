export default function readableDate(date, fallback = "") {
	const _date = new Date(date);
	if (_date.toString() === "Invalid Date") return fallback;
	return _date.toLocaleDateString("en-US", {
		day: "numeric",
		month: "short",
		year: "numeric",
	});
}
