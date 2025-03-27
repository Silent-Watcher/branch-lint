# validate-branch

[![Checked with Biome](https://img.shields.io/badge/Checked_with-Biome-60a5fa?style=flat&logo=biome)](https://biomejs.dev)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A CLI tool to validate Git branch names using [Conventional Branch](https://conventional-branch.github.io/) guidelines. This package ensures that your branch names follow consistent naming conventions—supporting core branches like main, master, and develop, as well as structured feature, bugfix, hotfix, and release branches.

## Table of Contents

- [validate-branch](#validate-branch)
	- [Table of Contents](#table-of-contents)
	- [Installation](#installation)
	- [Usage](#usage)
		- [Command Line](#command-line)
	- [Git Hooks Integration](#git-hooks-integration)
	- [Branch Naming Conventions](#branch-naming-conventions)
	- [Issues and Contributing](#issues-and-contributing)
	- [License](#license)
	- [Contact](#contact)

## Installation

Install the package globally using npm:

```sh
npm install -g validate-branch
```

Or add it as a development dependency in your project:

```sh
npm install --save-dev validate-git-branch
```

## Usage

### Command Line
Once installed, run the CLI command in your Git repository:

```sh
validate-branch
```

The tool will fetch the current Git branch name and validate it against the conventional naming rules. If the branch name is valid, you'll see a success message; otherwise, an error message will guide you to use the correct format.

## Git Hooks Integration

You can integrate this tool with Git hooks to enforce branch naming on every commit or push. For example, using Husky:

```sh
npx husky add .husky/pre-push "validate-branch"
```

## Branch Naming Conventions

Your branches should follow one of the following patterns:
- Core Branches:
 	- `main`
 	- `master`
 	- `develop`

- Feature, Bugfix, and Hotfix Branches:
  - `feature/branch-name`
  - `bugfix/branch-name`
  - `hotfix/branch-name`

- Release Branches:
 	- `release/branch-name`
 	- Release branches may include dots (e.g., release/v1.2.0)

The tool uses a refined regular expression to ensure that only the proper characters and structure are allowed for each branch type.

## Issues and Contributing

If you encounter a bug or want to see something added/changed, please go ahead and open an [issue](https://github.com/Silent-Watcher/branch-lint/issues)
! If you need help with something, feel free to start a [discussion](https://github.com/Silent-Watcher/branch-lint/discussions/new)!

## License

This project is licensed under the MIT License.

## Contact

For support or any questions, please open an issue in the GitHub repository or contact <backendwithali@gmail.com>.