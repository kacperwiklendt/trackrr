import fs from 'node:fs';import path from 'node:path';
const target=path.resolve(process.argv[2]||'../trackrr-portfolio');fs.mkdirSync(target,{recursive:true});
for(const entry of ['public','scripts','worker','.github','package.json','.gitignore','README.md'])fs.cpSync(entry,path.join(target,entry),{recursive:true});
for(const name of ['orbit.png','icon.png','icon-v2.png'])fs.rmSync(path.join(target,'public',name),{force:true});
console.log('Exported source without Git history, site identity, secrets or user data: '+target);
