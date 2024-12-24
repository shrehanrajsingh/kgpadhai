import mongoose, { Schema } from 'mongoose';

const CourseSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  videos: [{ type: String }],
  files: [{ type: String }],
});

export default mongoose.models.Course || mongoose.model('Course', CourseSchema);