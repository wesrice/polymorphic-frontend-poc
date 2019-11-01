<template>
  <button :class="AddUserButtonStyles()">Add User</button>
</template>

<script lang="ts">
import AddUserButtonStyles from "@maxmind/core/ui/AddUserButton";

export default {
  data: () => ({
    AddUserButtonStyles,
  }),
};
</script>
