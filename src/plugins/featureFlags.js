import includes from "lodash/includes";
import union from "lodash/union";
export default {
  install(Vue, options = { beta: false, components: [], groups: [] }) {
    Vue.prototype.$isFeature = {
      beta: options.beta,
      components: options.components,
      groups: options.groups
    };
    Vue.prototype.$toggleable = {
      components: [],
      groups: []
    };

    Vue.mixin({
      beforeCreate() {
        let name = this.$options.name ? this.$options.name.toLowerCase() : null;
        let group = this.$options.group
          ? this.$options.group.toLowerCase()
          : null;

        if (name && this.$options.toggleable) {
          this.$toggleable.components = union(this.$toggleable.components, [
            name
          ]);
        }

        if (group) {
          this.$toggleable.groups = union(this.$toggleable.groups, [group]);
        }

        if (this.$options.toggleable) {
          let nameNotInComponents = () => {
            return !includes(
              this.$isFeature.components.map(comp => comp.toLowerCase()),
              name
            );
          };

          let nameNotInGroups = () => {
            return !includes(
              this.$isFeature.groups.map(comp => comp.toLowerCase()),
              group
            );
          };

          // This is whats actually doing the hidding and showing of components
          if (
            !this.$isFeature.beta &&
            nameNotInGroups() &&
            nameNotInComponents()
          ) {
            this.$options.render = () => null;
          }
        }
      }
    });
  }
};
