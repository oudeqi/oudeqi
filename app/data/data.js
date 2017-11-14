const data = [{
	id: 1,
	type: 0, 
	name: '客户关系系统',
	cover: require('../assets/images/oa-crm.png'),
	git: null,//https://github.com/oudeqi/oa-crm
	desc: ['公司内部的智能办公和客户关系系统', 'vue-cli + vue@2.x + es6 + Element UI'],
	preview: null,
	cutPic: [
		require('../assets/images/oa-crm.png')
	]
},{
	id: 2, 
	type: 0, 
	name: '仿百度注册',
	cover: require('../assets/images/pc2.png'),
	git: null,//https://github.com/oudeqi/test-demo
	desc: null,
	preview: './demo/test-demo/baidu-reg-demo.html',
	cutPic: [
		require('../assets/images/pc2.png')
	]
},{
	id: 3, 
	type: 0, 
	name: '小说分销系统',
	cover: require('../assets/images/pc3.png'),
	git: null,//https://github.com/oudeqi/novel
	desc: ['微信小说分销后台', 'ng1项目模板、组件化开发', 'gulp + sass + angular@1.x'],
	preview: null, //./demo/novel/index.html
	cutPic: [
		require('../assets/images/pc3.png'),
	]
},{
	id: 4, 
	type: 0, 
	name: '微管理',
	cover: require('../assets/images/pc4.png'),
	git: null,
	desc: null,
	preview: null,//./demo/weiguanli/login.html
	cutPic: [
		require('../assets/images/pc44.png')
	]
},{
	id: 5, 
	type: 0, 
	name: 'ECharts图表',
	cover: require('../assets/images/pc5.png'),
	git: null,
	desc: null,
	preview: null,//./demo/shouquan/s_user.html
	cutPic: [
		require('../assets/images/pc55.png'), 
		require('../assets/images/pc5.png')
	]
},{
	id: 6, 
	type: 0, 
	name: '官网练习',
	cover: require('../assets/images/pc6.png'),
	git: 'https://github.com/oudeqi/webpack-postcss-spa-demo',
	desc: ['帮周做的官网（单页面）', 'webpack@3.6.0+ postcss + gulp@3.9.1', '未完成'],
	preview: './demo/webpack-postcss-spa-demo/index.html',
	cutPic: [
		require('../assets/images/pc6.png')
	]
},{
	id: 7, 
	type: 0, 
	name: '图片裁剪预览',
	cover: require('../assets/images/pc7.png'),
	git: null,
	desc: ['图片上传', '图片裁剪', '图片预览'],
	preview: null, //./demo/tongxingz/head-setting.html
	cutPic: [
		require('../assets/images/pc7.png')
	]
},{
	id: 8, 
	type: 0, 
	name: 'css3-3d效果',
	cover: require('../assets/images/pc8.png'),
	git: null,//https://github.com/oudeqi/test-demo
	desc: ['css3 3d效果练习'],
	preview: './demo/test-demo/css3-3d-demo.html',
	cutPic: [
		require('../assets/images/pc8.png')
	]
},{
	id: 9, 
	type: 0, 
	name: '练习输入框',
	cover: require('../assets/images/pc9.png'),
	git: null,//https://github.com/oudeqi/test-demo
	desc: ['复杂输入框练习', 'jquery'],
	preview: './demo/test-demo/input-demo.html',
	cutPic: [
		require('../assets/images/pc9.png')
	]
},{
	id: 10, 
	type: 1, 
	name: '图片滑动组件练习',
	cover: require('../assets/images/phone-page-cover-4.png'),
	git: null,//https://github.com/oudeqi/test-demo
	desc: ['移动端图片滑动组件', '请用手机扫描二维码查看'],
	preview: './demo/test-demo/mobile-swiper-demo.html',
	cutPic: [
		require('../assets/images/mobile-swiper-code.png'),
		require('../assets/images/phone-page-4.jpg')
	]
},{
	id: 11, 
	type: 1, 
	name: '投票系统',
	cover: require('../assets/images/vote-cover.png'),
	git: null,//https://github.com/oudeqi/vote
	desc: ['app内嵌的h5投票系统', 'ng1项目模板、组件化开发', 'gulp + sass + angular@1.x'],
	preview: './demo/vote/index.html',
	cutPic: [
		require('../assets/images/vote-code.png'),
		require('../assets/images/vote-1.png')
	]
},{
	id: 12, 
	type: 1, 
	name: '移动端商城',
	cover: require('../assets/images/shopping-mall-cover.png'),
	git: null,//https://github.com/oudeqi/shopping-mall
	desc: ['app内嵌的h5商城', 'ng1项目模板、组件化开发', 'gulp + sass + angular@1.x'],
	preview: './demo/shopping-mall/index.html',
	cutPic: [
		require('../assets/images/shopping-mall-code.png'), 
		require('../assets/images/shopping-mall-2.png')
	]
},{
	id: 13, 
	type: 1, 
	name: '手机页面',
	cover: require('../assets/images/phone-page-cover-1.png'),
	git: null,
	desc: ['app内嵌h5页面', '微信分享页面', '请用手机扫描二维码查看'],
	preview: null,//./demo/phone-template/pages.html
	cutPic: [
		require('../assets/images/phone-template-code.png'),
		require('../assets/images/phone-page-1.jpg')
	]
},{
	id: 14, 
	type: 1, 
	name: '手机页面',
	cover: require('../assets/images/phone-page-cover-2.png'),
	git: null,
	desc: ['app内嵌h5页面', '微信分享页面', '请用手机扫描二维码查看'],
	preview: null,//'./demo/phone-template/pages.html',
	cutPic: [
		require('../assets/images/phone-template-code.png'),
		require('../assets/images/phone-page-2.jpg')
	]
},{
	id: 15, 
	type: 1, 
	name: '手机页面',
	cover: require('../assets/images/phone-page-cover-3.png'),
	git: null,
	desc: ['app内嵌h5页面', '微信分享页面', '请用手机扫描二维码查看'],
	preview: null,//'./demo/phone-template/pages.html',
	cutPic: [
		require('../assets/images/phone-template-code.png'),
		require('../assets/images/phone-page-3.jpg')
	]
}];
export default data;