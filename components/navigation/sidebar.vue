<template>
    <div id="sidebar-wrapper" class="position-fixed" @mouseover="$emit('toggleSideBar')"  @mouseout="$emit('toggleSideBar')" >
        <ul  class="sidebar-nav">
            <li v-for="(item, index) in menuItems" :key="index" tabindex="0">
                <a class="nav-link" v-smooth-scroll="{duration:1000, offset: -50}"
                        :href="'#' + item.url">
                    <component :is="item.svg" style="width: 22%; margin-right: 5px"/>
                    <span class="capitalize">{{ $t(item.name) }}</span>
                </a>
            </li>
        </ul>
        <transition name="fade"  mode="out-in" >
            <a class="sidebar-language"  v-for="(item, index) in langItems" :key="index" tabindex="0" v-if="lang!=item.lang"
               @click="changeLanguage(item.lang)"> <component :is="item.svg"
                                                              style="width: 35px; padding-top: 50px;margin-left: 15px;"/></a>
        </transition>
    </div>
</template>
<script>

    import Vue from 'vue'
    import vueSmoothScroll from 'vue2-smooth-scroll'
    import langToggleSwitch from '../toggle/lang-toggle'

    Vue.use(vueSmoothScroll)

    export default {
        props: {
            'menu-items': {
                // Example: [{ name: 'Page 1', url: 'page1', svg: 'component' }]
                type: Array,
                default: () => [],
            },
            'lang-items': {
                // Example: [{ name: 'Page 1', url: 'page1', svg: 'component' }]
                type: Array,
                default: () => [],
            },
        },
        components:{
            langToggleSwitch
        },
        data(){
            return{
                langToggleSwitch,
                lang:'en',
            }
        },
        name: "sidebar",
        methods:{
            changeLanguage(lang) {
                console.log(lang);
                this.$i18n.locale = lang;
                this.lang = lang;
            }
        }
    }
</script>

<style scoped>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
        opacity: 0
    }
</style>