<template>
  <div class="container-login">
    this is login page
    <el-card>
      <img src="../../assets/header.png" alt />
      <el-form
        ref="loginForm"
        :model="loginForm"
        :rules="loginFormrule"
        style="position:absolute,top:80px"
      >
        <el-form-item prop="mobile">
          <el-input v-model="loginForm.mobile" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input
            style="width:240px;margin-right:8px"
            v-model="loginForm.code"
            placeholder="请输入验证码"
          ></el-input>
          <el-button>发送验证码</el-button>
        </el-form-item>
        <el-form-item>
          <el-checkbox :value="true" style="margin-left:-110px">我已阅读并同意用户协议和隐私条款</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login" style="width:100%">登 陆</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
           
<script>
export default {
  name: "login-page",
  data() {
    // 自定义校验函数
    const checkMobile = (rule, value, callback) => {
      // 进行校验 校验逻辑 1开头 第二位数字（3-9） 9位数字
      if (!/^1[3-9]\d{9}$/.test(value))
        return callback(new Error("手机号不正确"));
      callback();
    };
    return {
      loginForm: {
        mobile: "13911111111",
        code: "246810"
      },
      loginFormrule: {
        // 具体的校验规则
        mobile: [
          // required: true 必填规则，message不符合规则时提示，trigger 何时触发校验validator自校验函数
          {
            required: true,
            message: "请输入手机号",
            validator: checkMobile,
            trigger: "blur"
          }
          // 自定义校验
        ],
        code: [
          { required: true, message: "请输入验证码", trigger: "blur" },
          { len: 6, message: "请输入6个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    login() {
      this.$refs.loginForm.validate(val => {
        if (val) {
          console.log(this.loginForm);

          this.$http
            .post("/authorizations", this.loginForm)
            .then(res => {
              console.log("22");
            })
            .catch(() => {
              this.$message.error("手机号或验证码错误");
            });

          console.log(1);
        }
      });
    }
  }
};
</script>
<style scoped lang='less'>
.container-login {
  width: 100%;
  height: 100%;
  background: url(../../assets/bei.jpg) no-repeat center/cover;
  position: absolute;
  left: 0;
  top: 0;
  .el-card {
    width: 400px;
    height: 350px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>