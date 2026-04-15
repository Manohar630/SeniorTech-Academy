import fs from 'fs';
import path from 'path';

function walk(dir){
  const res = [];
  for(const name of fs.readdirSync(dir)){
    const full = path.join(dir, name);
    const stat = fs.statSync(full);
    if(stat.isDirectory()) res.push(...walk(full));
    else res.push({path: full, size: stat.size});
  }
  return res;
}

const root = process.cwd();
const files = walk(root).filter(f=> f.path.indexOf('node_modules')===-1 && f.path.indexOf('.git')===-1);
const empties = files.filter(f=> f.size===0);
if(empties.length===0){
  console.log('No empty files found');
  process.exit(0);
}
console.log('Empty files:');
for(const e of empties) console.log(e.path);
process.exit(0);
