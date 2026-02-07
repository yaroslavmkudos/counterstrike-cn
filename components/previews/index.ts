import { ButtonPreview } from "./button-preview";
import { InputPreview } from "./input-preview";
import { CardPreview } from "./card-preview";
import { DialogPreview } from "./dialog-preview";
import { BadgePreview } from "./badge-preview";
import { ProgressBarPreview } from "./progress-bar-preview";
import { HudPreview } from "./hud-preview";
import { ScoreboardPreview } from "./scoreboard-preview";
import { BuyMenuPreview } from "./buy-menu-preview";
import { KillFeedPreview } from "./kill-feed-preview";
import { RadarPreview } from "./radar-preview";
import { ChatPreview } from "./chat-preview";
import { ConsolePreview } from "./console-preview";
import { ServerBrowserPreview } from "./server-browser-preview";
import { TextMenuPreview } from "./text-menu-preview";
import { TeamSelectPreview } from "./team-select-preview";
import { LoadingScreenPreview } from "./loading-screen-preview";
import { MotdPreview } from "./motd-preview";
import { SelectPreview } from "./select-preview";

export const previewRegistry: Record<string, React.ComponentType> = {
  button: ButtonPreview,
  input: InputPreview,
  card: CardPreview,
  dialog: DialogPreview,
  badge: BadgePreview,
  "progress-bar": ProgressBarPreview,
  hud: HudPreview,
  scoreboard: ScoreboardPreview,
  "buy-menu": BuyMenuPreview,
  "kill-feed": KillFeedPreview,
  radar: RadarPreview,
  chat: ChatPreview,
  console: ConsolePreview,
  "server-browser": ServerBrowserPreview,
  "text-menu": TextMenuPreview,
  "team-select": TeamSelectPreview,
  "loading-screen": LoadingScreenPreview,
  motd: MotdPreview,
  select: SelectPreview,
};
