// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
	"plugins": {
		// to edit target browsers: use "browserlist" field in package.json
		"autoprefixer": {},
		"postcss-normalize": {},
		"postcss-grid-kiss": {
			selectorParser: function (selector) {
				if (/[A-Z]/.test(selector[0])) {
					return `[data-component-name='${selector}']`
				}
				return selector
			}
		}
	}
}
