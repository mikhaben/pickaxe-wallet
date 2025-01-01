<script lang="ts" setup>
const seed12 = ['dry', 'head', 'evil', 'custom', 'kit', 'mosquito', 'skirt', 'since', 'tide', 'cat', 'large', 'olive']
const seed24 = ['dry', 'head', 'evil', 'custom', 'kit', 'mosquito', 'skirt', 'since', 'tide', 'cat', 'large', 'olive', 'dry', 'head', 'evil', 'custom', 'kit', 'mosquito', 'skirt', 'since', 'tide', 'cat', 'large', 'olive']
const dialogConfigs = {
  seedPhrase: {
    title: 'What is a seed phrase?',
    content: 'A seed phrase is a list of words that acts as a master key to your wallet. It’s essential to keep it private and secure. Sharing it could result in the loss of your funds.'
  },
  passphrase: {
    title: 'What is a passphrase?',
    content: 'A passphrase is an additional security measure to protect your seed phrase. Think of it as a password for your wallet. Without it, your seed phrase alone is enough to restore access.'
  }
}

definePage({
  meta: {
    hideNavigation: true
  }
})
const use12Words = ref(false)
const isAgreed = ref(false)
const passphrase = ref('')
const activeDialog = ref<typeof dialogConfigs[keyof typeof dialogConfigs] | null>(null)
const seed = computed(() => use12Words.value ? seed12 : seed24)
</script>

<template>
  <div class="flex flex-col">

    <page-header title="Create a New Profile" back />
    <p class="mb-5">Get started by creating a new profile. Choose options below.</p>

    <div class="flex flex-col mb-2">
      <p-checkbox v-model="use12Words" label="Generate 12-word seed phrase" toggle />
      <div class="text-gray-500 pl-11">This option creates a shorter seed phrase. It is less secure but easier to remember. What is a <p-link @click="activeDialog=dialogConfigs.seedPhrase">seed phrase</p-link>?</div>
    </div>

    <div v-if="seed" class="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-2 mb-5">
      <div v-for="(word, idx) in seed" :key="word">
        <div class="flex border-2 border-gray-800 p-1">
          <span class="text-gray-500 min-w-4">{{idx+1}}</span>
          <div class="border-r-2 border-gray-800 pr-2 mr-2"/>
          <span>{{word}}</span>
        </div>
      </div>
    </div>

    <div class="flex flex-col mb-5">
      <p-input v-model="passphrase" placeholder="Enter an optional passphrase" grow class="mb-1"/>
      <div class="text-gray-500 mb-2">A passphrase adds an extra layer of encryption to your seed phrase. This is optional but highly recommended for increased security. What is a <p-link @click="activeDialog=dialogConfigs.passphrase">passphrase</p-link>?</div>
    </div>

    <p-checkbox v-model="isAgreed" label="I have saved my secrets" class="mb-5" toggle />

    <div class="flex justify-end">
      <p-btn :disabled="!isAgreed">Confirm</p-btn>
    </div>

    <dialog-container
      v-if="activeDialog"
      :title="activeDialog?.title"
      @close="activeDialog = null"
    >
      <p>{{activeDialog.content}}</p>
    </dialog-container>

  </div>
</template>
