import moment from "moment-jalaali";

moment.loadPersian({
  usePersianDigits: true,
});

export function getDateDifference(date: Date, format?: string): string {
  // const Colors = {
  //   امروز: "#eab308",
  //   دیروز: "#7f1d1d",
  //   فردا: "#22c55e",
  // };

  // const currentTime = new Date();
  date = new Date(date);

  if (isNaN(date.getTime())) return "تاریخ معتبر نیست";
  return moment(date).format(format || "jDD jMMMM jYYYY - hh:mm");
}
