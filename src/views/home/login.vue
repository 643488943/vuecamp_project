<template>
  <div class="log-container max-w-3xl mx-auto rounded-4xl">
    <div class="log-form mx-auto rounded-4xl">
      <h1 class="font-serif font-bold text-4xl log-title">{{ t('welcome login') }}</h1>
      <label class="font-serif font-bold"
        >{{ t('account') }}<el-input v-model="account" label="account" type="text" clearable /></label
      ><br />
      <label class="font-serif font-bold"
        >{{ t('password') }}<el-input v-model="password" type="password" class="pb-3" clearable show-password
      /></label>
      <center>
        <el-button type="primary" class="font-serif font-bold" round>{{ t('login') }}</el-button>
      </center>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { lang } from '@/store/lang';

const langStore = lang();

const { t } = useI18n();

const account = ref('');
const password = ref('');
</script>
<style scoped>
.log-container {
  display: block;
  height: 50vh;
  width: 50vm;
  overflow: hidden;
  border: 1px solid gainsboro;
  padding: 10vm;
  margin-top: 25vh;
  position: relative;

  .log-form {
    width: 90%;
    height: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    .log-title {
      overflow: hidden;
      margin: 3% auto 1.5% auto;
    }
    label {
      display: inline-block;
      min-width: 100%;
      margin: 1.5% auto;
      text-align: center;
      .el-input {
        width: 80%;
        float: center;
        margin-left: 2%;
        margin-right: 2%;
      }
    }
  }
}
</style>
