const formatHours= (hrs) => {
  let h = hrs;
  if (h >= 12){
    h = hrs-12;
  };
  if (h === 0){
    h = 12
  };
  return h;
};

const formatMins = (mins) => {
   return mins < 10 ? mins = "0"+mins : mins
};

export formatHours, formatMins;
