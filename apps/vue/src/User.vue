<template>
  <div :class="UserStyles()">
    <img src="https://placehold.it/72/72">
    <h1>Foo Bar</h1>
    <remove-user-button />
  </div>
</template>

<script lang="ts">
import UserStyles from "@maxmind/core/ui/User";
import RemoveUserButton from "./RemoveUserButton.vue";

export default {
  components: {
    RemoveUserButton,
  },
  data: () => ({
    UserStyles,
  }),
};
</script>
