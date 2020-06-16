<template>
  <div class="todo">
    <div v-for="(list, index) in todoLists" v-bind:key="index">
      <span>
        
        <h1>{{index+1}}: {{list.todo_list_name}}</h1>
        <p>
          <span v-for="(tag, i) in list.tags" v-bind:key="i">
           {{tag}}, 
          </span>  
        </p>
        <div v-for="(todo, i) in list.tasks" v-bind:key="i">
          <p>
            {{i+1}} :
            <button>cancel</button>
            <button>done</button>
            {{todo}}</p>
        </div>
      </span>
    </div>
    
  </div>
</template>

<script>
import {getAllTodos, postTodo} from "../utils/apiUtils.js"

export default {
    name: 'TodoPage',
    components: {},
    data() {
        return {
            apiResponse: 'nothin yet chief',
            todoLists:[
              {
                todo_list_name: "testList", 
                tasks: [
                  "do laundry", 
                  "get groceries"
                ], 
                tags: [
                  "general", 
                  "housework"
                ]
              },
              {
                todo_list_name: "listItemTwo", 
                tasks: [
                  "Code suff", 
                  "update api"
                ], 
                tags: [
                  "programming", 
                  "new skills"
                ]
              }
            ],
            list:{},
            todo:String
        }
    },
    computed:{

    },
    props:{

    },
    async mounted(){
        
        this.apiResponse = await getAllTodos()
        //console.log(this.apiResponse)
        this.todoLists = this.apiResponse
        //this.apiResponse = await postTodo(this.todoLists[0])
        //console.log(this.apiResponse)
    },
    methods:{

    }
}
</script>