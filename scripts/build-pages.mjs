import fs from 'node:fs';
const out='pages';fs.mkdirSync(out,{recursive:true});
const files=['index.html','app.js','model.js','i18n.js','style.css','trackrr-icon.png','trackrr-icon.svg','public-sans.ttf','Public-Sans-OFL.txt','manifest.webmanifest','sw.js'];
for(const file of files)fs.copyFileSync('public/'+file,out+'/'+file);
let html=fs.readFileSync(out+'/index.html','utf8').replace('<html lang="pl">','<html lang="en" data-storage="local">');fs.writeFileSync(out+'/index.html',html);
let i18n=fs.readFileSync(out+'/i18n.js','utf8').replace("||'pl'","||'en'");fs.writeFileSync(out+'/i18n.js',i18n);
// Scope URLs to the repository subdirectory, not the github.io origin root.
let sw=fs.readFileSync(out+'/sw.js','utf8').replace("const CORE=", "const PATHS=");sw=sw.replace("self.addEventListener('install'", "const CORE=PATHS.map(p=>new URL(p==='/'?'./':'.'+p,self.registration.scope).pathname);\nself.addEventListener('install'");fs.writeFileSync(out+'/sw.js',sw);fs.writeFileSync(out+'/.nojekyll','');console.log('Built GitHub Pages edition in pages/');
