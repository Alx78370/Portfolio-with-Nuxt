<script setup lang="ts">
import type { Message } from '~/types/Message';

const mail = useMail()
const submitted = ref(false)

async function sendMail(formData: Message) {
  const { email, subject, message } = formData
  try {
    await mail.send({
      to: email,
      subject: subject,
      text: message,
    })
    submitted.value = true
  } catch (error) {
    console.error('Erreur lors de l\'envoi du message:', error)
  }
}
</script>
<template>
  <div class="px-5 xl:px-32">
    <FormKit 
      type="form" 
      submit-label="Send message" 
      class="space-y-4" 
      @submit="sendMail"
      :form-class="submitted ? 'hide' : 'show'"
      #default="{ value }"
    >
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
    <div v-if="submitted">
      <h2 class="text-md text-green-500">
        Email sent successfully!
      </h2>
    </div>
    <div v-else>
      <h2 class="text-md text-red-500">
        An error occurred while sending the email.
      </h2>
    </div>
  </div>
</template>
