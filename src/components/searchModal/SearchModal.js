import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Modal from 'react-modal';
import { Search } from 'react-bootstrap-icons';
import { Navbar } from 'react-bootstrap';

import { hideModal } from '../../redux/actions/modalActions'
import {searchLaunches} from '../../redux/actions/lauchesActions';

import './searchModalStyles.css';
import InfoCard from '../infoCard/InfoCard';

const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.30)',
    zIndex: 1000,
  },
  content: {
    top: '20%',
    left: '32%',
    width: 600,
    height: 600,
    border: 'transparent',
    background: '#fcfbfb',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '5px',
    outline: 'none',
    padding: '0px',
  },
};

const SearchModal = (props) => {
  const { isVisible, searchResults } = props;
  const [modalState, setModalState] = useState(isVisible);
  const [search, setSearch] = useState('');
  const [results, setResults] = useState(searchResults);

  useEffect(() => {
    setModalState(isVisible)
  }, [isVisible]);

  useEffect(() => {
    setResults(searchResults)
  }, [searchResults]);

  const onChange =(e) => {
    let text = e.target.value;

    setSearch(text)
    props.searchLaunches(text)
  }

  return (
    <Modal
      isOpen={modalState}
      closeTimeoutMS={200}
      style={customStyles}
      contentLabel="Example Modal"
      ariaHideApp={false}
      onRequestClose={() => props.hideModal('searchModal')}
      shouldCloseOnOverlayClick={true}
    >
      <div className="searchModal__wrapper">
        <Navbar bg="dark" sticky="top" fixed="top" variant="dark" className="py-3">
          <Search color="lightgray" fontSize={25} />
          <input autoFocus className="input" type="text" value={search} onChange={(e) => onChange(e)} placeholder="Search" />
        </Navbar>

        <div className="searchModal__cards">
          {results.map((launch, index) => (
            <InfoCard key={index} launch={launch} />
          ))}
        </div>
      </div>
    </Modal>
  )
}

const mapStateToProps = ({ modals, launches }) => ({
  isVisible: modals.searchModal,
  searchResults: launches.searchResults
})

export default connect(mapStateToProps, { hideModal, searchLaunches })(SearchModal)
