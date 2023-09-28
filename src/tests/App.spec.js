import { mount } from "@vue/test-utils";
import { it, expect } from "vitest";

import App from '../App.vue';

const appWrapper = mount(App)

it('should contain component HelloWorld.vue', () => {
    const comp = appWrapper.findComponent('hello-world');
    expect(comp).toBeDefined()
})