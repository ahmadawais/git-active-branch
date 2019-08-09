/* GIT ACTIVE BRANCH */

module.exports = async rootPath => {
	const git = require('simple-git/promise')(rootPath);
	const gitBranch = await git.revparse(['--abbrev-ref', 'HEAD']);
	return gitBranch;
};
