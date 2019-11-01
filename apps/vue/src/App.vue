<template>
  <div :class="PageStyles()">
    <div :class="ContainerStyles()">
      <add-user-button />
      <users />
    </div>
  </div>
</template>

<script lang="ts">
import ContainerStyles from "@maxmind/core/ui/Container";
import PageStyles from "@maxmind/core/ui/Page";
import AddUserButton from "./AddUserButton.vue";
import Users from "./Users.vue";

export default {
  name: 'App',
  components: {
    AddUserButton,
    Users,
  },
  data: () => ({
    ContainerStyles,
    PageStyles,
  }),
};
</script>
