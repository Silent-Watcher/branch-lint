#!/usr/bin/env node

import { execSync } from 'node:child_process';
import { isValidBranch } from './validateBranch';

let branch: string;
try {
	branch = execSync('git rev-parse --abbrev-ref HEAD', {
		encoding: 'utf8',
	}).trim();
} catch (error) {
	console.error('Error: Not a Git repository or Git is not installed.');
	process.exit(1);
}

if (isValidBranch(branch)) {
	console.log(`✅ Branch "${branch}" is valid!`);
	process.exit(0);
} else {
	console.error(`❌ Branch "${branch}" is invalid. Please use:
  - main, master, develop
  - feature/branch-name
  - bugfix/branch-name
  - hotfix/branch-name
  - release/branch-name`);
	process.exit(1);
}
