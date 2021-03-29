import { Card, Tag } from 'antd';
import React from 'react';
import Image from "./Image";
import { LaunchDetails } from './interfaces/state.interface';

interface CardProps {
    launch: LaunchDetails
}

class CardComponent extends React.Component<CardProps, {}> {

    convertDate(dateString: string) {
        let date = new Date(dateString);
        return date.toDateString();
    }

    coreStatus(cores: Array<{landing_success: boolean}>) {
        let successCount: number  = 0;
        let failureCount: number = 0;
        if(cores?.length === 0) {
            return (
                <Tag color="blue">Not known</Tag>
            )
        } else {
            cores?.forEach((core) => {
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

    render(){
        return (
            <Card
                className="p-3"
                hoverable
                style={{ width: 240 }}
                cover={<Image source={this.props.launch?.links?.patch?.small} altText="spacex image" />}
            >
                <p className="launch-name m-0">{this.props.launch?.name}</p>
                <small className="font-italice">Launched on </small>
                <small className="font-italice launch-date">{this.convertDate(this.props.launch?.date_local)}</small>
                <p className="m-0 pt-3">
                    {
                        this.coreStatus(this.props.launch?.cores)
                    }
                </p>
            </Card>
        );
    }
}

export default CardComponent;