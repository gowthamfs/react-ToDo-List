import React from 'react';
import React, { useState } from 'react';
import ListItem from './ListItem';
import './style.css';

export default function App(props) {
  const [todoName, setTodoName] = useState('');
  const [list, setList] = useState([]);
  const updateTodo = (e) => {
    setTodoName(e.target.value);
  };
  const addTodo = () => {
    setList([
      ...list,
      {
        name: todoName,
        completed: false,
      },
    ]);
    setTodoName('');
  };

  const onDone = (item) => {
    let newList = list.map((ListItem) => {
      if (ListItem.name === item.name) {
        return { ...ListItem, completed: !ListItem.completed };
      }
      return ListItem;
    });
    setList(newList);
  };

  const onDelete = (item) => {
    let newList = list.filter((ListItem) => {
      if (ListItem.name === item.name) {
        return false;
      }
      return true;
    });
    setList(newList);
  };

  return (
    <>
      <h1>ToDo List</h1>
      <input
        type="text"
        placeholder="Add ToDo list"
        value={todoName}
        onChange={updateTodo}
      />
      <button onClick={addTodo}>Submit</button>
      {list.map((item) => (
        <ListItem obj={item} onDone={onDone} onDelete={onDelete} />
      ))}
    </>
  );
}
