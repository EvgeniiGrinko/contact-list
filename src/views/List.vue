<template>
  <div>
    <h1>List of contacts</h1>
    <hr />
    <table v-if="contacts.length">
      <thead>
        <tr>
          <th>#</th>
          <th>First name</th>
          <th>Phone number</th>
          <th>Open contact</th>
          <th>Delete contact</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(contact, index) of contacts" v-bind:key="contact.id">
          <td>{{ index + 1 }}</td>
          <td class="td">
            <div class="text">{{ contact.firstname }}</div>
          </td>
          <td class="td">
            <div class="text">{{ contact.phonenumber }}</div>
          </td>
          <td>
            <router-link
              tag="button"
              class="button"
              :to="`/contact/` + contact.id"
              >Open</router-link
            >
          </td>
          <td>
            <button
              @click="deleteContact"
              class="button"
              v-bind:id="contact.id"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <p v-else>No contacts</p>
  </div>
</template>

<script>
export default {
  computed: {
    contacts() {
      return this.$store.getters.contacts;
    },
  },
  methods: {
    deleteContact(e) {
      const contactId = e.target.id;
      this.$store.dispatch("deleteContact", contactId);
      console.log(e.target.id);
    },
  },
};
</script>
