function tasksTypes(deadlines, day) {
  let today = 0;
  let upcoming = 0;
  let later = 0;
  const deadline = [];
  for (let i = 0; i < deadlines.length; i++) {
    let dline = deadlines[i];    
    if (dline <= day) {
      today += 1
    } else if (dline >= day+1 && dline <= day+7) {
      upcoming += 1
    } else {
      later += 1
    }
  }  
  deadline.push(today);
  deadline.push(upcoming);
  deadline.push(later);
  return deadline;
}