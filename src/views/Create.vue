<template>
  <div>
    <h1>Create contact</h1>
    <form @submit.prevent="submitHandler">
      <label for="fname">First name (Only latin letters):</label><br />
      <input
        min="1"
        max="15"
        type="text"
        id="fname"
        v-model="fname"
        required
        pattern="^[a-zA-Z]+$"
      /><br />

      <label for="phnumber">Phone number (without "+"):</label><br />
      <input
        min="1"
        max="15"
        type="text"
        id="phnumber"
        v-model="phnumber"
        required
        pattern="^[ 0-9]+$"
      /><br /><br />

      <input
        type="submit"
        action
        name="submit-btn"
        value="Save"
        class="button"
      />
    </form>
  </div>
</template>

<script>
export default {
  name: "Create",

  data: () => ({
    fname: "John",
    lname: "Doe",
    phnumber: "100002200030",
    email: "asap@mail.com",
  }),
  methods: {
    mounted() {
      this.fname = this.contact.firstname;
      this.lname = this.contact.lastname;
      this.phnumber = this.contact.phonenumber;
      this.email = this.contact.email;
    },

    submitHandler() {
      const contact = {
        id: Date.now(),
        firstname: this.fname,
        lastname: this.lname,
        phonenumber: this.phnumber,
        email: this.email,
      };
      this.$store.dispatch("createContact", contact);
      this.$router.push("/list");
    },
  },
};
</script>
