<template>
    <!-- Contact Section -->
    <section id="contact" class="section-padding">
        <div class="container">
            <h2 class="text-white">contact</h2>
            <h3 style="text-transform: capitalize">Phone / Address / Socials </h3>
            <div class="box">
                    <div>
                        <direction style="width: 35px; margin-right: 5px"></direction>
                        <h2 class="text-white segment-title">Address</h2>
                        <p class="resume text-white">31 avenue 106 & 108 street. La Habana, Cuba.</p>
                    </div>
                    <div>
                        <phone style="width: 35px; margin-right: 5px"></phone>
                        <h2 class="text-white segment-title"> Phone Number</h2>
                        <p class="resume text-white">+5356733933, 5372076795</p>
                    </div>

                    <div>
                        <whatsapp style="width: 35px; margin-right: 5px"></whatsapp>
                        <h2 class="text-white segment-title"> Whatsapp Contact</h2>
                        <p class="resume text-white">+5356733933</p>
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