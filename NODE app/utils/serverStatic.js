import path from 'node:path';
import fs from 'node:fs';

export function serverStatic(baseDir, req, res) {
    const filePath = path.join(baseDir, 'public', 'index.html');
    console.log(filePath);
    if (fs.existsSync(filePath)) {
        const content = fs.readFileSync(filePath, 'utf-8');
        res.setHeader('Content-Type', 'text/html');
        res.statusCode = 200;
        res.end(content);
    } else {
        res.statusCode = 404;
        res.end('File not found');
    }
}
