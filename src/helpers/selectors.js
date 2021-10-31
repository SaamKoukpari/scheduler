export function getAppointmentsForDay(state, dayName) {
  const foundDay = state.days.find((day) => day.name === dayName);

  if (!foundDay) {
    return [];
  }

  const result = foundDay.appointments.map((Id) => {
    return state.appointments[Id];
  });

  return result;
}

export function getInterview(state, interview) {
  const interviewerObj = { student: null, interviewer: null };
  if (interview) {
    interviewerObj.student = interview.student;
    for (const interviewer in state.interviewers) {
      if (state.interviewers[interviewer].id === interview.interviewer) {
        interviewerObj.interviewer = state.interviewers[interviewer];
      }
    }
  }
  if (interviewerObj.student) {
    return interviewerObj;
  }
  return null;
}

export function getInterviewersForDay(state, dayName) {
  const foundDay = state.days.find((day) => day.name === dayName);

  if (!foundDay) {
    return [];
  }

  const result = foundDay.interviewers.map((Id) => {
    return state.interviewers[Id];
  });

  return result;
}