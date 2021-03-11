import React from "react";
import { Dropdown } from "semantic-ui-react";

const launchTimelines = [
	{
		key: "All",
		text: "All Launches",
		value: "All",
	},
	{
		key: "Upcoming",
		text: "Upcoming Launches",
		value: "Upcoming",
	},
	{
		key: "Past",
		text: "Past Launches",
		value: "Past",
	},
];

function FilterByTimeline({ timeline, setTimeline,resetValue }) {
	const handleChange = (e, { value }) => {
		setTimeline(value);
		resetValue();
	
	};
	return (
		<div className="timeline-filter">
			<p className="filter-name-label text-align-center">
				Launch Timeline
			</p>
			<Dropdown
				fluid
				selection
				value={timeline}
				options={launchTimelines}
				onChange={handleChange}
			/>
		</div>
	);
}

export default FilterByTimeline;
