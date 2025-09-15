export type Project = {
    name: string;
    repo: string;
    blurb?: string;
    tags?: string[];
    status?: 'planned' | 'active' | 'paused' | 'done';
    };
    
    
    export type NewsItem = {
    title: string;
    summary: string;
    url: string;
    tags?: string[];
    };
    
    
    export type NewsFeed = {
    updated_at: string;
    items: NewsItem[];
    };