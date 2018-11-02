<template>
    <div>
        <el-card>
            <el-table :data="tableData">
              <el-table-column label="新闻标题" prop="title"/>
              <el-table-column label="作者" prop="author.nickname"/>
              <el-table-column label="新闻头图">
                  <template slot-scope="scop">
                      <img :src="scop.row.img" alt="" class="table-item-img">
                  </template>
              </el-table-column>
              <el-table-column label="分类" prop="type.title" />
              <el-table-column label="操作">
                  <div slot-scope="scope">
                      <el-button type="primary" @click="handleDetail(scope.row._id)" size="mini">
                          查看详细
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
            :total="newsCount">
            </el-pagination>

        </el-card>

        <el-dialog
        :visible.sync="CardVisible"
        width="60%"
        >
            <el-card>
                <div>
                    详细信息
                </div>
                <div>
                    <h1>{{this.newsData.title}}</h1>
                    <div v-html="this.newsData.content" class="titleimg">
                    </div>
                </div>
            </el-card>
            <el-card>
                <div slot-scope="scop">
                    <el-button type="danger" @click="handleEdit">修改新闻</el-button>
                    <el-button @click="CardVisible = false">取消</el-button>
                </div>
            </el-card>
        </el-dialog>


    </div>
</template>

<script>
export default {
    data(){
        return{
            tableData:[],
            page:1,
            page_size:5,
            newsCount:1,
            CardVisible:false,
            newsData:[],
            editId:""
        }
    },
    methods:{
        getData(){
            this.$axios.get('/admin/news',{ page: this.page, page_size: this.page_size }).then(res => {
                this.tableData = res.data
                this.newsCount = res.count
            })
        },
        pnChange(page){
            this.page = page
            this.getData()
        },
        handleDelete(id){
            this.$confirm('此操作将永久删除该新闻, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
            }).then(() => {
                this.$axios.delete(`/admin/news/${id}`).then(res => {
                this.getData()
                this.$message({type: 'success',message: '删除成功!'});
                })

            }).catch(() => {
            this.$message({type: 'info',message: '已取消删除'});          
            });
        },
        handleDetail(id){
            this.CardVisible = true
            this.$axios.get(`/admin/news/${id}`).then(res =>{
                this.newsData = res.data
                this.editId = id
                 console.log(this.editId);
            })
        },
        handleEdit(){
            let id = this.editId
            console.log(id);
            this.$router.push({name:"addNews", query:{id}})
        }
    }, 
    created(){
        this.getData()
    }
}
</script>

<style scoped lang = "scss">
 .table-item-img{
    width: 80px;
    height: 80px;
    }
.titleimg{
   /deep/ img{
       height: 375px;
       width: 375px;
   }
}
</style>
