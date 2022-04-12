// https://github.com/michael-ciniawsky/postcss-load-config
const path = require('path');
module.exports = ({file})=>{
  const designWidth = file.dirname.includes(path.join('node_modules', 'vant')) ? 37.5 : 75.0;
  return {
	  plugins: {
	    autoprefixer: {
	      overrideBrowserslist: ['Android 4.1', 'iOS 7.1', 'Chrome > 31', 'ff > 31', 'ie >= 8']
	    },
	    'postcss-pxtorem': {
	      rootValue: designWidth,
	      propList: ['*'],
	      //selectorBlackList: ['van-']
	    }
	  }
  }
}
