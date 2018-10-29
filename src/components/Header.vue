<template>
    <div class="header clearfix">
        <el-breadcrumb separator="/" class="fll">
          <el-breadcrumb-item :to="{path:'/'}">首页</el-breadcrumb-item>
          <el-breadcrumb-item><a href="">活动管理</a></el-breadcrumb-item>
          <el-breadcrumb-item>活动列表</el-breadcrumb-item>
          <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
        <el-dropdown class="flr">
            <span class="el-dropdown-link">
                更多菜单<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>黄金糕</el-dropdown-item>
                <el-dropdown-item>狮子头</el-dropdown-item>
                <el-dropdown-item>螺蛳粉</el-dropdown-item>
                <el-dropdown-item>双皮奶</el-dropdown-item>
                <el-dropdown-item>蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped lang = "scss">
 .header{
     padding: 0 20px;
     height: 50px;
     line-height: 5;
     border-bottom: 1px solid #f1f1f1;
     margin-left: 200px;
     /* overflow: hidden; */

     .header-right{

         line-height: 3;
   
     }
 }

 .header{
     /deep/ .el-breadcrumb{
         line-height: 50px;
     }
 }

.header{
    /deep/ .el-dropdown{
        line-height: 50px;
    }
}
 

</style>
