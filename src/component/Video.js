import Vimeo from "@u-wave/react-vimeo";
import {useState} from "react";


export default function Video (props) {

    const [index, setIndex] = useState(0);

    const App = () => {
        setIndex(index + 1);
    }

    return (
        <div className={"bg-black text-white w-full justify-center"}>

            <iframe src={"https://player.vimeo.com/video/" + props.video} className={"w-full max-h-[40vh] lg:max-h-[calc(100vh-250px)] pointer-events-auto"}
                    allow={"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"} allowFullScreen style={{ aspectRatio: 16 / 9 }} key={props.key} />
            <div className={"flex justify-between mt-2 w-full"}>
                <div className={"text-left"}>
                    <p>{props.title}</p>
                </div>
                <div className={"text-right"}>
                    <p>{props.date}</p>
                </div>
            </div>
        </div>
    );

}