"use client";

import { isDevMode } from "@/consts/env";
import { usePathname } from "next/navigation"
import Script from "next/script";

function ChannelTalk() {
  const pathname = usePathname();
  
  if (isDevMode) return null;
  if (pathname==="/signup") return null;
console.log(pathname);

  const channelIoScript = `
    (function(){var w=window;if(w.ChannelIO){return w.console.error("ChannelIO script included twice.");}var ch=function(){ch.c(arguments);};ch.q=[];ch.c=function(args){ch.q.push(args);};w.ChannelIO=ch;function l(){if(w.ChannelIOInitialized){return;}w.ChannelIOInitialized=true;var s=document.createElement("script");s.type="text/javascript";s.async=true;s.src="https://cdn.channel.io/plugin/ch-plugin-web.js";var x=document.getElementsByTagName("script")[0];if(x.parentNode){x.parentNode.insertBefore(s,x);}}if(document.readyState==="complete"){l();}else{w.addEventListener("DOMContentLoaded",l);w.addEventListener("load",l);}})();
  
    ChannelIO('boot', {
      "pluginKey": "acb0febb-fe4a-45ac-aca1-e7d8c5ed746f"
    });
    `;
  // You can show in the console the GA_TRACKING_ID to confirm

  return (
    <Script
      id="channel-talk-init"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: channelIoScript,
      }}
    />
  );
}

export default ChannelTalk;
