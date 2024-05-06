import jwt from 'jsonwebtoken'
import fs from 'fs'
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const publicKey = fs.readFileSync(path.resolve(__dirname, './public.key'), 'utf8')
export function verifyToken (token){
    try {
      const decoded = jwt.verify(token, publicKey, {
        algorithms: ['RS256'],
      });
      console.log('Token is valid', decoded);
      return decoded
    } catch (error) {
      console.error('Token verification failed', error);
    }
  };
  

verifyToken("eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InByaXByaXRhbTdAZ21haWwuY29tIiwibmFtZSI6InByaXRhbSIsImlhdCI6MTcxNDkzMTgwOX0.gDyMmkX8PSwrxpb8lN-X4mp5oEFuJdNPillS1KKxOWHR7r-DPTsVSO2bdWnzfwwF-CEjIoT58y_-HqXLXLDNu1XkBHbCMz1T16ZboVpsN4e5oPm3DivnuhJb3gpi0bjD0UnmdqvZ_cVYj5W7p9_Uf0CdZSBaleIAxI1biCiAnA9TNkaRMkYUH2cuCkzCQRi3E87gOKgkIU4Oqf7nkRpes57w3QBodh1SNy3sAFX7zESrlZFvMKsjM0eskw4kJxl2RYW2ysr4G7w3ALSOD7Yvsk3yIAGzxu7SaztGLbXD9_2esT6z_RRs-iXKFbs-I_XUm2mZhHWdpTTStjUAGAajHQ")
// export default verifyToken;