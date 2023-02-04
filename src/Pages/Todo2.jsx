import React, { useReducer, useState } from 'react';
import styled from 'styled-components';
const Style = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
`
const initialState = {
  todos: ["task1","task2","task3"],
  currentTodo: ''
};
const ACTION={
    DELETE:"delete",
    UPDATE:"update",
    CREATE:"create",
    ADD:"add",
}
const reducer = (state, action) => {
  switch (action.type) {
    case ACTION.UPDATE:
      return { ...state, currentTodo: action.value };
    case ACTION.ADD:
      return { ...state, todos: [...state.todos, state.currentTodo], currentTodo: '' };
    case ACTION.DELETE:
      return { ...state, todos: state.todos.filter((_, index) => index !== action.index) };
    case 'selectTodo':
    return { ...state, selectedTodoIndex: action.index, currentTodo: state.todos[action.index] };
    case 'Test':
    return { ...state, todos:[...state.todos,action.index]};
    default:
      return state;
  }
};

const Todo = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [Select,setIsSelect]=useState({isSelect:false,id:-1}); 
  const handleInputChange = (e) => {
    dispatch({
      type: ACTION.UPDATE,
      value: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(Select.isSelect){
        dispatch({
            type: "Test",
            value: e.target.value,
          })
          setIsSelect(
            {
                isSelect:false,
                id:-1
            })
        }else{
            dispatch({
                type: ACTION.ADD,
            });
        }
  };
const handleSelectTodo =(index)=>{
    dispatch({
        type: 'selectTodo',
        index
      });
      setIsSelect(
        {
            isSelect:true,
            id:index
        }
      )
}
  const handleRemoveTodo = (index) => {
    dispatch({
      type: ACTION.DELETE,
      index,
    });
  };

  return (
    <Style>
      <form onSubmit={handleSubmit}>
        <input type="text" value={state.currentTodo} onChange={handleInputChange} />
        <button type="submit">{Select.isSelect?"Update":"Add"} Todo</button>
      </form>
      <ul>
        {state.todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button type="button" onClick={() => handleRemoveTodo(index)}>
              Remove
            </button>
            <button type="button" onClick={() => handleSelectTodo(index)}>
              update
            </button>
          </li>
        ))}
      </ul>
    </Style>
  );
};

export default Todo;
