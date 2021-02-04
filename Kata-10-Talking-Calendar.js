const talkingCalendar = function(date) {
  let months = {
    '01': "January",
    '02': "February",
    '03': "March",
    '04': "April",
    '05': "May",
    '06': 'June',
    '07': 'July',
    '08': 'August',
    '09': 'September',
    '10': 'October',
    '11': 'November',
    '12': 'December'
  };

  let specialDays = {
    '01': "1st",
    '02': "2nd",
    '03': "3rd",
    '21': "21st",
    '22': "22nd",
    '23': "23rd",
    '31': "31st",
  };

  let array = date.split('/');
  
  let year = [array[0]];
  let month = months[array[1]];
  let day;
  if (Object.keys(specialDays).includes(array[2])) {
    day = specialDays[array[2]];
  } else {
    day = array[2] + 'th';
  }
  
  return month + ' ' + day + ', ' + year;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));