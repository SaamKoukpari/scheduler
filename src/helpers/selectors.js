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
  const resultObj = { student: null, interviewer: null };
  if (interview) {
    resultObj.student = interview.student;
    for (const interviewer in state.interviewers) {
      if (state.interviewers[interviewer].id === interview.interviewer) {
        resultObj.interviewer = state.interviewers[interviewer];
      }
    }
  }
  if (resultObj.student) {
    return resultObj;
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