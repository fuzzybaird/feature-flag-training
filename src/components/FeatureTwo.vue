<template>
  <div id="FeatureTwo">
    <h2>Feature Two</h2>
  </div>
</template>

<script>
export default {
  name: "FeatureTwo",
  toggleable: true,
  group: "may-launch",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#FeatureTwo {
  background-color: #eee;
  padding: 40px;
}
</style>
