import axios from 'axios'
import { PaginatedResponse } from '../common/types'
import * as config from './config'

export const getpastLaunches = (page: number = 1): Promise<PaginatedResponse> => {

    const query = {
        upcoming: false
    }
    const options = { ...defaultOptions, page }
    //using query route instead of '/past' becuase it supports pagination
    return axios.post(`${config.BASE_URL}/launches/query`, { query, options }).then(res => res.data)
}

export const searchLaunchesByName = (search: string, page: number = 1): Promise<PaginatedResponse> => {
    const query = {
        //assuming the requirement is to search for past launches only
        upcoming: false,
        name: {
            "$regex": `^${search}`,
            "$options": "i"
        }
    }

    const options = { ...defaultOptions, page }

    return axios.post(`${config.BASE_URL}/launches/query`, { query, options }).then(res => res.data)

}

const defaultFields = {
    'name': 1,
    'date_utc': 1,
    'links.patch.small': 1,
    'cores.landing_success': 1
}

const defaultOptions = {
    select: defaultFields,
    sort: {
        date_utc: "desc"
    },
    limit: 5
}