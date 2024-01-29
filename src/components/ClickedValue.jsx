import { useSelector } from "react-redux";

function ClickedValue() {
    const counterState = useSelector(state => state.counter.value);
    return(
            <p>
                 <span>Clicked: {counterState}</span>
            </p>
    )
}
export default ClickedValue;