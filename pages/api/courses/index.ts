import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../../utils/dbConnect';
import Course from '../../../models/Course';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();

  if (req.method === 'GET') {
    const courses = await Course.find({});
    res.status(200).json(courses);
  } else if (req.method === 'POST') {
    const { title, description, price, videos, files } = req.body;
    const course = new Course({ title, description, price, videos, files });
    await course.save();
    res.status(201).json(course);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}