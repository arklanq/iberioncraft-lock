
export function translateMonth(date: Date) {
  switch(date.getMonth()) {
    case 0: return "Styczeń";
    case 1: return "Luty";
    case 2: return "Marzec";
    case 3: return "Kwiecień";
    case 4: return "Maj";
    case 5: return "Czerwiec";
    case 6: return "Lipiec";
    case 7: return "Sierpień";
    case 8: return "Wrzesień";
    case 9: return "Październik";
    case 10: return "Listopad";
    case 11: return "Grudzień";
    default: return '';
  }
}

export function addHours(date: Date, hours: number) {
  const newDate = new Date();
  newDate.setTime(date.getTime() + (hours*60*60*1000));
  return newDate;
}