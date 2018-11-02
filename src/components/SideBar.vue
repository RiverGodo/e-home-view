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
            unique-opened
            >
                <router-link to="/layout/home">
                    <el-menu-item index="/home" class="nav-item">
                            首页
                    </el-menu-item>
                </router-link>
                <el-submenu index="admin-manage">
                    <div slot="title">
                        管理员管理
                    </div>
                     <router-link to="/layout/adminUser" >
                        <el-menu-item index="/layout/adminUser" class="nav-item">
                                管理员列表
                        </el-menu-item>
                     </router-link>

                     <router-link to="/layout/addAdmin" >
                        <el-menu-item index="/layout/addAdminUser" class="nav-item">
                                添加管理员
                        </el-menu-item>
                    </router-link>
                </el-submenu>
                <el-submenu index="news-manage">
                    <div slot="title">
                        新闻管理
                    </div>
                    <router-link to="/layout/news" >
                        <el-menu-item index="/layout/news" class="nav-item">
                                新闻列表
                        </el-menu-item>
                     </router-link>
                    <router-link to="/layout/addNews" >
                        <el-menu-item index="/layout/addNews" class="nav-item">
                                添加新闻
                        </el-menu-item>
                     </router-link>
                </el-submenu>
                <el-submenu index="swiper-manage">
                    <div slot="title">
                        轮播图管理
                    </div>
                    <router-link to="/layout/swiper" >
                        <el-menu-item index="/layout/swiper" class="nav-item">
                                轮播图列表
                        </el-menu-item>
                    </router-link>
                    <router-link to="/layout/addSwiper" >
                        <el-menu-item index="/layout/addSwiper" class="nav-item">
                                添加轮播图
                        </el-menu-item>
                    </router-link>
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
};
</script>

<style scoped lang = "scss">
.side-bar {
	overflow: hidden;
	min-height: 100vh;
	border-right: 1px solid #f1f1f1;
	background: #304165;
	width: 200px;
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	.nav-item {
		background: #1f2d3d !important;
	}
}
</style>
