<template>
    <!-- code examples -->
    <section id="services">

        <div class="container">
            <h2 class="text-white">services</h2>
            <h3 style="text-transform: capitalize">and code examples </h3>
            <div class="box-excodes">
                <div v-for="(item, index) in excodesItems" :key="index">
                    <h2 v-text="item.title"></h2>
                    <div class="excode-block">
                        <a :href="'#' + item.id" @click="toggleShowModal(item)">
                            <img class="excode-thumb" :src="require('~/assets/img/assets/'+item.id+'.jpg')">
                        </a>
                    </div>
                </div>

            </div>
        </div>
        <codex v-if="showModal" @close="showModal = false"
               :item-data="[
        {
         id:id,
         title: title,
         description: description,
         fileTypes: fileTypes,
         images: images,
         controller:{
         store: '<div class=\'container\'><h2 class=text-white>services</h2>',
        }
        }
        ]"
        ></codex>
    </section>

</template>

<script>
    import Search from "../svgIcons/search";
    import Codex from "../modals/codex";

    export default {
        components: {Codex, Search},
        props: {
            'excodes-items': {
                // Example: [{ name: 'Page 1', url: 'page1', svg: 'component' }]
                type: Object,
                default: () => [],
            },
        },
        data() {
            return {
                id:'',
                title: '',
                description: '',
                fileTypes: '',
                images: '',
                showModal: false,
            };
        },
        name: "excode",
        methods: {
            toggleShowModal(item) {
                console.log(item);
                this.id = item.id;
                this.title = item.title;
                this.fileTypes = item.fileTypes;
                this.description = item.description;
                this.images = item.images;
                this.showModal = !this.showModal;

            }
        }
    }
</script>

<style scoped>

</style>