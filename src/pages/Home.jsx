import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import TeslaCard from "../components/TeslaCard";
import debounce from "../utils/debounce";
import Pagination from "react-js-pagination";

export default function Home() {
	const [initialJson, setInitialJson] = useState([]);
	const [rocketList, setRocketList] = useState([]);
	const [activePage, setActivePage] = useState(1);
	const ref = React.useRef(null);

	useEffect(() => {
		fetch("https://api.spacexdata.com/v4/launches/past")
			.then((res) => res.json())
			.then((body) => {
				setInitialJson(body);
				setRocketList(body.slice(0, 12));
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
				ref.current.scrollIntoView({ block: "start", behavior: "smooth" });
			} else {
				console.log("no result found");
			}
		} else {
			setRocketList(initialJson);
		}
	}, 250);

	const handlePage = (page) => {
		setActivePage(page);
		console.log(rocketList);
		const slicedList = initialJson.slice(
			page > 1 ? page * 12 : page - 1,
			(page > 1 ? page * 12 : page - 1) + 12
		);
		setRocketList(slicedList);
		ref.current.scrollIntoView({ block: "start", behavior: "smooth" });
		console.log(slicedList);
	};

	return (
		<>
			<div ref={ref} />
			<Navbar handleSearch={handleSearch} />
			{rocketList && rocketList.length > 0 ? (
				<>
					<div className="p-5">
						<div className="page mb-5 md:mb-10 flex flex-wrap items-center justify-between">
							<p className="text-5xl font-bold leading-normal">Recent Spacex launches... 🚀</p>
							{rocketList.length > 8 && (
								<div className="flex items-center justify-center my-5 mx-auto  md:mr-10">
									<Pagination
										activePage={activePage}
										itemsCountPerPage={12}
										totalItemsCount={initialJson.length - 12}
										pageRangeDisplayed={5}
										onChange={handlePage}
									/>
								</div>
							)}
						</div>
						<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 grid-rows-3 gap-10">
							{rocketList.map((item) => (
								<TeslaCard key={item.id} data={item} />
							))}
						</div>
					</div>
				</>
			) : (
				<div className="h-screen w-screen flex items-center justify-center">
					<div className="lds-dual-ring"></div>
				</div>
			)}
		</>
	);
}
