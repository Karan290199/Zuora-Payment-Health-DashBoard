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
                    <div key = {index} className={styles.MainCard}>
                        <Card border="primary" className={styles.GatewayCard}>
                        <Card.Body>
                            <Card.Title>{gatewayData.gatewayName}</Card.Title>
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