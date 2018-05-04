'use strict';

const Controller = require('egg').Controller;
const Mock = require('mockjs');
class PanelController extends Controller {
  async prescriptionList(ctx) {
    let page = ctx.query.page || 1;
    let limit = ctx.query.limit || 10;
    let key = `list|${limit}`;
    let Random = Mock.Random;
    Random.extend({
      hopital: function(date) {
        let hospitals = ['华方医院', '山东医院', '华西医院', '中心医院'];
        return this.pick(hospitals);
      }
    });
    let data = Mock.mock({
      errcode: 0,
      data: {
        [key]: [
          {
            // 属性 id 是一个自增数，起始值为 1，每次增 1
            'id|10000-99999': 1,
            'name|1': '@cname',
            'hospital|1': '@hopital',
            'author|1': '@cname',
            'price|10-10000': 1
          }
        ],
        total: 100
      }
    });
    ctx.set('Access-Control-Allow-Credentials', true);
    this.ctx.body = data;
  }
  async chinesePrescription(ctx) {
    const page = ctx.query.page || 1;
    let limit = ctx.query.limit || 10;
    const total = 55;
    const surplus = total - (page - 1) * limit;
    limit = surplus > limit ? limit : surplus;
    let mockKey = `list|${limit}`;
    let data = Mock.mock({
      errcode: 0,
      data: {
        [mockKey]: [
          {
            'id|100000-999999': 1,
            'prName|3-5': '@cword',
            'docterName|1': '@cname',
            'patientName|1': '@cname',
            'createAt|1': '@datetime',
            'linkOrder|0-1': 0
          }
        ],
        total
      }
    });
    ctx.set('Access-Control-Allow-Credentials', true);
    this.ctx.body = data;
  }
  async chinesePrescriptionInfo(ctx) {
    const id = ctx.query.id;
    let Random = Mock.Random;
    Random.extend({
      gender: function(date) {
        let genders = ['男', '女'];
        return this.pick(genders);
      }
    });
    const data = Mock.mock({
      errcode: 0,
      data: {
        prInfo: {
          name: '@cname',
          'count|1-10': 1,
          'docterId|10000-99999': 1,
          docterName: '@cname',
          createAt: '@datetime',
          'linkOrder|10000000-999999999': 1,
          'linkOrderStatus|0-1': 1,
          verifier: '@cname',
          dispensing: '@cname'
        },
        patient: {
          name: '@cname',
          'gender|1': '@gender',
          'age|18-55': 1,
          'disease|3-5': '@cword',
          'zhengx|3-5': '@cword'
        }
      }
    });
    ctx.set('Access-Control-Allow-Credentials', true);
    this.ctx.body = data;
  }
  async getHuafOrderList(ctx) {
    const page = ctx.query.page || 1;
    let limit = ctx.query.limit || 10;
    const total = 55;
    const surplus = total - (page - 1) * limit;
    limit = surplus > limit ? limit : surplus;
    let mockKey = `list|${limit}`;
    const data = Mock.mock({
      errcode: 0,
      data: {
        [mockKey]: [
          {
            'orderId|100000-999999': 1,
            patient: '@cname',
            phone: '18048486589',
            docterName: '@cname',
            createAt: '@datetime',
            'prName|3-5': '@cword',
            'totalPrice|1-9999': 1
          }
        ],
        total: 33
      }
    });
    ctx.set('Access-Control-Allow-Credentials', true);
    this.ctx.body = data;
  }
}

module.exports = PanelController;
