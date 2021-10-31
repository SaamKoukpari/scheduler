import React from "react";
import "components/Appointment/styles.scss";
import useVisualMode from "hooks/useVisualMode";
import Form from "./Form";
import Header from "components/Appointment/Header.js"
import Show from "components/Appointment/Show.js"
import Empty from "./Empty";

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";

export default function Appointment(props) {
  
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  return (

      <article className="appointment">
        <Header 
          time={props.time}
        />
        {mode === EMPTY && 
        <Empty 
          onAdd={() => transition(CREATE)} />
        }
        {mode === SHOW && (
        <Show 
          student={props.interview.student} 
          interviewer={props.interview.interviewer}/>
        )}
        {mode === CREATE && (
        <Form 
          interviewers={props.interviewers || []} 
          onCancel={back} />
        )}
      </article>
  );
}