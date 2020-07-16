<template>
    <div class="login-box">
        <div class="login">
            <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="100px" class="demo-dynamic">
                <el-form-item
                        prop="username"
                        label="帐号"
                        :rules="[{ required: true, message: '请输入帐号', trigger: 'blur' },
                {min: 4, max: 12, message: '长度在 4 到 12 个字符'}]"
                >
                    <el-input v-model="dynamicValidateForm.username"></el-input>
                </el-form-item>
                <el-form-item
                        prop="password"
                        label="密码"
                        :rules="[{ required: true, message: '请输入密码', trigger: 'blur' },
                    {min: 6, max: 18, message: '长度在 6 到 18 个字符'}]"
                >
                    <el-input v-model="dynamicValidateForm.password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button class="submit-btn" type="primary" @click="submitForm('dynamicValidateForm')">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                dynamicValidateForm: {
                    username: '',
                    password: ''
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            }
        }
    }
</script>

<style scoped>
    .login-box{
        background: url("../assets/login-bg.jpg") no-repeat;
        background-size: 100% auto;
        display: block;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    .login{
        width :400px;
        height: 300px;
        margin: 100px auto;
        border: 1px solid #EBEEF5;
        padding: 60px 50px 0 0;
    }
    .submit-btn{
        width: 100%;
    }
</style>