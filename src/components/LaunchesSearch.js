import React from 'react';
import PropTypes from 'prop-types';

function LaunchesSearch({ handlePeriodChange, handleSearchChange, period, searchQuery }) {
  return (
    <div className="content__actions">
      <input
        className="content__actions__input"
        type="text"
        name="launch"
        id="launch"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Type the Launch name..."
      />
      <h3 className="content__actions__select__title">
        Select a period, the default is set to Past
      </h3>
      <select
        className="content__actions__select"
        name="period"
        id="period"
        onChange={handlePeriodChange}
        value={period}
      >
        <option value="past">Past</option>
        <option value="upcoming">Upcoming</option>
        <option value="latest">Latest</option>
      </select>
    </div>
  );
}

LaunchesSearch.propTypes = {
  handlePeriodChange: PropTypes.func.isRequired,
  handleSearchChange: PropTypes.func.isRequired,
  period: PropTypes.string.isRequired,
  searchQuery: PropTypes.string.isRequired,
};

export default LaunchesSearch;
