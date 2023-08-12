<template>
  <NuxtLayout>
    <chakra.div py="9" bg="aqua">
      <div class="flex justify-center items-center h-screen bg-red-600">
        <NuxtPage />
      </div>
    </chakra.div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import { chakra } from '@chakra-ui/vue-next'
</script>
