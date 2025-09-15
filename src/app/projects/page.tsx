import projects from '@/data/projects.json';
import ProjectCard from '@/components/ProjectCard';
import React from "react";
import ReactMarkdown from "react-markdown";
import type { Project } from '@/lib/types';

export const revalidate = 3600; // optional ISR hourly


export default function ProjectsPage() {

    const markdown = `## A Call to Adventure
To the curious and motivated engineers out there: consider this your invitation to join AI Akhara. If you have a solid software background and basic familiarity with machine learning, and if you dream of going deeper – not just prompting – then AI Akhara is the arena for you. 

The mission should you choose to accept it, will be to work on useful AI projects in a sandbox where it’s safe to experiment and fail forward. Over weekends and off-hours, replace Doom scrolling with vibe coding. By the end, you could be among the rare engineers who know how to design/build deployable Agentic AI Systems, post-train a model, how to evaluate it, and how to deploy it. 

These skills are not just career-boosters; they’re empowering. They let you carry forward our vision: perhaps you will build the next open-source language model that can translate ancient texts, or an AI system that revolutionizes education or healthcare. 

The possibilities are vast. Our work here is to give you the foundation and support to chase them.
    `;
    

return (

<main className="p-6 max-w-6xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
  {/* Left Column - Markdown */}
  <div className="prose prose-lg dark:prose-invert max-w-none lg:border-r lg:border-gray-200 dark:lg:border-gray-700 lg:pr-8">
    <ReactMarkdown>
      {markdown}
    </ReactMarkdown>
  </div>

  {/* Right Column - Form and Projects */}
  <div className="space-y-6 lg:pl-8">
    <div className="space-y-4">
      <p>
        Reach out to us with the project areas you want to get involved with.
      </p>
      
      <div className="flex justify-center">
        <a
          href="https://app.formbricks.com/s/cmfjv6q1u1yoiz201c8mqenv4"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
        >
          Sign Up Here
        </a>
      </div>
      
      
    </div>
    
    <div className="grid gap-6">
      <h1 className="text-2xl font-bold">Project Areas</h1>
      <div className="grid gap-4">
        {projects.map((p) => (
          <ProjectCard key={p.name} project={p as Project} />
        ))}
      </div>
    </div>
  </div>
</div>
</main>
);
}