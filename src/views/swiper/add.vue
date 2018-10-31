<template>
    <div>
        <el-card>
            <div slot="title">
                添加轮播图
            </div>

            <el-form :model="formData" label-position="left" label-width="80px">
              <el-form-item label="轮播图" required prop="img">
                  <UploadImg v-model="formData.img"></UploadImg>
              </el-form-item>
              <el-form-item label="标题" required prop="title">
                  <el-input v-model="formData.title" placeholder="请输入标题"></el-input>
              </el-form-item>
              <el-form-item label="新闻" required prop="newsId">
                  <el-select v-model="formData.newsId" placeholder="请选择">
                    <el-option 
                        v-for="(item,index) in news" 
                        :key="index" 
                        :value="item._id"
                        :label="item.title">
                    </el-option>
                  </el-select>
              </el-form-item>

              <el-form-item label="排序" prop="sort">
                   <el-input-number 
                        v-model="formData.sort"  
                        :min="1" 
                        :step="1"
                        :max="998"
                        ></el-input-number>
              </el-form-item>

              <el-form-item label="是否显示" prop="status">
                   <el-switch
                        v-model="formData.status"
                        :active-value="1"
                        :inactive-value="0"
                        active-text="显示"
                        inactive-text="不显示"
                         >
                    </el-switch>
              </el-form-item>

              <el-form-item >
                  <el-button type="primary" @click="handleSubmit" v-if="!isEdit">
                      提交
                  </el-button>
                  <el-button type="danger" @click="handleSave" v-else>
                      保存更改
                  </el-button>
              </el-form-item>
            </el-form>
        </el-card>

    </div>
</template>

<script>
import UploadImg from '@/components/upload-avatar'
export default {
    components:{
        UploadImg
    },
    data(){
        return{
            formData:{
                img:'',
                title:'',
                newsId:'',
                sort:'',//控制排序
                status: 1 ,//控制显示
            },
            news : [],
            isEdit:false
        }
    },
    methods:{
        getNews() {
            this.$axios.get('/admin/news').then(res => {
                this.news = res.data
            })
        },
        handleSubmit() {
            this.$axios.post('/admin/swiper', this.formData).then(res => {
                if(res.code == 200){
                    this.$message.success(res.msg)
                    this.$router.push({name:'swiper'})
                }
            })
        },
        getEditData() {
            const id = this.$route.query.id
            this.$axios.get(`/admin/swiper/${id}`).then(res => {
                this.formData = res.data
            })
        },
        handleSave() {

        },
        
        addorsave(){
            if(this.$route.name == 'editSwiper'){
                this.isEdit = true 
            }else{
                this.isEdit = false
            }
        }
    },
    created(){
        this.addorsave()
        this.getNews()
        if(this.isEdit){
            this.getEditData()
        }
        
    },
    watch:{
        $route(to , from){
            if(to.name == 'editSwiper'){
                this.isEdit = true 
            }else{
                this.isEdit = false
            }
        }
    }
}
</script>

<style>

</style>
