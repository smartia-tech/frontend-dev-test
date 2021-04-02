import logo from './logo.svg';
import './App.css';
import Table from './Table/Table'
import {React, useEffect, useState } from 'react';
import SearchBar from './SearchBar/SearchBar';

function App() {
  const [data, setData] = useState([]);
  var [nameArray, setNameArray] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [paginationFlag, setPaginationFlag] = useState(true)

  const filterOp = (str) => {
    let indexes = [];
    if (str == '') {
      indexes = pagination(pageNo);
      setPaginationFlag(true)
    } else {
      nameArray.forEach((element, index) => {
        if (element.toLowerCase().includes(str.toLowerCase())) {
          indexes.push(data[index])
        }
      });
      setPaginationFlag(false)
    }
    setTableData([...indexes])
  }
  const performPagination = (flag) => {
    let res;
    if (flag == 1) {
       res = pagination(pageNo + 1);
       if(res.length === 0) {
         alert('This is last page. No Data Ahead');
         return false;
       }
       setPageNo(pageNo => pageNo +1);
    } else if (flag == -1) {
       res = pagination(pageNo - 1);
       if(res.length === 0) {
        alert('You are at page 1. No prvious data to show.');
        return false;
      }
       setPageNo(pageNo => pageNo - 1);
    }
    setTableData(res)
  }
  const pagination = (page_number, page_size = 5) => {
    return data.slice((page_number - 1) * page_size, page_number * page_size);
  }
  const buttons = paginationFlag && 
  (
    <div>
  <button type="button" onClick={() => performPagination(-1)}>Previous</button>
  <button type="button" onClick={() => performPagination(1)}>Next</button>
  </div>
  )

  useEffect(() => {
    fetch('https://api.spacexdata.com/v4/launches/latest')
    // fetch('past_launches.json')
      .then(response => response.json())
      .then(data => {
        if (data instanceof Array && data.length > 0) {
          const tempArr = [];
          const tempNameArr = [];
          data.forEach(element => {
            const temp = {
              'filghtPatch': element.links.patch.small,
              'name': element.name,
              'launchDate': element.date_utc,
              'success': element.cores[0].landing_success
            }
            tempArr.push(temp);
            tempNameArr.push(temp.name)
          }
          );
          tempNameArr.sort();
          tempArr.sort((x, y) => {
            if (x.name > y.name) {
              return 1
            } else if (x.name < y.name) {
              return -1;
            } else {
              return 0;
            }
          });
          setData([...tempArr]);
          setNameArray([...tempNameArr])
          if (tempArr.length > 5) {
            setTableData([...tempArr.splice(0, 5)])
          } else {
            setTableData([...tempArr])
          }
        } else if (data instanceof Object && data) {
          const temp = {
            'filghtPatch': data.links.patch.small,
            'name': data.name,
            'launchDate': data.date_utc,
            'success': data.cores.landing_success
          }
          setData([{...temp}]);
          setNameArray([temp.name])
          setTableData([{...temp}])
        }
      });
  }, [])

  return (
    <div className="App">
      <SearchBar filterOp={filterOp} />
      <Table data={tableData} />
      {buttons}
    </div>
  );
}

export default App;
