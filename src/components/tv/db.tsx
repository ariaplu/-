import { NextApiRequest, NextApiResponse } from 'next';

const blogData = [
  {
    post_id: 1,
    title: "You Are Not Just Talented, You Are Spiritually Gifted",
    details:
      "You Are Not Just Talented, You Are Spiritually Gifted Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  // ... other blog posts
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(blogData);
}
