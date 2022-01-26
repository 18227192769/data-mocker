<template>
    <div id="mocker__editor"></div>
</template>

<script lang="ts">
import { defineComponent, markRaw, onMounted, reactive, watch, watchEffect } from 'vue'
import monaco from './loader';

export default defineComponent({
    props: ['value'],
    setup(props) {
        const instance = reactive({
            previewEditor: null
        });

        watchEffect(() => {
            instance.previewEditor?.setValue?.(
                JSON.stringify(props.value, null, '\t')
            )
        })

        onMounted(() => {
            instance.previewEditor = markRaw(monaco.editor.create(
                document.getElementById('mocker__editor') as HTMLElement,
                {
                    language: 'typescript',
                    value: JSON.stringify(props.value, null, '\t'),
                    theme: 'vs-dark',
                    lineNumbers: 'on',
                    minimap: {
                        enabled: true
                    },
                    dragAndDrop: true,
                    automaticLayout: true
                }
            ))
        })

        return {
            instance
        }
    }
})
</script>

<style lang="less">
    #mocker__editor {
        width: 100%;
        height: 100%;
    }
</style>