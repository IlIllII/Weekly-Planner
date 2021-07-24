<template>
    <!--
        This div contains the date of the week and a couple of buttons.
        The "Clear Week" button is attached to a JS function using Vue,
        while the "Reflect" button is simply a page anchor.
    -->
    <div id="header" class="header">
        <h1>{{week}}</h1>
        <div>
            <button @click="clearWeek" class="next">Clear Week</button>
            <a href="#reflect-div"><button class="next">Reflect</button></a>
        </div>
        
    </div>

    <!--
        The Week div contains our entire app. It is some simple html structure
        to house each day of the week, and we populate the days with Tasks
        components.
    -->
    <div class="week">
        <div :key="day.id" v-for="day in days">
            <Tasks :class="day.day" :day="day" />
        </div>
    </div>

    <br>
    <br>
    <br>

    <!--
        The reflect-div is a simple text area for weekly reflection. The button
        is another page anchor to get back to the weekly planner. We attach the
        reflectionText v-model so if we clear the week the text is deleted as well.
    -->
    <div id="reflect-div">
        <div class="header">
            <h1 style="text-align: left; color: white; padding: 0 0 0 20px">Reflection</h1>
            <a href="#header"><button class="next todo">Todo</button></a>
        </div>
        <textarea class="reflection" v-model="reflectionText" name="" id="" cols="30" rows="10" placeholder="This is where you can reflect on your week. It is not saved."></textarea>
    </div>
</template>



<script>
// We import the Tasks component to use for each day. It houses individual tasks and a day label.
import Tasks from "./Tasks.vue"

// This is some simple JS to get the current week to display above our task list.
var curr = new Date;
var first = curr.getDate() - curr.getDay() - 1;
var last = first + 6;
var firstday = new Date(curr.setDate(first)).toUTCString().slice(0, -13);
var lastday = new Date(curr.setDate(last)).toUTCString().slice(0, -13);

// We will register this in the components data() and inject it into the html.
let currentWeek = firstday + " - " + lastday; 


// Here we register everything we want to use in the html.
export default {
    name: "Week", // This is how we will refer to this component outside of this file.
    components: {
        // These are any components we will use in this component.
        // We only access Tasks, because within Tasks all of our other
        // Components are referenced.
        Tasks,
    },
    methods: {
        // This function gets called when the "Clear Week" button is pressed.
        clearWeek() {
            // We iterate over each days' task list and reset it.
            for (let day of this.days) {
                day.tasks = [];
            }
            // We also reset any reflection text.
            this.reflectionText = "";
        },
        // We will attach this simple handler to the window beforeUnload event
        // so we can persist the task data between page loads and browser sessions.
        handler() {
            window.localStorage.setItem("storedData", JSON.stringify(this.days))
        }
    },
    // This is where we register any data that we want to access in the template.
    data() {
        return {
            week: currentWeek, // This is the string we calculated above.
            reflectionText: "",
            days: [], // We will populate days from local storage, but we declare it first.
        }
    },
    // This is a lifecycle hook that gets called when this component is initialized.
    created() {
        // We check local storage for our data. If its not there, we initialize it with
        // no tasks, otherwise we load in our stored data.
        let storedData = window.localStorage.getItem("storedData");
        if (storedData == null) {
            this.days = [
                {
                    id: 1,
                    day:"Sunday",
                    tasks: []
                },
                {
                    id: 2,
                    day:"Monday",
                    tasks: []
                },
                {
                    id: 3,
                    day:"Tuesday",
                    tasks: []
                },
                {
                    id: 4,
                    day:"Wednesday",
                    tasks: []
                },
                {
                    id: 5,
                    day:"Thursday",
                    tasks: []
                },
                {
                    id: 6,
                    day:"Friday",
                    tasks: []
                },
                {
                    id: 7,
                    day:"Saturday",
                    tasks: []
                },
            ]
        } else {
            this.days = JSON.parse(storedData);
        }
        // We also add an event listener so we can persist our data on exit.
        window.addEventListener("beforeunload", this.handler)
    },
}
</script>



<style>
html {
    scroll-behavior: smooth;
}
</style>


<style scoped>
.week {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    background-color: darkslateblue;
    border-radius: 30px;
    padding: 30px 0;
}

.header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

h1 {
    margin: 10px 20px;
}

.next {
    margin: 10px 30px 10px 0;
    background-color: darkslateblue;
    border: none;
    box-shadow: none;
    color: white;
    text-align: center;
    width: 200px;
    font-size: 24px;
    border-radius: 15px;
    transition-duration: 0.2s;
    cursor: pointer;
    height: 64px;
}

.next:hover {
    background-color: rgb(52, 44, 100);
}


.reflection {
    margin: 5px 0 0 0;
    padding: 20px;
    width: 95%;
    border-radius: 15px;
    height: 770px;
}

.todo {
    background-color: white;
    color: darkslateblue;
}

.todo:hover {
    background-color: rgb(225, 223, 235);
}

#reflect-div {
    background-color: darkslateblue;
    border-radius: 30px;
    padding: 30px 0;
}

.Saturday, .Sunday {
    background-color: rgb(189, 179, 255);
    border-color: white;
}
</style>