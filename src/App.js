import React, { Component } from "react";
import TodoInput from "./component/TodoInput";
import TodoList from "./component/Todolist";

import "bootstrap/dist/css/bootstrap.min.css";
import uuid from "react-uuid";

class App extends Component {
  state = {
    items: [],
    id: uuid(),
    item: "",
    editItem: false,
  };
  handleChange = (e) => {
    this.setState({
      item: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      id: this.state.id,
      title: this.state.item,
    };

    const updatedItems = [...this.state.items, newItem];

    this.setState({
      items: updatedItems,
      item: "",
      id: uuid(),
      editItem: false,
    });
  };
  clearList = () => {
    this.setState({
      items: [],
    });
  };
  handleDelete = (id) => {
    const filteredItems = this.state.items.filter((item) => item.id !== id);
    this.setState({
      items: filteredItems,
    });
  };
  handleEdit = (id) => {
    const filteredItems = this.state.items.filter((item) => item.id !== id);
    const selectItem = this.state.items.find((item) => (item.id = id));
    this.setState({
      items: filteredItems,
      item: selectItem.title,
      editItem: true,
      id: id,
    });
  };
  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">todo input</h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            ></TodoInput>
            <TodoList
              items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
              editItem={this.state.editItem}
            ></TodoList>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
