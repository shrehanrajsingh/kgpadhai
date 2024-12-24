import { NextApiRequest, NextApiResponse } from 'next';
import mongoose from 'mongoose';
import dbConnect from '../../../utils/dbConnect';
import Course from '../../../models/Course';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();

  const { id } = req.query;

  if (!mongoose.Types.ObjectId.isValid(id as string)) {
    return res.status(400).json({ message: 'Invalid course ID' });
  }

  if (req.method === 'GET') {
    const course = await Course.findById(id);
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }
    res.status(200).json(course);
  } else if (req.method === 'PUT') {
    const { title, description, price, videos, files } = req.body;
    const course = await Course.findByIdAndUpdate(id, { title, description, price, videos, files }, { new: true });
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }
    res.status(200).json(course);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}