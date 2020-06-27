<template>
  <div class="todo">
    <p>{{currentList}}, {{currentTask}}</p>
    <div @click="updateCurrentTodo(index)" v-for="(list, index) in todoLists" v-bind:key="index">
      <span>
        <h1>{{ index + 1 }}: {{ list.todo_list_name }}</h1>
        <p>
          <span v-for="(tag, i) in list.tags" v-bind:key="i"> {{ tag }}, </span>
        </p>
        <div v-for="(todo, i) in list.tasks" v-bind:key="i">
          <span>
          {{ i + 1 }} :
            <button @click="cancelTodo(index, i)" >cancel</button>
            <button>done</button>
          <span @click="editTodo(index,i)">
            
            {{ todo }}
          </span>
          </span>
        </div>
        <input v-model="tempData[index]" @keydown.enter="addTask(index, tempData[index])">
      </span>
    </div>
  </div>
</template>

<script>
import { getAllTodos, postTodo, getTodo, updateTodo, deleteTodo } from "../utils/apiUtils.js";

export default {
  name: "TodoPage",
  components: {},
  data() {
    return {
      apiResponse: "nothin yet chief",
      todoLists: [
        {
          todo_list_name: "testList",
          tasks: ["do laundry", "get groceries"],
          tags: ["general", "housework"]
        },
        {
          todo_list_name: "listItemTwo",
          tasks: ["Code suff", "update api"],
          tags: ["programming", "new skills"]
        }
      ],
      list: {},
      todo: String,
      tempData: [],
      currentList: 0,
      currentTask: []
    };
  },
  computed: {},
  props: {},
  async mounted() {
    
    //this.apiResponse = await postTodo(this.todoLists[1]);
    console.log(this.apiResponse)
    this.apiResponse = await getAllTodos();
    this.todoLists = this.apiResponse;
    for(var i = 0; i < this.todoLists.length;i++){
      this.currentTask[i]=this.todoLists[i].tasks.length
    }
    this.apiResponse = await getTodo(this.todoLists[0])
    console.log(this.apiResponse)
    //this.apiResponse = await deleteTodo(this.todoLists[3]);
    //console.log(this.apiResponse)
  },
  methods: {
    cancelTodo(todoListNum, taskNum){
      console.log(this.todoLists[todoListNum].tasks[taskNum])
      this.todoLists[todoListNum].tasks.splice(taskNum,1)
      updateTodo(this.todoLists[todoListNum])
      this.currentTask[todoListNum]=this.todoLists[todoListNum].tasks.length
    },
    cancelTodoList(todoListNum){

    },
    addTask(index, task){
      this.todoLists[index].tasks[this.currentTask[index]]=this.tempData[index]
      updateTodo(this.todoLists[index])
      this.tempData[index]=''
      this.currentTask[index]=this.todoLists[index].tasks.length
      this.$forceUpdate()
    },
    editTodo(index,i){
      this.tempData[index]=this.todoLists[index].tasks[i]
      this.currentTask[index] = i
      this.$forceUpdate()
    },
    updateCurrentTodo(index){
      this.currentList=index
      for(var i=0; i < this.todoLists.length; i++){
        if(i!=index && this.currentTask[i]+1){
          this.currentTask[i]=this.todoLists[i].tasks.length
          this.tempData[i]=''
        }
      }
    }
  }
};
</script>
