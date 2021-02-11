<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-layout row wrap>
      <v-flex xs12 md4 mx-3>
        <v-text-field
          v-model="first_name"
          :counter="10"
          :rules="nameRules"
          label="First Name"
          required
        ></v-text-field>
      </v-flex>

      <v-flex xs12 md4 mx-3>
        <v-text-field
          v-model="last_name"
          :counter="10"
          :rules="nameRules"
          label="Last Name"
          required
        ></v-text-field>
      </v-flex>

      <v-spacer />

      <v-flex xs12 md4 mx-3>
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
        ></v-text-field>
      </v-flex>

      <v-flex xs4 mx-3>
        <v-text-field v-model="phone" label="Phone" required></v-text-field>
      </v-flex>
    </v-layout>

    <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
      Submit
    </v-btn>

    <v-btn color="error" class="mr-4" @click="reset">
      Reset Form
    </v-btn>

    <v-btn color="warning" @click="resetValidation">
      Reset Validation
    </v-btn>
  </v-form>
</template>

<script>
import gql from "graphql-tag";

const MUTATION = gql`
  mutation CREATE_STUDENT($first_name: String, $last_name: String) {
    createStudent(
      input: { data: { first_name: $first_name, last_name: $last_name } }
    ) {
      student {
        id
        first_name
        last_name
      }
    }
  }
`;

export default {
  data: () => ({
    valid: true,
    first_name: "",
    last_name: "",
    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 10) || "Name must be less than 10 characters"
    ],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    phone: "",
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: false
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
      const student = {
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        phone: this.phone
      };
      console.log(student);

      this.$apollo
        .mutate({
          mutation: MUTATION,
          variables: student
        })
        .then(console.log("new student added"));
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    }
  }
};
</script>

<style></style>
