<template>
    <div
        :class="`
            trash
            ${status.active ? 'active' : ''}
            ${visible ? 'visible': ''}
        `"
        @dragover="onDragOver"
        @dragenter="onDragEnter"
        @dragleave="onDragLeave"
        @drop="onDrop"
    >
        <div class="trash__content">
            <delete-outlined />
            <p>释放删除字段</p>
        </div>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, watchEffect } from 'vue';
import { DeleteOutlined } from '@ant-design/icons-vue';


export default defineComponent({
    props: [
        'visible',
        'delete'
    ],
    components: {
        DeleteOutlined
    },
    methods: {
        onDragOver(e) {
            e.preventDefault();
        },
        onDragEnter(e) {
            this.status.active = true;
        },
        onDragLeave(e) {
            this.status.active = false;
        },
        onDrop(e) {
            const fieldName = e.dataTransfer.getData('fieldName');

            this.delete(fieldName)

            this.status.active = false;
        }
    },
    setup(props) {
        const status = reactive({
            active: false
        })

        const visible = computed(() => props.visible)

        return {
            status,
            visible
        }
    }
})
</script>

<style lang="less">
    .trash {
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: calc(30%);
        left: calc(50% - 100px);

        width: 200px;
        height: 150px;
        
        border-radius: 10px;
        background-color: rgba(148, 155, 214, 0.459);
        
        text-align: center;
        
        z-index: 100;

        transform: translate(1000px, -1000px);
        transition: all 1s cubic-bezier(0.22, 0.27, 0, 0.85);

        &.visible {
            transform: translate(0px, 0px);
        }

        &.active {
            background-color: rgba(48, 98, 145, 0.425);
            border: 2px solid rgb(0, 255, 191);
            transition: all .2s linear;
        }

        &__content {
            pointer-events: none;

            .anticon-delete {
                font-size: 40px;
            }
        }
    }
</style>