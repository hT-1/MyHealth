import * as types from "../Constants/actionTypes.js";
import * as actions from "../Actions/actionCreators";
import moment from "moment";

function getMonth(mo) {
  switch (mo) {
    case 0:
      return "January";
    case 1:
      return "February";
    case 2:
      return "March";
    case 3:
      return "April";
    case 4:
      return "May";
    case 5:
      return "June";
    case 6:
      return "July";
    case 7:
      return "August";
    case 8:
      return "September";
    case 9:
      return "October";
    case 10:
      return "November";
    case 11:
      return "December";
  }
}
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
  currMonth: "April",
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
  currentDate: "2018-04-02",
  currentEntries: [
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
  switch (action.type) {
    case types.SYNC_DB:
      let obj = Object.assign({}, state);
      obj = action.payload;
      state = obj;
      return {
        ...state
      };
    case types .SELECT_ENTRIES:
      let currentDate = action.date;
      let currentEntries = state.entries[currentDate];
      return {
        ...state,
        currentDate,
        currentEntries

      }
    case types.ADD_ACTIVITY:
      return {
        ...state
      };
    default:
      return state;
  }
}

export default symptomReducer;
