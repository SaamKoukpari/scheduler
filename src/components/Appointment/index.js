import React from "react";
import "components/Appointment/styles.scss";
import Header from "components/Appointment/Header.js"
import Show from "components/Appointment/Show.js"
import Empty from "./Empty";


export default function Appointment(props) {
  
  const showAppt = (props.time ? `Appointment at ${props.time}` : "No appointments");
  
  return (

      <article className="appointment">
        <Header 
          time={props.time}/>
          {props.interview ? <Show student={props.interview.student} interviewer={props.interview.interviewer} /> : <Empty/>}    
      </article>
  );
}