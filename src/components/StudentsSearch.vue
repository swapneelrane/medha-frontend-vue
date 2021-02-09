<template>
  <div>
    <v-card>
      <v-card-title>
        Students
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="students"
        :search="search"
      ></v-data-table>
    </v-card>
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
  data() {
    return {
      search: "",
      headers: [
        { text: "ID", value: "id" },
        { text: "First Name", value: "first_name" },
        { text: "Last Name", value: "last_name" },
        { text: "Email", value: "email" },
        { text: "Phone", value: "phone" },
        // { text: "Updated At", value: "updated_at" },
        { text: "Created At", value: "created_at" }
      ]
    };
  },

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
