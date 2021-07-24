<template>
    <div id="header" class="header">
        <h1>{{week}}</h1>
        <div>
            <button @click="clearWeek" class="next">Clear Week</button>
            <a href="#reflect-div"><button class="next">Reflect</button></a>
        </div>
        
    </div>

    <div class="week">
        <div :key="day.id" v-for="day in days">
            <Tasks :class="day.day" :day="day" />
        </div>
    </div>
    <br><br><br>
    <div id="reflect-div">

        <div class="header">
            <h1 style="text-align: left; color: white; padding: 0 0 0 20px">Reflection</h1>
            <a href="#header"><button class="next todo">Todo</button></a>
        </div>
        <textarea class="reflection" v-model="reflectionText" name="" id="" cols="30" rows="10" placeholder="This is where you can reflect on your week..."></textarea>
    </div>


</template>



<script>
import Tasks from "./Tasks.vue"


var curr = new Date;
var first = curr.getDate() - curr.getDay() - 1;
var last = first + 6;
var firstday = new Date(curr.setDate(first)).toUTCString().slice(0, -13);
var lastday = new Date(curr.setDate(last)).toUTCString().slice(0, -13);
let currentWeek = firstday + " - " + lastday;


export default {
    name: "Week",
    components: {
        Tasks,
    },
    methods: {
        clearWeek() {
            for (let day of this.days) {
                day.tasks = [];
            }
            this.reflectionText = "";
        }
    },
    data() {
        return {
            week: currentWeek,
            reflectionText: "",
            days: [
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
        }
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