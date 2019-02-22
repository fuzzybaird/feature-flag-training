<template>
  <div class="about">
    <div class="page">
      <div class="row">
        <h1>Collection of features</h1>
      </div>

      <!-- Edit Features -->
      <div class="row padding-15">
        <h3>Toggleable Beta</h3>
        <div class="check">
          <label :for="beta">Beta</label>
          <input type="checkbox" :id="beta" :value="beta" v-model="beta" />
        </div>
      </div>
      <!-- END Edit Features -->

      <div class="row features">
        <div class="padding-15">
          <FeatureOne />
        </div>
        <div class="padding-15">
          <FeatureTwo />
        </div>
      </div>
      <div class="row">
        <div class="padding-15">
          <FeatureThree />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import FeatureOne from "@/components/FeatureOne";
import FeatureTwo from "@/components/FeatureTwo";
import FeatureThree from "@/components/FeatureThree";
export default {
  name: "Home",
  data() {
    return {
      beta: false,
      componentsList: [],
      groupsList: [],
      components: [],
      groups: []
    };
  },
  components: { FeatureOne, FeatureTwo, FeatureThree },
  watch: {
    beta(val) {
      if (this.$isFeature) {
        this.$isFeature.beta = val;
      }
    }
  },
  mounted() {
    if (this.$isFeature) {
      this.beta = this.$isFeature.beta || false;
    }
  }
};
</script>
