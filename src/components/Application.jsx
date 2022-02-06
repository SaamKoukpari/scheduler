import React from "react";
import "components/Application.scss";
import useApplicationData from "hooks/useApplicationData.js";
import DayList from "./DayList.jsx";
import Appointment from "components/Appointment/index.jsx";
import { getAppointmentsForDay, getInterview, getInterviewersForDay } from "helpers/selectors";


export default function Application() {
  const { 
    state, 
    setDay, 
    bookInterview, 
    cancelInterview, 
  } = useApplicationData();
  
  const dailyInterviewers = getInterviewersForDay(state, state.day);
  
  const dailyAppointments = getAppointmentsForDay(state, state.day).map(
    (appointment) => {
  // console.log("appointment:", appointment)
    return (
      <Appointment
        key={appointment.id}
            {...appointment}
        interviewers={dailyInterviewers}
        interview={getInterview(state, appointment.interview)}
        bookInterview={bookInterview}
        cancelInterview={cancelInterview}
      />
    );
  });

  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr   className="sidebar__separator sidebar--centered" />
        <nav  className="sidebar__menu">
          <DayList
            days={state.days}
            value={state.day}
            onChange={setDay}
          />
        </nav>
      
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {dailyAppointments}
        <Appointment key="last" time="5pm"/> 
      </section>
    </main>
  );
};