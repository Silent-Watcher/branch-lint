export function isValidBranch(branch: string): boolean {
	const regex =
		/^(main|master|develop|(?:feature|bugfix|hotfix)\/[a-z0-9\-]+|release\/[a-z0-9\-]+(?:\.[a-z0-9\-]+)*)$/;
	return regex.test(branch);
}
