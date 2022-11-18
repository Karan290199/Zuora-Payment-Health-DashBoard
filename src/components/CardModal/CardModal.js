import React from 'react';
import { Button, OverlayTrigger, Popover } from "react-bootstrap";
import ModuleData_MinuteDistribution from "../static/ModuleData_MinuteDistribution.json";

const CardModal = ({LineData, classname, index, index2}) => {
  return (
    <OverlayTrigger
    trigger="click"
    rootClose
    key={index}
    placement="bottom"
    overlay={
      <Popover id={`popover-positioned-bottom`}>
        <Popover.Body>
        </Popover.Body>
      </Popover>
    }
  >
    <button className={classname} key = {index2}></button>
  </OverlayTrigger>
    );
};

export default CardModal;
