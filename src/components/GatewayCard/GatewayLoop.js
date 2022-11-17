import { Card } from 'react-bootstrap';
import gateways from "../static/DefaultPageData";
import styles from './GatewayCard.module.css';
import LineLoop from '../LineData/LineLoop';
const GatewayLoop = () => {
    return(
        <div className={styles.CardContainer}>
        {
            gateways.map((gatewayData, index) => {
                return (
                    <Card className={styles.GatewayCard} key = {index}>
                    <Card.Body className={styles.GatewayCardBody}>
                        <Card.Title>{gatewayData.gatewayName}</Card.Title>
                        <LineLoop/>
                    </Card.Body>
                    </Card>
                )
            })
        }
    </div>
    );
}
 
export default GatewayLoop;