<template>
    <div id="sidebar-wrapper" class="position-fixed" @mouseover="$emit('toggleSideBar')"  @mouseout="$emit('toggleSideBar')" >
        <ul  class="sidebar-nav">
            <li v-for="(item, index) in menuItems" :key="index" tabindex="0"   >
                <a class="nav-link" v-smooth-scroll="{duration:1000, offset: -50}"
                        :href="'#' + item.url">
                    <component :is="item.svg" style="width: 35px; margin-right: 5px"/>
                    <span class="capitalize">{{ item.name }}</span>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>

    import Vue from 'vue'
    import vueSmoothScroll from 'vue2-smooth-scroll'

    Vue.use(vueSmoothScroll)

    export default {
        props: {
            'menu-items': {
                // Example: [{ name: 'Page 1', url: 'page1', svg: 'component' }]
                type: Array,
                default: () => [],
            },
        },
        name: "sidebar",
    }
</script>

<style scoped>

</style>