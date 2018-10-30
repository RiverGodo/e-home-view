<template>
    <div class="side-bar">
                <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color = "#304165"
            text-color = "#fff"
            active-text-color = "#ffd04b"
            >
                <el-menu-item index="/home" class="nav-item">
                    <router-link to="/layout/home">
                        首页
                    </router-link>
                </el-menu-item>
                <el-submenu index="admin-manage">
                    <div slot="title">
                        管理员管理
                    </div>
                    <el-menu-item index="/layout/adminUser" class="nav-item">
                        <router-link to="/layout/adminUser" >
                            管理员列表
                        </router-link>
                    </el-menu-item>
                    <el-menu-item index="/layout/adminUser" class="nav-item">
                        <router-link to="/layout/addAdmin" >
                            添加管理员
                        </router-link>
                    </el-menu-item>
                </el-submenu>
                <el-submenu index="news-manage">
                    <div slot="title">
                        新闻管理
                    </div>
                    <el-menu-item index="/layout/news" class="nav-item">
                        <router-link to="/layout/news" >
                            新闻列表
                        </router-link>
                    </el-menu-item>
                    <el-menu-item index="/layout/addNews" class="nav-item">
                        <router-link to="/layout/addNews" >
                            添加新闻
                        </router-link>
                    </el-menu-item>
                </el-submenu>
            </el-menu>
    </div>
</template>

<script>
export default {
     methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<style scoped lang = "scss">
    .side-bar{
        overflow: hidden;
        min-height: 100vh;
        border-right: 1px solid #f1f1f1;
        background: #304165;
        width: 200px;
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        .nav-item{
            display: block;
            width: 100%;
            height: 100%;
            background: #1f2d3d !important;

        }
    }
</style>
