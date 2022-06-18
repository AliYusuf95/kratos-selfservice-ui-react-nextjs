import {NextApiRequest, NextApiResponse} from 'next';
import request from 'request';

export const config = {
    api: {
        bodyParser: false
    }
};

export default (req: NextApiRequest, res: NextApiResponse) => {
    return req.pipe(request(`http://${req.headers.host}${req.url}/post`, {
        followAllRedirects: false,
        followRedirect: false,
        gzip: true,
        json: false
    })).pipe(res)
}
