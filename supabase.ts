import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  // This intentionally does not throw: throwing here would crash every page that
  // imports this module (including build-time prerendering) with an opaque error.
  // Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in your
  // deployment platform's Environment Variables settings (e.g. Vercel Project
  // Settings -> Environment Variables) and redeploy.
  console.warn(
    '[supabase] NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_ANON_KEY are not set. ' +
      'Authentication and data features will not work until these are configured.'
  );
}

export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseAnonKey || 'placeholder-anon-key'
);

export type Profile = {
  id: string;
  email: string;
  full_name: string | null;
  avatar_url: string | null;
  native_language: string;
  target_languages: string[];
  xp: number;
  coins: number;
  level: number;
  current_streak: number;
  longest_streak: number;
  last_activity_date: string | null;
  subscription_tier: 'free' | 'premium' | 'school' | 'enterprise';
  created_at: string;
  updated_at: string;
};

export type Course = {
  id: string;
  title: string;
  slug: string;
  description: string;
  long_description: string | null;
  language: 'en' | 'ja';
  level: string;
  category: string;
  cover_image: string | null;
  is_published: boolean;
  is_free: boolean;
  price: number;
  xp_reward: number;
  duration_hours: number;
  lessons_count: number;
  enrolled_count: number;
  rating: number;
  created_at: string;
};

export type Lesson = {
  id: string;
  course_id: string;
  title: string;
  slug: string;
  description: string | null;
  content: string | null;
  video_url: string | null;
  audio_url: string | null;
  order_index: number;
  duration_minutes: number;
  xp_reward: number;
  is_preview: boolean;
};

export type Achievement = {
  id: string;
  title: string;
  slug: string;
  description: string;
  icon: string;
  xp_reward: number;
  coins_reward: number;
  requirement_type: string;
  requirement_value: number;
};

export type ForumThread = {
  id: string;
  category_id: string;
  author_id: string;
  title: string;
  slug: string;
  is_pinned: boolean;
  is_locked: boolean;
  view_count: number;
  reply_count: number;
  last_reply_at: string | null;
  created_at: string;
  author?: Profile;
};
