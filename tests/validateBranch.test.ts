import { describe, expect, it } from 'vitest';
import { isValidBranch } from '../src/validateBranch';

describe('isValidBranch', () => {
	it('should allow main, master, and develop', () => {
		expect(isValidBranch('main')).toBe(true);
		expect(isValidBranch('master')).toBe(true);
		expect(isValidBranch('develop')).toBe(true);
	});

	it('should allow valid feature branches', () => {
		expect(isValidBranch('feature/new-ui')).toBe(true);
		expect(isValidBranch('feature/awesome-feature')).toBe(true);
	});

	it('should allow valid bugfix branches', () => {
		expect(isValidBranch('bugfix/fix-typo')).toBe(true);
	});

	it('should allow valid hotfix branches', () => {
		expect(isValidBranch('hotfix/security-patch')).toBe(true);
	});

	it('should allow valid release branches', () => {
		expect(isValidBranch('release/v1.2.0')).toBe(true);
	});

	it('should allow valid chore branches', () => {
		expect(isValidBranch('chore/docs')).toBe(true);
	});

	it('should reject invalid branch names', () => {
		expect(isValidBranch('random-branch')).toBe(false);
		expect(isValidBranch('featureNew')).toBe(false);
		expect(isValidBranch('feature_underscore')).toBe(false);
		expect(isValidBranch('bugfix_invalid')).toBe(false);
		expect(isValidBranch('hotfix@security')).toBe(false);
		expect(isValidBranch('release-1.0.0')).toBe(false);
	});
});
