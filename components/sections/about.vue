<template>
    <!-- About Section -->
    <section id="about">
        <div class="container">
            <h2 class="text-white">{{$t('about')}}</h2>
            <h3 style="text-transform: capitalize">28 {{$t('years_old')}} / Freelance </h3>
            <div class="box">
                    <p class="resume text-white">
                        {{$t('about_resume')}}
                    </p>

                    <p class="resume text-white">
                        {{$t('about_postgrade')}}
                    </p>

                    <p class="resume text-white">
                        {{$t('about_courses')}}
                    </p>

                    <p class="resume text-white">
                        {{$t('about_consideration')}}
                    </p>

            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "about"
    }
</script>

<style scoped>

</style>