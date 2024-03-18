import { Metadata } from "next";
import { Suspense } from "react";
import Head from "next/head";

import Recoil from "@/lib/recoil";
import MuiProvider from "@/lib/muiProvider";
import StyledJsxRegistry from "@/lib/registry";
import StyledProvider from "@/lib/themeProvider";
import ReactQueryProvider from "@/lib/reactQueryProvider";

import RequireAuth from "@/components/RequireAuth/RequireAuth";

import Analytics from "./apis/Analytics";
import ChannelTalk from "./apis/ChannelTalk";
import Clarity from "./apis/Clarity";

export const metadata: Metadata = {
  title: "NEXT ROOM",
  description:
    "방탈출 운영이 편리해지고 테마 만족도가 올라가는 힌트폰 서비스 넥스트룸",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <Head>
        <meta property="og:image" content="/images/og/og_1x.png" />
        <meta property="og:image" content="/images/og/og_2x.png" />
        <meta property="og:image" content="/images/og/og_3x.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nextroom.co.kr" />
        <meta
          name="naver-site-verification"
          content="21a2d5b3c2d9ca207466aecc9a9c747bc551afff"
        />
      </Head>
      <body>
        <Suspense>
          <Analytics />
          <ChannelTalk />
          <Clarity />
        </Suspense>
        <Recoil>
          <ReactQueryProvider>
            <StyledProvider>
              <StyledJsxRegistry>
                <MuiProvider>
                  <RequireAuth>{children}</RequireAuth>
                </MuiProvider>
              </StyledJsxRegistry>
            </StyledProvider>
          </ReactQueryProvider>
        </Recoil>
      </body>
    </html>
  );
}
