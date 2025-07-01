<template>
  <div class="container mt-4">
    <h4>Detail</h4>
    <h5>{{ blogData[id].title }}</h5>
    <p><small>{{ blogData[id].date }}</small></p>
    <p>{{ blogData[id].content }}</p>
  </div>
</template>

<script>
export default {
 name: 'Detail',
 props: {
   blogData: Array,
 },
}
var id = $route.params.id;
</script>

<style>

</style>