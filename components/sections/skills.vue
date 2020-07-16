<template>
    <!-- About Section -->
    <section id="skills">
        <div class="container">
            <h2 class="text-white">{{$t('skills')}}</h2>
            <h3 style="text-transform: capitalize">{{$t('and_technologies')}}</h3>
            <div class="box">
                    <div v-for="(item, index) in skills" :key="index"  >
                        <component :is="item.svg"  style="width: 35px; margin-right: 5px"/>
                        <h2 class="text-white segment-title" v-text="item.title"></h2>
                        <p class="resume text-white" v-text="item.text"></p>
                    </div>

            </div>
        </div>
    </section>
</template>

<script>

    export default {
        props:{
            'skills':{}
        },
        name: "skills",
    }
</script>

<style scoped>

</style>