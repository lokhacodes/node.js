import path from 'node:path';
export function serverStatic(baseDir) {
    const filePath = path.join(baseDir, 'public', 'index.html');
    console.log(filePath);
}