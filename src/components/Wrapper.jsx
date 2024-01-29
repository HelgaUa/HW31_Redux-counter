import Button from "./Button.jsx";
import ClickedValue from "./ClickedValue.jsx";
import { useDispatch } from "react-redux";
import counterSlice from "../engine/slice/counter.js";

function Wrapper() {
    const dispatch = useDispatch();
    const onIncrement = () => {
        dispatch(counterSlice.actions.increment())
    }
    const onDecrement = () => {
        dispatch(counterSlice.actions.decrement())
    }

    return (
        <div>
            <ClickedValue/>
            <Button onClick={onIncrement}>+< /Button>
            <Button onClick={onDecrement}>-< /Button>
        </div>
    )
}

export default Wrapper;