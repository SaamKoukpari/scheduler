import React from "react";
import "components/Appointment/styles.scss";
import useVisualMode from "hooks/useVisualMode";
import Form from "./Form";
import Header from "components/Appointment/Header.jsx"
import Show from "components/Appointment/Show.jsx"
import Empty from "./Empty";
import Status from "./Status";
import Confirm from "./Confirm";
import Error from "./Error";

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";
const CONFIRM = "CONFIRM";
const DELETE = "DELETE";
const EDIT = "EDIT";
const ERROR_SAVE = "ERROR_SAVE";
const ERROR_DELETE = "ERROR_DELETE";

export default function Appointment(props) {
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
    transition(SAVING)
    props
    .bookInterview(props.id, interview)
    .then(() => transition(SHOW))
    .catch((error) => transition(ERROR_SAVE, true));
  }

  function confirm() {
    transition(DELETE, true)
    props.cancelInterview(props.id)
    .then(() => transition(EMPTY))
    .catch((error) => transition(ERROR_DELETE, true));
  }
  
  return (

      <article className="appointment">
        <Header 
          time={props.time}
        />
        {mode === EMPTY && 
        <Empty 
          onAdd={() => transition(CREATE)} 
        />
        }
        {mode === SHOW && (
        <Show 
          student={props.interview.student} 
          interviewer={props.interview.interviewer}
          onDelete={() => transition(CONFIRM)}
          onEdit={() => transition(EDIT)}
        />
        )}
        {mode === CREATE && (
        <Form 
          interviewers={props.interviewers}
          onSave={save}
          onCancel={back} 
        />
        )}
        {mode === SAVING && <Status />}
        {mode === DELETE && <Status message="Deleting"/>}
        {mode === CONFIRM && (
        <Confirm 
            message={"Are you sure?"}
            onCancel={back}
            onConfirm={confirm} 
            />
        )}
        {mode === EDIT && (
        <Form
          interviewers={props.interviewers}
          interviewer={props.interview.interviewer.id} 
          student={props.interview.student}
          onSave={save}
          onCancel={back} />
        )}
        {mode === ERROR_SAVE && (
        <Error
          onClose={back}
          message={"Oops! Something went wrong."} 
        />
        )}
        {mode === ERROR_DELETE && (
        <Error
          onClose={back}
          message={"Oops! Something went wrong."} 
        />
        )}
      </article>
  );
}