import logo from './logo.svg';
import './App.css';
import React, {useEffect} from "react";
import GifBar from "./component/GifBar";
import {aa} from "./aa";
import {isWindowLarge, useWindowDimensions} from "./util";
import Video from "./component/Video";



class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      gifbars: aa, // {video: String, title: String, date: String, giflinks: [Strings]
      selected: -1,
      width: window.innerWidth,
      key: 0,
    }

    this.changeSelected = this.changeSelected.bind(this);
    this.setWindowDimensions = this.setWindowDimensions.bind(this);
  }

  componentDidCatch(error, errorInfo) {
    console.log(error);
    console.log(errorInfo);
  }

  setWindowDimensions () {
    this.setState({width: window.innerWidth});
  }

  componentDidMount() {
    this.setState({gifbars: aa});

    window.addEventListener("resize", this.setWindowDimensions);
    return () => {
      window.removeEventListener("resize", this.setWindowDimensions);
    }
  }

  changeSelected (id) {
    this.setState({selected: id});
    this.setState({key: this.state.key + 1});
  }

  render() {

    let gifbarelements = [] // gifbar list

    for (let i = 0; i < this.state.gifbars.length; i++) {
      gifbarelements.push(
          <GifBar data={this.state.gifbars[i]} selected={this.state.selected} id={i} changeSelected={this.changeSelected} width={this.state.width}/>
      )
    }


    if (this.state.width >= 1024) {

      let virtSelected = this.state.selected;
      if (virtSelected < 0) virtSelected = 0;

      let video = <Video video={this.state.gifbars[virtSelected].video}
                         title={this.state.gifbars[virtSelected].title}
                         date={this.state.gifbars[virtSelected].date}
                         key={this.state.key} />

      return (
          <div className={"h-full overflow-auto grid grid-cols-2 grid-rows-1 xl:gap-20 px-10 flex-1 gap-10 xl:xl-20"}>
            <section className={"max-w-[650px] mx-auto h-full"}>
              {gifbarelements}
            </section>
            <section className={"relative pointer-events-none flex flex-col items-center justify-center"}>
              {video}
            </section>
            {window.innerWidth}
          </div>
      )
    } else {
      return (
          <div className={"max-w-[600px] mx-auto h-full bg-black"}>
            {gifbarelements}
            {this.state.selected}
          </div>

      );
    }

  }
}

export default App;
