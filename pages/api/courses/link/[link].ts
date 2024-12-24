import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../../../utils/dbConnect';
import Course from '../../../../models/Course';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();

  const { link } = req.query;

  if (req.method === 'GET') {
    try {
      const course = await Course.findOne({ link: `/course/${link}` });
      if (!course) {
        return res.status(404).json({ message: 'Course not found' });
      }
      res.status(200).json(course);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching course' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}