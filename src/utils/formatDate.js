export const formatDate = (date) => {
  date = new Date(date)
  date = date.toString();
  
  let day = `${date.substring(8, 10)}`;
  let month = date.substring(4, 7)
  let year = date.substring(11, 15)
  
  let time = date.substring(16, 21)

  return `${day} ${month} ${year}, ${time}`
}