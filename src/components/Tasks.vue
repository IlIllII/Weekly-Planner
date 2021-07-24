<template>
    <div class="task-list">
        <Day :day="day.day"/>
        <input class="task-form" v-model="text" type="text" placeholder="Task" v-on:keyup.enter="addTask">
        <button class="btn" @click="addTask">Add Task</button>
        <hr>
        <div :key="task.id" v-for="task in day.tasks">
            <Task
                class="task-item"
                @delete-task="deleteTask"
                :task="task"
            />
        </div>
    </div>
</template>


<script>
/*
Tasks.vue is the component that houses the tasks for 1 day. It accepts
a day as a prop so it knows which day it is when created and where to
store its task data. It catches emissions from its child component
and houses data that is controlled by its parent component.

It is parent to the Task and Day components. The Tasks are dynamically
created and deleted by buttons and the Day is passed in and displayed
at the top of each list.
*/


import Task from "./Task.vue"
import Day from "./Day.vue"

export default {
    name: "Tasks",
    components: {
        Task,
        Day,
    },
    props: {
        day: Object,
    },

    methods: {
        deleteTask(id) {
            // this.day is an object that is accessible from both the Tasks
            // and Week components by way of the prop passed in from the
            // parent component.
            this.day.tasks = this.day.tasks.filter((task) => task.id != id)
        },
        addTask() {
            if (!this.text) {
                alert("Please add a task")
                return
            }
            // Creates a new task by assigning a random id to it.
            const newTask = {
                id: Math.floor(Math.random() * 100000),
                title: this.text,
                complete: false
            }
            this.day.tasks.push(newTask)
            this.text = ""
        },
    },

    data() {
        return {
            tasks: this.day.tasks,
            text: "",
        }
    },
}
</script>

<style scoped>
.task-list {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 250px;
    height: 800px;
    border: 3px solid rgb(189, 179, 255);
    border-radius: 15px;
    margin: 3px;
    background-color: white;
}

.task-form {
    padding: 3px;
    margin: 5px 20px;
    border-radius: 6px;
}


.btn {
    margin: 10px 75px;
    background-color: darkslateblue;
    border: none;
    box-shadow: none;
    color: white;
    text-align: center;
    padding: 5px 10px;
    font-size: 16px;
    border-radius: 8px;
    transition-duration: 0.2s;
    cursor: pointer;
}

.btn:active {
    margin: 11px 76px;
    padding: 4px 9px
}

hr {
    width: 200px;
    border-top: 1px solid #393E46;
}

.task-item {
    font-size: 14px;
    margin: 0 15px 0 15px;
    padding: 0px;
    text-align: left;
    background-color: inherit;
}
</style>