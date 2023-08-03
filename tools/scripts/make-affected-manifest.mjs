import {execSync} from 'node:child_process';

const res = JSON.parse(execSync(`nx show projects --affected --json --base=HEAD~1 --head=HEAD --with-target=build`).toString())
console.log(res);
