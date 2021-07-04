export default function GetDate({ date }) {
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thurday", "Friday", "Saturday"];
  let day = date ? days[date.getDay()] : '';
  let hours = date ? date.getHours() : '';
  let minutes = date?.getMinutes();

  if (hours < 10) {
    hours = `0${hours}`;
  }

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (!minutes || !day || !hours) return null;

  return (
    <h4>
      {day} {hours}:{minutes}
    </h4>
  );
 }