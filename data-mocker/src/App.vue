<template>
    <div id="mocker__root">
        <operate />
        <div class="mocker__content">
            <params />
            <preview />
        </div>
    </div>
</template>

<script lang="ts">
    /**
     * 应用根节点
     */
    import { defineComponent } from "vue";
    import params from "./pages/Params/index.vue";
    import preview from "./pages/Preview/index.vue";
    import operate from "./pages/Operate/index.vue";

    export default defineComponent({
        components: {
            params,
            preview,
            operate
        }
    });
</script>

<style lang="less">
    * {
        margin: 0;
        padding: 0;
        user-select: none;
    }
    html,
    body,
    #app,
    #mocker__root {
        width: 100%;
        height: 100%;
        background-color: #181818;
    }

    #mocker__root {
        position: relative;
        min-width: 700px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        color: #fff;

        .mocker__content {
            display: flex;
            width: 100%;
            height: 90%;

            min-width: 820px;

            @media screen {
                @media (max-width: 1530px) {
                    flex-direction: column-reverse;
                }
            }
        }
    }
</style>
