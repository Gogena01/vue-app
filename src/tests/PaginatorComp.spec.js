import { mount } from "@vue/test-utils";
import PaginatorComp from '../components/PaginatorComp.vue';
import { beforeEach, describe, expect, it } from "vitest";
import { vi } from "vitest";


const spy = vi.fn()
let wrapper;

beforeEach(() => {
    wrapper = mount(PaginatorComp, {
        props: {
            entriesCount: Array.from(new Array(30)).fill(8).length,
            entriesPerPage: 10,
            currentPage: 1,
            visibleNextBtn: true,
            visiblePageCounter: true,
            visiblePrevBtn: true,

        },
        attrs: {
            'onUpdate:currentPage'(value) {
                wrapper.setProps({ currentPage: value });
            },
        },
        listeners: {
            movePage: spy
        }
    });
})

describe('PaginatorComp.vue', () => {
    describe('Layout', () => {

        it('should have next & prev button visible', () => {
            const prevBtn = wrapper.get('.prev');
            const nextBtn = wrapper.get('.prev');

            expect(nextBtn).toBeDefined();
            expect(prevBtn).toBeDefined();
        })

        it('should have prev button disabled', () => {
            const button = wrapper.get('.prev');

            expect(button.attributes('disabled')).toBe('true')
        });




        it('should have next button disabled', async () => {
            const button = wrapper.get('.next');
            wrapper.vm.$emit('update:currentPage', 3);

            await wrapper.vm.$nextTick();

            expect(button.attributes('disabled')).toBe('true')
        });

    })

    describe('functionalities', () => {

        it('correctly handles "Next" button click', async () => {
            await wrapper.vm.$nextTick()
            const button = wrapper.get('.next');
            button.trigger('click');
            console.log(wrapper.emitted())
            await wrapper.vm.$nextTick()
            expect(spy).toBeCalled();
        });

        it('should have right amount of Pages', () => {
            expect(wrapper.vm.pagesCount).toBe(3)
        });

    })
});
