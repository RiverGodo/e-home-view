<template>
    <div>
        <el-card>
            <div slot="header">
                添加新闻
            </div>
            <el-form :model="formData" label-width="80px" label-position="left" :rules="rules">
                <el-form-item label="新闻头图">
                    <avatarUpload v-model="formData.img"></avatarUpload>
                </el-form-item>
              <el-form-item label="新闻标题" required prop="title">
                <el-input v-model="formData.title" placeholder="请输入标题"></el-input>
              </el-form-item>
              <el-form-item label="作者" required prop="author">
                <el-select v-model="formData.author" placeholder="请选择作者">
                  <el-option 
                    v-for="(item, index) in users" 
                    :key="index" 
                    :label="item.nickname" 
                    :value="item._id"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="新闻内容">
                <quill-editor 
                    v-model="formData.content"
                    ref="myQuillEditor"
                    @change="editChange($event)"
                    :options="editorOption"
                >
                </quill-editor>
              </el-form-item>
              <el-form-item label="新闻分类" required prop="type">
                  <el-select v-model="formData.type" placeholder="请选择新闻分类">
                    <el-option 
                        v-for="(item, index) in categories" 
                        :key="index" 
                        :value="item._id"
                        :label="item.title">
                    </el-option>
                  </el-select>
              </el-form-item>
              <el-form-item >
                  <el-button type="primary" @click="handleSubmit">
                      提交
                  </el-button>
              </el-form-item>
            </el-form>
        </el-card>

    </div>
</template>

<script>
    import avatarUpload from '@/components/upload-avatar'
    import 'quill/dist/quill.core.css'
    import 'quill/dist/quill.snow.css'
    import 'quill/dist/quill.bubble.css'
    import axios from 'axios'
    import {quillEditor, Quill} from 'vue-quill-editor'
    import {container, ImageExtend, QuillWatch} from 'quill-image-extend-module'
    Quill.register('modules/ImageExtend', ImageExtend)

export default {
    components: {quillEditor,avatarUpload},
    data(){
        return {
            formData:{
                title:'',
                content:'',
                contentText:'',
                img:'',
                author:'',
                type:'',
                look_num:''
            },
            token:'',
            users:[],
            categories:[],

            editorOption:{
                modules: {
                    ImageExtend: {
                        loading: true,
                        name: 'file',
                        action: 'https://upload-z1.qiniup.com',
                        response: (res) => {
                            return res.url
                        },
                        change: (xhr, formData) => {
                            formData.append('token', this.token)
                        }
                    },
                    toolbar: {
                        container: container,
                        handlers: {
                            'image': function () {
                                QuillWatch.emit(this.quill.id)
                            }
                        }
                    }
                }
            },
            rules:{
                title: [
                    { required: true, message: '请输入标题', trigger: 'blur' },
                ],
                author: [
                    { required: true, message: '请选择作者', trigger: 'change'}
                ],
                type:[
                    { required: true, message: '请选择新闻分类', trigger: 'change'}
                ]
            }
        }
    },
    methods:{
        getUser() {
            this.$axios.get('/admin/adminUser').then(res => {
                if(res.code == 200){
                    this.users = res.data
                }
  
            })
        },
        getToken(){
            axios.get('http://upload.yaojunrong.com/getToken').then(res=>{
                this.token = res.data.data
            })
        },
        editChange({ quill, html, text }){
            this.formData.contentText = text
        },
        getCategory() {
            this.$axios.get('/admin/category').then(res => {
                if(res.code == 200){
                    this.categories = res.data
                }
            })
        },
        handleSubmit(){
            if(!this.formData.title){
                this.$message.error('新闻标题不能为空')
            }else if(!this.formData.author){
                this.$message.error('请选择作者')
            }else if(!this.formData.type){
                this.$message.error('请选择新闻分类')
            }else {
                    this.$axios.post('/admin/news',this.formData).then(res => {
                    if(res.code == 200){
                        this.$message.success(res.msg)
                        this.$router.push({name:'news'})
                    }
                })
            }

        }
    },
    created(){
        this.getToken()
        this.getUser()
        this.getCategory()
    }
}
</script>

<style>
 .ql-container{
     min-height: 200px;
 }

</style>
