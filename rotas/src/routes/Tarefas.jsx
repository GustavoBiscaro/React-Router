import React from 'react';
import { useState, useRef, useEffect } from 'react';

import "./Tarefas.css";

const Tarefas = () => {
  const [todos, setTodos] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [editText, setEditText] = useState('');
    const todoInputRef = useRef(null);
  
    const saveTodo = (text) => {
      const newTodo = {
        text: text,
        done: false,
      };
      setTodos([...todos, newTodo]);
      todoInputRef.current.value = '';
      todoInputRef.current.focus();
    };
  
    const toggleForms = () => {
      setEditMode(!editMode);
    };
  
    const updateTodo = (text) => {
      setTodos(
        todos.map((todo) => {
          if (todo.text === editText) {
            return { ...todo, text: text };
          }
          return todo;
        })
      );
    };
  
  
    const removeTodo = (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    };
  
    const editTodo = (text) => {
      setEditText(text);
      toggleForms();
    };
  
    useEffect(() => {
      if (editMode) {
        todoInputRef.current.value = editText;
        todoInputRef.current.focus();
      }
    }, [editMode, editText]);
  
    return (
      <div className="taskContainer">
        <form onSubmit={(e) => {
          e.preventDefault();
          const inputValue = todoInputRef.current.value;
          if (inputValue.trim()) {
            saveTodo(inputValue);
          }
        }}>
           <h1>Tarefas</h1>
          <input type="text" ref={todoInputRef} />
          <button type="submit">Nova tarefa</button>
        </form>
        <ul>
          {todos.map((todo) => (
            <div key={todo.id}>
       
              <h3>{todo.text}</h3>
              <button className="edit-todo" onClick={() => editTodo(todo.text)}>
                Editar
              </button>
              <button className="remove-todo" onClick={() => removeTodo(todo.id)}>
                Remover
              </button>
            </div>
          ))}
        </ul>
        {editMode && (
          <form onSubmit={(e) => {
            e.preventDefault();
            const editInputValue = todoInputRef.current.value;
            if (editInputValue.trim()) {
              updateTodo(editInputValue);
            }
            toggleForms();
          }}>
            <input type="text" ref={todoInputRef} />
            <button type="submit">Atualizar</button>
            <button onClick={() => toggleForms()}>Cancelar</button>
          </form>
        )}
      </div>
    );
  }


export default Tarefas