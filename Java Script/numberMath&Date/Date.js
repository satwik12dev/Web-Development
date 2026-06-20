// let date = new Date();
// console.log(date);
// console.log(date.toString());

// //unix time
// console.log(Date.now());
// console.log(Date.now()/1000/60/60/24/365); // convert to years


// // console.log(Date())

// let date1 = new Date('2025/05/15 06:40:05'); // June 15, 2024 (months are 0-indexed)
// console.log(date1); // Sat Jun 15 2024 06:40:05 GMT+0000 (Coordinated Universal Time)
// console.log(date1.toString()); // Sat Jun 15 2024 06:40:05 GMT+0000 (Coordinated Universal Time)
// console.log(date1.toISOString()); // 2024-06-15T06:40:05.000Z

// let date2 = new Date('2025-05-15T00:00:00.000Z'); // June 15, 2024 (months are 0-indexed)
// console.log(date2); // Sat Jun 15 2025 00:00:00 GMT+0000 (Coordinated Universal Time)
// console.log(date2.toString()); // Sat Jun 15 2025 00:00:00 GMT+0000 (Coordinated Universal Time)
// console.log(date2.toISOString()); // 2025-05-15T00:00:00.000Z



// let date3 = new Date('2025, 4, 15'); // June 15, 2024 (months are 0-indexed)
// console.log(date3); // Sat Jun 15 2025 00:00:00 GMT+0000 (Coordinated Universal Time)
// console.log(date3.toString()); // Sat Jun 15 2025 00:00:00 GMT+0000 (Coordinated Universal Time)
// console.log(date3.toISOString()); // 2025-05-15T00:00:00.000Z

// // month is 0-indexed, so 4 represents May.\


// //methods
// const date = new Date('2025-05-15T06:40:05.000Z');
// console.log(date.getFullYear());
// console.log(date.getMonth()); // 0-indexed, so May is 4
// console.log(date.getDate());
// console.log(date.getDay());  // 0-indexed, so Thursday is 4
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.getMilliseconds());
// console.log(date.getTime()); // milliseconds since Jan 1, 1970
// console.log(date.getTimezoneOffset()/60); // difference in minutes between UTC and local time
// console.log(date.toUTCString()); // Thu, 15 May 2025 06:40:05 GMT
// console.log(date.toDateString()); // Thu May 15 2025
// console.log(date.toTimeString()); // 06:40:05 GMT+0000 (Coordinated Universal Time)
// console.log(date.toLocaleString()); // 5/15/2025, 6:40:05 AM
// console.log(date.toLocaleDateString()); // 5/15/2025
// console.log(date.toLocaleTimeString()); // 6:40:05 AM
// console.log(date.toISOString()); // 2025-05-15T06:40:05.000Z
// console.log(date.toJSON()); // 2025-05-15T06:40:05.000Z
// console.log(date.toString()); // Thu May 15 2025 06:40:05 GMT+0000 (Coordinated Universal Time)


// //calculations on time stamps
// let time = Date.now();
// console.log(time);

// let min = 1000 * 60 * 10;
// console.log(time + min); 

// let date = new Date(time + min);
// console.log(date.toLocaleString()); // 10 minutes later

// let hour = 1000 * 60 * 60 * 2;
// console.log(time + hour);
// let date2 = new Date(time + hour);
// console.log(date2.toLocaleString()); // 2 hours later


// DIFF between two dates
let date1 = new Date('2025-01-01T00:00:00');
let date2 = new Date('2023-01-01T00:00:00');

console.log(date1.getTime() - date2.getTime()); // milliseconds
console.log((date1.getTime() - date2.getTime()) / (1000 * 60 * 60 * 24)); // days
console.log(date1.getFullYear() - date2.getFullYear()); // years

let diffInMilliseconds = date1.getTime() - date2.getTime();
let diffInSeconds = diffInMilliseconds / 1000;
let diffInMinutes = diffInSeconds / 60;
let diffInHours = diffInMinutes / 60;
let diffInDays = diffInHours / 24;
let diffInYears = diffInDays / 365;

console.log(`Difference in milliseconds: ${diffInMilliseconds}`);
console.log(`Difference in seconds: ${diffInSeconds}`);
console.log(`Difference in minutes: ${diffInMinutes}`);
console.log(`Difference in hours: ${diffInHours}`);
console.log(`Difference in days: ${diffInDays}`);
console.log(`Difference in years: ${diffInYears}`);


//mm to readable date
let timestamp = 1735689600000; // Example timestamp in milliseconds
let readableDate = new Date(timestamp);
console.log(readableDate.toLocaleString()); // Output: 1/1/2025, 12:00:00 AM