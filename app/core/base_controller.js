'use strict';

const Controller = require('egg').Controller;

class BaseController extends Controller {
  success(data) {
    this.ctx.set('Access-Control-Allow-Credentials', true);
    this.ctx.body = {
      errcode: 0,
      data
    };
  }
}
module.exports = BaseController;