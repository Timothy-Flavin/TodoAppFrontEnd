'use strict'

import axios from 'axios';
import VueAxios from 'vue-axios';

export const getAllTodos = async function() {
    let response = await axios.get(`http://192.168.1.154:4000/api/tasks`)
    return response.data
}
export const postTodo = async function(todoList) {
    let response = await axios.post(`http://192.168.1.154:4000/api/todoLists`, todoList)
    return response.data
}