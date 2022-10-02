export function FormatDate(dateData: string) {
  const date = new Date(dateData)
  if(date){
    const result = []
    result.push(date.getFullYear().toString().slice(2,4)) 
    result.push((date.getMonth() + 1) > 9 ? (date.getMonth() + 1).toString() : '0' + (date.getMonth() + 1).toString()) 
    result.push(date.getDate() > 10 ? date.getDate().toString() : '0' + date.getDate().toString()) 
    return result.join('.')
  }
  return ''
}