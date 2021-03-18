import { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import styles from './style.module.scss';
import Card from '../../components/Card';
import SearchInput from '../../components/SearchInput';
import { DataService } from '../../services/DataService';
import Paginator from '../../components/Paginator';
import { COUNT_PER_PAGE } from '../../common/constants';

const Home = () => {
  const [result, setResult] = useState<any[]>([])
  const [list, setList] = useState<any[]>([])
  const [page, setPage] = useState(0)
  const [noPages, setNoPages] = useState(0)
  const [showPagination, setshowPagination] = useState(false)
  useEffect(() => {
    fetchData()
  }, [])
  useEffect(() => {
    setNoPages(
      Math.ceil(result.length / COUNT_PER_PAGE)
    )
  }, [result])
  const fetchData = async () => {
    const data = await DataService.getData()
    data && setResult(data)
    data && setList(data.slice(0,COUNT_PER_PAGE))
    data && setshowPagination(true)
  }
  const onSearch = (e:React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    const data = result.filter(d=>{
      if (d.name
          .replace(/\s/g,'')
            .toLowerCase()
              .indexOf(
                value.toLowerCase()
                  .replace(/\s/g,'')
              ) > -1
            ) return true
      return false
    })
    setList(data)
  }
  const onNextPage = () => {
    if (page+1<noPages){
      const newPage = page+1
      const start = newPage*COUNT_PER_PAGE
      const end = start + COUNT_PER_PAGE
      setList(result.slice(start,end))
      setPage(newPage)
    }
  }
  const onPreviousPage = () => {
    if (page>=1){
      const prevPage = page-1
      const start = prevPage*COUNT_PER_PAGE
      const end = page*COUNT_PER_PAGE
      setList(result.slice(start,end))
      setPage(prevPage)
    }
  }
  const onPageClick = (val:number) => {
    const start = val*COUNT_PER_PAGE
    const end = (val+1)*COUNT_PER_PAGE
    setList(result.slice(start,end))
    setPage(val)
  }
  return (
    <div className={styles['container']}>
      <div className={styles['input-container']}>
        <SearchInput onChange={onSearch} placeholder='Search Launch' />
      </div>
      <div className={styles['results']}>
        {
          list.map(d=><Card
            key={uuid()}
            name={d.name}
            coresSuccess={d.cores[0].landing_success}
            uri={d.links.patch.small}
            date={d.date_utc}
          />)
        }
      </div>
      <div className={styles['footer']}>
        {showPagination&&<Paginator 
          count={COUNT_PER_PAGE}
          page={page}
          onNext={onNextPage}
          onPrevious={onPreviousPage}
          pages={noPages}
          onPageClick={onPageClick}
        />}
      </div>
    </div>
  );
}

export default Home;
