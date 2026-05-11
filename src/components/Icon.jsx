import {
  ArrowRight, BadgeCheck, Bath, BedDouble, Bell,
  Building2, Calendar, Car, Check, ChevronLeft, ChevronRight,
  Heart, Image as LucideImage, LayoutDashboard, LayoutGrid,
  Locate, LogOut, Map as LucideMap, MapPin, MessageCircle,
  Minus, MoreHorizontal, Plus, Ruler, Search, Settings, Share2,
  ShieldCheck, SlidersHorizontal, Sparkles, Thermometer, TrendingUp,
  UserCheck, Wind, X,
} from 'lucide-react';

const ICONS = {
  'arrow-right':       ArrowRight,
  'badge-check':       BadgeCheck,
  'bath':              Bath,
  'bed-double':        BedDouble,
  'bell':              Bell,
  'building-2':        Building2,
  'calendar':          Calendar,
  'car':               Car,
  'check':             Check,
  'chevron-left':      ChevronLeft,
  'chevron-right':     ChevronRight,
  'heart':             Heart,
  'image':             LucideImage,
  'layout-dashboard':  LayoutDashboard,
  'layout-grid':       LayoutGrid,
  'locate':            Locate,
  'log-out':           LogOut,
  'map':               LucideMap,
  'map-pin':           MapPin,
  'message-circle':    MessageCircle,
  'minus':             Minus,
  'more-horizontal':   MoreHorizontal,
  'plus':              Plus,
  'ruler':             Ruler,
  'search':            Search,
  'settings':          Settings,
  'share-2':           Share2,
  'shield-check':      ShieldCheck,
  'sliders-horizontal': SlidersHorizontal,
  'sparkles':          Sparkles,
  'thermometer':       Thermometer,
  'trending-up':       TrendingUp,
  'user-check':        UserCheck,
  'wind':              Wind,
  'x':                 X,
};

export default function Icon({ name, size = 18, className = '', style = {}, strokeWidth = 1.75 }) {
  const LucideIcon = ICONS[name];
  if (!LucideIcon) return null;
  return <LucideIcon size={size} className={className} style={style} strokeWidth={strokeWidth} />;
}
