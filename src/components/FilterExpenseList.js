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

