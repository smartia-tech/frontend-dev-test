import React from 'react'
import { Launch } from '../common/types'
import LaunchList from './launchList'

const ListContainer = ({ page, totalPages, isLoading, launches, errorMessage, loadMore }: ListContainerProps) => {
    const hasMoreRecords = page < totalPages
    const resultWillBeAppended = page > 1 && isLoading
    // list will be render only if data is going to be append or there is no current network request for new query
    const shouldRenderList = !isLoading || resultWillBeAppended

    if (errorMessage) {
        return (<h2>{errorMessage}</h2>)
    }

    return (
        <div>
            {shouldRenderList && <LaunchList launches={launches}/>}
            {isLoading && <h5>is Loading...</h5>}
            {!isLoading && hasMoreRecords && <button onClick={loadMore}>SeeMore</button>}
        </div>
    )
}

type ListContainerProps = {
    page: number,
    totalPages: number,
    isLoading: boolean,
    launches: Launch[],
    errorMessage: string | null,
    loadMore: () => void
}

export default ListContainer