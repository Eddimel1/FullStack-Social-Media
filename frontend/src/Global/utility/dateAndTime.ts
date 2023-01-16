export const covertToPostData = (db_timestamp:any) => {
    const d2 = new Date(Date.parse(db_timestamp))
    const d1 = new Date()
    const year =   d1.getFullYear()- d2.getFullYear()
    const months =  d1.getMonth()- d2.getMonth()
    const days =  d2.getDay() - d1.getDay()
    const hours =  d1.getHours() - d2.getHours()
    const minutes =  d1.getMinutes() - d2.getMinutes()
    const seconds =  d1.getSeconds()- d2.getSeconds()
    if(year) return `${year} years ago`
    else if(months) return `${months} months ago`
    else if(days) return `${days} days ago`
    else if(hours) return `${hours} hours ago`
    else if(!hours && minutes) return `${minutes} minutes ago`
    else if(!minutes && seconds) return `${seconds} seconds ago`
    
  }