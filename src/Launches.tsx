import axios from "axios";
import React from "react";
import { API_URL, BASE_URL } from "./constants/url.constants";
import { LaunchDetails, PastLaunches } from "./interfaces/state.interface";
import { Input, Pagination, Spin } from 'antd';
import logo from './assets/spacex.svg';
import './Launches.scss';
import * as routes from './constants/routes.json';
import CardComponent from './CardComponent';

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
            pageNumber: 1,
            isLoading: false
        }
        this.pageChange = this.pageChange.bind(this);
    }

    pageChange(page: number) {
        this.setState({
            pageNumber: page
        })
    }

    paginate(array: Array<any>) {
        if(array.length > 9) {
            return array.slice((this.state.pageNumber! - 1) * this.pageSize, this.state.pageNumber! * this.pageSize);
        } else 
            return array
    }

    search = (e: React.FormEvent<HTMLInputElement>) => {
        let value = e.currentTarget.value;
        if(value === '') {
            this.setState({
                searchResults: this.state.pastLaunches
            })
        } else {
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
            });
            this.setState({
                searchResults: search
            })
        }
    }

    componentDidMount() {
        this.setState({
            isLoading: true
        });
        axios.get(`${BASE_URL}${API_URL.PAST_LAUNCHES}`)
        .then(
            (res) => {
                this.setState({
                    searchResults: res.data,
                    pastLaunches: res.data,
                    pageNumber: 1
                });
                this.setState({isLoading : false});
            }
        )
        .catch(
            (err) => {
                this.setState({isLoading : false});
                console.log(err);
            }
        )
    }

    componentDidUpdate() {
        window.scrollTo(0, 0);
    }

    render() {
        return(
            <div className="sx-launches container p-5 h-100">
                {
                    this.state.isLoading ? (
                        <Spin className="spinner" />
                    ) : null
                }
                <div className="header d-flex justify-between align-center">
                    <img className="cursor-pointer" onClick={() => this.props.history.push(routes.LANDING)} src={logo} alt="logo" />
                    <Input className="search-input" placeholder="Search" onChange={this.search} allowClear />
                </div>
                <div className="row pt-5">
                {
                    this.paginate(this.state.searchResults).map(
                        (launch: LaunchDetails,i) => (
                            <div className="col-md-4 mb-5" key={i}>
                                <CardComponent launch={launch} />
                            </div>
                        )
                    )
                }
                </div>
                {
                    (this.state.searchResults.length) > 0 ? (
                        <Pagination pageSize={this.pageSize} onChange={this.pageChange} current={this.state.pageNumber} defaultCurrent={1} showSizeChanger={false} total={this.state.searchResults.length} />
                    ) : (!this.state.isLoading) ? (
                        (
                            <div className="d-flex justify-center">
                                <p className="white-text">No results found</p>
                            </div>    
                        )
                    ) : null
                }
            </div>
        )
    }
}

export default LaunchesComponent;