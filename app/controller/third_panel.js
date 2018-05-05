'use strict';

// const Controller = require('egg').Controller;
const Controller = require('../core/base_controller');
const Mock = require('mockjs');
class ThirdPanelController extends Controller {
  async login() {
    const phone = this.ctx.request.body.phone;
    const verifyCode = this.ctx.request.body.verifyCode;
    this.ctx.set('Access-Control-Allow-Credentials', true);
    if (phone === this.ctx.session.phone && verifyCode === this.ctx.session.verifyCode) {
      this.ctx.cookies.set('sess', 'admin', {
        maxAge: 1000*60*60*24
      });
      this.ctx.body = {
        errcode: 0,
        data: true
      }
    } else {
      this.ctx.body = {
        errcode: 1,
        errmsg: '验证码错误'
      }
    }
  }
  async logout() {
    this.ctx.cookies.set('sess', null);
   this.success({data: true})
  }
  async getUserInfo() {
    this.ctx.session.verifyCode = 0;
    this.success({
      userName: 'admin',
      authKeyList: ['huaf_order_list', 'huaf_order_info']
    });
  }
  async getVerifyCode() {
    const phone = this.ctx.query.phone;
    this.ctx.session.verifyCode = phone.slice(-4);
    this.ctx.session.phone = phone;
    this.success(true);
  }
}
module.exports = ThirdPanelController;