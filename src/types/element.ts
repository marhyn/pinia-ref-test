import type { Ref } from "vue"

export type FooElement = {
    id: string,
    elements?: Ref<FooElement>[]
}