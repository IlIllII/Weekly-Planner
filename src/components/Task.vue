<template>
    <div class="task">
        <input type="checkbox" @click="onToggle()">
        <h3 class="red" @click="$emit('delete-task', task.id)">x</h3>
        <h3 :class="[task.complete ? 'inactive' : '']">
            {{task.title}}
        </h3>
    </div>
</template>



<script>
// The task is a base component to be instantiated by a parent Task list.

export default {
    name: "Task",
    props: {
        task: Object,  // task objects have an id, title, and status properties
    },
    methods: {
        // On toggle we change the class and subsequently the style to strikethrough.
        onToggle() {
            this.task.complete = !this.task.complete;
        },
    },
    // On pressing the red x we emit an event to the task list to delete the task.
    emits: ["delete-task"],
}
</script>

<style scoped>
.task {
    display: flex;
    flex-direction: row;
    justify-content: flex-start; /* centers content along the main axis */
    align-items: baseline; /* centers content along secondary axis */
    background: #f4f4f4;
    margin: 5px;
    padding: 1px;
}

.inactive {
    text-decoration: line-through;
}

.red {
    color: red;
    cursor: pointer;
    padding: 0 15px 0 5px;
}
</style>