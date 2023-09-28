import { mount } from "@vue/test-utils";
import HelloWorld from "../components/HelloWorld.vue";
import { beforeEach, expect, it } from "vitest";

const wrapper = mount(HelloWorld);
let props;

beforeEach(async () => {
    await wrapper.setProps({ title: 'Hello from Comp' });
    props = wrapper.props();
})

it("should get the props successfully", async () => {
    expect(props.title).toBe("Hello from Comp");
});

it('shoudd be rendered in h1 tag', async () => {
    const h1Element = wrapper.find('h1');
    expect(h1Element.text()).toBe("Hello from Comp");
})

it('should be incremented', async () => {
    const counter = wrapper.find('h2');
    const incrementButton = wrapper.find('button');

    await incrementButton.trigger('click');

    await wrapper.vm.$nextTick();

    expect(counter.text()).toBe('1');
});


