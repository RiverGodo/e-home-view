<template>
    <div>
        <el-card>
            <div slot="header">
                添加管理员
            </div>
            <el-form :model="formData" label-width="100px" label-position="left">
              <el-form-item label="用户头像">
                  <uploadAvatar v-model="formData.avatar"></uploadAvatar>
              </el-form-item>
              <el-form-item label="用户名" required>
                  <el-input v-model="formData.username" placeholder="请输入用户名" ></el-input>
              </el-form-item>
              <el-form-item label="密码" required>
                  <el-input v-model="formData.password" type="password" placeholder="请输入密码"></el-input>
              </el-form-item>
              <el-form-item label="姓名">
                  <el-input v-model="formData.nickname" placeholder="请输入姓名"></el-input>
              </el-form-item>
              <el-form-item label="性别">
                  <el-select v-model="formData.sex" >
                    <el-option label="男" value="1"></el-option>
                    <el-option label="女" value="0"></el-option>
                  </el-select>
              </el-form-item>
              <el-form-item label="手机号码">
                  <el-input v-model="formData.phone" placeholder="请输入手机号"></el-input>
              </el-form-item>
              <el-form-item label="个性签名">
                  <el-input v-model="formData.desc" placeholder="请输入个性签名"></el-input>
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
import uploadAvatar from '@/components/upload-avatar'
export default {
    components:{
        uploadAvatar
    },
    data() {
        return{
                formData:{
                    username:"",
                    nickname: "",
                    avatar: "",
                    password: "",
                    desc: "",
                    job: "",
                    phone: "",
                    sex: "",
                },
                
            }
        },
    methods:{
        handleSubmit() {
            this.$axios.post('/admin/adminUser', this.formData).then(res => {
                if(res.code == 200){
                    this.$message.success(res.msg)
                    this.$router.push({name:'adminUser'})
                }
            })
        }
    }
    }

</script>

<style scoped>

</style>
