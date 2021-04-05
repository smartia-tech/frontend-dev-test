import React, { useState, useEffect } from 'react'
import { Navbar, Button, Container } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';
import { connect } from 'react-redux'

import { fetchLaunches, nextPage, prevPage } from '../../redux/actions/lauchesActions';
import {showModal} from '../../redux/actions/modalActions';

import { InfoCard, SearchModal } from '../../components';
import './homeStyles.css'

const Home = (props) => {
  const { launches, isLoading, paginationInfo } = props;
  const [_launches, setLaunches] = useState(launches);
  const [loading, setLoading] = useState(isLoading);
  const [_paginationInfo, setpaginationInfo] = useState(paginationInfo)

  useEffect(() => {
    props.fetchLaunches()
  }, [])

  useEffect(() => {
    setLaunches(launches)
  }, [launches])

  useEffect(() => {
    setLoading(isLoading)
  }, [isLoading])

  useEffect(() => {
    setpaginationInfo(paginationInfo)
  }, [paginationInfo])

  return (
    <div>
      <Navbar bg="dark" sticky="top" variant="dark" className="py-3">
        <Container>
          <Navbar.Brand href="#home">Smartia</Navbar.Brand>
          <Button onClick={() => props.showModal('searchModal')} className="search__btn" >
            <div className="d-flex align-items-center">
              <Search color="lightgray" />
              <p className="my-0 mx-3 txt">Search</p>
            </div>
          </Button>
        </Container>
      </Navbar>

      <Container className="mt-4" style={{ marginBottom: '4rem'}}>
        <h4>Past SpaceX Launches</h4>
        <div className="card__body d-flex justify-content-center align-self-center">
          {loading && (
            <div className="d-flex justify-content-center align-self-center">
              <div className="spinner-border" style={{ width: '1.5rem', height: '1.5rem', color: '#222222' }} role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          )}

          {!loading && _launches.map((launch, index) => (
            <InfoCard key={index} launch={launch} />
          ))}
        </div>
      </Container>

      <Navbar bg="light" sticky="bottom" fixed="bottom" variant="dark" className="py-3">
        <Container>
          <div className="footer__pagination">
            <div className="d-flex align-items-center">
              <p className="my-0 mr-5">showing page {_paginationInfo.page} of {_paginationInfo.totalPages} </p>
              <button disabled={!_paginationInfo.prevPage} onClick={() => props.prevPage()} className="pagination__btn">{_paginationInfo.prevPage} Previous page</button>
              <button disabled={!_paginationInfo.nextPage} onClick={() => props.nextPage()} className="pagination__btn">Next page {_paginationInfo.nextPage}</button>
            </div>
          </div>
        </Container>
      </Navbar>

      <SearchModal _launches={_launches} />
    </div>
  )
}

const mapStateToProps = ({ launches }) => ({
  launches: launches.paginatedLauches,
  isLoading: launches.loading,
  paginationInfo: launches.paginationInfo
})

export default connect(mapStateToProps, { fetchLaunches, nextPage, prevPage, showModal })(Home)
