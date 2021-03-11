import React from 'react';

export default class SearchUI extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      search: '',
      searchRegex: null,
      searchRegexError: null,
      searchType: 'exact',
      searchTypes: ['exact', 'fuzzy', 'regex'],

      dateStart: new Date('2002'),
      dateEnd: new Date('2100')
    }
  }

  recompileSearchRegex(text) {
    try {
      this.setState({
        searchRegex: new RegExp(text, 'i'),
        searchRegexError: null
      });
    } catch(ex) {
      this.setState({
        searchRegex: null,
        searchRegexError: ex
      });
    }
  }

  setSearchText(evt) {
    this.setState({ search: evt.target.value });
    this.recompileSearchRegex(evt.target.value);
    setTimeout(() => this.props.setFilter(text => this.filter(text)));
  }

  setSearchType(evtOrType) {
    this.setState({
      searchType: typeof evtOrType == 'object'
        ? evtOrType.target.value
        : evtOrType
    });
    setTimeout(() => this.props.setFilter(text => this.filter(text)));
  }

  setStartDate(evt) {
    this.setState({ dateStart: evt.target.valueAsDate });
    setTimeout(() => this.props.setFilter(launch => this.filter(launch)));
  }

  setEndDate(evt) {
    this.setState({ dateEnd: evt.target.valueAsDate });
    setTimeout(() => this.props.setFilter(launch => this.filter(launch)));
  }

  filter(launch) {
    let date = new Date(launch.date_utc);
    if (date < this.state.dateStart || date > this.state.dateEnd)
      return false;

    let text = launch.name.toLowerCase();
    switch (this.state.searchType) {
      case 'exact':
        return text.indexOf(this.state.search.toLowerCase()) !== -1;

      case 'fuzzy':
        let currentIndex = 0;
        let charsLeft = [...this.state.search.toLowerCase()].reverse();
        while (charsLeft.length > 0) {
          let nextIndex = text.indexOf(
            charsLeft[charsLeft.length-1],
            currentIndex
          );
          if (nextIndex === -1) return false;
          currentIndex = nextIndex+1;
          charsLeft.pop();
        }
        return true;

      case 'regex':
        if (!this.state.searchRegex) return false;
        return this.state.searchRegex.test(text);

      default:
        throw new Error('Unsupported search type: ' + this.state.searchType);
    }
  }

  render() {
    return (
      <div>
        <div className="input-group">
          <label htmlFor="search">Search text</label>
          <input
            name="search"
            type="text"
            value={this.state.search}
            onChange={evt => this.setSearchText(evt)}
          />
          {
            this.state.searchRegexError && (this.state.searchType === 'regex')
              ? <div className="error">
                { this.state.searchRegexError.toString() }
              </div>
              : null
          }
        </div>

        {this.state.searchTypes.map(type => {
          return <div className="input-group checkbox" key={type}>
            <input
              type="radio"
              name={type}
              value={type}
              checked={this.state.searchType === type}
              onChange={evt => this.setSearchType(evt)}
            />
            <label htmlFor={type} onClick={() => this.setSearchType(type)}>
              {type}
            </label>
          </div>
        })}


        <div className="input-group">
          <label htmlFor="date-start">Start date</label>
          <input
            name="date-start"
            type="date"
            value={this.state.dateStart.toISOString().split('T')[0]}
            onChange={evt => this.setStartDate(evt)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="date-start">End date</label>
          <input
            name="date-start"
            type="date"
            value={this.state.dateEnd.toISOString().split('T')[0]}
            onChange={evt => this.setEndDate(evt)}
          />
        </div>
      </div>
    );
  }
}
