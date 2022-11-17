import { Card } from 'react-bootstrap';
import gateways from "../static/DefaultPageData";
import styles from './GatewayCard.module.css';
import LineLoop from '../LineData/LineLoop';

const GatewayLoop = () => {
    return (
        <div className={styles.CardContainer}>

    <Card className={styles.GatewayCard}>
        <Card.Body className={styles.GatewayCardHeader}>
            <i className="fas fa-heart" style={{ fontSize: '20px', color: 'green' }}></i>
            <span>100% Uptime</span>
            <i className="fas fa-heart" style={{ fontSize: '20px', color: 'yellow' }}></i>
            <span>Partial degradation</span>
            <i className="fas fa-heart" style={{ fontSize: '20px', color: 'red' }}></i>
            <span>Downtime</span>
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