import path from 'node:path';
import fs from 'node:fs';
import { sendResponse } from './sendResponse.js';
import { getContentType } from './utils/getaContentType'
export async function serverStatic(req, res, baseDir) {
   
    const publicDir = path.join(baseDir, 'public')
        const filePath = path.join(
        publicDir,
        req.url === '/' ? 'index.html' : req.url
        )

        const ext = path.extname(filePath)
        const contentType = getContentType(ext)

        try {
        const content = await fs.readFile(filePath)
        sendResponse(res, 200, contentType, content)
        } catch (err) {
        console.log(err)
        }
}