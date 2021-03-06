import ServingItem from "./ServingItem";
import FlipMove from "react-flip-move";
import React, { useState, useEffect } from "react";
export default function ServingList(props) {
  const servingArr = props.serving.map((serving, index) => <ServingItem servingArr={props.serving} key={index} {...serving} bartenders={props.bartenders} />);

  return (
    <FlipMove style={{ overflowAnchor: "none" }} maintainContainerHeight="true" appearAnimation="fade" enterAnimation="fade" leaveAnimation="fade" className="queue-list" typeName="section">
      {servingArr}
    </FlipMove>
  );
}
