export default {
	prefixer: false,
	extract: {
		exclude: ["node_modules", ".git", "dist"],
	},
	corePlugins: {
		// 禁用掉在小程序环境中不可能用到的 plugins
		container: false,
	},
};
