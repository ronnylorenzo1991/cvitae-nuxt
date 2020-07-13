<template>
    <!-- Contact Section -->
    <section id="contact" class="section-padding">
        <div class="container">
            <h2 class="text-white">{{$t('contact')}}</h2>
            <h3 style="text-transform: capitalize">{{$t('phone')}} / {{$t('address')}} / {{$t('socials')}} </h3>
            <div class="box">
                    <div>
                        <direction style="width: 35px; margin-right: 5px"></direction>
                        <h2 class="text-white segment-title">{{$t('address')}}</h2>
                        <p class="resume text-white">{{$t('address_text')}}</p>
                    </div>
                    <div>
                        <phone style="width: 35px; margin-right: 5px"></phone>
                        <h2 class="text-white segment-title"> {{$t('phone')}}</h2>
                        <p class="resume text-white">(+53) 56733933, (+53) 72076795</p>
                    </div>

                    <div>
                        <whatsapp style="width: 35px; margin-right: 5px"></whatsapp>
                        <h2 class="text-white segment-title"> Whatsapp</h2>
                        <p class="resume text-white">(+53) 56733933</p>
                    </div>

                    <div>
                        <email style="width: 35px; margin-right: 5px"></email>
                        <h2 class="text-white segment-title">E-mail</h2>
                        <p class="resume text-white">garcialorenzo1991@gmail.com</p>
                    </div>
            </div>
        </div>
    </section>
</template>

<script>
    import Phone from "../svgIcons/phone";
    import Whatsapp from "../svgIcons/whatsapp";
    import Email from "../svgIcons/email";
    import Direction from "../svgIcons/direction";
    export default {
        name: "contact",
        components: {Direction, Email, Whatsapp, Phone}
    }
</script>

<style scoped>

</style>