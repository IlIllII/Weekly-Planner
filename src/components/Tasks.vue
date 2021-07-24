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
            this.day.tasks = this.day.tasks.filter((task) => task.id != id)
        },
        addTask() {
            if (!this.text) {
                alert("Please add a task")
                return
            }
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

    // created() {
    //     this.tasks = [
    //         // Task objects go here
    //     ]
    // },
    
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