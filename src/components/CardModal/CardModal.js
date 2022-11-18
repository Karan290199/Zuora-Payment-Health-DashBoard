import React, { useState } from "react";
import { OverlayTrigger, Popover } from "react-bootstrap";
import ModuleData_MinuteDistribution from "../static/ModuleData_MinuteDistribution.json";
import styles from "./CardModal.module.css";

const getFilteredName = () => {
  let minuteData = ModuleData_MinuteDistribution.ModuleDataMinDist;
  const content = [];
  let data;
  for (let index = 0; index < minuteData[0].healthMetrics.length; index++) {
    if (minuteData[0].healthMetrics[index].integrationFailure === 0) {
      data = <button className={styles.LineData_G} />;
    } else if (minuteData[0].healthMetrics[index].integrationFailure >= 80) {
      data = <button className={styles.LineData_R} />;
    } else {
      data = <button className={styles.LineData_Y} />;
    }
    content.push(data);
  }
  console.log(content.length);
  return content;
};

const getUptime = () => {
  let minuteData = ModuleData_MinuteDistribution.ModuleDataMinDist;
  return minuteData[0].overallSuccessRate;
}

const getSuccessValues = () => {
  let minuteData = ModuleData_MinuteDistribution.ModuleDataMinDist;
  let cnt = 0;
  for (let index = 0; index < minuteData[0].healthMetrics.length; index++) {
    if (minuteData[0].healthMetrics[index].integrationFailure >= 0 && minuteData[0].healthMetrics[index].integrationFailure <= 10) {
      cnt = cnt + 1;
    }
  }
  return cnt;
}
const CardModal = ( {classname, index, index2 }) => {
  const renderTooltip = (
    <Popover id={`popover-positioned-top`}>
      <Popover.Body>
          Success Rate : {getSuccessValues()}%
          <br/>
          Failure Rate : {100 - getSuccessValues()}%
      </Popover.Body>
    </Popover>
  );

  const renderPopup = (
    <Popover id={`popover-positioned-bottom`} className = {styles.CardModal}>
      <Popover.Header className = {styles.CardModalHeader}>
        {getUptime()}% uptime for the last 60 seconds
      </Popover.Header>
      <Popover.Body className={styles.CardModalBody}>
          <ul>{getFilteredName()}</ul>
          Success Rate : {getSuccessValues()}%
          <br/>
          Failure Rate : {100 - getSuccessValues()}%
      </Popover.Body>
    </Popover>
  );
  const [triggered, setTrigger] = useState(false);
  return (
    <OverlayTrigger
      trigger={triggered ? "click" : ["hover", "focus"]}
      rootClose={triggered}
      key={index}
      placement={triggered ? "bottom" : "top"}
      overlay={triggered ? renderPopup : renderTooltip}
    >
      <button
        className={classname}
        key={index2}
        onClick={() => setTrigger(true)}
      ></button>
    </OverlayTrigger>
  );
};

export default CardModal;
