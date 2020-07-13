<template>
    <div id="sidebar-wrapper" class="position-fixed" @mouseover="$emit('toggleSideBar')"  @mouseout="$emit('toggleSideBar')" >
        <!--<lang-toggle @changeLang="changeLanguage($event)"></lang-toggle>-->
        <transition name="fade"  mode="out-in" >
            <button v-if="lang=='es'" @click="changeLanguage('en')">EN</button>
            <button v-if="lang=='en'" @click="changeLanguage('es')">ES</button>
        </transition>
        <ul  class="sidebar-nav">


            <li v-for="(item, index) in menuItems" :key="index" tabindex="0"   >
                <a class="nav-link" v-smooth-scroll="{duration:1000, offset: -50}"
                        :href="'#' + item.url">
                    <component :is="item.svg" style="width: 35px; margin-right: 5px"/>
                    <span class="capitalize">{{ $t(item.name) }}</span>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>

    import Vue from 'vue'
    import vueSmoothScroll from 'vue2-smooth-scroll'
    import langToggle from '../toggle/lang-toggle'

    Vue.use(vueSmoothScroll)

    export default {
        props: {
            'menu-items': {
                // Example: [{ name: 'Page 1', url: 'page1', svg: 'component' }]
                type: Array,
                default: () => [],
            },
        },
        components:{
            langToggle
        },
        data(){
            return{
                langToggle,
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

</style>