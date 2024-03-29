import React from "react";
import InterviewerListItem from "./InterviewerListItem";
import PropTypes from "prop-types";
import "components/InterviewerList.scss";


export default function InterviewerList(props) {

  const interviewerListItem = props.interviewers.map(interviewer => {
    return (
   
        <InterviewerListItem  
          key={interviewer.id}
          name={interviewer.name}
          avatar={interviewer.avatar}
          selected={interviewer.id === props.value}
          setInterviewer={() => props.onChange(interviewer.id)}
        />
    );
  })

  InterviewerList.propTypes = {
    interviewers: PropTypes.array.isRequired
  };
  
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{interviewerListItem}</ul>
    </section>
  );
}