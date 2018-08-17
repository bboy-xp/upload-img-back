'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'hi, egg';
  }
  saveAdmin() {
    const ctx = this.ctx;
    const Admin = ctx.model.Admin;
    const admin = new Admin({
      account: 'admin',
      password: '123',
    });
    admin.save();
    ctx.body = "ok";
  }
  async adminLogin() {
    const ctx = this.ctx;
    const account = ctx.request.body.account;
    const password = ctx.request.body.password;
    // console.log(account, password);
    const Admin = ctx.model.Admin;
    const findAdmin = await Admin.find({ account: account }).sort({ '_id': -1 });
    // console.log(findAdmin);
    if (findAdmin.length !== 0) {
      if (findAdmin[0].password === password) {
        ctx.body = "success";
      } else {
        ctx.body = "fail";
      }
    }else {
      ctx.body = "fail";
    }
  }
  async addStaff() {
    const ctx = this.ctx;
    const Staff = ctx.model.Staff;
    const StaffData = ctx.model.StaffData;
    //解决了用length充当id的bug
    const getAllStaff = await Staff.find();
    let id;
    if(getAllStaff.length == 0) {
      id = 0;
    }else {
      id = getAllStaff[0].id + 1;
    }

    
    const adminId = ctx.request.body.adminId;
    const staffId = ctx.request.body.staffId;
    const password = ctx.request.body.password;

    const fontUrl = "http://localhost:8080/#/font?id=" + id;
    const backUrl = "http://localhost:8080/#/staffLogin?id=" + id;
    const QRcodeUrl = "";
    const count = 0;

    console.log(adminId,staffId,password,fontUrl,backUrl,QRcodeUrl,count);
    ctx.body = "ok";

    const hasStaff = await Staff.find({staffId: staffId});
    if(hasStaff.length == 0) {
      console.log("没有用户，可以保存");
      const staff = new Staff({
        adminId: adminId,
        staffId: staffId,
        password: password
      })
      staff.save();

      const staffData = new StaffData({
        adminId: adminId,
        staffId: staffId,
        id: id,
        fontUrl: fontUrl,
        backUrl: backUrl,
        QRcodeUrl: QRcodeUrl,
        count: count
      })
      staffData.save();
      ctx.body = "success";
    }else {
      ctx.body = "exist"
    }
  }
}

module.exports = HomeController;
