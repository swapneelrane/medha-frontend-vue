<template>
  <div>
    <v-simple-table width="50%">
      <thead>
        <tr>
          <th class="">Id</th>
          <th class="text-left">First Name</th>
          <th class="text-left">Last Name</th>
          <th class="text-left">Email</th>
          <th class="text-left">Phone</th>
          <th class="text-left">Created At</th>
          <th class="text-left">Updated At</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="student in students" :key="student.id">
          <td>{{ student.id }}</td>
          <td>{{ student.first_name }}</td>
          <td>{{ student.last_name }}</td>
          <td>{{ student.email_name }}</td>
          <td>{{ student.phone }}</td>
          <td>{{ student.updated_at }}</td>
          <td>{{ student.created_at }}</td>
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
      updated_at
      created_at
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
