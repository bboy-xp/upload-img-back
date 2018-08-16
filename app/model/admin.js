module.exports = app => {
  const mongoose = app.mongoose;
  const AdminSchema = new mongoose.Schema({
    account: { type: String },
    password: { type: String }
  }, {
      timestamps: true,
    });

  return mongoose.model('Admin', AdminSchema);
}