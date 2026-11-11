import { mkdirSync, copyFileSync } from 'node:fs';
mkdirSync('dist',{recursive:true});
copyFileSync('src/index.html','dist/index.html');
console.log('Built dist/index.html');
