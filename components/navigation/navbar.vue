<template>
    <nav class="fixed-top position-fixed">
        <ul class="main-nav">
            <li><a  @click="$emit('toggleSideBar')"><list style="width: 25px; "></list></a></li>
        </ul>
    </nav>
</template>

<script>
    import List from "../svgIcons/list";
    export default {
        name: "navbar",
        components: {List},
    }
</script>

<style scoped>

</style>