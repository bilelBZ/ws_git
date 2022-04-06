import React from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        { id: Math.random(), text: "task1" },
        { id: Math.random(), text: "task2" },
        { id: Math.random(), text: "task3" },
      ],
    };
  }

  render() {
    const addTodo = (text) => {
      return this.setState({
        tasks: [...this.state.tasks, { id: Math.random(), text: text }],
      });
    };
    return (
      <div>
        <AddTask addTodo={addTodo} />
        <TaskList tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
