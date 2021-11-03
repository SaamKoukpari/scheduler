import React from "react";
import { useState } from "react";
import InterviewerList from "components/InterviewerList";
import Button from "components/Button";

export default function Form(props) {
  const [student, setStudent] = useState(props.student || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);
  const [error, setError] = useState("");

  const handleChange = function(event) {
    if (event.target.value.length > 0) {
      setError("");  
    }
    setStudent(event.target.value)
  }

  const reset = function() {
    setStudent("");
    setInterviewer(null);
    setError("");
  };

  const cancel = function() {
    reset();
    props.onCancel();
  };

  function validate() {
    if (student === "") {
      setError("student name cannot be blank");
      return;
    }

    setError("");

    if (interviewer && interviewer.id) {
      props.onSave(student, interviewer.id)
    }
    else {
      props.onSave(student, interviewer);
    }
  }

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form onSubmit={event => event.preventDefault()} autoComplete="off">
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Enter Student Name"
            value={student}
            onChange={(event) => {
              handleChange(event)
            }}
            data-testid="student-name-input"
          />
        </form>
        <section 
          className="appointment__validation">{error}
        </section>
        <InterviewerList 
          interviewers={props.interviewers}
          value={interviewer}
          onChange={setInterviewer}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button
            onClick={cancel} 
            danger>Cancel</Button>
          <Button
            onClick={() => validate()}
            confirm>Save</Button>
        </section>
      </section>
    </main>
  );
}