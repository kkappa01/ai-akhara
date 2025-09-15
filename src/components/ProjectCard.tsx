import type { Project } from '@/lib/types';

export default function ProjectCard({ project }: { project: Project }) {
    return (
    <a href={project.repo} target="_blank" rel="noreferrer" className="rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-800 block hover:shadow-xl transition-shadow">
    <div className="flex items-start justify-between gap-4">
    <div>
    <h3 className="text-lg font-semibold">{project.name}</h3>
    {project.blurb && <p className="opacity-80 mt-1">{project.blurb}</p>}
    {project.tags && (
    <div className="mt-2 flex flex-wrap gap-2 text-xs opacity-80">
    {project.tags.map((t: string) => (
    <span key={t} className="px-2 py-0.5 rounded-full border border-gray-300 dark:border-gray-700">{t}</span>
    ))}
    </div>
    )}
    </div>
    {project.status && (
    <span className="text-xs uppercase tracking-wide opacity-70">{project.status}</span>
    )}
    </div>
    </a>
    );
    }