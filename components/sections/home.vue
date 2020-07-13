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
                    <button class="btn btn-primary">{{ $t('download') }} CV</button>
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