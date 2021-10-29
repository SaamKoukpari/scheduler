export function getAppointmentsForDay(state, day) {
  const filteredApts = [];
  const [apptIdsForDay] = state.days.filter(
    (currentDay) => currentDay.name === day
  );
  if (apptIdsForDay) {
    for (const apptId of apptIdsForDay.appointments) {
      for (const appt in state.appointments) {
        if (apptId === state.appointments[appt].id) {
          filteredApts.push(state.appointments[appt]);
        }
      } 
    }
  }
  return filteredApts; 
}

export function getInterview(state, interview) {
  const interviewObj = { student: null, interviewer: null };
  
  if (interview) {
    interviewObj.student = interview.student;
    for (const interviewer in state.interviewers) {
      if (state.interviewers[interviewer].id === interview.interviewer) {
        interviewObj.interviewer = state.interviewers[interviewer];
      }
    }
  }
  if (interviewObj.student) {
    return interviewObj;
  }
  return null;
}

