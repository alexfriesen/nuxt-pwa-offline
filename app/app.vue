<template>

  <UApp>
    <NuxtRouteAnnouncer />

    <UPageHero title="Nuxt PWA Offline Test" />

    <ClientOnly>
      <UPageSection v-if="$pwa?.offlineReady || $pwa?.needRefresh" :title="$pwa.offlineReady ?
        'App ready to work offline' :
        'New content available, click on reload button to update.'">
        <div class="flex justify-center gap-4">
          <UButton v-if="$pwa.needRefresh" @click="$pwa.updateServiceWorker()">
            Reload
          </UButton>
          <UButton @click="$pwa.cancelPrompt()">
            Close
          </UButton>
        </div>
      </UPageSection>

      <UPageSection v-if="$pwa?.showInstallPrompt && !$pwa?.offlineReady && !$pwa?.needRefresh" title="Install PWA">
        <div class="flex justify-center gap-4">
          <UButton @click="$pwa.install()">
            Install
          </UButton>
          <UButton @click="$pwa.cancelInstall()">
            Cancel
          </UButton>
        </div>
      </UPageSection>
    </ClientOnly>
  </UApp>

</template>
