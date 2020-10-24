<template>
  <div>
    <div v-if="contact">
      <div>
        <h1>Contact's page</h1>
        <hr />
        <table>
          <tbody v-for="(value, name) in contact" :key="value.id">
            <tr>
              <td class="td">
                {{ name }}
              </td>
              <td class="td">
                {{ value }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <p v-else>Contact is not found</p>
  </div>
</template>

<script>
export default {
  computed: {
    contact() {
      const contact = this.$store.getters.contactById(+this.$route.params.id);
      return contact;
    },
  },
};
</script>
