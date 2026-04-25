# Progressive Web App (PWA) Setup Guide

## Overview

Your project is now configured as a Progressive Web App. This enables offline functionality, installability, and a native app-like experience.

## What's Configured

### 1. **Service Worker**
- Automatically generated and managed by `vite-plugin-pwa`
- Caches assets for offline use
- Network-first caching strategy for external APIs
- Auto-updates every 5 hours

### 2. **Web App Manifest**
- Located at `/public/manifest.webmanifest`
- Defines app name, icons, theme colors, and display mode
- Enables installation on home screen

### 3. **PWA Update Notification**
- Users are notified when app updates are available
- `usePWAUpdate()` hook manages update logic
- `<PWAUpdateNotification />` component displays the notification

### 4. **Offline Support**
- Serves cached content when offline
- Runtime cache for external API requests
- Caches all static assets (JS, CSS, HTML, images, fonts)

## How to Use

### Check for Updates (in your components)

```tsx
import { usePWAUpdate } from "@/hooks/use-pwa-update";

export function MyComponent() {
  const { isUpdateAvailable, updateServiceWorker } = usePWAUpdate();

  return (
    <div>
      {isUpdateAvailable && (
        <button onClick={updateServiceWorker}>
          Update App
        </button>
      )}
    </div>
  );
}
```

### Install the App

**On Desktop (Chrome, Edge, Opera):**
1. Click the install icon in the address bar
2. Or: Menu → "Install app"

**On Mobile (iOS Safari, Android Chrome):**
1. Tap Share button
2. Select "Add to Home Screen" (iOS) or "Install app" (Android)

## Customization

### Change Cache Strategy
Edit `vite.config.ts` in the `workbox` section:
- `NetworkFirst`: Try network first, fallback to cache
- `CacheFirst`: Use cache, fallback to network
- `StaleWhileRevalidate`: Use cache while fetching fresh content

### Update Cache Duration
Modify `maxAgeSeconds` in `vite.config.ts`:
```ts
maxAgeSeconds: 5 * 60 * 60, // 5 hours
```

### Customize Manifest
Update `/public/manifest.webmanifest`:
- Change colors: `theme_color`, `background_color`
- Update name and short_name
- Add or modify icons

## Testing PWA Features

### Development Mode
1. Run `npm run dev`
2. Service Worker registers in development mode
3. Open DevTools → Application tab → Service Workers

### Build and Test
```bash
npm run build
npm run preview
```

### Lighthouse Audit
1. Open DevTools → Lighthouse
2. Check for PWA requirements
3. Run audit

## Browser Support

- ✅ Chrome 50+
- ✅ Edge 15+
- ✅ Firefox 44+
- ✅ Safari 11.1+ (iOS 11.3+)
- ✅ Opera 37+

## Troubleshooting

**Service Worker not registering?**
- Check browser console for errors
- Ensure HTTPS in production (PWA requires secure context)
- Try clearing cache and restarting

**Updates not working?**
- Delete the old service worker from DevTools
- Clear site data
- Rebuild and redeploy

**Offline content not showing?**
- Check Network tab in DevTools to see what's cached
- Verify `globPatterns` in vite.config.ts includes your assets

## Additional Resources

- [MDN: Progressive Web Apps](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)
- [vite-plugin-pwa Docs](https://vite-plugin-pwa.netlify.app/)
- [Web.dev PWA Guide](https://web.dev/progressive-web-apps/)
