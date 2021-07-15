<template>
  <div>
<!-- BEGIN LOADER -->
    
    <!--  BEGIN NAVBAR  components header-->

    <Header></Header>
     <!-- BEGIN NAVBAR  components header -->

    <!--  END NAVBAR  -->

<!--  BEGIN MAIN CONTAINER  -->
    <div class="main-container sidebar-closed sbar-open" id="container">

        <div class="overlay"></div>
        <div class="search-overlay"></div>

        <!--  BEGIN SIDEBAR  -->
        <SlideBar></SlideBar>
        <!--  END SIDEBAR  -->
        
        <!--  BEGIN CONTENT AREA  -->
        <div id="content" class="main-content">
            <div class="layout-px-spacing">

                <router-view />

            </div>
        </div>
        <!--  END CONTENT AREA  -->

    </div>
    <!-- END MAIN CONTAINER -->

  </div>
</template>

<script>
import SlideBar from '../components/SlideBar.vue';
import Header from '../components/Header.vue';

export default {
  name: 'Dashboard',
  components: {
    Header: Header,
    SlideBar: SlideBar
  },
  data: {
        title: 'Dashbboard'
    }
};
</script>

<style>

</style>