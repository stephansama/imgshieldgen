const path = require('path')

const join = (...x) => path.join(path.resolve(path.dirname('')), ...x)

module.exports = {
	aliases: {
		'@': join('src/'),
		'@pkg': join('package.json'),
		'@hooks': join('src/hooks'),
		'@assets': join('src/assets'),
		'@components': join('src/components'),
	},
}
