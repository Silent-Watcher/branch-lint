export function isValidBranch(branch: string): boolean {
	const regex =
		/^(main|master|develop|feature\/[a-z0-9\-]+|bugfix\/[a-z0-9\-]+|hotfix\/[a-z0-9\-]+|release\/[a-z0-9\-]+)$/;
	return regex.test(branch);
}
