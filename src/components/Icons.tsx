/**
 * The site's single icon vocabulary.
 *
 * Every glyph on Star Growth Hub comes from `react-icons` and is re-exported
 * here under a name that says what it *means* rather than what it looks like.
 * Two reasons for the indirection:
 *
 *   1. Consistency — Feather (`fi`) is the base set, so every UI icon shares
 *      the same 24px grid and 2px stroke. Brand marks come from Font Awesome 6
 *      (`fa6`) because those are trademarked shapes with one correct form, and
 *      a handful of concepts Feather has no glyph for come from Lucide (`lu`).
 *   2. Swapping an icon is a one-line change here instead of a hunt through
 *      every component.
 *
 * Icons are decorative by default: `aria-hidden` is baked in, so a screen
 * reader announces the label next to the icon and never the icon itself. Pass
 * a `title` only when the icon is the *only* content of a control.
 *
 * These render inside server components, so the SVG is inlined into the static
 * HTML at build time — nothing is fetched, and nothing is drawn by JavaScript.
 */

import type { IconType } from "react-icons";

import {
  FaFacebookF,
  FaGoogle,
  FaIndianRupeeSign,
  FaInstagram,
  FaLinkedinIn,
  FaQuoteLeft,
  FaStar,
  FaWhatsapp,
} from "react-icons/fa6";

import {
  FiActivity,
  FiArrowDown,
  FiArrowRight,
  FiArrowUpRight,
  FiAward,
  FiBarChart2,
  FiBriefcase,
  FiCalendar,
  FiCheck,
  FiCheckCircle,
  FiChevronDown,
  FiChevronRight,
  FiClipboard,
  FiClock,
  FiCode,
  FiCompass,
  FiEdit3,
  FiExternalLink,
  FiEye,
  FiFileText,
  FiFilter,
  FiGlobe,
  FiHelpCircle,
  FiHome,
  FiLayers,
  FiLink2,
  FiMail,
  FiMapPin,
  FiMenu,
  FiMessageCircle,
  FiMonitor,
  FiMousePointer,
  FiNavigation,
  FiPenTool,
  FiPhone,
  FiPieChart,
  FiPlus,
  FiRefreshCw,
  FiSearch,
  FiSend,
  FiServer,
  FiSettings,
  FiShare2,
  FiShield,
  FiSmartphone,
  FiStar,
  FiTarget,
  FiThumbsUp,
  FiTrendingUp,
  FiUserCheck,
  FiUsers,
  FiX,
  FiZap,
} from "react-icons/fi";

import { LuGoal, LuHandshake, LuMegaphone, LuRocket, LuSparkles } from "react-icons/lu";

export type IconProps = {
  className?: string;
  /**
   * Only for icons that carry meaning on their own (an icon-only button, for
   * instance). Supplying it swaps `aria-hidden` for a real accessible name.
   */
  title?: string;
};

/** A glyph in this site's vocabulary. */
export type Icon = (props: IconProps) => React.ReactElement;

/**
 * Wraps a raw react-icons glyph so it is decorative unless told otherwise and
 * sized by Tailwind classes rather than the library's inline `1em`.
 */
function glyph(Base: IconType, name: string): Icon {
  function Wrapped({ className = "h-4 w-4", title }: IconProps) {
    return (
      <Base
        className={className}
        title={title}
        aria-hidden={title ? undefined : "true"}
        role={title ? "img" : undefined}
        focusable="false"
      />
    );
  }
  Wrapped.displayName = name;
  return Wrapped;
}

/* ---------------- brand marks ---------------- */

export const IconWhatsApp = glyph(FaWhatsapp, "IconWhatsApp");
export const IconLinkedIn = glyph(FaLinkedinIn, "IconLinkedIn");
export const IconInstagram = glyph(FaInstagram, "IconInstagram");
export const IconFacebook = glyph(FaFacebookF, "IconFacebook");
export const IconGoogle = glyph(FaGoogle, "IconGoogle");

/** Maps a `site.social` key to its brand mark. */
export const SOCIAL_ICONS: Record<string, Icon> = {
  linkedin: IconLinkedIn,
  instagram: IconInstagram,
  facebook: IconFacebook,
  google: IconGoogle,
};

/* ---------------- rating & testimonial ---------------- */

/** Solid star — used for the 5.0 Google rating. */
export const IconStar = glyph(FaStar, "IconStar");
export const IconStarOutline = glyph(FiStar, "IconStarOutline");
export const IconQuote = glyph(FaQuoteLeft, "IconQuote");

/* ---------------- service pillars ---------------- */

export const IconSeo = glyph(FiSearch, "IconSeo");
export const IconAds = glyph(FiTarget, "IconAds");
export const IconSocial = glyph(FiShare2, "IconSocial");
export const IconWeb = glyph(FiCode, "IconWeb");
export const IconBranding = glyph(FiPenTool, "IconBranding");
export const IconLeads = glyph(FiFilter, "IconLeads");

/* ---------------- navigation & flow ---------------- */

export const IconArrowRight = glyph(FiArrowRight, "IconArrowRight");
export const IconArrowDown = glyph(FiArrowDown, "IconArrowDown");
export const IconArrowUpRight = glyph(FiArrowUpRight, "IconArrowUpRight");
export const IconChevronDown = glyph(FiChevronDown, "IconChevronDown");
export const IconChevronRight = glyph(FiChevronRight, "IconChevronRight");
export const IconMenu = glyph(FiMenu, "IconMenu");
export const IconClose = glyph(FiX, "IconClose");
export const IconExternal = glyph(FiExternalLink, "IconExternal");
export const IconHome = glyph(FiHome, "IconHome");

/* ---------------- contact ---------------- */

export const IconPhone = glyph(FiPhone, "IconPhone");
export const IconMail = glyph(FiMail, "IconMail");
export const IconPin = glyph(FiMapPin, "IconPin");
export const IconDirections = glyph(FiNavigation, "IconDirections");
export const IconClock = glyph(FiClock, "IconClock");
export const IconCalendar = glyph(FiCalendar, "IconCalendar");
export const IconSend = glyph(FiSend, "IconSend");
export const IconMessage = glyph(FiMessageCircle, "IconMessage");

/* ---------------- state & affordance ---------------- */

export const IconCheck = glyph(FiCheck, "IconCheck");
export const IconCheckCircle = glyph(FiCheckCircle, "IconCheckCircle");
export const IconPlus = glyph(FiPlus, "IconPlus");
export const IconClose2 = glyph(FiX, "IconClose2");
export const IconHelp = glyph(FiHelpCircle, "IconHelp");

/* ---------------- concepts ---------------- */

export const IconGrowth = glyph(FiTrendingUp, "IconGrowth");
export const IconAudience = glyph(FiUsers, "IconAudience");
export const IconSpeed = glyph(FiZap, "IconSpeed");
export const IconAward = glyph(FiAward, "IconAward");
export const IconShield = glyph(FiShield, "IconShield");
export const IconChart = glyph(FiBarChart2, "IconChart");
export const IconPieChart = glyph(FiPieChart, "IconPieChart");
export const IconActivity = glyph(FiActivity, "IconActivity");
export const IconCompass = glyph(FiCompass, "IconCompass");
export const IconLayers = glyph(FiLayers, "IconLayers");
export const IconDesktop = glyph(FiMonitor, "IconDesktop");
export const IconMobile = glyph(FiSmartphone, "IconMobile");
export const IconEdit = glyph(FiEdit3, "IconEdit");
export const IconEye = glyph(FiEye, "IconEye");
export const IconThumbsUp = glyph(FiThumbsUp, "IconThumbsUp");
export const IconClipboard = glyph(FiClipboard, "IconClipboard");
export const IconDocument = glyph(FiFileText, "IconDocument");
export const IconSettings = glyph(FiSettings, "IconSettings");
export const IconGlobe = glyph(FiGlobe, "IconGlobe");
export const IconLink = glyph(FiLink2, "IconLink");
export const IconRefresh = glyph(FiRefreshCw, "IconRefresh");
export const IconBriefcase = glyph(FiBriefcase, "IconBriefcase");
export const IconRupee = glyph(FaIndianRupeeSign, "IconRupee");
export const IconClick = glyph(FiMousePointer, "IconClick");
export const IconServer = glyph(FiServer, "IconServer");
export const IconOwnership = glyph(FiUserCheck, "IconOwnership");
export const IconRocket = glyph(LuRocket, "IconRocket");
/** A goal reached, as opposed to `IconAds` which is targeting/aiming. */
export const IconTargetOutcome = glyph(LuGoal, "IconTargetOutcome");
export const IconSparkles = glyph(LuSparkles, "IconSparkles");
export const IconHandshake = glyph(LuHandshake, "IconHandshake");
export const IconMegaphone = glyph(LuMegaphone, "IconMegaphone");
