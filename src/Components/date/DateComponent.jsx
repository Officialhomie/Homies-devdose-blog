import React from 'react';

const DateComponent = () => {
  // Get today's date
  const today = new Date();

  // Get the day of the week
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const dayOfWeek = daysOfWeek[today.getDay()];

  // Get the month
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const month = months[today.getMonth()];

  // Get the day and add the suffix
  const day = today.getDate();
  const suffix = getDaySuffix(day);
  const formattedDay = day + suffix;

  // Get the year
  const year = today.getFullYear();

  return (
    <div>
      <p>{dayOfWeek}, {month} {formattedDay}, {year}</p>
    </div>
  );
};

// Function to get the suffix for the day
const getDaySuffix = (day) => {
  if (day >= 11 && day <= 13) {
    return 'th';
  }
  switch (day % 10) {
    case 1: return 'st';
    case 2: return 'nd';
    case 3: return 'rd';
    default: return 'th';
  }
};

export default DateComponent;
