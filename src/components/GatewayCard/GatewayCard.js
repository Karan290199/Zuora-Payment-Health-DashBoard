import React from 'react';
import PropTypes from 'prop-types';
import styles from './GatewayCard.module.css';
import LineLoop from '../LineData/LineLoop';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const GatewayCard = () => (
  <div className={styles.GatewayCard}>
    <Card>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
        <LineLoop/>
      </Card.Body>
    </Card>
  </div>
);

GatewayCard.propTypes = {};

GatewayCard.defaultProps = {};

export default GatewayCard;
