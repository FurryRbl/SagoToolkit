import devConfig from "./dev";
import prodConfig from "./prod";

const isDevelopmentMode = process.env.NODE_ENV === "development";

// https://taro-docs.jd.com/docs/next/config#defineconfig-辅助函数
/** @type {import('@tarojs/cli').UserConfigExport} */
export default {
	projectName: "SagoToolKit",
	date: "2024-4-15",
	designWidth: 750,
	deviceRatio: {
		640: 2.34 / 2,
		750: 1,
		375: 2,
		828: 1.81 / 2,
	},
	sourceRoot: "src",
	outputRoot: "dist",
	plugins: [],
	defineConstants: {},
	copy: {
		patterns: [],
		options: {},
	},
	framework: "vue3",
	compiler: "webpack5",
	cache: {
		enable: false, // Webpack 持久化缓存配置，建议开启。默认配置请参考：https://docs.taro.zone/docs/config-detail#cache
	},
	logger: {
		quiet: isDevelopmentMode ? false : true,
		stats: isDevelopmentMode,
	},
	mini: {
		postcss: {
			pxtransform: {
				enable: true,
				config: {},
			},
			url: {
				enable: true,
				config: {
					limit: 1024, // 设定转换尺寸上限
				},
			},
			cssModules: {
				enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
				config: {
					namingPattern: "module", // 转换模式，取值为 global/module
					generateScopedName: "[name]__[local]___[hash:base64:5]",
				},
			},
		},
	},
	h5: {
		publicPath: "/",
		staticDirectory: "static",
		output: {
			filename: "js/[name].[hash:8].js",
			chunkFilename: "js/[name].[chunkhash:8].js",
		},
		miniCssExtractPluginOption: {
			ignoreOrder: true,
			filename: "css/[name].[hash].css",
			chunkFilename: "css/[name].[chunkhash].css",
		},
		postcss: {
			autoprefixer: {
				enable: true,
				config: {},
			},
			cssModules: {
				enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
				config: {
					namingPattern: "module", // 转换模式，取值为 global/module
					generateScopedName: "[name]__[local]___[hash:base64:5]",
				},
			},
		},
	},
	rn: {
		appName: "taroDemo",
		postcss: {
			cssModules: {
				enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
			},
		},
	},
	plugins: [["@dcasia/mini-program-tailwind-webpack-plugin/dist/taro", {}]],
};
