import React from 'react'
import { Launch } from '../common/types'
import LaunchList from './launchList'
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';


const ListContainer = ({ page, totalPages, isLoading=false, launches=[], errorMessage=null, loadMore }: ListContainerProps) => {
    const classes = useStyles();
    const hasMoreRecords = page < totalPages
    const resultWillBeAppended = page > 1 && isLoading
    // list will be render only if data is going to be append or there is no current network request for new query
    const shouldRenderList = !isLoading || resultWillBeAppended

    if (errorMessage) {
        return (<h2 data-testid="list-container">{errorMessage}</h2>)
    }

    return (
        <div className={classes.root} data-testid="list-container">
            {shouldRenderList && <LaunchList launches={launches}/>}
            {isLoading && <CircularProgress data-testid="loader" className={classes.loadingBar} />}
            {!isLoading && hasMoreRecords && <Button className={classes.loadMoreButton} color="primary" variant="contained" onClick={loadMore}>See More</Button>}
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

const useStyles = makeStyles((theme) => ({
    root:{
        marginTop:"10px"
    },
    loadingBar:{
        marginTop: "5px"
    },
    loadMoreButton:{
        marginTop: "5px"
    }
}));

export default ListContainer