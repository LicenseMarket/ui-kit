import { log } from "console";
import moment from "moment-jalaali";

moment.loadPersian({
  usePersianDigits: true,
});

export function getDateDifference(date: Date, format?: string): string {
  const Colors = {
    امروز: "#eab308",
    دیروز: "#7f1d1d",
    فردا: "#22c55e",
  };

  const currentTime = new Date();
  date = new Date(date);

    if (isNaN(date.getTime())) return "تاریخ معتبر نیست";
    return moment(date).format(format || "jDD jMMMM jYYYY - hh:mm");
  }
//   const isToday = date.toDateString() === currentTime.toDateString();
//   const isYesterday = new Date(currentTime.setDate(currentTime.getDate() - 1)).toDateString() === date.toDateString();
//   const isTommorow = new Date(currentTime.setDate(currentTime.getDate() + 1)).toDateString() === date.toDateString();
//
//
//   if (isToday) {
//     return `امروز`;
//   } else if (isYesterday) {
//     return `(دیروز ${moment(date).format(format || "HH:mm")})`;
//   } else if (isTommorow) {
//     return `(فردا ${moment(date).format(format || "HH:mm")})`;
//   } else {
//     return moment(date).format(format || "jDD jMMMM jYYYY - hh:mm");
//   }
// }
