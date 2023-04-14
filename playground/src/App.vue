<script lang="ts" setup>
import { ref } from "vue";

let name = ref<number>(1);
</script>

<template>
	<div w-full h-full>
		{{ name }}
	</div>
</template>
