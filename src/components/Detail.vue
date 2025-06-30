<template>
  <div class="container mt-4">
    <h5>{{ blogData[0].title }}</h5>
    <p><small>{{ blogData[0].date }}</small></p>
    <p>{{ blogData[0].content }}</p>
  </div>
</template>

<script>
export default {
 name: 'Detail',
 props: {
   blogData: {
     type: Array,
     required: true,
   }
 },
}
</script>

<style>

</style>