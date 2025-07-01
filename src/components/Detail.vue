<template>
  <div class="container mt-4">
    <h4>Detail</h4>
    <h5>{{ blogData[$route.params.id].title }}</h5>
    <p><small>{{ blogData[$route.params.id].date }}</small></p>
    <p>{{ blogData[$route.params.id].content }}</p>
  </div>
</template>

<script>
export default {
 name: 'Detail',
 props: {
   blogData: Array,
 },
}
</script>

<style>

</style>