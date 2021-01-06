const isProd = process.env.NODE_ENV === "production";

/**
 * 修改默认配置
 * 脚手架next版本: 10.0.4
 */
module.exports = {
  /** 路由前缀 */
  //   basePath: "/node",
  /** build路径及yarn build */
  distDir: "build",
  /** 客户端运行时配置 */
  publicRuntimeConfig: {
    /**
     * 注入环境变量
     * 浏览器端、服务器端都可使用，按需求扩展
     */
    env: process.env,
  },
  /** 服务端运行时配置 */
  serverRuntimeConfig: {},
  /** 设置自定义HTTP头 */
  async headers() {
    return [];
  },
  /** 路由重定向配置 */
  async redirects() {
    return [];
  },
  /** 自定义页面扩展 */
  pageExtensions: ["tsx", "ts", "js" /** , */],
  /** 配置资源CDN */
  assetPrefix: isProd ? "https://[website]" : "",
  /** 自定义webpack */
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    /**
     * 必要时，通过config对象配置webpack，必须return一个config对象。
     * 官方案例：https://www.nextjs.cn/docs/api-reference/next.config.js/custom-webpack-config
     * 其他webpack配置：http://webpack.github.io/
     */

    return config;
  },
  /**
   * 资源压缩
   * 默认情况下请开启，大大减少js、css等资源的大小
   */
  compress: true,
  /** 禁止输出 x-powered-by 头 */
  poweredByHeader: false,
  /** 禁止生成 ETag */
  generateEtags: false,
  /**
   * url尾部斜杠控制
   * /page/ => /page
   */
  trailingSlash: false,

  /** 其他配置请查阅 https://www.nextjs.cn/docs/api-reference/next.config.js/introduction */
};
