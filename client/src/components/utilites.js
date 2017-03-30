const formatHours= (hrs) => {
  let h = hrs;
  h >= 12 ? h = hrs-12 : h;
  h === 0 ? h = 12 : h;
  return h;
};

const formatMins = (mins) => {
   return mins < 10 ? mins = "0"+mins : mins
};

export formatHours, formatMins;
