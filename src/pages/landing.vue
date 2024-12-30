<script lang="ts" setup>
import IconChevronUp from '~icons/pixelarticons/chevron-up'
import IconChevronDown from '~icons/pixelarticons/chevron-down'
import PinDialog from '@/components/Dialog/PinDialog.vue'

definePage({
  meta: {
    hideHeader: true,
    hideFooter: true
  }
})
const router = useRouter()
const showAuthDialog = ref(false)
const showAdvancedOptions = ref(false)
const devMode = ref(false)
const extendedFlow = ref(false)
const isAuthPswd = ref(false)

const tempAuthCredentials = ref('')
let authResolver: ((value: string) => void) | null = null
async function setupAuth(): Promise<void> {
  showAuthDialog.value = true
  await new Promise<string>((resolve) => {
    authResolver = resolve
  })
}

async function createProfile(): Promise<void> {
  if (!tempAuthCredentials.value) {
    await setupAuth();
  }
  await router.push('/profile/create')
}

async function importProfile(): Promise<void> {
  if (!tempAuthCredentials.value) {
    await setupAuth();
  }
  await router.push('/profile/import')
}

async function setAuthCredentials(credentials: string): Promise<void> {
  tempAuthCredentials.value = credentials

  if (authResolver) {
    authResolver(credentials)
    authResolver = null
  }

  showAuthDialog.value = false
}
</script>

<template>
  <div class="flex flex-col py-1">

    <h1 class="mb-2 text-3xl font-pixel">Welcome to <p-link>pickaxe</p-link> wallet</h1>
    <p class="mb-5">Choose one of the following options to get started</p>

    <div class="flex flex-col gap-2 mb-5">
      <p-btn @click="createProfile">
        Create new wallet
      </p-btn>
      <p-btn @click="importProfile">
        Import existing wallet
      </p-btn>
    </div>

    <p-btn @click="showAdvancedOptions = !showAdvancedOptions" secondary class="mb-2">
      <component :is="showAdvancedOptions ? IconChevronUp : IconChevronDown" />
      Advanced options
    </p-btn>
    <div v-if="showAdvancedOptions" class="flex flex-col gap-2 mb-3">
      <div class="flex flex-col">
        <p-checkbox v-model="extendedFlow" label="Go through extended flow" toggle />
        <div class="text-gray-500 pl-11">You will be led through the extended setup process with options: add optional passphrase, choose 12 or 24 words seed phrase</div>
      </div>
      <div class="flex flex-col">
        <p-checkbox v-model="devMode" label="Enable dev-mode" toggle />
        <div class="text-gray-500 pl-11">Beta features, testnet networks, some features may not be available</div>
      </div>
      <p-checkbox v-model="isAuthPswd" label="Use password except PIN" toggle />
    </div>

    <pin-dialog
      v-if="showAuthDialog && !isAuthPswd"
      @entered="setAuthCredentials"
      @close="showAuthDialog = false"
      title="Create new PIN"
      click-outside
    />

    <pswd-dialog
      v-if="showAuthDialog && isAuthPswd"
      @entered="setAuthCredentials"
      @close="showAuthDialog = false"
      title="Create new password"
      click-outside
    >
      <template #message>
        <p class="mb-3">Please enter strong password to protect your wallet</p>
      </template>
    </pswd-dialog>

  </div>
</template>
