<script lang="ts" setup>

</script>

<template>
  <div class="flex justify-between gap-2">

    <!--<span class="text-gray-500">Balance</span>-->
    <div class="font-pixel bg-gray-90 p-2 flex-grow flex-col flex bg-gray-900">
      <div class="flex gap-1">
        <p-btn secondary small>
          <icon-pixel-copy />
        </p-btn>
        <p-btn secondary small>
          <icon-pixel-eye />
        </p-btn>
      </div>
      <span class="text-4xl">2,900$</span>
      <span class="text-xl text-gray-500">weakly bal:&nbsp;+3.69%</span>
    </div>

    <div class="flex flex-col gap-2">
      <p-btn secondary>
        <icon-pixel-arrow-down />
      </p-btn>
      <p-btn secondary>
        <icon-pixel-arrow-up />
      </p-btn>
      <p-btn secondary>
        <icon-pixel-sort />
      </p-btn>
    </div>

  </div>
</template>
