import { Card } from 'react-bootstrap';
import gateways from "../static/DefaultPageData";
import styles from './GatewayCard.module.css';
import LineLoop from '../LineData/LineLoop';

const GatewayLoop = () => {
    return (
        <div className={styles.CardContainer}>

    <Card className={styles.GatewayCard}>
        <Card.Body className={styles.GatewayCardHeader}>
            <i className="fas fa-circle" style={{ fontSize: '15px', color: 'green' }}></i>
            <span>100% Uptime</span>
            <i className="fas fa-circle" style={{ fontSize: '15px', color: 'yellow' }}></i>
            <span>Partial degradation</span>
            <i className="fas fa-circle" style={{ fontSize: '15px', color: 'red' }}></i>
            <span>Downtime</span>
            <div className={styles.dropdown}>
            <button className={styles.dropbtn}>Payment Method Type
                <i class="fa fa-caret-down"></i>
            </button>
            <div className={styles.dropdownContent}>
                <a href="#">Credit Card</a>
                <a href="#">ACH</a>
                <a href="#">Bank Transfer</a>
            </div>
        </div>
        </Card.Body>
    </Card>
    {
        gateways.map((gatewayData, index2) => {
            return (
                <Card className={styles.GatewayCard} key={index2}>
                    <Card.Body className={styles.GatewayCardBody}>
                        <Card.Title>{gatewayData.gatewayName}</Card.Title>
                        <LineLoop index={index2} />

                    </Card.Body>
                </Card>
            )
        })
    }
    </div >
    );
}
export default GatewayLoop;