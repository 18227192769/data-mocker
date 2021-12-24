<template>
    <div id="mocker__editor"></div>
    <span>{{ value }}</span>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref, watchEffect } from 'vue'
import monaco from './loader';

export default defineComponent({
    props: ['value'],
    setup(props) {
        const test = ref(false);
        const instance = reactive({
            previewEditor: null
        });

        watchEffect(() => {
            if (!instance.previewEditor) {
                return;
            }
            console.log('test', JSON.stringify(props.value));

            instance.previewEditor.setValue(
                JSON.stringify(props.value, null, '\t')
            )
        })

        onMounted(() => {
            console.log('props', props);
            instance.previewEditor = monaco.editor.create(
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
            )
        })

        return {
            instance,
            test
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