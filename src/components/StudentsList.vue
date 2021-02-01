<template>
  <div>
    <v-simple-table width="50%">
      <thead>
        <tr>
          <th class="text-left">Student Name</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="student in students" :key="student.id">
          <td>{{ student.first_name }}</td>
        </tr>
      </tbody>
    </v-simple-table>
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
