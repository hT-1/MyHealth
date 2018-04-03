import * as types from "../Constants/actionTypes.js";
import * as actions from "../Actions/actionCreators";
import moment from 'moment';

function getMonth(mo) {
    switch (mo) {
        case 0:
            return 'January';
        case 1:
            return 'February';
        case 2:
            return 'March';
        case 3:
            return 'April';
        case 4:
            return 'May';
        case 5:
            return 'June';
        case 6:
            return 'July';
        case 7:
            return 'August';
        case 8:
            return 'September';
        case 9:
            return 'October';
        case 10:
            return 'November';
        case 11:
            return 'December';
    }
}
const getCalendar = () => {
    const startWeek = moment().startOf('month').week();
    const endWeek = moment().endOf('month').week();
    moment().format();
    let item = [];
    for(var week = startWeek; week<endWeek;week++){
      item.push({
        week:week,
        days:Array(7).fill(0).map((n, i) => moment().week(week).startOf('week').clone().add(n + i, 'day').format('D'))
      })
    }
    return item;
}
let initialState = {
    currMonth: 'April',
    calendar: getCalendar(),
    entries: [{
        date: Date.now(),
        type: 'Headache',
        notes: 'Had a migraine most of the day but recovered around lunch time.',
    },
    {
        date: Date.now(),
        type: 'Cramps',
        notes: 'Could barely stand upright for most of the day'
    },
    {
        date: Date.now(),
        type: 'Stomach Ache',
        notes: 'I think it was what I ate for lunch',
    },
    {
        date: Date.now(),
        type: 'Headache',
        notes: 'Woke up with a headache',
    },
    {
        date: Date.now(),
        type: 'Migraine',
        notes: 'Very sensitive to light today with a piercing migraine',
    }]
};

function symptomReducer(state = initialState, action) {
    switch (action.type) {
        case types.SYNC_DB: 
            let obj = Object.assign({}, state);
            obj = action.payload;
            state = obj;
            return {
                ...state
            };
        case types.ADD_ACTIVITY:
            return {
                ...state
            };
        default:
            return state;
    }
}

export default symptomReducer; 