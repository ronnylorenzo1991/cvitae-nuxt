<template>
    <div id="slider">


        <input v-for="(image, index)  in images" :key="index"  type="radio"
               name="slider" :id="'slide'+index" selected="false" @click="slide(index)">

        <input  checked  type="radio" name="slider" id="autoplay" selected="false"  >
        <div id="slides">
            <div id="overflow">
                <div class="inner">
                    <article v-for="(image, index)  in images"  :id="'article'+index">
                        <content :select="'img:nth-of-type('+index+')'">
                            <img :src="require('~/assets/img/assets/'+image.url)">
                        </content>
                    </article>
                </div> <!-- .inner -->
            </div> <!-- #overflow -->
        </div>
        <label v-for="(image, index)  in images"  class="dot" :for="'slide'+index" :id="'label'+index"></label>
    </div>
</template>

<script>
    import $ from 'jquery'
    export default {
        props: {
            'images': {
                type: Object,
            },
        },
        name: "carrousel",
       created() {
         setInterval(() => this.autoplay(),10000)   ;
       },
        methods: {
            slide: function (index) {
                 $('.dot').css('background', '#CCC');
                 $('#article'+index).parent().css('margin-left','-'+index+'00%');
                 $('#label'+index).css('background', '#333')
            },
            autoplay:function () {
               if(!$('#autoplay').prop('checked'))
               {
                   $('#autoplay').prop('checked',true);
                   console.log($('#autoplay').prop('checked'));
               }
            }
        }
    }
</script>

<style scoped>
    * {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        -ms-box-sizing: border-box;
        box-sizing: border-box;
        transition: all 800ms cubic-bezier(0.770, 0.000, 0.175, 1.000);
    }

    #slider {
        text-align: center;
    }

    #overflow {
        width: 100%;
        overflow: hidden;
    }

    #slides .inner {
        width: 400%;
    }

    #slides .inner {
        -webkit-transform: translateZ(0);
        -moz-transform: translateZ(0);
        -o-transform: translateZ(0);
        -ms-transform: translateZ(0);
        transform: translateZ(0);

        -webkit-transition: all 800ms cubic-bezier(0.770, 0.000, 0.175, 1.000);
        -moz-transition: all 800ms cubic-bezier(0.770, 0.000, 0.175, 1.000);
        -o-transition: all 800ms cubic-bezier(0.770, 0.000, 0.175, 1.000);
        -ms-transition: all 800ms cubic-bezier(0.770, 0.000, 0.175, 1.000);
        transition: all 800ms cubic-bezier(0.770, 0.000, 0.175, 1.000);

        -webkit-transition-timing-function: cubic-bezier(0.770, 0.000, 0.175, 1.000);
        -moz-transition-timing-function: cubic-bezier(0.770, 0.000, 0.175, 1.000);
        -o-transition-timing-function: cubic-bezier(0.770, 0.000, 0.175, 1.000);
        -ms-transition-timing-function: cubic-bezier(0.770, 0.000, 0.175, 1.000);
        transition-timing-function: cubic-bezier(0.770, 0.000, 0.175, 1.000);
    }

    #slides article {
        width: 25%;
        float: left;
    }

    /*#slide1:checked ~ #slides .inner {*/
    /*margin-left: 0;*/
    /*}*/

    /*!*#slide2:checked ~ #slides .inner {*!*/
    /*!*margin-left: -100%;*!*/
    /*!*}*!*/

    /*!*#slide3:checked ~ #slides .inner {*!*/
    /*!*margin-left: -200%;*!*/
    /*!*}*!*/

    /*!*#slide4:checked ~ #slides .inner {*!*/
    /*!*margin-left: -300%;*!*/
    /*!*}*!*/
    /*#slide1:checked ~ label[for="slide1"],*/
    /*#slide2:checked ~ label[for="slide2"],*/
    /*#slide3:checked ~ label[for="slide3"],*/
    /*#slide4:checked ~ label[for="slide4"] {*/
    /*background: #333;*/
    /*}*/

    input[type="radio"] {
        display: none;
    }

    label {
        background: #CCC;
        display: inline-block;
        cursor: pointer;
        width: 10px;
        height: 10px;
        border-radius: 5px;
        margin-right: 5px;
    }
    label[for="slide0"]{
        background: #333;
    }


    img {
        width: 100%;
    }


    /* Calculate AUTOPLAY for SLIDES */
    @keyframes slide {
        0% {margin-left: 0%}
        15.33% {margin-left: 0%}
        25.33% {margin-left: -100%}
        45.33% {margin-left: -100%}
        55.33% {margin-left: -200%}
        75.33% {margin-left: -200%}
        85.33% {margin-left: -300%}
        95% {margin-left: -300%}
        100% {margin-left: 0%}
    }


      #autoplay:checked ~ #slides #overflow .inner {
        animation: slide 12300ms infinite;
    }
    /* Calculate AUTOPLAY for SLIDES - END */

    /* Calculate AUTOPLAY for BULLETS */
    @keyframes bullet {
        0%, 33.32333333333334%	{
            background: red;
        }
        33.333333333333336%, 100% {
            background: gray;
        }
    }


    #play1:checked ~ div .fake-radio .radio-btn:nth-child(1) {
        animation: bullet 12300ms infinite -1000ms;
    }

    #play1:checked ~ div .fake-radio .radio-btn:nth-child(2) {
        animation: bullet 12300ms infinite 3100ms;
    }

    #play1:checked ~ div .fake-radio .radio-btn:nth-child(3) {
        animation: bullet 12300ms infinite 7200ms;
    }
    /* Calculate AUTOPLAY for BULLETS - END */

</style>