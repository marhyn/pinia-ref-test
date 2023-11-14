import { defineStore } from 'pinia';
import {Ref, reactive, ref} from 'vue';
import { FooElement } from '../types/element';

export const useFooStore = defineStore('formStore', () => {

    // this holds the state of the main element -> correct
    const fooElement = ref<FooElement>();

    // these 4 should hold the state of the selected element. The value should be a ref, the ref should be from fooElement.elements (it should be the ref not its value)
    let selectedElement1 = ref<FooElement>()
    const selectedElement2 = ref<Ref<FooElement>>()

    const selectedState1 = reactive({
        selectedElement1: ref<FooElement>()
    })
    const selectedState2 = reactive({
        selectedElement2: ref<Ref<FooElement>>()
    })

    const initFooElement = (element: Element) => {
        fooElement.value = element
        if(fooElement.value.elements && fooElement.value.elements[0]) {
            selectElement1(fooElement.value.elements[0])
            selectElement2(fooElement.value.elements[0])
            selectStateElement1(fooElement.value.elements[0])
            selectStateElement2(fooElement.value.elements[0])
        }
    }


    const selectElement1 = (element: Ref<FooElement>) => {
        console.log(element)
        selectedElement1 = element
    }

    const selectElement2 = (element: Ref<FooElement>) => {
        console.log(element)
        selectedElement2.value = element
    }

    const selectStateElement1 = (element: Ref<FooElement>) => {
        console.log(element)
        selectedState1.selectedElement1 = element
    }

    const selectStateElement2 = (element: Ref<FooElement>) => {
        console.log(element)
        selectedState2.selectedElement2 = element
    }



    return { fooElement, initFooElement, selectElement1, selectElement2, selectStateElement1, selectStateElement2 };
});
