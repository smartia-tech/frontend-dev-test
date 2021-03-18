import React, { InputHTMLAttributes } from 'react'
import styles from './style.module.scss'

interface ISearchInput extends InputHTMLAttributes<HTMLInputElement> {
}

const SearchInput: React.FC<ISearchInput> = (props) => {
  return (
    <div className={styles['container']}>
      <input {...props} />
    </div>
  )
}

export default SearchInput
