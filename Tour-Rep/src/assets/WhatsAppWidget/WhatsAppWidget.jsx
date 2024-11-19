import React, { useEffect } from "react";

const WhatsAppWidget = () => {
useEffect(() => {
    if (!window.gbwawc) {
      (function (w, d, s, u) {
        w.gbwawc = {
          url: u,
          options: {
            waId: "+250 0780402666",
            siteName: "TOURWITHCH",
            siteTag: "Active Now",
            siteLogo:
              "https://assets.gallabox.com/gb-home/wa-chat-widget/bot-logo-1.png",
            widgetPosition: "LEFT",
            welcomeMessage:
              "Welcome to Tourwithche! enable engaging-conversation!",
            triggerMessage: "Chat with us",
            brandColor: "#25D366",
            messageText: "How we may help you?",
            replyOptions: ["", ""],
            version: "v1",
            widgetPositionMarginX: "12",
            widgetPositionMarginY: "12",
          },
        };
        const h = d.getElementsByTagName(s)[0];
        const j = d.createElement(s);
        j.async = true;
        j.src = `${u}/whatsapp-widget.min.js?_=${new Date().toISOString()}`;
        h.parentNode.insertBefore(j, h);
      })(window, document, "script", "https://waw.gallabox.com");
    }
  }, []);
  ; // Runs only once on mount

  return null; // No UI for the widget component
};

export default WhatsAppWidget;
  