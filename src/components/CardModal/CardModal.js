import React from 'react';
import { Button, OverlayTrigger, Popover } from "react-bootstrap";
import ModuleData_MinuteDistribution from "../static/ModuleData_MinuteDistribution.json";
import styles from "../LineData/LineData.module.css";

const CardModal = ({ LineData, classname, index, index2 }) => {
  const ModuleData = ModuleData_MinuteDistribution;
  const content = [];
  let data;
  for (let index = 0; index < ModuleData.ModuleDataMinDist[0].healthMetrics.length; index++) {
    if (ModuleData.ModuleDataMinDist[0].healthMetrics[index].integrationFailure === 0) {
      data = (
        <CardModal
          LineData={LineData}
          classname={styles.LineData_G}
          index={styles.LineData_G + index}
          index2={styles.LineData_G + index2}
        />
      );
    } else if (ModuleData.ModuleDataMinDist[0].healthMetrics[index].integrationFailure >= 80) {
      data = (
        <CardModal
          LineData={LineData}
          classname={styles.LineData_R}
          index={styles.LineData_R + index}
          index2={styles.LineData_R + index2}
        />
      );
    } else {
      data = (
        <CardModal
          LineData={LineData}
          classname={styles.LineData_Y}
          index={styles.LineData_Y + index}
          index2={styles.LineData_Y + index2}
        />
      );
    }
    content.push(data);
  }
  return (
    <OverlayTrigger
      trigger="click"
      rootClose
      key={index}
      placement="bottom"
      overlay={
        <Popover id={`popover-positioned-bottom`}>
          <Popover.Body>
            {content}
          </Popover.Body>
        </Popover>
      }
    >
      <button className={classname} key={index2}></button>
    </OverlayTrigger>
  );
};

export default CardModal;
