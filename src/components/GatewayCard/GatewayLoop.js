import React, { useState } from "react";
import styles from "./GatewayCard.module.css";
import LineLoop from "../LineData/LineLoop";
import { BsSoundwave } from "react-icons/bs";
import { Card, Dropdown, DropdownButton } from "react-bootstrap";
import DefaultPageData from '../static/DefaultPageData.json';
import DefaultPageData_PMFilter from "../static/DefaultPageData_PMFilter";

const getData = (value) => {
  value = value.value;
  let data = [];
  if (value === 'Select All Payment Method' || value === '') {
    data = DefaultPageData.gateways;
  } else {
    data = DefaultPageData_PMFilter.gateways;
  }
  return (
    data.map((gatewayData, index2) => {
      return (
        <Card className={styles.GatewayCard} key={index2}>
          <Card.Body className={styles.GatewayCardBody}>
            <Card.Title>{gatewayData.gatewayName}</Card.Title>
            <LineLoop index={index2} />
            <Card.Text className={styles.GatewayCardText}><span>{gatewayData.overallSuccessRate}% uptime for the past 48 hours</span></Card.Text>
          </Card.Body>
        </Card>
      );
    })
  );
}

const getValue = (value) => {
  value = value.value;
  if(value === '') {
    return 'Select All Payment Method';
  } 
  return value;
}


const GatewayLoop = () => {
  let [value, setValue] = useState("");
  const handleSelect = (e) => {
    setValue(e);
  };
  return (
    <div className={styles.CardContainer}>
      <Card className={styles.GatewayCard}>
        <Card.Body className={styles.GatewayCardHeader}>
          <div className={styles.CardChild}>
            <DropdownButton
              className={styles.Dropdown}
              title={getValue({value})}
              onSelect={handleSelect}
              defaultValue = "Select All Payment Method"
            >
              <Dropdown.Item eventKey="Select All Payment Method">Select All Payment Method</Dropdown.Item>
              <Dropdown.Item eventKey="CreditCard">Credit Card</Dropdown.Item>
              <Dropdown.Item eventKey="ACH">ACH</Dropdown.Item>
            </DropdownButton>
          </div>
          <div className={styles.CardChild}>
            <BsSoundwave className={styles.Uptime} />
            <span>100% Uptime</span>
            <BsSoundwave className={styles.PartialDegradation} />
            <span>Partial degradation</span>
            <BsSoundwave className={styles.Downtime} />
            <span>Downtime</span>
          </div>
        </Card.Body>
      </Card>
      {getData({value})}
    </div>
  );
};
export default GatewayLoop;
