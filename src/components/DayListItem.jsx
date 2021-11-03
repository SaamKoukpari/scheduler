import React from "react";
import classNames from "classnames";
import "components/DayListItem.scss";

export default function DayListItem(props) {

  const formatSpots = function(props) {
    if (props.spots === 0) {
      return "no spots";
    } else if (props.spots === 1) {
      return "1 spot";
    } else {
      return `${props.spots} spots`
    };
  }

  const dayClass = classNames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": props.spots === 0
  })
  return (
    <li
      data-testid="day"
      className={dayClass}
      onClick={props.setDay}
      selected={props.selected}>
    <h2 className="text--regular">{props.name}</h2>
    <h3 className="text--light">{formatSpots(props)} remaining</h3>
  </li>
  );
}