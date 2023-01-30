import React from "react";
import Video from "./Video";
import {isWindowLarge} from "../util";



class GifBar extends React.Component {

    constructor(props) {
        super(props);

        this.isChecked = this.isChecked.bind(this);

    }

    isChecked() {
        return (this.props.selected === this.props.id && (this.props.width <= 1024));
    }

    render () {
        if (this.isChecked()) {
            return (
                <div className={"px-5"}>
                    <Video video={this.props.data.video} title={this.props.data.title} date={this.props.data.date}/>
                </div>
            )
        } else {
            let links = []
            for (let i = 0; i < this.props.data.giflinks?.length; i++) {
                links.push(<img src={this.props.data.giflinks[i]} alt={"gif"}
                                className={"filter transition-all group-hover:brightness-100 group-hover:grayscale-0 w-full h-full grayscale brightness-75"} />)
            }

            return (
                <div className={"group flex h-full h-32 cursor-pointer "} onClick={() => this.props.changeSelected(this.props.id)}>
                    {links}
                </div>
            )
        }
    }

}

export default GifBar;