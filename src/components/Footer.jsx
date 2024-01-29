import { useSelector } from "react-redux";


function Footer() {
    const counterState = useSelector(state => state.counter.value)
    return(
            <footer>
                <span>Counter: {counterState}</span>
            </footer>
    )
}
export default Footer;