<template>
    <nav class="fixed-top position-fixed">
        <ul class="main-nav">
            <li><a @click="$emit('toggleSideBar')">
                <list style="width: 25px; "></list>
            </a></li>
        </ul>
        <lang-toggle class="navbar-language" @changeLang="changeLanguage($event)"></lang-toggle>

    </nav>
</template>

<script>
    import List from "../svgIcons/list";
    import langToggle from '../toggle/lang-toggle'

    export default {
        name: "navbar",
        components: {List, langToggle},
        data() {
            return {
                langToggle,
            }

        },

        methods: {
            changeLanguage(lang) {
                console.log(lang);
                this.$i18n.locale = lang.lang;
            }
        }
    }
</script>

<style scoped>

</style>