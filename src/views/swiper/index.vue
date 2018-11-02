<template>
    <div>
        <el-card>
            <div slot="header">
                轮播图列表
            </div>

            <el-table :data="tableData" >
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
                      <el-button type="danger" size="mini" @click="handleDelete(scope.row._id)">
                          删除
                      </el-button>
                  </div>
              </el-table-column>
            </el-table>

            <el-pagination 
            background layout="prev,pager,next" 
            @current-change="pnChange" 
            :page-size="page_size"
            :total="swiperCount">
            </el-pagination>

        </el-card>



    </div>
</template>

<script>
export default {
    data() {
        return {
            tableData:[],
            page:1,
            page_size:5,
            swiperCount:1
        }
    },
    methods:{
        getData(){
            this.$axios.get('/admin/swiper',{ page: this.page, page_size: this.page_size }).then(res => {
                this.tableData = res.data
                this.swiperCount = res.count
            })
        },
        pnChange(page){
            this.page = page
            this.getData()
        },
        handleEdit(id){
            this.$router.push({name:'editSwiper', query:{id}})
        },
        handleDelete(id){
            this.$confirm('此操作将永久删除该轮播图, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
            }).then(() => {
                this.$axios.delete(`/admin/swiper/${id}`).then(res => {
                this.getData()
                this.$message({type: 'success',message: '删除成功!'});
                })
            }).catch(() => {
            this.$message({type: 'info',message: '已取消删除'});          
            });
        },

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
