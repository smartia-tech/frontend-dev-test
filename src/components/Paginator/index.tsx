import React from 'react'
import { ChevronLeft, ChevronRight } from 'react-feather'
import styles from './style.module.scss'
import cn from 'classnames'

interface IPaginatorProps {
  page: number;
  pages: number;
  count: number;
  onNext: () => void;
  onPrevious: () => void;
  onPageClick: (val:number) => void;
}

const Paginator: React.FC<IPaginatorProps> = ({
  page,
  count,
  pages,
  onNext,
  onPrevious,
  onPageClick,
}) => {
  const showPages = () => {
    let arr = Array(pages).fill(0)
    return arr.map((d,i)=>{
      return <span 
        onClick={()=>onPageClick(i)}
        key={i} 
        className={cn(i+1===page+1&&styles['active'])}>
        {i+1}
      </span>
    })
  }
  return (
    <div className={styles['container']}>
      <button onClick={onPrevious} className={styles['btn']}>
        <ChevronLeft />
      </button>
      {showPages()}
      <button onClick={onNext} className={styles['btn']}>
        <ChevronRight />
      </button>
    </div>
  )
}

export default Paginator
