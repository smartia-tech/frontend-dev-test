import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import TeslaCard from "../components/TeslaCard";
import debounce from "../utils/debounce";
// import JSON from "../past_launches.json";

export default function Home() {
	const [initialJson, setInitialJson] = useState([]);
	const [rocketList, setRocketList] = useState([]);

	useEffect(() => {
		fetch("https://api.spacexdata.com/v4/launches/past")
			.then((res) => res.json())
			.then((body) => {
				setInitialJson(body);
				setRocketList(body);
			});
		return () => setInitialJson([]);
	}, []);
	const handleSearch = debounce((value) => {
		if (value && value !== "") {
			const filteredList = initialJson.filter((item) =>
				item.name.toLowerCase().includes(value.toLowerCase())
			);
			if (filteredList.length > 0) {
				setRocketList(filteredList);
			} else {
				console.log("no result found");
			}
		} else {
			setRocketList(initialJson);
		}
	}, 250);

	return (
		<>
			<Navbar handleSearch={handleSearch} />
			{rocketList && rocketList.length > 0 ? (
				<div className="p-5">
          <p className="text-5xl font-bold mb-10 leading-normal">Recent Spacex launches... 🚀</p>
					<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 grid-rows-3 gap-10">
						{rocketList.map((item) => (
							<TeslaCard key={item.id} data={item} />
						))}
					</div>
				</div>
			) : (
				<div className="h-screen w-screen flex items-center justify-center">
					<div class="lds-dual-ring"></div>
				</div>
			)}
		</>
	);
}
