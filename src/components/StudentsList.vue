<template>
  <div>
    <ul>
      <li v-for="student in students" :key="student.id">
        Name: {{ student.first_name }}
      </li>
    </ul>
  </div>
</template>

<script>
import gql from "graphql-tag";

const query = gql`
  query getStudents {
    students(sort: "id:asc") {
      id
      first_name
      last_name
      email
      phone
    }
  }
`;

export default {
  apollo: {
    students: {
      query
    }
  }
};

// console.log(query);
//console.log(this.$students);
</script>

<style></style>
