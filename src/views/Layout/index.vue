<template>
    <div>
        <SideBar/>
        <Header/>
        <AppMain/> 
    </div>
</template>

<script>
import Header from '@/components/Header'
import SideBar from '@/components/SideBar'
import AppMain from './AppMain'
export default {
    components:{
        Header,
        SideBar,
        AppMain
    }
}
</script>

<style scoped>
     
</style>
