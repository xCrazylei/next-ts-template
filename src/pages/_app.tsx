/** 入口页面，一般加载全局资源或全局配置 */

import "../styles/globals.css";

import type { AppProps /*, AppContext */ } from "next/app";
import React, { useEffect } from "react";

import Head from "next/head";
import { useRouter } from "next/router";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  useEffect(() => {
    /** 全局路由监听 */
    router.events.on("routeChangeStart", handleRouteChange);
    router.events.on("routeChangeComplete", handleRouteEnd);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
      router.events.off("routeChangeComplete", handleRouteEnd);
    };
  }, []);

  const handleRouteChange = (url) => {};

  const handleRouteEnd = (url) => {};

  return (
    <>
      <Head>
        <title>MyApp-Title</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
