<template>
    <UApp>
        <UHeader title="Nuxt PWA Test">
            <UNavigationMenu :items="[
                { label: 'Home', to: '/' },
                { label: 'About', to: '/about' },
            ]" />
        </UHeader>

        <slot />
    </UApp>
</template>