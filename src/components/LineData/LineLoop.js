import LineData from "./LineData"

const generateLines = () => {
    const content = [];
    for (let index = 0; index < 48; index++) {
        let data = <LineData/>;
        content.push(data);
    }
    return content;
}

const LineLoop = () => {
    return ( 
       <ul>
        {generateLines()}
       </ul>
    );
}
 
export default LineLoop;