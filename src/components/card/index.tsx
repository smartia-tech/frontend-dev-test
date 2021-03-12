import React from "react";
import styled, { css } from 'styled-components';
import { Core } from "../../types/launches.types";

interface StyledProps {
    readonly status: boolean;
    readonly upcoming: boolean;
}

const CardBox = styled.div`
    width: -webkit-fill-available;
    max-width: 17rem;
    text-align: left;
    position: relative;
    background-color: rgb(255, 255, 255);
    box-shadow: rgba(195, 195, 195, 0.55) 5px 5px 10px 0px;
    border-radius: 8px;
    margin: 0.5rem 0.5rem 0.8rem;
    transition: all 0.1s ease-in-out 0s;
    
    &:hover {
        box-shadow: rgba(0, 0, 0, 0.19) 0px 5px 10px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
        transform: scale(1.04);
        cursor: pointer;
    }
`;

const Link = styled.a`
    text-decoration: none;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

const ImageContainer = styled.div`
    padding-top: 1rem;
    width: 75%;
`;

const Image = styled.img`
    width: 100%;
`;

const CardBoxContent = styled.div`
    padding: 0.5rem 1rem; 
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const CardBoxDate = styled.div`
    font-size: 12px;
    font-weight: 700;
    line-height: 24px;
    color: #000;
    margin-top: 6px;
  `;

const CardBoxTitle = styled.div`
    font-size: 1.1rem;
    font-weight: 700;
    text-align: center;
    padding: 0 1rem;
`;

const CardBoxTag = styled.div`
    margin-top: 6px;
    font-size: 12px;
    font-weight: 500;
    line-height: 24px;
    text-transform: uppercase;
    
    width: max-content;
    padding: 0 6px;
    border-radius: 4px;
    margin-bottom: 6px;

    ${(props: StyledProps) => props.status ? css`
        background-color: #3cb371;
        color: #fff;
    ` : css`
        background-color: #ffe6f2;
        color: #f23f2d;
    `}
    
    ${(props: StyledProps) => props.upcoming && css`
        background-color: #f8b878;
        color: #fff;
    `}
  `;

interface CardProps {
    data: {
        image: string;
        name: string;
        launchDate: string;
        cores: Core[],
        upcoming: boolean;
        webcast: string;
    }
};

const Card = (props: CardProps) => {
    const { image, name, launchDate, cores, upcoming, webcast } = props.data;
    let landingStatus = cores[0].landing_success ? true : false;

    const trimTitle = (title: string) => {
        if (title.length > 80) {
            return title.slice(0, 80) + "...";
        }

        return title;
    }

    return (
        <CardBox>
            <Link href={webcast} target="_blank">
                <ImageContainer>
                    <Image src={image ? image : 'https://via.placeholder.com/300'} alt={name} />
                </ImageContainer>
                <CardBoxContent>
                    <CardBoxTitle>{trimTitle(name)}</CardBoxTitle>
                    <CardBoxDate> {launchDate}</CardBoxDate>
                    <CardBoxTag
                        status={landingStatus}
                        upcoming={upcoming}>
                        {upcoming ? "Upcoming" : landingStatus ? "Success" : "Failure"}
                    </CardBoxTag>
                </CardBoxContent>
            </Link>
        </CardBox>
    );
};

export default Card;