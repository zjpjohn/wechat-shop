<template>
  <div class="free">
      <shop-header></shop-header>
      <div class="scroll-wrapper" ref="scroll">
        <div class="main">
          <h1>{{freeData.good_name}}</h1>
          <p>申请时间:{{freeData.start_time}} 至 {{freeData.end_time}}</p>
        </div>
        <div class="tips">
          <p>收到试用产品后，<span>请在10天内发表试用反馈</span>。反馈将影
          响下次试用资格，优质的反馈将得到平台的特别礼物。</p>
        </div>
        <div class="form">
          <form @submit.prevent="handleSubmit">
            <div class="controls">
              <span class="label">姓名</span>
              <input v-model="formData.name" type="text" placeholder="请输入您的姓名">
            </div>
            <div class="controls">
              <span class="label">手机号</span>
              <input v-model="formData.mobile" type="text" placeholder="请输入您的手机号">
            </div>
            <div class="controls" style="border-bottom: none">
              <span class="label">性别</span>
              <select v-model="formData.sex" id="" style="background-position-x:3.4rem;">
                <option value="">请选择性别</option>
                <option value="男">男</option>
                <option value="女">女</option>
              </select>
            </div>
            <div class="controls flex" style="border-bottom: none">
              <select @change="provinceChange($event)" v-model="formData.province" ref="province">
                <option v-for="item in provinceData" :value="item.id">
                  {{item.region_name}}
              </option>
              </select>
              <select @change="cityChange($event)" v-model="formData.city" ref="city">
                <option v-for="item in cityData" :value="item.id">
                  {{item.region_name}}
              </option>
              </select>
              <select v-model="formData.district" ref="district">
                <option v-for="item in districtData" :value="item.id">
                  {{item.region_name}}
              </option>
              </select>
            </div>
            <div class="controls textarea" style="height: 1.16rem">
              <span class="label">地址</span>
              <textarea v-model="formData.address" rows="2">
              </textarea>
            </div>
            <div class="controls textarea" style="height: 1.16rem">
              <span class="label">申请理由</span>
              <textarea v-model="formData.reason" rows="2">
              </textarea>
            </div>

            <div class="controls textarea" style="height: 1.16rem">
              <span class="label">地址</span>
              <textarea v-model="formData.address" rows="2">
              </textarea>
            </div>
            <div class="controls textarea" style="height: 1.16rem">
              <span class="label">申请理由</span>
              <textarea v-model="formData.reason" rows="2">
              </textarea>
            </div>

            <input class="submit" type="submit" value="申请试用">
            <!--<h1 @click="OPENCONTENT('protocolData')">《试用服务协议》 </h1>-->
            <!--<h1 @click="OPENCONTENT('lawData')">《法律声明及隐私权政策》</h1>-->
          </form>
        </div>
      </div>
  </div>
</template>

<script>
  import ShopHeader from '../components/header/header'

  export default {
      create(){
        let _this = this;
        _this.$nextTick(function () {
          let wrapper = _this.$refs.scroll;
          this.$scrollWrapper = new BScroll(wrapper, {});
        });
      },
      data(){
          return {
              freeData:{
                  good_name:"试用商品",
                  start_time:"2017-7-20",
                  end_time:'2017-8-20'
              },
              formData: {
                name: "",
                mobile: "",
                sex: "",
                province: 31,
                city: 383,
                district: 3229,
                address: "",
                reason: ""
              },
              goodsData: {},
              provinceData: [],
              cityData: [],
              districtData: [],
              ifAlready:false

          }
      },
      components:{
          ShopHeader
      },
      methods:{
        handleSubmit(){
          let _this = this;
          //提交数据 addFree(_this.formData);

        }
      }
  }
</script>

<style lang="less">
  .free{
    background-color: #f4f4f4;
  }
  .scroll-wrapper{
    height: 9rem;
    overflow: scroll;
  }
  .main{
    height: 1rem;
    text-align: center;
    background-color:#ffffff ;
    h1{
      font-size: 0.3rem;
      height: 0.5rem;
      line-height: 0.5rem;
    }
    p{
      color:#b4282d;
    }
    margin-bottom:0.1rem ;
  }
  .tips{
    background-color: #ffffff;
    height: 0.7rem;
    font-size: 0.2rem;
    padding:0.3rem;
    line-height: 0.3rem;
    margin-bottom: 0.1rem;
    text-align: center;
  }
  .form{
    margin: 0 auto;
    width: 80%;
    .controls {
      padding: 0.3rem 0 0;
      min-height: 0.56rem;
      line-height: 0.56rem;
      display: flex;
      border-bottom: 1px solid rgba(170,170,170,0.6);
      position: relative;
      font-size: 0.24rem;
      z-index: 10;
      .error_tips {
        position: absolute;
        width: 50%;
        font-size: 12px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        right: 0;
        top: 100%;
        line-height: 1.5em;
        color: #ff434c;
        text-align: right;
        z-index: -1;
        display: none;
      }
      &.flex {
        flex-wrap: wrap;
        font-size: 0;
        select {
          height: 0.56rem;
        }
      }
      span {
        flex: 0 0 1rem;
        width: 1rem;
        text-align: left;
        color: #1c1c1c;
        font-size: 0.24rem;
        white-space: nowrap;
      }
      input, select, textarea {
        flex: 1;
        text-indent: 0.4rem;
        border: none;
        background: none;
        color: #666;
        -webkit-appearance: none;
        font-size: 0.24rem;
      }
      select {
        border: 1px solid #aaa;
        border-radius: 0;
        text-indent: 0.2rem;
        margin-right: 0.15rem;
        background-image: url(../assets/img/select_arrow.png);
        background-size: 0.16rem auto;
        background-position-x: 1rem;
        background-position-y: center;
        background-repeat: no-repeat;
        padding: 0;
      }
      &.textarea {
        &:after {
          position: absolute;
          content: "";
          width: 100%;
          height: 0;
          border-top: 1px solid rgba(170,170,170,0.6);
          left: 0;
          top: 0.9rem;
        }
      }
      textarea {
        flex: none;
        position: absolute;
        width: 100%;
        height: 1.16rem;
        left: 0;
        line-height: 0.56rem;
        padding: 0;
        text-indent: 1rem;
      }

    }
    input[type='submit']{
      width: 60%;
      height: 0.56rem;
      margin: 0.2rem auto;
      background-color: #ff434c;
      color: #ffffff;
      border-radius: 0.5rem;
      display: block;
    }
  }
</style>
