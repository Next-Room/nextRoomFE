import { Suspense } from "react";

import Recoil from "@/lib/recoil";
import MuiProvider from "@/lib/muiProvider";
import StyledJsxRegistry from "@/lib/registry";
import StyledProvider from "@/lib/themeProvider";
import ReactQueryProvider from "@/lib/reactQueryProvider";

import RequireAuth from "@/components/RequireAuth/RequireAuth";

import Analytics from "./apis/Analytics";
import ChannelTalk from "./apis/ChannelTalk";
import Clarity from "./apis/Clarity";

export const metadata = {
  title: "NEXT ROOM",
  description: "NEXT ROOM Admin",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
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
