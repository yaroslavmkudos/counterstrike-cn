```
 ██████╗███████╗   ██╗    ██████╗
██╔════╝██╔════╝  ███║   ██╔════╝
██║     ███████╗  ╚██║   ███████╗
██║     ╚════██║   ██║   ██╔═══██╗
╚██████╗███████║   ██║██╗╚██████╔╝
 ╚═════╝╚══════╝   ╚═╝╚═╝ ╚═════╝
```

# counterstrike-cn

Counter-Strike 1.6 inspired UI components for React. Copy, paste, customize.

**[Live Docs & Showcase](https://counterstrike-cn.com)** | **[GitHub](https://github.com/yaroslavmkudos/counterstrike-cn)**

---

## Quick Start

### CLI (recommended)

```bash
npx shadcn@latest add "https://counterstrike-cn.com" button
```

This uses shadcn's remote registry protocol. No npm package needed — the CLI fetches the component source and copies it into your project.

### Manual

1. Copy the component file from `components/ui/cscn/`
2. Copy `components/ui/cscn/styles/cstrike.css`
3. Import the CSS in your layout
4. Install peer dependencies as needed (`clsx`, `tailwind-merge`, `class-variance-authority`)

---

## Components

29 components, all styled to match the CS 1.6 VGUI interface.

| Component | Description |
|-----------|-------------|
| **Button** | VGUI-style buttons with 3D beveled borders (5 variants) |
| **Input** | Text input with inset bevel styling |
| **Textarea** | Multi-line text input with VGUI styling |
| **Checkbox** | Checkbox input with optional label |
| **Toggle** | Toggle switch with optional label |
| **Select** | Dropdown select with scroll and item indicators |
| **Card** | Panel container with header/content/footer |
| **Stat Card** | Stats display with label, value, and change indicator |
| **Alert** | Alert box with variant styling |
| **Dialog** | Modal dialog with VGUI window chrome |
| **Tooltip** | Tooltip with trigger and content |
| **Tabs** | Tab navigation with triggers and content panes |
| **Table** | Data table with VGUI-styled rows and headers |
| **Avatar** | Player avatar with name, team color, and size variants |
| **Badge** | Team and status badges (CT/T/VAC/accent) |
| **Separator** | Horizontal or vertical divider line |
| **Progress Bar** | Loading progress with animated stripes |
| **HUD** | Health, Armor, Ammo, Money, Timer displays |
| **Scoreboard** | TAB-style scoreboard with team sections |
| **Buy Menu** | Full buy menu with all CS 1.6 weapons |
| **Kill Feed** | Top-right kill notifications with team colors |
| **Radar** | Circular minimap with player dots (SVG) |
| **Chat** | In-game chat with dead/team indicators |
| **Console** | Interactive developer console with command input |
| **Server Browser** | Sortable server list with tabs and ping colors |
| **Text Menu** | Classic numbered text menu overlay |
| **Team Select** | CT/T/Spectator team picker |
| **Loading Screen** | Map loading screen with progress |
| **MOTD** | Message of the Day server panel |

---

## Design System

Colors extracted from actual CS 1.6 game resource files:

| Color | Hex | Source |
|-------|-----|--------|
| Panel BG | `#4A5942` | `TrackerScheme.res` |
| HUD Amber | `#FFA000` | `hud.h` `RGB_YELLOWISH` |
| HUD Red | `#FF1010` | `hud.h` `RGB_REDISH` |
| HUD Green | `#00A000` | `hud.h` `RGB_GREENISH` |
| Menu Gold | `#FFCC00` | `TrackerScheme.res` |
| CT Blue | `#99CCFF` | `ClientScheme.res` |
| T Red | `#FF4040` | `ClientScheme.res` |
| Border Light | `#8C9284` | VGUI bevel system |
| Border Dark | `#292C21` | VGUI bevel system |

Font: [Counter-Strike by SoJa](https://www.dafont.com/counter-strike.font) (free, public domain)

---

## Tech Stack

- **React 19** + **TypeScript**
- **Next.js 16** (App Router)
- **Tailwind CSS v4**
- **Radix UI** primitives (Dialog, Select, Tabs, Tooltip, Separator, Slot)
- **class-variance-authority** for variant management
- **Fumadocs** for documentation site

---

## Contributing

Contributions welcome. If you have a CS 1.6 UI element that's missing, open a PR.

---

## License

MIT

Counter-Strike is a registered trademark of Valve Corporation. This is a fan-made project for fun and nostalgia. Not affiliated with or endorsed by Valve.
