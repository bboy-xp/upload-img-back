module.exports = app => {
  const mongoose = app.mongoose;
  const StaffDataSchema = new mongoose.Schema({
    adminId: { type: String },
    staffId: { type: String },
    id: { type: Number },
    fontUrl: { type: String },
    backUrl: { type: String },
    QRcodeUrl: { type: String },
    count: { type: Number },
  }, {
      timestamps: true,
    });

  return mongoose.model('StaffData', StaffDataSchema);
}