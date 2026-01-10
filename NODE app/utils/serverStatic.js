import path from 'node:path';
import fs from 'node:fs';
import { sendResponse } from './sendResponse.js';
export async function serverStatic(baseDir) {
    const filePath = path.join(baseDir, 'public', 'index.html');
    try {
        const content = await fs.readFile(filePath)
        sendResponse(res, 200, 'text/html', content)
    } catch (err) {
        console.log(err);
    }
     }
