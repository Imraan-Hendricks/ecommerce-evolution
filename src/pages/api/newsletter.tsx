import { NextApiRequest, NextApiResponse } from 'next';

function wait(duration: number): Promise<void> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, duration);
  });
}

async function newsletterSignup(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST')
    return res.status(404).json({ message: 'Failed to load resource' });

  await wait(2000);
  res.status(200).json({ success: true });
}

export default newsletterSignup;
