import React from 'react';
import PropTypes from 'prop-types';
import styles from './GatewayCard.module.css';
import LineLoop from '../LineData/LineLoop';
import Card from 'react-bootstrap/Card';

const GatewayCard = () => (
  <div>
    <Card border="primary" className={styles.GatewayCard}>
      <Card.Body>
        <LineLoop/>
      </Card.Body>
    </Card>
  </div>
);

GatewayCard.propTypes = {};

GatewayCard.defaultProps = {};

export default GatewayCard;
