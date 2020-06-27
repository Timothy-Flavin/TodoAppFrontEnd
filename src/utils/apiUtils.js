"use strict";

import axios from "axios";
import VueAxios from "vue-axios";

export const getAllTodos = async function() {
  let response = await axios.get(`http://192.168.1.189:4000/api/todoLists`);
  return response.data;
};
export const getTodo = async function(todoList) {
  console.log(`http://192.168.1.189:4000/api/todoList/${todoList._id}`)
  let response = await axios.get(`http://192.168.1.189:4000/api/todoList/${todoList._id}`);
  return response.data;
};
export const postTodo = async function(todoList) {
  let response = await axios.post(
    `http://192.168.1.189:4000/api/todoLists`,
    todoList
  );
  return response.data;
};
export const updateTodo = async function(todoList) {
  let response = await axios.put(
    `http://192.168.1.189:4000/api/todoList/${todoList._id}`,
    todoList
  );
  return response.data;
};
export const deleteTodo = async function(todoList) {
  let response = await axios.delete(
    `http://192.168.1.189:4000/api/todoList/${todoList._id}`
  );
  return response.data;
};
