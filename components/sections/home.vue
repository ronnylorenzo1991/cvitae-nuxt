<template>
    <!-- home -->
    <section class="fullscreen" id="home">
        <div class="bg-header text-white text-center">
            <div class="fs-content">

                <div class="fs-content-top">
                    <h1>{{ $t('hellomsg') }} <span style="text-decoration-line: underline ">Ronny García Lorenzo</span>
                    </h1>
                    <h3>{{ $t('welcomemsg') }}</h3>
                </div>
                <div class="fs-content-bottom">
                    <a class="btn btn-primary" :href="'cv-'+this.$i18n.locale+'.pdf'">{{ $t('get_in') }} PDF</a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "home"
    }
</script>

<style scoped>

</style>