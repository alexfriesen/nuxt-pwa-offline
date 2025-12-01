<script setup>
const props = defineProps({
    error: Object,
})

const isDev = import.meta.dev
const is404 = computed(() => props.error?.statusCode === 404 || message.value?.includes('404'))
const title = computed(() => is404.value ? 'Not Found' : 'An error occurred')
const message = computed(() => String(props.error?.message || ''))

function handleError() {
    return clearError({ redirect: '/' })
}
</script>

<template>
    <NuxtLayout>
        <AppContent>
            <div class="grid place-content-center h-full p-4 gap-4">
                <div class="flex items-center gap-2 text-3xl">
                    <UIcon name="i-lucide-octagon-alert" />
                    {{ title }}
                </div>

                <div class="text-xl text-[var(--ui-text-dimmed)]">
                    {{ message }}
                </div>

                <pre v-if="isDev" class="overflow-auto">{{ error }}</pre>

                <UButton block size="xl" @click="handleError">
                    Go Back
                </UButton>
            </div>
        </AppContent>
    </NuxtLayout>
</template>