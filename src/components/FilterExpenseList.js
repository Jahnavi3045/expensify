// import React from 'react'
// import { DateRangePicker } from 'react-dates';
// import {useSelector,useDispatch} from 'react-redux'
// import { setTextFilter,sortByAmount,sortByDate,setStartDate,setEndDate} from '../actions/filters'


// const FilterExpenseList = () => {
//   state={
//     calendarFocused:false
//   }
//     const text=useSelector((state)=>state.filters.text);
//     const sortBy=useSelector((state)=>state.filters.sortBy);
//     const startDate=useSelector((state)=>state.filters.startDate);
//     const endDate=useSelector((state)=>state.filters.endDate);
//     const focusedInput=useSelector((state)=>state.calendarFocused)
//     const dispatch=useDispatch();

//     const handleTextChange = (e) => {
//         dispatch(setTextFilter(e.target.value)); 
//     };
//     const sortByChange=(e)=>{
//       if(e.target.value==='date'){
//         dispatch(sortByDate())
//       }
//       else if(e.target.value==='amount'){
//         dispatch(sortByAmount())
//       }
//     }
//     const onDatesChange=({startDate,endDate})=>{
//       dispatch(setStartDate(startDate))
//       dispatch(setEndDate(endDate))
//     }
//     const onFocusChange=(calendarFocused)=>{
//       this.setState(()=>({calendarFocused}))
//     }
//     return (
//       <div>
//         <input
//           type="text"
//           value={text}
//           onChange={handleTextChange}
//           placeholder="Filter expenses"
//         />
//         <select value={sortBy} onChange={sortByChange}>
//           <option value={'date'}>Date</option>
//           <option value={'amount'}>Amount</option>
//         </select>
//         <DateRangePicker
//           startDate={startDate}
//           endDate={endDate}
//           onDatesChange={onDatesChange}
//           focusedInput={focusedInput}
//           onFocusChange={onFocusChange}
//         />
//       </div>
//     );
//   };
  

// export default FilterExpenseList


// import React, { Component } from 'react';
// import { DateRangePicker } from 'react-dates';
// import 'react-dates/lib/css/_datepicker.css'; // Import styles
// import 'react-dates/initialize';
// import { connect } from 'react-redux';
// import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters';

// class FilterExpenseList extends Component {
//   // constructor(props) {
//   //   super(props);
//   //   this.state = {
//   //     calendarFocused: null,
//   //     startDate:moment().startOf('month'), // Class component state for calendar focus
//   //     endDate:moment().endOf('month') // Class component state for calendar focus
//   //   };
//   // }
//   state={
//     calendarFocused:null
//   }

//   handleTextChange = (e) => {
//     this.props.setTextFilter(e.target.value);
//   };

//   sortByChange = (e) => {
//     if (e.target.value === 'date') {
//       this.props.sortByDate();
//     } else if (e.target.value === 'amount') {
//       this.props.sortByAmount();
//     }
//   };

//   onDatesChange = ({ startDate, endDate }) => {
//     this.props.setStartDate(startDate);
//     this.props.setEndDate(endDate);
//     // this.setState(()=>({startDate,endDate}))
//   };

//   onFocusChange = (calendarFocused) => {
//     this.setState(() => ({ calendarFocused }));
//   };

//   render() {
//     return (
//       <div>
//         <input
//           type="text"
//           value={this.props.text}
//           onChange={this.handleTextChange}
//           placeholder="Filter expenses"
//         />
//         <select value={this.props.sortBy} onChange={this.sortByChange}>
//           <option value="date">Date</option>
//           <option value="amount">Amount</option>
//         </select>
//         <DateRangePicker
//           startDate={this.props.filters.startDate}
//           endDate={this.props.filters.endDate}
//           onDatesChange={this.onDatesChange}
//           focusedInput={this.state.calendarFocused}
//           showClearDates={true}
//           onFocusChange={this.onFocusChange}numberOfMonths={1}
//           isOutsideRange={()=>false}
//         />
//       </div>
//     );
//   }
// }

// // Map Redux state to props
// const mapStateToProps = (state) => ({
//   text: state.filters.text,
//   sortBy: state.filters.sortBy,
//   startDate: state.filters.startDate,
//   endDate: state.filters.endDate,
// });

// // Map Redux actions to props
// const mapDispatchToProps = (dispatch) => ({
//   setTextFilter: (text) => dispatch(setTextFilter(text)),
//   sortByDate: () => dispatch(sortByDate()),
//   sortByAmount: () => dispatch(sortByAmount()),
//   setStartDate: (startDate) => dispatch(setStartDate(startDate)),
//   setEndDate: (endDate) => dispatch(setEndDate(endDate)),
// });

// // Connect the class component to Redux
// export default connect(mapStateToProps, mapDispatchToProps)(FilterExpenseList);



import React, { useState } from 'react';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css'; // Import styles
import 'react-dates/initialize';
import { useDispatch, useSelector } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters';

const FilterExpenseList = () => {
  const [calendarFocused, setCalendarFocused] = useState(null); // Replacing class state
  const dispatch = useDispatch(); // Use dispatch hook to dispatch actions

  // Extract filters state from Redux using useSelector
  const filters = useSelector((state) => state.filters);

  const handleTextChange = (e) => {
    dispatch(setTextFilter(e.target.value));
  };

  const sortByChange = (e) => {
    if (e.target.value === 'date') {
      dispatch(sortByDate());
    } else if (e.target.value === 'amount') {
      dispatch(sortByAmount());
    }
  };

  const onDatesChange = ({ startDate, endDate }) => {
    dispatch(setStartDate(startDate));
    dispatch(setEndDate(endDate));
  };

  const onFocusChange = (calendarFocused) => {
    setCalendarFocused(calendarFocused); // Update the calendar focus state
  };

  return (
    <div>
      <input
        type="text"
        value={filters.text}
        onChange={handleTextChange}
        placeholder="Filter expenses"
      />
      <select value={filters.sortBy} onChange={sortByChange}>
        <option value="date">Date</option>
        <option value="amount">Amount</option>
      </select>
      <DateRangePicker
        startDate={filters.startDate}
        endDate={filters.endDate}
        onDatesChange={onDatesChange}
        focusedInput={calendarFocused}
        showClearDates={true}
        onFocusChange={onFocusChange}
        numberOfMonths={1}
        isOutsideRange={() => false}
      />
    </div>
  );
};

export default FilterExpenseList;

