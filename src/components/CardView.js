import React from "react";
import styled from "styled-components";
import PaginateMethod from "../helper/paginateMethod";
import Pagination from "./Pagination";

const CardViewWrapper = styled.div`
  .card-view-container {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }

  .card-list {
    display: flex;
    width: 350px;
    align-items: left;
    padding: 20px;
    height: 400px;
    flex-direction: column;
    border: 1px solid #f0f0f0;
    box-shadow: 0px 8px 16px 0px #e0e0e0;
    margin: 20px;
    border-radius: 10px;

    img {
      height: auto;
      width: 100%;
    }

    .card-title {
      font-size: 18px;
      font-weight: 600;
    }

    .card-category {
      .success-badge {
        background-color: #259d0020;
        color: #259d00;
      }

      .failure-badge {
        background-color: #ef0f0f20;
        color: #ef0f0f;
      }
      span {
        padding: 5px 10px;
        border-radius: 5px;
      }
    }
    .card-date {
    }
    .list-content {
      display: flex;
      flex-direction: column;
      align-items: left;
    }
  }

  .card-pagination-container {
    display: flex;
    justify-content: center;
    margin: 20px 0;
  }
`;

const CardView = (props) => {
  const [launch, setLaunch] = React.useState([]);

  React.useEffect(() => {
    const launch = PaginateMethod(props.launch, 1);

    setLaunch(launch);
  }, [props.launch]);

  const handlePagination = (currentIndex) => {
    const launch = PaginateMethod(props.launch, currentIndex);

    setLaunch(launch);
  };

  return (
    <CardViewWrapper className={props.className}>
      {launch.length > 0 ? (
      <div className="card-view-container">
        {launch.map((list, index) => (
          <div
            className="card-list"
            key={`${list.launchDate}-${index}`}
            role="listitem"
          >
            <img src={list.image} alt="music-img" />
            <div className="list-content">
              <p className="card-title">{list.name}</p>
              <p className="card-category">
                {list.cores ? (
                  <span className="success-badge">
                    All cores were successful
                  </span>
                ) : (
                  <span className="failure-badge">
                    All cores weren't successful
                  </span>
                )}
              </p>
              <p className="card-date">Launch Date: {list.launchDate}</p>
            </div>
          </div>
        ))}
      </div> ) : (
          <p data-testid="empty-box">
        No launches
      </p>
        )}
      <div className="card-pagination-container">
        <Pagination onPageChanged={handlePagination} list={props.launch} />
      </div>
    </CardViewWrapper>
  );
};

export default CardView;
