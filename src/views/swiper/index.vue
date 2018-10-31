<template>
    <div>
        <el-card>
            <div slot="header">
                轮播图列表
            </div>

            <el-table :data="tableData">
              <el-table-column label="轮播图">
                  <template slot-scope="scope">
                      <img :src="scope.row.img" alt="" class="table-item-img">
                  </template>
              </el-table-column>
              <el-table-column label="轮播图标题" prop="title"></el-table-column>
              <el-table-column label="新闻标题" prop="newsId.title"></el-table-column>
              <el-table-column label="排序" prop="sort"></el-table-column>
              <el-table-column label="是否显示">
                  <div slot-scope="scope">
                      {{scope.row.status ? '显示' : '不显示'}}
                  </div>
              </el-table-column>
              <el-table-column label="操作">
                  <div slot-scope="scope">
                      <el-button type="warning" @click="handleEdit(scope.row._id)" size="mini">
                          编辑
                      </el-button>
                      <el-button type="danger" size="mini">
                          删除
                      </el-button>
                  </div>
              </el-table-column>
            </el-table>
        </el-card>

    </div>
</template>

<script>
export default {
    data() {
        return {
            tableData:[]
        }
    },
    methods:{
        getData(){
            this.$axios.get('/admin/swiper').then(res => {
                this.tableData = res.data
            })
        },
        handleEdit(id){
            this.$router.push({name:'editSwiper', query:{id}})
        }
    },
    created(){
        this.getData()
    }
}
</script>

<style>
    .table-item-img{
    width: 80px;
    height: 80px;
    }
</style>
