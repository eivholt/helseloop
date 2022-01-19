export const formatNumber = (a: number): string =>
	a < 10 ? "0" + a : a.toString();

const norwegianDays = [
	"Søndag",
	"Mandag",
	"Tirsdag",
	"Onsdag",
	"Torsdag",
	"Fredag",
	"Lørdag",
];

export const formatedTime = (time: Date) =>
	formatNumber(time.getHours()) + ":" + formatNumber(time.getMinutes());

export const getNorwegianDateString = (date: Date) => {
	let day = norwegianDays[date.getDay()];
	let dateString = [date.getDate(), date.getMonth(), date.getFullYear()]
		.map((a) => formatNumber(a))
		.join(".");
	return [day, dateString, formatedTime(date)].join(" ");
};
