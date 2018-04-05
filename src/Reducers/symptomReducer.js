import * as types from "../Constants/actionTypes.js";
import * as actions from "../Actions/actionCreators";
import moment from "moment";

const getCalendar = () => {
  const startWeek = moment()
    .startOf("month")
    .week();
  const endWeek = moment()
    .endOf("month")
    .week();
  moment().format();
  let item = [];
  for (var week = startWeek; week < endWeek; week++) {
    item.push({
      week: week,
      days: Array(7)
        .fill(0)
        .map((n, i) =>
          moment()
            .week(week)
            .startOf("week")
            .clone()
            .add(n + i, "day")
            .format("D")
        ),
      fullDate: Array(7)
        .fill(0)
        .map((n, i) =>
          moment()
            .week(week)
            .startOf("week")
            .clone()
            .add(n + i, "day")
            .format("YYYY-MM-DD")
        )
    });
  }
  return item;
};
let initialState = {
  currMonth: moment().format('MMMM'),
  calendar: getCalendar(),
  entries:{
      "2018-04-01": [
        {
          type: "Night Terrors",
          notes: "Wet the bed"
        },
        {
          type: "Cramps",
          notes: "Could barely stand upright for most of the day"
        },
        {
          type: "Stomach Ache",
          notes: "I think it was what I ate for lunch"
        },
        {
          type: "Diahhrea",
          notes: "Dont even want to talk about it"
        },
        {
          type: "Migraine",
          notes: "Very sensitive to light today with a piercing migraine"
        }
      ],
      "2018-04-02": [
        {
          type: "Headache",
          notes:
            "Had a migraine most of the day but recovered around lunch time."
        },
        {
          type: "Cramps",
          notes: "Could barely stand upright for most of the day"
        },
        {
          type: "Stomach Ache",
          notes: "I think it was what I ate for lunch"
        },
        {
          type: "Headache",
          notes: "Woke up with a headache"
        },
        {
          type: "Migraine",
          notes: "Very sensitive to light today with a piercing migraine"
        }
      ],
      "2018-04-03": [
        {
          type: "Headache",
          notes:
            "Had a migraine most of the day but recovered around lunch time."
        },
        {
          type: "Cramps",
          notes: "Could barely stand upright for most of the day"
        },
        {
          type: "Stomach Ache",
          notes: "I think it was what I ate for lunch"
        },
        {
          type: "Headache",
          notes: "Woke up with a headache"
        },
        {
          type: "Migraine",
          notes: "Very sensitive to light today with a piercing migraine"
        }
      ],
      "2018-04-04": [
        {
          type: "Headache",
          notes:
            "Had a migraine most of the day but recovered around lunch time."
        },
        {
          type: "Cramps",
          notes: "Could barely stand upright for most of the day"
        },
        {
          type: "Stomach Ache",
          notes: "I think it was what I ate for lunch"
        },
        {
          type: "Headache",
          notes: "Woke up with a headache"
        },
        {
          type: "Migraine",
          notes: "Very sensitive to light today with a piercing migraine"
        }
      ]
    },
  currentDate: moment().format('YYYY-MM-DD'),
  symptoms: [
    { name: "Acne"},
    { name: "Anxiety"},
    { name: "Backache"},
    { name: "Bloating"},
    { name: "Breast Swelling"},
    { name: "Breast Tenderness"},
    { name: "Constipation"},
    { name: "Cramps"},
    { name: "Crying Spells"},
    { name: "Diarrhea"},
    { name: "Difficulty Concentrating"},
    { name: "Dizziness"},
    { name: "Fatigue"},
    { name: "Flatulence"},
    { name: "Food Cravings"},
    { name: "Headache"},
    { name: "Irritability"},
    { name: "Joint Pain"},
    { name: "Libido (Decreased)"},
    { name: "Libido (Increased)"},
    { name: "Migraine"},
    { name: "Moody"},
    { name: "Muscle Pain"},
    { name: "Nausea"},
    { name: "Ovarian Pain"},
    { name: "Sadness"},
    { name: "Sleep (Decreased)"},
    { name: "Sleep (Increased)"},
    { name: "Stress"},
    { name: "Tension"},
    { name: "Water Retention"},
    { name: "Weight Gain"},
    { name: "Dry Skin"},
    { name: "Hot Flashes"},
    { name: "Night Sweats"},
    { name: "Palpitations"},
    { name: "Thinning Hair"},
    { name: "Trouble Falling-Asleep"},
    { name: "Trouble Staying-Asleep"},
    { name: "Urinary Incontinence"},
    { name: "Vaginal Dryness"},
    { name: "Vaginal Irritation"},
  ]
};

function symptomReducer(state = initialState, action) {
  let currentEntries;
  let currentDate;
  let entries;
  let item;
  switch (action.type) {
    case types.SYNC_DB:
    entries = action.data;
    currentEntries = entries[state.currentDate];
      return {
        ...state,
        currentEntries,
        entries
      };
    case types.SELECT_ENTRIES:
      currentDate = action.date;
      currentEntries = state.entries[currentDate];
      return {
        ...state,
        currentDate,
        currentEntries
      }
    case types.ADD_ENTRY:
      currentEntries = state.currentEntries;
      entries = state.entries;
      item = {
        type: action.entry.symptom,
        notes: action.entry.notes
      }
      if(entries[action.entry.entry_date]) {
        entries[action.entry.entry_date].push(item);
      } else {
        entries[action.entry.entry_date] = [];
        entries[action.entry.entry_date].push(item);
      }
      if(currentEntries) {
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
    case types.DELETE_ENTRY:
    currentEntries = state.currentEntries;
      entries = state.entries;
      // currentEntries.push(item);
     let items = entries[action.data.date];
     for(let j = 0; j < currentEntries.length; j++){
       if(currentEntries[j] === action.data.id){
        currentEntries.splice(j, 1);
       }
     }
      for(let i = 0; i < items.length; i++){
        if(items[i].id === action.data.id){
          items.splice(i, 1)
        }
      }
      if(items.length > 0) {
        entries[action.data.date] = items;
      } else {
        delete entries[action.data.date];
      }
      return {
        ...state,
        currentEntries,
        entries
      };
    default:
      return state;
  }
}

export default symptomReducer;
