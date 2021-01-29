<template>
  <div></div>
</template>

<script>
import gql from "graphql-tag";

const query = gql`
  query students {
    students {
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

console.log(this.apollo.students);
</script>

<style></style>
