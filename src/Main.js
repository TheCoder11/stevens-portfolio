import {useEffect, useState} from "react";
import {aa} from "./aa";


export const Main = () => {

    const [gifbars, setGifbars] = useState(aa);
    const [selected, setSelected] = useState(-1);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const setWindowDimensions = () => {
        setWindowWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener("resize", setWindowDimensions);
        return () => {
            window.removeEventListener("resize", setWindowDimensions);
        }
    }, [])

    return (
        <div>Width: {windowWidth}</div>
    )


}
export default Main;