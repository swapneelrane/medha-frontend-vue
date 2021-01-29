<template> </template>

<script>
import gql from "graphql-tag";

const query = gql`
  query {
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
    rockets: {
      query
    }
  }
};

console.log(query);
</script>

<style></style>
