import axios from "axios";
import { useState, useEffect } from "react";

export default function useApplicationData() {
const [state, setState] = useState({
  day: "Monday",
  days: [],
  appointments: {},
  interviewers: {},
});

useEffect(() => {
  Promise.all([
    axios.get("/api/days"),
    axios.get("/api/appointments"),
    axios.get("/api/interviewers")
  ]).then(all => {
    const days = all[0].data;
    const appointments = all[1].data; 
    const interviewers = all[2].data; 
    setState(prev => ({...prev, days, appointments, interviewers }));
  })
}, [])

function bookInterview(id, interview) {
  const appointment = {
    ...state.appointments[id],
    interview: { ...interview }
  };
  const appointments = {
    ...state.appointments,
    [id]: appointment
  };
  return axios.put(`/api/appointments/${id}`, { interview })
  .then(response => {
    setState({...state, appointments})
  });
}

function cancelInterview(id) {
  const appointment = {
    ...state.appointments[id],
    interview: null 
  };
  const appointments = {
    ...state.appointments,
    [id]: appointment
  };
  return axios.delete(`/api/appointments/${id}`)
  .then(response => {
    setState({...state, appointments})
  })
}

const setDay = day => setState({ ...state, day })

// function updateSpots (dayName, days, appointments) {
//   const getDayId =   


// }

return { state, setDay, bookInterview, cancelInterview }
};