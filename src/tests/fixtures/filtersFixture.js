import moment from 'moment'

export const filtersDefault = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

export const filtersAlt = {
    text: 'now',
    sortBy: 'priority',
    startDate: moment(0),
    endDate: moment(0).add(3, 'days')
}