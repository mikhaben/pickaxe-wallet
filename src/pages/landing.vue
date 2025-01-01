<script lang="ts" setup>
import IconChevronUp from '~icons/pixelarticons/chevron-up'
import IconChevronDown from '~icons/pixelarticons/chevron-down'
import PinDialog from '@/components/dialog/PinDialog.vue'

definePage({
  meta: {
    hideNavigation: true
  }
})
const router = useRouter()
const showAuthDialog = ref(false)
const showAdvancedOptions = ref(false)
const showMessageDialog = ref(false)
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
  <div class="flex flex-col">

    <h1 class="mb-2 text-3xl font-pixel">Welcome to <p-link @click="showMessageDialog=true">pickaxe</p-link> wallet</h1>
    <p class="mb-5">Choose one of the following options to get started.</p>

    <div class="flex flex-col gap-2 mb-5">
      <p-btn @click="createProfile">
        Create new wallet
      </p-btn>
      <p-btn @click="importProfile">
        Import existing wallet
      </p-btn>
    </div>

    <p-btn @click="showAdvancedOptions = !showAdvancedOptions" secondary class="mb-2">
      <span class="flex gap-2">
        <component :is="showAdvancedOptions ? IconChevronUp : IconChevronDown" />
        Advanced options
      </span>
    </p-btn>
    <div v-if="showAdvancedOptions" class="flex flex-col gap-2 mb-3">
      <div class="flex flex-col">
        <p-checkbox v-model="extendedFlow" label="Go through extended setup flow" toggle />
        <div class="text-gray-500 pl-11">Includes backup of seed phrase, optional passphrase, and choice of 12 or 24 words seed phrase creation.</div>
      </div>
      <div class="flex flex-col">
        <p-checkbox v-model="devMode" label="Enable developer mode" toggle />
        <div class="text-gray-500 pl-11">Access beta features, testnet networks, and experimental tools.</div>
      </div>
      <p-checkbox v-model="isAuthPswd" label="Use password instead of PIN" toggle />
    </div>

    <pin-dialog
      v-if="showAuthDialog && !isAuthPswd"
      @entered="setAuthCredentials"
      @close="showAuthDialog = false"
      title="Create a new PIN"
      click-outside
    />

    <pswd-dialog
      v-if="showAuthDialog && isAuthPswd"
      @entered="setAuthCredentials"
      @close="showAuthDialog = false"
      title="Create a new password"
      click-outside
    >
      <template #message>
        <p class="mb-3">Enter a strong password to protect your wallet.</p>
      </template>
    </pswd-dialog>

    <dialog-container
      v-if="showMessageDialog"
      @close="showMessageDialog = false"
      title="About pickaxe wallet"
    >
      <p class="mb-1">Pickaxe Wallet is a secure and user-friendly blockchain wallet.</p>
      <p class="mb-1">Designed for both beginners and advanced users with <span class="text-pink-500">love.</span></p>
      <p>Cute design included, plus some extra spices! :)</p>
    </dialog-container>

  </div>
</template>
