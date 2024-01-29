import { useSelector } from "react-redux";
import {selectorsValue} from "../engine/slice/counter.js";

function ClickedValue() {
    const counterState = useSelector(selectorsValue);
    return(
            <p>
                 <span>Clicked: {counterState}</span>
            </p>
    )
}
export default ClickedValue;