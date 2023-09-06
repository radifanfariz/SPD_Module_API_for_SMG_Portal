const { DateTime } = require("luxon");

// Define a function to map month abbreviations to month numbers
function getMonthNumber(monthAbbr) {
  const months = [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
  ];
  return months.indexOf(monthAbbr.toLowerCase()) + 1;
}

exports.validateDate = (dateStr) => {
  const pattern =
    /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)-(\d{2}|\d{4})$/i;

  if (!pattern.test(dateStr)) {
    return false; // Doesn't match the pattern
  }

  const [monthAbbr, year] = dateStr.split("-");
  let parsedYear = parseInt(year, 10);

  const currentYear = DateTime.local().year;

  const parsedMonth = getMonthNumber(monthAbbr);

  if (parsedMonth < 1 || parsedMonth > 12) {
    return false; // Invalid month
  }


  if (parsedYear < 100) {
    // Convert 2-digit year to 4-digit year
    parsedYear += parsedYear < currentYear % 100 ? 2000 : 1900;
  }

  if (parsedYear < 1900 || parsedYear > currentYear) {
    return false; // Year out of range
  }

  return true; // Date is valid
};
