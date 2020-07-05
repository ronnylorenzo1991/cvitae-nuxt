<template>
    <div id="wrapper" :class="{'toggled':toggle}">

        <!-- Navbar -->
        <navbar v-on:toggleSideBar="toggleSideBar"></navbar>
        <!-- /#sidebar-wrapper -->
        <div id="page-content-wrapper">

            <sidebar v-on:toggleSideBar="toggleSideBar"
                     :menu-items="[
                   {
                      name: 'home',
                      url: 'home',
                      svg: HomeSvgIcon,
                    },
                   {
                      name: 'about me',
                      url: 'about',
                      svg: UserSvgIcon,
                    },
                    // {
                    //    name: 'portfolio',
                    //   url: 'portfolio',
                    //   svg: BriefcaseSvgIcon,
                    // },
                    {
                      name: 'skills',
                      url: 'skills',
                      svg: DevcodeSvgIcon,
                    },
                    {
                      name: 'services',
                      url: 'services',
                      svg: PortfolioSvgIcon,
                    },
                     {
                      name: 'contact',
                      url: 'contact',
                      svg: PhoneSvgIcon,
                    },
                    ]"
            ></sidebar>
            <!--Home section header-->
            <home></home>
            <!--About section header-->
            <about></about>
            <!-- Skills Section -->
            <skills></skills>
            <!-- excode Section -->
            <excode
                    :excodes-items="dataJson"
            ></excode>

            <!-- Contact Section -->
            <contact></contact>
            <!-- Scroll to Top Button (Only visible on small and extra-small screen sizes) -->
            <div class="scroll-to-top d-lg-none position-fixed ">
                <a class="js-scroll-trigger d-block text-center text-white rounded" href="#page-top">
                    <i class="fa fa-chevron-up"></i>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    import DataJson from "../static/service-data"
    //sidebar menu
    import Sidebar from "../components/navigation/sidebar";


    //icons for sidebar menu
    import ColoursSvgIcon from '~/components/svgIcons/colours';
    import PhoneSvgIcon from '~/components/svgIcons/phone';
    import UserSvgIcon from '~/components/svgIcons/user';
    import EditSvgIcon from '~/components/svgIcons/edit';
    import HomeSvgIcon from '~/components/svgIcons/homeMenu';
    import PortfolioSvgIcon from '~/components/svgIcons/Portfolio';
    import DevcodeSvgIcon from '~/components/svgIcons/Devcode';

    //sections
    import Navbar from "../components/navigation/navbar";
    import About from "../components/sections/about";
    import Home from "../components/sections/home";
    import Skills from "../components/sections/skills";
    import Contact from "../components/sections/contact";
    import Excode from "../components/sections/excode";

    export default {
        components: {
            //sections
            Excode,
            Contact,
            Skills,
            Home,
            About,

            //svg icons
            ColoursSvgIcon,
            PhoneSvgIcon,
            UserSvgIcon,
            EditSvgIcon,
            HomeSvgIcon,
            PortfolioSvgIcon,
            DevcodeSvgIcon,
            Sidebar,
            Navbar
        },
        methods: {
            toggleSideBar() {
                this.toggle = !this.toggle;
            },
        },
        data() {

            return {
                ColoursSvgIcon,
                PhoneSvgIcon,
                EditSvgIcon,
                HomeSvgIcon,
                UserSvgIcon,
                PortfolioSvgIcon,
                DevcodeSvgIcon,
                Sidebar,
                Navbar,
                toggle: false,
                dataJson:DataJson,
            };
        },
        head() {
            return {
                title: this.title,
                meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content: this.description,
                    },
                    {
                        hid: 'og:url',
                        name: 'og:url',
                        content: this.path,
                    },
                    {
                        hid: 'og:site_name',
                        name: 'og:site_name',
                        content: this.title,
                    },
                    {
                        hid: 'og:title',
                        name: 'og:title',
                        content: this.title,
                    },
                    {
                        hid: 'og:description',
                        name: 'og:description',
                        content: this.description,
                    },
                    {
                        hid: 'apple-mobile-web-app-title',
                        name: 'apple-mobile-web-app-title',
                        content: this.shortTitle,
                    },
                    {
                        hid: 'application-name',
                        name: 'application-name',
                        content: this.shortTitle,
                    },
                ],
            };
        },
    };
</script>

