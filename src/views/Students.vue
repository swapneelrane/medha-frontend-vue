<template>
  <div class="Students">
    <h1>This is a Students page</h1>
    <students-list />
  </div>
</template>

<script>
import StudentsList from "../components/StudentsList.vue";

export default {
  components: {
    StudentsList
  }
};
</script>
