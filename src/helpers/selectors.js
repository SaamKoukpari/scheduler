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
  if (!interview) {
    return null;
  }

  return {
    ...interview,
    interviewer: state.interviewers[interview.interviewer],
  };
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