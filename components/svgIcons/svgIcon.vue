<template>
  <svg :id="'svg-' + id"
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   version="1.1"
   id="Layer_1"
   x="0px"
   y="0px"
   viewBox="0 0 330 330"
   style="enable-background:new 0 0 330 330;"
   xml:space="preserve"
   sodipodi:docname="home-white.svg"
   inkscape:version="0.92.4 (5da689c313, 2019-01-14)"><metadata
   id="metadata10"><rdf:RDF><cc:Work
       rdf:about=""><dc:format>image/svg+xml</dc:format><dc:type
         rdf:resource="http://purl.org/dc/dcmitype/StillImage" /><dc:title></dc:title></cc:Work></rdf:RDF></metadata><defs
   id="defs8" /><sodipodi:namedview
   pagecolor="#ffffff"
   bordercolor="#666666"
   borderopacity="1"
   objecttolerance="10"
   gridtolerance="10"
   guidetolerance="10"
   inkscape:pageopacity="0"
   inkscape:pageshadow="2"
   inkscape:window-width="1366"
   inkscape:window-height="705"
   id="namedview6"
   showgrid="false"
   inkscape:zoom="0.50568849"
   inkscape:cx="23.68978"
   inkscape:cy="168.97368"
   inkscape:window-x="-8"
   inkscape:window-y="-8"
   inkscape:window-maximized="1"
   inkscape:current-layer="Layer_1" />
    <slot />
  </svg>
</template>

<style scoped>
svg {
  @media (min-width: 640px) and (max-width: 767px) {
    @apply w-8 h-8 mx-3;
  }
}
</style>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  // TODO: Remove data() when coverage is successful with vue-jest@4.x.x
  data() {
    return {};
  },
};
</script>
