<script setup lang="ts">
import type { Message } from '~/types/Message';
import { reset } from '@formkit/core'
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const mail = useMail()
const submitted = ref(false)
const validationMessages = ref({
  required: () => t('form.validation.required'),
  email: () => t('form.validation.email'),
});

async function sendMail(formData: Message) {
  const { email, subject, message } = formData
  try {
    await mail.send({
      to: email,
      subject: subject,
      text: message,
    })
    submitted.value = true
    reset('contact-form')
  } catch (error) {
    console.error('Erreur lors de l\'envoi du message:', error)
  }
}
</script>
<template>
  <div class="px-5 xl:px-32">
    <FormKit
      id="contact-form"
      data-aos="fade-right"
      type="form"
      :submit-label="t('form.sendButton')"
      class="space-y-4"
      @submit="sendMail"
      #default="{ value }"
    >
      <FormKit
        type="email"
        :label="t('form.emailLabel')"
        name="email"
        validation="required|email"
        placeholder="john.doe@gmail.com"
        validation-visibility="dirty"
        :validation-messages="validationMessages"
      />
      <FormKit
        type="text"
        :label="t('form.subjectLabel')"
        name="subject"
        validation="required"
        :placeholder="t('form.subjectPlaceholder')"
        validation-visibility="dirty"
        :validation-messages="validationMessages"
      />
      <FormKit
        type="textarea"
        :label="t('form.messageLabel')"
        name="message"
        validation="required"
        :placeholder="t('form.messagePlaceholder')"
        validation-visibility="dirty"
        :validation-messages="validationMessages"
      />
    </FormKit>
    <div v-if="submitted">
      <p class="text-md text-green-500">
        {{ t('form.emailSent') }}
      </p>
    </div>
  </div>
</template>
