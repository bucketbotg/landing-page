import AstroLogo from "@/icons/Astro.astro";
import Blog from "@/icons/Blog.astro";
import Docs from "@/icons/Docs.astro";
import Discord from "@/icons/Discord.astro";
import Facebook from "@/icons/Facebook.astro";
import GitHub from "@/icons/GitHub.astro";
import Instagram from "@/icons/Instagram.astro";
import Link from "@/icons/Link.astro";
import LinkedIn from "@/icons/LinkedIn.astro";
import Mail from "@/icons/Mail.astro";
import Map from "@/icons/Map.astro";
import Medium from "@/icons/Medium.astro";
import OpenSource from "@/icons/OpenSource.astro";
import SoundCloud from "@/icons/SoundCloud.astro";
import Spotify from "@/icons/Spotify.astro";
import Star from "@/icons/Star.astro";
import Telegram from "@/icons/Telegram.astro";
import TikTok from "@/icons/TikTok.astro";
import Twitch from "@/icons/Twitch.astro";
import Uptime from "@/icons/Uptime.astro";
import WhatsApp from "@/icons/WhatsApp.astro";
import X from "@/icons/X.astro";
import YouTube from "@/icons/YouTube.astro";

const SOCIAL_ICONS: Record<string, any> = {
  AstroLogo,
  Blog,
  Docs,
  Discord,
  Facebook,
  GitHub,
  Instagram,
  Link,
  LinkedIn,
  Mail,
  Map,
  Medium,
  OpenSource,
  SoundCloud,
  Spotify,
  Star,
  Telegram,
  TikTok,
  Twitch,
  Uptime,
  WhatsApp,
  X,
  YouTube,
};

export const getIcon = (network: string) => {
  return SOCIAL_ICONS[network];
};
