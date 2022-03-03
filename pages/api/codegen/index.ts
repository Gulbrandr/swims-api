const path = require('path');
const codegen = require('swagger-node-codegen');
const swagger = require('swims-swagger.json');
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    await codegen.generate({
      swagger: swagger,
      target_dir: path.resolve(__dirname, './tempDir'),
      res,
    });
    console.log('Done!');
    res.status(200).json({ name: 'done' });
  } catch (err) {
    res.status(500).json({ name: JSON.stringify(err) });
    console.error(`Something went wrong: ${JSON.stringify(err)}`);
  }
}
