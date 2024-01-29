import { useSelector } from "react-redux";
import {selectorsValue} from "../engine/slice/counter.js";

function Footer() {
    const counterState = useSelector(selectorsValue);
    return(
            <footer>
                <span>Counter: {counterState}</span>
            </footer>
    )
}
export default Footer;