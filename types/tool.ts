export type ToolCategory = 'all' | 'test' | 'ai' | 'utility';
export type ToolBadge = 'NEW' | 'HOT' | 'AI' | 'BETA';

export interface ToolItem {
  id: string;
  slug: string;
  category: 'test' | 'ai' | 'utility';
  badge?: ToolBadge;
  title: Record<string, string>;
  description: Record<string, string>;
  icon: string;
  accentColor: string;
  stats?: {
    participants?: string;
    rating?: string;
    latency?: string;
  };
  features: string[];
}
