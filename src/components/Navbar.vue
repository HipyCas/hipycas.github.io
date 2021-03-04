<template>
	<div id="main" class="fixed top-0 w-screen">
		<div class="flex justify-end w-full mr-2">
			<a
				v-for="link in 10"
				:key="link"
				class="text-sm text-gray-900 p-4 hover:bg-gray-200 hover:bg-opacity-20"
				>Link {{ link }}</a
			>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
#main {
	background-color: rgba(255, 255, 255, 0.15);
	backdrop-filter: blur(5px);
}
</style>
