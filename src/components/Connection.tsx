import React from "react";

export interface ConnectionProps {
	startTime: string;
	title: string;
	description: string;
}

const Connection: React.FC<ConnectionProps> = ({
	startTime,
	description,
	title,
}) => {
	const time = new Date(startTime);

	const formatNumber = (a: number): string =>
		a < 10 ? "0" + a : a.toString();

	const formatedTime =
		formatNumber(time.getHours()) + ":" + formatNumber(time.getMinutes());

	return (
		<>
			<h3>
				{formatedTime} {title}
			</h3>
			<p>{description}</p>
		</>
	);
};

export default Connection;
