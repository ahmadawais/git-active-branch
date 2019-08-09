const gitBranch = require('./index.js');
import test from 'ava';

(async () => {
	const name = await gitBranch(__dirname);

	test('Git branch should be master', t => {
		t.is(name, 'master');
	});
})();
