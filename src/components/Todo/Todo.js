import React, { useContext } from "react";
import PropTypes from "prop-types";
import EditIcon from "@material-ui/icons/Edit";
import Button from "@material-ui/core/Button";

import { AppContext } from "context/AppContext";
import Link from "components/Link/Link";

import like from "assets/like.png";
import travel from "assets/travel.png";

import "./Todo.scss";

const Todo = ({
  todo,
  className = "",
  isLink = false,
  edit = () => {},
  remove = () => {},
}) => {
  const context = useContext(AppContext);

  const removeHandler = (e) => {
    e.preventDefault();
    remove();
  };

  const Wrapper = ({ children }) => {
    const postClassName = `app-todo ${className}`;
    return isLink ? (
      <Link className={postClassName} to={`/todos/${todo.id}`}>
        {context.state.user ? (
          <Button variant="contained" color="primary" onClick={removeHandler}>
            <span className="app-post__edit">Remove</span>
          </Button>
        ) : null}
        {children}
      </Link>
    ) : (
      <div className={postClassName}>
        <Button variant="contained" color="primary" onClick={edit}>
          <EditIcon />
          <span className="app-todo__edit">Edit</span>
        </Button>
        {children}
      </div>
    );
  };
  return (
    <Wrapper>
      <span className="app-todo__title">{todo.title}</span>
      <span className="app-todo__body">{todo.body} {todo.completed === true ? <img alt = "like" src = {like} width = "24px" height = "24px"></img>:<img src = {travel} alt ="travel"></img>}</span>
      
    </Wrapper>
  );
};

Todo.propTypes = {
  todo: PropTypes.exact({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    completed: PropTypes.bool,
    id: PropTypes.number.isRequired,
    userId: PropTypes.number.isRequired,
    isLink: PropTypes.bool,
    edit: PropTypes.func,
    remove: PropTypes.func,
  }),
  className: PropTypes.string,
};

export default Todo;
