#!/usr/bin/env node

import { execSync } from 'node:child_process';

// Get the current branch name
let branch: string;
try {
	branch = execSync('git rev-parse --abbrev-ref HEAD').toString().trim();
} catch (error) {
	console.error('Error: Not a Git repository or Git is not installed.');
	process.exit(1);
}

// Regex pattern based on Conventional Branch guidelines

const regex = /^(feature|bugfix|hotfix|release|chore)\/[a-z0-9\-]+$/;
if (regex.test(branch)) {
	console.log(`Branch "${branch}" is valid!`);
	process.exit(0);
} else {
	console.error(
		`Branch "${branch}" is invalid. Please use the format type/description (e.g., feature/my-new-feature).`,
	);
	process.exit(1);
}
