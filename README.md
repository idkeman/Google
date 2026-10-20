# Google

A Google-inspired search homepage with the Scramjet-powered browsing experience from [idkeman/Proxy](https://github.com/idkeman/Proxy).

## Deployment
- GitHub Pages: https://idkeman.github.io/Google/
- Proxy engine assets and the BareMux worker are loaded from the Proxy repository and must remain reachable.
- The service worker is hosted in this repository and uses Scramjet routing behavior.
- WISP transport: `wss://dkwmkvruzebnqlmvwzhy.supabase.co/functions/v1/proxy-wisp/`

This is a visual remake, not an official Google product. It retains the original single search/address bar, presets, and browser controls. Live browsing has not been verified; the external asset paths and WISP backend still need runtime testing.
