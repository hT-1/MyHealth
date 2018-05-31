import moment from 'moment';
import * as types from '../Constants/actionTypes.js';

const getCalendar = () => {
  const startWeek = moment()
    .startOf('month')
    .week();
  const endWeek = moment()
    .endOf('month')
    .week();
  moment().format();
  const item = [];
  for (let week = startWeek; week < endWeek; week += 1) {
    item.push({
      week,
      days: Array(7)
        .fill(0)
        .map((n, i) =>
          moment()
            .week(week)
            .startOf('week')
            .clone()
            .add(n + i, 'day')
            .format('D')),
      fullDate: Array(7)
        .fill(0)
        .map((n, i) =>
          moment()
            .week(week)
            .startOf('week')
            .clone()
            .add(n + i, 'day')
            .format('YYYY-MM-DD'))
    });
  }
  return item;
};
const initialState = {
  currMonth: moment().format('MMMM'),
  calendar: getCalendar(),
  entries: {
    '2018-04-01':
      [
        {
          type: 'Night Terrors',
          notes: 'Wet the bed'
        },
        {
          type: 'Cramps',
          notes: 'Could barely stand upright for most of the day'
        },
        {
          type: 'Stomach Ache',
          notes: 'I think it was what I ate for lunch'
        },
        {
          type: 'Diahhrea',
          notes: 'Dont even want to talk about it'
        },
        {
          type: 'Migraine',
          notes: 'Very sensitive to light today with a piercing migraine'
        }
      ]
  },
  currentDate: moment().format('YYYY-MM-DD'),
  symptoms: [
    { name: 'Acne' },
    { name: 'Anxiety' },
    { name: 'Backache' },
    { name: 'Bloating' },
    { name: 'Breast Swelling' },
    { name: 'Breast Tenderness' },
    { name: 'Constipation' },
    { name: 'Cramps' },
    { name: 'Crying Spells' },
    { name: 'Diarrhea' },
    { name: 'Difficulty Concentrating' },
    { name: 'Dizziness' },
    { name: 'Fatigue' },
    { name: 'Flatulence' },
    { name: 'Food Cravings' },
    { name: 'Headache' },
    { name: 'Irritability' },
    { name: 'Joint Pain' },
    { name: 'Libido (Decreased)' },
    { name: 'Libido (Increased)' },
    { name: 'Migraine' },
    { name: 'Moody' },
    { name: 'Muscle Pain' },
    { name: 'Nausea' },
    { name: 'Ovarian Pain' },
    { name: 'Sadness' },
    { name: 'Sleep (Decreased)' },
    { name: 'Sleep (Increased)' },
    { name: 'Stress' },
    { name: 'Tension' },
    { name: 'Water Retention' },
    { name: 'Weight Gain' },
    { name: 'Dry Skin' },
    { name: 'Hot Flashes' },
    { name: 'Night Sweats' },
    { name: 'Palpitations' },
    { name: 'Thinning Hair' },
    { name: 'Trouble Falling-Asleep' },
    { name: 'Trouble Staying-Asleep' },
    { name: 'Urinary Incontinence' },
    { name: 'Vaginal Dryness' },
    { name: 'Vaginal Irritation' },
  ]
};

function symptomReducer(state = initialState, action) {
  switch (action.type) {
    case types.SYNC_DB: {
      const entries = action.data;
      const currentEntries = entries[state.currentDate];
      return {
        ...state,
        currentEntries,
        entries
      };
    }
    case types.SELECT_ENTRIES: {
      const currentDate = action.date;
      const currentEntries = state.entries[currentDate];
      return {
        ...state,
        currentDate,
        currentEntries
      };
    }
    case types.ADD_ENTRY: {
      let { currentEntries } = state;
      const { entries } = state;
      const item = {
        type: action.entry.symptom,
        notes: action.entry.notes
      };
      if (entries[action.entry.entry_date]) {
        entries[action.entry.entry_date].push(item);
      } else {
        entries[action.entry.entry_date] = [];
        entries[action.entry.entry_date].push(item);
      }
      if (currentEntries) {
        // Nothing if already exists
      } else {
        currentEntries = [];
        currentEntries.push(item);
      }
      return {
        ...state,
        currentEntries,
        entries
      };
    }
    case types.DELETE_ENTRY: {
      const { currentEntries } = state;
      const { entries } = state;
      const items = entries[action.data.date];
      for (let j = 0; j < currentEntries.length; j += 1) {
        if (currentEntries[j] === action.data.id) {
          currentEntries.splice(j, 1);
        }
      }
      for (let i = 0; i < items.length; i += 1) {
        if (items[i].id === action.data.id) {
          items.splice(i, 1);
        }
      }
      if (items.length > 0) {
        entries[action.data.date] = items;
      } else {
        delete entries[action.data.date];
      }
      return {
        ...state,
        currentEntries,
        entries
      };
    }
    default:
      return state;
  }
}

export default symptomReducer;
