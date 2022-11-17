import gateways from "../static/DefaultPageData";
import styles from './LineData.module.css';

const generateLines = (index2) => {
    const content = [];
    let data ;
    for (let index = 0; index < gateways[0].healthMetrics.length; index++) {
        if (gateways[index2.index].healthMetrics[index].integrationFailure === 0){
           data = <button className={styles.LineData_G} key = {index}></button>
        } else if (gateways[index2.index].healthMetrics[index].integrationFailure >= 80) {
            data = <button className={styles.LineData_R} key = {index} ></button>
        } else {
            data = <button className={styles.LineData_Y} key = {index} ></button>
        }
        content.push(data);
    }
    return content;
}

const LineLoop = (index2) => {
    return ( 
       <ul>
        {generateLines(index2)}
       </ul>
    );
}
 
export default LineLoop;