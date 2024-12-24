require('dotenv').config({ path: '.env.local' });
const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

const dbConnect = async () => {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose;
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
};

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  link: { type: String, required: true },
  image: { type: String, required: true },
  videos: [{ type: String }],
  files: [{ type: String }],
});

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  courses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }],
});

const Course = mongoose.models.Course || mongoose.model('Course', courseSchema);
const User = mongoose.models.User || mongoose.model('User', userSchema);

const sampleCourses = [
  {
    title: "Learn Java",
    description: "Learn Java Description",
    price: 1,
    link: "/course/learn-java",
    image: "course1.png",
    videos: [
      "https://www.youtube.com/watch?v=eIrMbAQSU34",
      "https://www.youtube.com/watch?v=b5l5UodFzMo",
    ],
    files: ["content1.png"],
  },
  {
    title: "Learn WebDev",
    description: "Learn WebDev Description",
    price: 2,
    link: "/course/learn-webdev",
    image: "course2.png",
    videos: [
      "https://www.youtube.com/watch?v=eIrMbAQSU34",
      "https://www.youtube.com/watch?v=b5l5UodFzMo",
    ],
    files: ["content2.png"],
  },
  {
    title: "Learn Data Structures & Algorithms",
    description: "Learn DSA",
    price: 3,
    link: "/course/learn-dsa",
    image: "course3.png",
    videos: [
      "https://www.youtube.com/watch?v=eIrMbAQSU34",
      "https://www.youtube.com/watch?v=b5l5UodFzMo",
    ],
    files: ["content3.png"],
  },
];

const sampleUsers = [
  {
    name: "John Doe",
    email: "john@example.com",
    password: "password123",
    courses: [],
  },
  {
    name: "Jane Smith",
    email: "jane@example.com",
    password: "password123",
    courses: [],
  },
];

const insertSampleData = async () => {
  await dbConnect();

  await Course.deleteMany({});
  await Course.insertMany(sampleCourses);

  await User.deleteMany({});
  await User.insertMany(sampleUsers);

  console.log("Sample data inserted successfully!");
  mongoose.connection.close();
};

insertSampleData().catch((err) => console.error(err));