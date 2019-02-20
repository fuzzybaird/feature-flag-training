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
    const wrapper = mount(FeatureOne, {
      mocks: { $isFeature: { beta: true } }
    });

    //Assert
    expect(wrapper.text()).toEqual("Feature One");
  });

  it("shows when $isFeature.beta true", () => {
    // Arrange
    options.mocks["$isFeature"] = {
      beta: true,
      groups: [],
      components: []
    };
    const wrapper = mount(FeatureOne, options);

    //Assert
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
    options.mocks["$isFeature"] = {
      beta: false,
      groups: [],
      components: ["FeatureOne"]
    };
    const wrapper = mount(FeatureOne, options);

    //Assert
    expect(wrapper.text()).toEqual("Feature One");
  });

  it("should have a global object $isFeature with array attribute 'groups' on the vue instance", () => {
    // Arrange
    const wrapper = mount(FeatureOne, options);

    //Assert
    expect(wrapper.vm.$isFeature.groups).toEqual([]);
  });

  it("shows when component name matches string in $isFeature.group array", () => {
    // Arrange
    options["group"] = "realease-1";
    options.mocks["$isFeature"] = {
      beta: false,
      components: [],
      groups: ["realease-1"]
    };
    const wrapper = mount(FeatureOne, options);

    //Assert
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
