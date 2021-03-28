import axios from "axios";
import React from "react";
import { API_URL, BASE_URL } from "./constants/url.constants";
import { LaunchDetails, PastLaunches } from "./interfaces/state.interface";
import { Card, Input, Pagination, Tag } from 'antd';
import logo from './assets/spacex.svg';
import './Launches.scss';
import * as routes from './constants/routes.json';

interface LaunchesProps {
    history: any
}

class LaunchesComponent extends React.Component<LaunchesProps, PastLaunches> {

    pageSize = 9; 

    constructor(props: LaunchesProps) {
        super(props);
        this.state = {
            searchResults: [],
            pastLaunches: [],
            pageNumber: 1
        }
        this.pageChange = this.pageChange.bind(this);
        this.coreStatus = this.coreStatus.bind(this);
    }

    pageChange(page: number) {
        this.setState({
            pageNumber: page
        })
    }

    convertDate(dateString: string) {
        let date = new Date(dateString);
        return date.toDateString();
    }

    paginate(array: Array<any>) {
        return array.slice((this.state.pageNumber! - 1) * this.pageSize, this.state.pageNumber! * this.pageSize);
    }

    search = (e: React.FormEvent<HTMLInputElement>) => {
        let value = e.currentTarget.value;
        console.log(value);
        let search = this.state.pastLaunches
        .filter(
            launch => {
                return launch.name.toLowerCase().includes(value.toLowerCase())
            })
        .sort((a,b) => {
            if(a.name.toLowerCase().indexOf(value.toLowerCase()) > b.name.toLowerCase().indexOf(value.toLowerCase())) {
                return 1;
            } else if (a.name.toLowerCase().indexOf(value.toLowerCase()) < b.name.toLowerCase().indexOf(value.toLowerCase())) {
                return -1;
            } else {
                if(a.name > b.name)
                    return 1;
                else
                    return -1;
            }
        })
        this.setState({
            searchResults: search
        })
    }

    coreStatus(cores: Array<{landing_success: boolean}>) {
        let successCount: number  = 0;
        let failureCount: number = 0;
        if(cores.length === 0) {
            return (
                <Tag color="blue">Not known</Tag>
            )
        } else {
            cores.forEach((core) => {
                if(core.landing_success === true) {
                    successCount++
                } else if (core.landing_success === false) {
                    failureCount++
                }
            })
            if(successCount > failureCount) {
                return(
                    <Tag color="green">Success</Tag>
                )
            } else if(successCount < failureCount) {
                return(
                    <Tag color="red">Failed</Tag>
                )
            } else if(successCount === failureCount) {
                return(
                    <Tag color="blue">Not known</Tag>
                )
            }
        }
    }

    componentDidMount() {
        axios.get(`${BASE_URL}${API_URL.PAST_LAUNCHES}`)
        .then(
            (res) => {
                this.setState({
                    searchResults: res.data,
                    pastLaunches: res.data,
                    pageNumber: 1
                })
            }
        )
        .catch()
    }

    render() {
        return(
            <div className="sx-launches container p-5 h-100">
                <div className="header d-flex justify-between align-center">
                    <img className="cursor-pointer" onClick={() => this.props.history.push(routes.LANDING)} src={logo} alt="logo" />
                    <Input className="search-input" placeholder="Search" onChange={this.search} allowClear />
                </div>
                <div className="row pt-5">
                {
                    this.paginate(this.state.searchResults).map(
                        (launch: LaunchDetails,i) => (
                            <div className="col-md-4 mb-5" key={i}>
                                <Card
                                    className="p-3"
                                    hoverable
                                    style={{ width: 240 }}
                                    cover={<img alt="example" src={launch?.links?.patch?.small} />}
                                >
                                    <p className="m-0">{launch.name}</p>
                                    <small className="font-italice">Launched on </small>
                                    <small className="font-italice">{this.convertDate(launch.date_local)}</small>
                                    <p className="m-0 pt-3">
                                        {
                                            this.coreStatus(launch.cores)
                                        }
                                    </p>
                                </Card>
                            </div>
                        )
                    )
                }
                </div>
                {
                    this.state.searchResults.length > 0 ? (
                        <Pagination pageSize={this.pageSize} onChange={this.pageChange} current={this.state.pageNumber} defaultCurrent={1} showSizeChanger={false} total={this.state.searchResults.length} />
                    ) : (
                        <div className="d-flex justify-center">
                            <p className="white-text">No results found</p>
                        </div>    
                    )
                }
            </div>
        )
    }
}

export default LaunchesComponent;