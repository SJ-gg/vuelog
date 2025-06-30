<template>
  <div class="container mt-4">
    <router-view to="/detail"><h5>{{ blogData[0].title }}</h5></router-view>
    <p><small>{{ blogData[0].date }}</small></p>
  </div>
  <div class="container mt-4">
    <h5>{{ blogData[1].title }}</h5>
    <p><small>{{ blogData[1].date }}</small></p>
  </div>
  <div class="container mt-4">
    <h5>{{ blogData[2].title }}</h5>
    <p><small>{{ blogData[2].date }}</small></p>
  </div>
</template>

<script>
export default {
  name: 'List',
  props: {
    blogData: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>

</style>