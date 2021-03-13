import React from "react";
import TeslaCard from "../components/TeslaCard";
import JSON from "../past_launches.json";

export default function Home() {
	console.log(JSON);

	return (
		<div className="p-5">
			<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 grid-rows-3 gap-10">
				{JSON.map((item) => (
					<TeslaCard key={item.id} data={item} />
				))}
			</div>
		</div>
	);
}
