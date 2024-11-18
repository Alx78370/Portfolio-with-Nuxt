<script setup lang="ts">
</script>
<template>
  <div class="px-5">
    <FormKit type="form" submit-label="Send message" class="space-y-4">
      <FormKit
        type="email"
        label="Email"
        name="email"
        validation="required|email"
        placeholder="email@example.com"
      />
      <FormKit
        type="text"
        label="Subject"
        name="subject"
        validation="required"
        placeholder="Subject"
      />
      <FormKit
        type="textarea"
        label="Message"
        name="message"
        validation="required"
        placeholder="Message"
      />
    </FormKit>
  </div>
</template>
