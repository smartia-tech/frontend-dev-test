import React from "react";
import BG from "../spacex.svg";
import wikiIcon from '../wiki.png'
import ytIcon from '../yt.png'
import readableDate from "../utils/dateHandler";

export default function TeslaCard({ data }) {
	return (
		<div className="card bg-white shadow-md rounded flex border flex-col relative overflow-hidden">
			<img src={BG} alt="spacex logo" className="h-20 bg-image" />
			<div className="logo p-3 border-double">
				<img src={data.links.patch.small} alt={data.name} />
			</div>
			<p className="text-center mt-16 font-medium mb- text-xl">🛰️ {data.name}</p>
			<div className="p-4">
				<div className="bg-purple-300 text-purple-900 p-3 rounded">
					🕒 Launch Date -
					<span className="ml-4 font-medium text-right">{readableDate(data.date_utc)}</span>
				</div>
				<hr className="mt-5 mb-4" />
				<p className="text-left font-medium text-lg mb-3">🚀 Cores landed</p>
				<div className="grid grid-cols-3 gap-4">
					<div className="bg-gray-300 py-1 px-4 rounded text-center">
						<p className="text-gray-900">Total</p>
						<p className="font-bold text-gray-900">{data.cores.length}</p>
					</div>
					<div className="bg-green-200 py-1 px-4 rounded text-center">
						<p className="text-green-900">Success</p>
						<p className="font-bold text-green-900">
							{data.cores.filter((item) => item.landing_success).length}
						</p>
					</div>
					<div className="bg-red-200 py-1 px-4 rounded text-center">
						<p className="text-red-900">Failure</p>
						<p className="font-bold text-red-900">
							{data.cores.filter((item) => !item.landing_success).length}
						</p>
					</div>
				</div>
				<hr className="mt-5 mb-4" />
        <div className="flex items-center justify-between">
          <a target="_blank" rel="noopener noreferrer" href={data.links.article} className="cursor-pointer wiki flex items-center">
              <img className="h-7 w-7 inline-block mr-1" src={wikiIcon} alt=""/>
              Read More
          </a>
          <a  target="_blank" rel="noopener noreferrer" href={data.links.webcast}  className="cursor-pointer wiki flex items-center">
              <img className="h-7 w-7 inline-block mr-1" src={ytIcon} alt=""/>
              Watch
          </a>
        </div>
			</div>
		</div>
	);
}
