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