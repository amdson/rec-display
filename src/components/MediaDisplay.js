import React from "react";

export var MediaPanel = ({data}) => {
  // let float_side = (data.side_left ? "left" : "right"); 
    let border_color = (data.selected ? "#A9FF00" : "#030303"); 
    return (
      <div className="MediaPanel" style={{backgroundColor: "#FFFFF0", margin: 1,
          borderWidth: "3px", borderColor: border_color}}>

        <p> {data.content.title} </p>
      </div>
    );
  };

class MediaDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.selectionUpdate = this.selectionUpdate.bind(this); 
    this.state = {
      selection: 0
    };
  }

  selectionUpdate (e) {
      console.log("key pressed"); 
      switch (e.key) {
        case "Left": // IE/Edge specific value
        case "ArrowLeft":
          // Do something for "left arrow" key press.
          if(this.state.selection >= 0) {
            this.setState({selection: -1}); 
          }
          break; 
        case "Right": // IE/Edge specific value
        case "ArrowRight":
          // Do something for "right arrow" key press.
          if(this.state.selection <= 0) {
            this.setState({selection: 1}); 
          }
          break; 
        case "Down": // IE/Edge specific value
        case "ArrowDown":
          // Do something for "down arrow" key press.
          break;
        case "Up": // IE/Edge specific value
        case "ArrowUp":
          // Do something for "up arrow" key press.
          break;
        default:
          return; 
    }
  }

  render() {
    // return (
    //   <div>
    //     <p>You clicked {this.state.count} times</p>
    //     <button onClick={() => this.setState({ count: this.state.count + 1 })}>
    //       Click me
    //     </button>
    //   </div>
    // );
    let p = this.props.data; 
    let left = p[0];
    let right = p[1]; 
    // window.addEventListener("keydown", this.selectionUpdate);
    return (
      <div>
        <h1>Left or right?</h1>
        <div className="MediaDisplay"
            style= {{borderWidth: "5px", borderTopColor: "#B10101",
                borderLeftColor: "#8CC152", borderRightColor: "#8CC152",
                borderBottomColor: "#0808A8", borderStyle: "solid"}}
                >
          <MediaPanel data={{content: left, side_left: true, selected: this.state.selection < 0}}/>
          <MediaPanel data={{content: right, side_left: false, selected: this.state.selection > 0}}/>
        </div>
      </div>
    );
  }
}

export {MediaDisplay};
