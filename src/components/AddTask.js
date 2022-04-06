import { Component } from "react";
class AddTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }

  render() {
    console.log(this.state.text);
    return (
      <div>
        <input
          type="text"
          onChange={(event) => this.setState({ text: event.target.value })}
          value={this.state.text}
        />
        <button
          onClick={() => {
            this.props.addTodo(this.state.text);
            this.setState({ text: "" });
          }}
        >
          Add Task
        </button>
      </div>
    );
  }
}

export default AddTask;
