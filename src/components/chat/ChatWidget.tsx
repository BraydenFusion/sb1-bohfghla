import React, { useEffect } from 'react';

declare global {
  interface Window {
    VG_CONFIG?: any;
  }
}

export const ChatWidget = () => {
  useEffect(() => {
    // Configure TIXAE Agents
    window.VG_CONFIG = {
      ID: "qeaohuxp4csba4wc",
      region: 'eu',
      render: 'bottom-right',
      stylesheets: [
        "https://vg-bunny-cdn.b-cdn.net/vg_live_build/styles.css",
      ],
    };

    // Create and append script
    const script = document.createElement("script");
    script.src = "https://vg-bunny-cdn.b-cdn.net/vg_live_build/vg_bundle.js";
    script.defer = true;
    document.body.appendChild(script);

    // Cleanup
    return () => {
      document.body.removeChild(script);
      const container = document.getElementById('VG_OVERLAY_CONTAINER');
      if (container) {
        container.remove();
      }
    };
  }, []);

  return <div id="VG_OVERLAY_CONTAINER" style={{ width: 0, height: 0 }} />;
};