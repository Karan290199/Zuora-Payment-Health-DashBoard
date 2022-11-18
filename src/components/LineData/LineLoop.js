import DefaultPageData from "../static/DefaultPageData.json";
import styles from "./LineData.module.css";
import CardModal from "../CardModal/CardModal";

const LineLoop = (index2) => {
  const content = [];
  let data;
  const LineData = DefaultPageData.gateways;
  index2 = index2.index;
  for (let index = 0; index < LineData[0].healthMetrics.length; index++) {
    if (LineData[index2].healthMetrics[index].integrationFailure === 0) {
      data = (
        <CardModal
          LineData={LineData}
          classname={styles.LineData_G}
          index={styles.LineData_G + index}
          index2={styles.LineData_G + index2}
        />
      );
    } else if (LineData[index2].healthMetrics[index].integrationFailure >= 80) {
      data = (
        <CardModal
          LineData={LineData}
          classname={styles.LineData_R}
          index={styles.LineData_R + index}
          index2={styles.LineData_R + index2}
        />
      );
    } else {
      data = (
        <CardModal
          LineData={LineData}
          classname={styles.LineData_Y}
          index={styles.LineData_Y + index}
          index2={styles.LineData_Y + index2}
        />
      );
    }
    content.push(data);
  }
  return <ul>{content}</ul>;
};

export default LineLoop;
