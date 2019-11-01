<template>
  <button :class="RemoveUserButtonStyles()">
    Remove User
  </button>
</template>

<script lang="ts">
import RemoveUserButtonStyles from "@maxmind/core/ui/RemoveUserButton";

export default {
  data: () => ({
    RemoveUserButtonStyles,
  }),
};
</script>
