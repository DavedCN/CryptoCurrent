export const getDate = (timestamp) => {
  // Create a new Date object using the UNIX timestamp
  var date = new Date(timestamp * 1);

  // Get the day and month
  var day = date.getDate();
  var month = date.getMonth() + 1; // Months are zero-based in JavaScript

  return day + "/" + month;
};
