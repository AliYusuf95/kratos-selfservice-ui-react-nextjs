import {NextApiRequest, NextApiResponse} from 'next';
import request from 'request';

export const config = {
    api: {
        bodyParser: false
    }
};

export default (req: NextApiRequest, res: NextApiResponse) => {
    return res.json({
        method: req.method,
        headers: req.headers
    })
}