import feed from '@/data/news.json';


export const dynamic = 'force-static';


export default function NewsPage() {
return (
<div className="grid gap-6">
<h1 className="text-2xl font-bold">News</h1>
<p className="opacity-80">Summaries and links from our AI Agent. <em>Coming soon</em>.</p>


{feed.items.length === 0 ? (
<div className="rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-800">No items yet. Agent will populate this page soon.</div>
) : (
<ul className="grid gap-4">
{feed.items.map((it: any, idx: number) => (
<li key={idx} className="rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-800">
<a href={it.url} target="_blank" rel="noreferrer" className="font-semibold text-lg">{it.title}</a>
<p className="opacity-80 mt-1">{it.summary}</p>
{it.tags && (
<div className="mt-2 flex flex-wrap gap-2 text-xs opacity-80">
{it.tags.map((t: string) => (
<span key={t} className="px-2 py-0.5 rounded-full border border-gray-300 dark:border-gray-700">{t}</span>
))}
</div>
)}
</li>
))}
</ul>
)}
</div>
);
}