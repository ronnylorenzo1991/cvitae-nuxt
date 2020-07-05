<template>

    <transition name="modal">

        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">

                    <div class="modal-header">
                        <slot name="header">
                            <h1 v-text="itemData[0].title"></h1>
                            <hr>

                            <tabs >
                                <tab name="Description" :selected="true">
                                    <div class="modal-body">
                                        <carousel
                                                :images ="itemData[0].images"
                                        ></carousel>
                                        <slot name="body">
                                            <p v-text="itemData[0].description"></p>
                                        </slot>
                                    </div>
                                </tab>
                                <tab name="Controller Code" >
                                    <pre :rel="itemData[0].fileTypes.controller">
                                        <code class="language-php" v-text="loadText(itemData[0].id,'controller')">
                                        </code>
                                    </pre>
                                </tab>
                                <tab name="Model code">
                                    <pre :rel="itemData[0].fileTypes.model">
                                        <code class="language-php" v-text="loadText(itemData[0].id,'model')">
                                        </code>
                                    </pre>
                                </tab>
                                <tab name="View Code">
                                    <pre :rel="itemData[0].fileTypes.view">
                                        <code class="language-twig" v-text="loadText(itemData[0].id,'view')">
                                        </code>
                                    </pre>
                                </tab>
                            </tabs>

                        </slot>
                    </div>



                    <div class="modal-footer">
                        <slot name="footer">
                            default footer
                            <button class="modal-default-button" @click="$emit('close')">
                                OK
                            </button>
                        </slot>
                    </div>
                </div>
            </div>
        </div>
    </transition>

</template>

<script>
    import Tabs from "../tabs/tabs";
    import Tab from "../tabs/tab";
    import Carousel from "../carousel/carousel";

    export default {
        components: {
            Carousel,
            Tabs,
            Tab,
        },
        props: {
            'item-data': {
                // Example: [{ name: 'Page 1', url: 'page1', svg: 'component' }]
                type: Array,
                default: () => [],
            },
        },
        data(){
            return{
                controller:'',
                model:'',
                view:''
            }
        },
        methods:{
             loadText:function (id,type) {
                 let file = require('raw-loader!~/assets/txt/'+id+'/'+type+'.txt');
                 return file.default;
             }
        },
        name: "codex"
    }
</script>

<style scoped>
    .modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        display: block;
        transition: opacity .3s ease;
        overflow-y: auto;
    }

    .modal-wrapper {
        display: block;
        vertical-align: middle;
    }

    .modal-container {
        width: 60%;
        margin: 2% auto;
        padding: 20px 30px;
        background-color: #fff;
        border-radius: 2px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
        transition: all .3s ease;
        font-family: Helvetica, Arial, sans-serif;
        color: #0C0C0C;
    }

    .modal-header h3 {
        margin-top: 0;
        color: #42b983;
    }

    .modal-body {
        margin: 20px 0;
    }

    .modal-default-button {
        float: right;
    }

    /*
     * The following styles are auto-applied to elements with
     * transition="modal" when their visibility is toggled
     * by Vue.js.
     *
     * You can easily play with the modal transition by editing
     * these styles.
     */

    .modal-enter {
        opacity: 0;
    }

    .modal-leave-active {
        opacity: 0;
    }

    .modal-enter .modal-container,
    .modal-leave-active .modal-container {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }

    .modal-header h1 {

        color: #1a252f;
    }

    .modal-body p {

        text-align: justify;
    }

</style>