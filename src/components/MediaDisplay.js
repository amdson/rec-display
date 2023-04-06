import React from "react";

function user_update(user_id, media_data, selected, update_event, update_callback) {
  let query_path = `http://localhost:5000/query/${user_id}`; 
  fetch(query_path, {
    method: 'POST',
    body: JSON.stringify({
      user_id: user_id,
      m1: media_data[0].id,
      m2: media_data[1].id,
      selected: selected, 
      choice: update_event //"UNKNOWN", "UNSURE", "BETTER"
    }),
    headers: {
      'mode': 'cors',
      'Content-Type':'application/json',
    },
  })
     .then((response) => response.json())
     .then((data) => {
        console.log("Recieved post result", data); 
        let media_data = data.media_data; 
        update_callback(media_data); 
     })
     .catch((err) => {
        console.log(err.message);
     });
}

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
      // console.log("key pressed"); 
      switch (e.key) {
        case "Left": // IE/Edge specific value
        case "ArrowLeft":
          // Do something for "left arrow" key press.
          if(this.state.selection >= 0) {
            this.setState({selection: -1}); 
          } else {
            user_update(this.props.user_id, this.props.data, this.state.selection, "BETTER", this.props.media_callback);
          }
          break; 
        case "Right": // IE/Edge specific value
        case "ArrowRight":
          // Do something for "right arrow" key press.
          if(this.state.selection <= 0) {
            this.setState({selection: 1}); 
          } else {
            user_update(this.props.user_id, this.props.data, this.state.selection, "BETTER", this.props.media_callback);
          }
          break; 
        case "Down": // IE/Edge specific value
        case "ArrowDown":
          // Do something for "down arrow" key press.
          user_update(this.props.user_id, this.props.data, this.state.selection, "UNSURE", this.props.media_callback);
          break;
        case "Up": // IE/Edge specific value
        case "ArrowUp":
          // Do something for "up arrow" key press.
          if(this.state.selection !== 0) {
            user_update(this.props.user_id, this.props.data, this.state.selection, "UNKNOWN", this.props.media_callback);
          }
          break;
        default:
          return; 
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.selectionUpdate);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.selectionUpdate);
  }

  render() {
    let p = this.props.data; 
    let left = p[0];
    let right = p[1]; 
    return (
      <div text-align="center">
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
