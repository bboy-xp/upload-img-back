'use strict';

const Controller = require('egg').Controller;
var qiniu = require("qiniu");
const { readFileSync } = require('fs');
const { resolve } = require('path');

class HomeController extends Controller {
  async index() {
    const data = readFileSync(resolve(__dirname, '../public/index.html'), 'utf8');
    this.ctx.body = data;
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
    let id;
    const getAllStaff = await StaffData.find().sort({ 'id': -1 });
    // console.log(getAllStaff)
    if(getAllStaff.length == 0) {
      id = 0;
    }else {
      // console.log(getAllStaff[0].id);
      id = getAllStaff[0].id + 1;
    }

    
    const adminId = ctx.request.body.adminId;
    const staffId = ctx.request.body.staffId;
    const password = ctx.request.body.password;

    const fontUrl = "http://www.jnmum.cn:7003/#/font?id=" + id;
    const backUrl = "http://www.jnmum.cn:7003/#/staffLogin?id=" + id;
    const QRcodeUrl = "";
    const count = 0;

    // console.log(adminId,staffId,password,fontUrl,backUrl,QRcodeUrl,count);
    ctx.body = "ok";

    const hasStaff = await Staff.find({"staffId": staffId});
    if(hasStaff.length == 0) {
      // console.log("没有用户，可以保存");
      const staff = new Staff({
        adminId: adminId,
        staffId: staffId,
        password: password,
        id: id
      })
      await staff.save();

      const staffData = new StaffData({
        adminId: adminId,
        staffId: staffId,
        id: id,
        fontUrl: fontUrl,
        backUrl: backUrl,
        QRcodeUrl: QRcodeUrl,
        count: count
      })
      await staffData.save();
      ctx.body = "success";
    }else {
      ctx.body = "exist"
    }
  }
  async getTableDataRes() {
    const ctx = this.ctx;
    const StaffData = ctx.model.StaffData;
    const getAllStaffData = await StaffData.find().sort({ '_id': -1 });
    
    ctx.body = getAllStaffData;
  }
  async deleteStaff() {
    const ctx = this.ctx;
    const Staff = ctx.model.Staff;
    const StaffData = ctx.model.StaffData;
    const staffId = ctx.request.body.staffId;
    // 删除操作
    await Staff.remove({"staffId": staffId});
    await StaffData.remove({"staffId": staffId});

    const newGetAlStaff = await StaffData.find();
    ctx.body= newGetAlStaff;
  }
  async staffLogin() {
    const ctx = this.ctx;
    const Staff = ctx.model.Staff;
    const data = ctx.request.body;
    const id = data.id;
    const staffId = data.account;
    const password = data.password;
    const targetStaff = await Staff.find({"staffId": staffId});
    // console.log(id,password);
    // console.log(targetStaff[0].password,targetStaff[0].id)
    if (targetStaff.length !== 0) {
      if (targetStaff[0].password == password && targetStaff[0].id == id) {
        ctx.body = "success";
      } else {
        ctx.body = "fail";
      }
    }else {
      ctx.body = "fail";
    }
  }

  async getUpToken() {
    const ctx = this.ctx;
    const accessKey = 'DhsDWIMUrCTF_R-ff01w9ESN7vvKyLle4hzwYLJf';
    const secretKey = 'tgVJBh9Iu_mGFGbdWoiaO_4SJDBc4-hrV4yFJDsi';

    const bucket = 'qrcodes';
    const mac = new qiniu.auth.digest.Mac(accessKey, secretKey);

    const options = {
      scope: bucket,
    };
    const putPolicy = new qiniu.rs.PutPolicy(options);
    const uploadToken = putPolicy.uploadToken(mac);

    ctx.body = uploadToken;
  } 

  async changeImageUrl() {
    const ctx = this.ctx;
    const StaffData = ctx.model.StaffData;
    const data = ctx.request.body;
    const id = data.id;
    const bucketHost = data.bucketHost;
    const updateImageUrl = await StaffData.update({"id": id}, {
      QRcodeUrl: bucketHost
    });

    ctx.body = "ok";
  }

  async getImageUrl() {
    const ctx = this.ctx;
    const StaffData = ctx.model.StaffData;
    const data = ctx.request.body;
    const id = data.id;
    const getTargetStaff = await StaffData.findOne({"id": id});
    const imageUrl = getTargetStaff.QRcodeUrl;

    ctx.body = imageUrl;
  }
  async updateCount() {
    const ctx = this.ctx;
    const StaffData = ctx.model.StaffData;
    const data = ctx.request.body;
    const id = data.id;
    await StaffData.update({"id": id}, {
      $inc: { count: 1 }
    })
    ctx.body = "ok";
  }
  async getEditStaff() {
    const ctx = this.ctx;
    const Staff = ctx.model.Staff;
    const data = ctx.request.body;
    const id = data.id;
    const getEditStaff = await Staff.findOne({"id": id});

    ctx.body = getEditStaff;
  }
  async updateStaff() {
    const ctx = this.ctx;
    const Staff = ctx.model.Staff;

    const data = ctx.request.body;
    const id = data.id;
    const password = data.password;
    await Staff.update({"id": id}, {
      password: password
    });
    ctx.body = "success";
  }
}

module.exports = HomeController;
