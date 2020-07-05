<template>
    <!-- About Section -->
    <section id="skills">
        <div class="container">
            <h2 class="text-white">skills</h2>
            <h3 style="text-transform: capitalize">and thechnologies </h3>
            <div class="box">
                    <div>
                        <devcode style="width: 35px; margin-right: 5px"></devcode>
                        <h2 class="text-white segment-title">Developer knowledge</h2>
                        <p class="resume text-white">Work with technologies such as php, javascript, html, css,
                            suported
                            by the use of frameworks like Symfony, laravel, codeigniter, for php, nuxt, vue, extend
                            and
                            react
                            for javascript and toolkits desing
                            such as bootstrap, css grid, css flexbox.
                        </p>
                    </div>
                    <div>
                        <database style="width: 35px; margin-right: 5px"></database>
                        <h2 class="text-white segment-title">Databases</h2>
                        <p class="resume text-white">Work with technologies such as mySQL, postgreeSQL, MariaDB,
                            mongoDB, using managers like phpmyadmin, pgadmin, navicat. </p>
                    </div>

                    <div>
                        <pc style="width: 35px; margin-right: 5px"></pc>
                        <h2 class="text-white segment-title">Operating Systems</h2>
                        <p class="resume text-white">Work with diferents operating systems like windows and linux.
                            Specifically at work with ubuntu, kubuntu and kali</p>
                    </div>

                    <div>
                        <github style="width: 35px; margin-right: 5px"></github>
                        <h2 class="text-white segment-title">Version Control</h2>
                        <p class="resume text-white">Work with technologies for controling branches and version
                            controls
                            such as git.</p>
                    </div>
            </div>
        </div>
    </section>
</template>

<script>
    import Edit from "../svgIcons/edit";
    import Phone from "../svgIcons/phone";
    import User from "../svgIcons/user";
    import Colours from "../svgIcons/colours";
    import Devcode from "../svgIcons/devcode";
    import Database from "../svgIcons/database";
    import Pc from "../svgIcons/pc";
    export default {
        name: "skills",
        components: {Pc, Database, Devcode, Colours, User, Phone, Edit}
    }
</script>

<style scoped>

</style>