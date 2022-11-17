import { Card } from 'react-bootstrap';
import gateways from "../static/DefaultPageData";
import styles from './GatewayCard.module.css';
import LineLoop from '../LineData/LineLoop';
const GatewayLoop = () => {
    return(
        <div>
        {
            gateways.map((gatewayData, index) => {
                return (
                    <div key = {index} className={styles.GatewayCard}>
                        <Card border="secondary">
                        <Card.Body>
                            <Card.Title className={styles.cardTitle}>{gatewayData.gatewayName}</Card.Title>
                            <LineLoop/>
                        </Card.Body>
                        </Card>
                    </div>
                )
            })
        }
    </div>
    );
}
 
export default GatewayLoop;