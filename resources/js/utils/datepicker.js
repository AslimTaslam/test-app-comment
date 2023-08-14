// импортируем необходимые модули
import moment from "moment";

// экспортируем функцию для работы с datepicker
export function formatDate(date) {
  return moment(date).format("DD.MM.YYYY");
}