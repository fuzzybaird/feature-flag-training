import { mount, createLocalVue } from "@vue/test-utils";
import FeatureOne from "@/components/FeatureOne.vue";
import featureFlags from "@/plugins/featureFlags";
// import FeatureTwo from "@/components/FeatureTwo.vue";

describe("Feature Flag Implementation", () => {
  let options;
  beforeEach(() => {
    let localVue = createLocalVue();
    localVue.use(featureFlags);
    options = {
      toggleable: true,
      localVue,
      mocks: {}
    };
  });

  it("should have a global object $isFeature with bolean attribute 'beta' on the vue instance", () => {
    // Arrange
    const wrapper = mount(FeatureOne, options);

    //Assert
    expect(wrapper.vm.$isFeature.beta).toEqual(false);
  });

  it("renders empty when custom option toggleable=true added to component", () => {
    // Arrange
    const wrapper = mount(FeatureOne, options);

    //Assert
    expect(wrapper.text()).toEqual("");
  });

  it("shows the component if a $isFeature.beta boolean exists on root vue instance", () => {
    // Arrange
    let localVue = createLocalVue();
    localVue.use(featureFlags, { beta: true });

    const wrapper = mount(FeatureOne, {
      toggleable: true,
      localVue
    });

    //Assert
    expect(wrapper.vm.$isFeature.beta).toEqual(true);
    expect(wrapper.text()).toEqual("Feature One");
  });

  it("should have a global object $isFeature with array attribute 'components' on the vue instance", () => {
    // Arrange
    const wrapper = mount(FeatureOne, options);

    //Assert
    expect(wrapper.vm.$isFeature.components).toEqual([]);
  });

  it("shows when component name matches string in $isFeature.components array", () => {
    // Arrange
    let localVue = createLocalVue();
    localVue.use(featureFlags, { beta: true, components: ["featureone"] });

    const wrapper = mount(FeatureOne, {
      toggleable: true,
      localVue
    });

    //Assert
    expect(wrapper.vm.$isFeature.components[0]).toEqual("featureone");
    expect(wrapper.text()).toEqual("Feature One");
  });

  it("should have a global object $isFeature with array attribute 'groups' on the vue instance", () => {
    // Arrange
    const wrapper = mount(FeatureOne, options);

    //Assert
    expect(wrapper.vm.$isFeature.groups).toEqual([]);
  });

  it("shows when component group name matches string in $isFeature.group array", () => {
    // Arrange
    let localVue = createLocalVue();
    localVue.use(featureFlags, { beta: false, groups: ["may-release"] });

    const wrapper = mount(FeatureOne, {
      toggleable: true,
      group: "may-release",
      localVue
    });

    //Assert
    expect(wrapper.vm.$isFeature.groups[0]).toEqual("may-release");
    expect(wrapper.text()).toEqual("Feature One");
  });

  it("should have a global object $toggleable with array attributes 'components' & 'groups' on the vue instance", () => {
    // Arrange
    const wrapper = mount(FeatureOne, options);

    //Assert
    expect(Array.isArray(wrapper.vm.$toggleable.components)).toBe(true);
    expect(Array.isArray(wrapper.vm.$toggleable.groups)).toBe(true);
  });
});
