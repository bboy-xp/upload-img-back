module.exports = app => {
  const mongoose = app.mongoose;
  const StaffSchema = new mongoose.Schema({
    adminId: { type: String },
    staffId: { type: String },
    id: { type: Number },
    password: { type: String },
  }, {
      timestamps: true,
    });

  return mongoose.model('Staff', StaffSchema);
}