<template>
    <!-- About Section -->
    <section id="skills">
        <div class="container">
            <h2 class="text-white">{{$t('skills')}}</h2>
            <h3 style="text-transform: capitalize">{{$t('and_technologies')}}</h3>
            <div class="box">
                    <div>
                        <devcode style="width: 35px; margin-right: 5px"></devcode>
                        <h2 class="text-white segment-title">{{$t('developer_knowledge')}}</h2>
                        <p class="resume text-white">{{$t('developer_knowledge_text')}}</p>
                    </div>
                    <div>
                        <database style="width: 35px; margin-right: 5px"></database>
                        <h2 class="text-white segment-title">{{$t('databases')}}</h2>
                        <p class="resume text-white">{{$t('databases_text')}} </p>
                    </div>

                    <div>
                        <pc style="width: 35px; margin-right: 5px"></pc>
                        <h2 class="text-white segment-title">{{$t('operating_systems')}}</h2>
                        <p class="resume text-white">{{$t('operating_systems_text')}}</p>
                    </div>

                    <div>
                        <github style="width: 35px; margin-right: 5px"></github>
                        <h2 class="text-white segment-title">{{$t('version_control')}}</h2>
                        <p class="resume text-white">{{$t('version_control_text')}}</p>
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