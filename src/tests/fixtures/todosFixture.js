import moment from 'moment'

const todos = [
    {
        id: '1',
        title: 'First todo',
        details: 'These are first details',
        priority: 0,
        createdAt: moment(0).add(3, 'days').valueOf()
    },
    {
        id: '2',
        title: 'Second todo',
        details: 'These are first details',
        priority: 2,
        createdAt: moment(0).subtract(3, 'days').valueOf()
    },
    {
        id: '3',
        title: 'Third',
        details: 'These are first details',
        priority: 1,
        createdAt: moment(0).add(5, 'days').valueOf()
    },
]

export default todos