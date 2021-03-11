import React from "react";
import { Button } from "semantic-ui-react";
import moment from "moment";

const getStatusLabel = (launch_success,upcoming_status) => {
	if (launch_success === null && upcoming_status) {
		return (
			<Button size="mini" color="orange">
				Upcoming
			</Button>
		);
	} else if (launch_success) {
		return (
			<Button positive size="mini" >
				Successful
			</Button>
		);
	} else {
		return (
			<Button negative size="mini">
				Failed
			</Button>
		);
	}
};

const getFormattedDate = (utcDate) => {
	return moment(utcDate).utc().format("DD MMMM YYYY HH:mm");
};


const generateSearchTerm = (
	timeline,
	startDate,
	endDate,
	status,
	activePage
) => {
	let searchTerm = [];
	if (startDate) {
		startDate = moment(startDate).format("YYYY-MM-DD");
		searchTerm.push(`start=${startDate}`);
		if (!endDate) {
			searchTerm.push(`end=${moment().format("YYYY-MM-DD")}`);
		}
	}
	if (endDate) {
		endDate = moment(endDate).format("YYYY-MM-DD");
		searchTerm.push(`end=${endDate}`);
		if (!startDate) {
			searchTerm.push(`start=2002-05-05&`);
		}
	}
	if (activePage) {
		const limit = 10;
		searchTerm.push(`limit=${limit}`);
		searchTerm.push(`offset=${(activePage - 1) * limit}`);
		if (status === true) {
			
			searchTerm.pop();
			searchTerm.push(`offset=${(activePage - 1) * limit}`);
			searchTerm.push(`launch_success=${status}`);
		 

		} else if (status === false) {
		
			searchTerm.pop();
			searchTerm.push(`offset=${(activePage - 1) * limit}`);
			searchTerm.push(`launch_success=false`);
			
		
		}
		
	}
	
	searchTerm = searchTerm.join("&");
	if (timeline === "All") {
			return `/?${searchTerm}`;
	} else {
		
				return `/${timeline}?${searchTerm}`;
	}
	

};

const getParamsFromUrl = (params) => {
	var urlStatus;
	var urlStartDate;
	var urlEndDate;
	let mainTerm = params.substring(1);
	let arr = mainTerm.split("&");
	if (arr.length === 5) {
		urlStartDate = arr[0].split("=")[1];
		urlEndDate = arr[1].split("=")[1];
		urlStatus = getUrlStatus(arr[4]);
		return [urlStartDate, urlEndDate, urlStatus];
	} 
	else if (arr.length === 4) {
		urlStartDate = arr[0].split("=")[1];
		urlEndDate = arr[1].split("=")[1];
		return [urlStartDate, urlEndDate];
	} else if (arr.length === 3) {
		urlStatus = getUrlStatus(arr[2]);
		return [urlStatus];
	} else if (arr.length === 2) {
		return arr.join("&");
	}
};
const getUrlStatus = (statusString) => {
	var statusToBoolean;
	if (statusString.split("=")[1] === "false") {
		statusToBoolean = false;
	} else if (statusString.split("=")[1] === "true") {
		statusToBoolean = true;
	}
	return Boolean(statusToBoolean);
};

export {
	getStatusLabel,
	getFormattedDate,
	generateSearchTerm,
	getParamsFromUrl,
};
