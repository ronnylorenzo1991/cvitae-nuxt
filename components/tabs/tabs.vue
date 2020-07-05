<template>
    <div>
        <div >
            <ul class="tabs">
                <li v-for="tab in tabs" :class="{ 'is-active':tab.isActive}">
                    <a :href="tab.href" @click="selectedTab(tab)">{{tab.name}}</a>
                </li>
            </ul>
        </div>
        <div class="tab-details">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
          return{
              tabs: []
          }
        },
        name: "tabs",
        created () {
            this.tabs = this.$children;
        },
        methods : {
            selectedTab(selectedTab) {
                this.tabs.forEach(tab =>{
                    tab.isActive = (tab.name == selectedTab.name);
                });
            }
        }

    }
</script>

<style scoped>

</style>