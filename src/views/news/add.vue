<template>
    <div>
        <el-card>
            <div slot="header">
                添加新闻
            </div>
            <el-form :model="formData" label-width="80px" label-position="left">
              <el-form-item label="新闻标题" required >
                <el-input v-model="formData.title" placeholder=""></el-input>
              </el-form-item>
              <el-form-item label="作者" required >
                <el-select v-model="formData.author" placeholder="">
                  <el-option 
                    v-for="(item, index) in users" 
                    :key="index" 
                    :label="item.nickname" 
                    :value="item._id"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="新闻内容" required >
                <quill-editor 
                    v-model="formData.content"
                    ref="myQuillEditor"
                    :options="editorOption"
                >
                </quill-editor>
              </el-form-item>
              <el-form-item label="新闻标题" required >
                <el-input v-model="formData.title" placeholder=""></el-input>
              </el-form-item>
              <el-form-item label="新闻标题" required >
                <el-input v-model="formData.title" placeholder=""></el-input>
              </el-form-item>
            </el-form>
        </el-card>

    </div>
</template>

<script>
    import 'quill/dist/quill.core.css'
    import 'quill/dist/quill.snow.css'
    import 'quill/dist/quill.bubble.css'
    import axios from 'axios'
    import {quillEditor, Quill} from 'vue-quill-editor'
    import {container, ImageExtend, QuillWatch} from 'quill-image-extend-module'
    Quill.register('modules/ImageExtend', ImageExtend)

export default {
    components: {quillEditor},
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
        }
    },
    created(){
        this.getToken()
        this.getUser()
    }
}
</script>

<style>

</style>
