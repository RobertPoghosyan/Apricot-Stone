import React, { Component } from "react";
import { connect } from "react-redux";

import PostModal from "components/PostModal/PostModal";
import { updateTodoInList } from "actions/todoActions";
import Todo from "components/Todo/Todo";
import fbService from "api/fbService";

import load from "assets/load.gif";

import "./TodosDetails.scss";

class TodosDetails extends Component {
  state = {
    todo: null,
    isEditModalOpen: false,
    titleValue: "",
    bodyValue: "",
  };

  componentDidMount() {
    fbService.todoService
      .getPost(this.props.match.params.todoId)
      .then((resJson) => {
        this.setState({
          todo: resJson,
          titleValue: resJson.title,
          bodyValue: resJson.body,
        });
      })
      .catch((err) => {
        console.log(err);
        this.props.history.push("/");
      });
  }

  toggleCloseModal = () => {
    this.setState((prevState) => ({
      isEditModalOpen: !prevState.isEditModalOpen,
    }));
  };

  saveTodo = () => {
    fbService.todoService
      .updatePost({
        ...this.state.todo,
        title: this.state.titleValue,
        body: this.state.bodyValue,
      })
      .then((res) => {
        const updatedTodo = {
          ...this.state.todo,
          title: this.state.titleValue,
          body: this.state.bodyValue,
        };
        this.setState({
          todo: updatedTodo,
          isEditModalOpen: false,
        });

        const { todos } = this.props;
        if (todos && todos.find((el) => el.id === this.state.todo.id)) {
          this.props.updateTodoInList(updatedTodo);
        }
      })
      .catch((err) => {
        console.log(err);
        this.toggleCloseModal();
      });
  };

  changeValue = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { todo, isEditModalOpen, titleValue, bodyValue } = this.state;
    if (!todo) {
      return (
        <div>
          <img src={load}></img>
        </div>
      );
    }
    return (
      <div className="app-postDetails">
        <Todo todo={todo} edit={this.toggleCloseModal} />
        <PostModal
          action={this.saveTodo}
          bodyValue={bodyValue}
          titleValue={titleValue}
          changeValue={this.changeValue}
          isOpen={isEditModalOpen}
          onClose={this.toggleCloseModal}
          buttonTitle="SAVE"
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todosData.todos,
  };
};

const mapDispatchToProps = {
  updateTodoInList,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodosDetails);
