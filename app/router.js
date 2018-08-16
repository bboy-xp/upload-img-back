'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/saveAdmin', controller.home.saveAdmin);
  router.post('/adminLogin', controller.home.adminLogin);
  router.post('/addStaff', controller.home.addStaff);
};
