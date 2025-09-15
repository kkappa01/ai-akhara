import React from "react";


export default function Page() {

  return (
  <div className="grid gap-6">
  <section className="rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-800">
  <h1 className="text-3xl font-bold mb-2">AI Akhara</h1>
  {/* <p className="opacity-80">
  The arena for model builders — To  Agentic AI, post-training, and production systems.  
  </p> */}
  
  <p className="opacity-80">
  An arena for AI engineers — to learn, practice, and gain confidence in Agentic AI, post-training, and production systems.
  </p>
  <div className="my-4" />
  <p className="opacity-80">
  Goal: Build a confident community of AI engineers who can design, and deploy useful, cutting-edge AI systems.
  </p>
  <div className="my-4" />

  <h2 className="text-xl font-semibold mb-2">Why are we Doing This?</h2>
  <p className="opacity-80">
  The next era of AI must be inclusive and relevant across regions and industries. 
  We need more builders who understand models deeply — not just how to use them, but how to align, architect, and adapt them to solve realworld problems. 
  AI Akhara is our way of contributing to that future.
  </p>

  <div className="mt-6 flex gap-3">
  <a className="inline-flex items-center gap-2 rounded-xl px-4 py-2 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900" href="/about">Learn More About our Mission</a>
  {/* <a className="inline-flex items-center gap-2 rounded-xl px-4 py-2 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900" href="/projects">See Projects</a> */}
  <a className="inline-flex items-center gap-2 rounded-xl px-4 py-2 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900" 
  href="https://app.formbricks.com/s/cmfjv6q1u1yoiz201c8mqenv4"
  target="_blank"
  rel="noopener noreferrer">Sign Up</a>
  </div>

  </section>
  
  
  <section className="rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-800">
  <h2 className="text-xl font-semibold mb-2">What we do?</h2>
  <p className="opacity-80">
  <div className="space-y-3 text-justify">
    <p>
      <b>AI Akhara</b> is a community for ambitious builders who want to develop deep expertise across the full stack of AI system building.
    </p>
    <p>
      <b>We focus on three pillars:</b>
    </p>
    <ol className="list-decimal pl-6 space-y-1">
      <li>
        <b>Model Building</b> — Post-training and Evals.
      </li>
      <li>
        <b>Agentic AI</b> — Designing systems for real-world use cases.
      </li>
      <li>
        <b>Production Readiness</b> — Infrastructure, monitoring, data pipelines, and deployment.
      </li>
    </ol>
    <p>
    Through hands-on projects, collaborative challenges, and guided sessions, we help engineers move beyond consuming AI — to becoming confident creators.
    </p>
  

  <div className="my-4" />
  <h2 className="text-xl font-semibold mb-2">Activities</h2>
  <p>All you need is ambition and 2–4 hours each weekend.</p>

  <ul className="list-disc pl-5 space-y-1">
  <li><b>Weekend Akharas </b>– Intensive project based sessions.</li>
  <li><b>AI Clinics & Office Hours </b>– For start-ups and college/university students, to bring questions, get guidance, or use us as a sounding board.</li>
  <li><b>Collaborative Research</b>– Applied research collaborations with universities and researchers.</li>
  <li><b>Invited Talks & Showcases </b>– Talks from researchers, practitioners and builders, plus opportunities to showcase projects.</li>
  </ul>
  </div>
  </p>
  </section>
  
  <section className="rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-800">
  <h2 className="text-xl font-semibold mb-2">Get Involved</h2>
  <p className="opacity-80">
  <div className="space-y-3 text-justify">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {/* 1,1: Join Us */}
    <div className="rounded-xl border border-gray-200 dark:border-gray-700 p-4 flex flex-col justify-between h-full shadow-sm bg-white dark:bg-gray-950">
      <h3 className="text-lg font-semibold mb-2">Join Us</h3>
      <p className="mb-4">
      Tell us which project you’d like to be part of — or suggest new ones you’d love to see come alive.
      </p>
      <a
        href="/projects"
        className="inline-flex items-center gap-2 rounded-xl px-4 py-2 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900 text-sm font-medium w-max"
      >
        See Projects & Sign Up
      </a>
    </div>
    {/* 1,2: Office Hours */}
    <div className="rounded-xl border border-gray-200 dark:border-gray-700 p-4 flex flex-col justify-between h-full shadow-sm bg-white dark:bg-gray-950">
      <h3 className="text-lg font-semibold mb-2">Office Hours</h3>
      <p className="mb-4">
        Set up a 1:1 chat. Please include your details and a brief agenda when reaching out.
      </p>
      <a
        href="/office-hours"
        className="inline-flex items-center gap-2 rounded-xl px-4 py-2 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900 text-sm font-medium w-max"
      >
        Book Office Hours
      </a>
    </div>
    {/* 2,1: Collaborate */}
    <div className="rounded-xl border border-gray-200 dark:border-gray-700 p-4 flex flex-col justify-between h-full shadow-sm bg-white dark:bg-gray-950">
      <h3 className="text-lg font-semibold mb-2">Collaborate</h3>
      <p className="mb-4">
      Reach out to discuss potential projects, research, partnerships, or ways to contribute to the community.
      </p>
      <a
        href="https://app.formbricks.com/s/cmfjwp9q03hayy501efmeqm3o"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-xl px-4 py-2 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900 text-sm font-medium w-max"
      >
        Message Us
      </a>
    </div>
    {/* 2,2: Contact */}
    <div className="rounded-xl border border-gray-200 dark:border-gray-700 p-4 flex flex-col justify-between h-full shadow-sm bg-white dark:bg-gray-950">
      <h3 className="text-lg font-semibold mb-2">Contact</h3>
      <p className="mb-4">
      <div>
        <div><b>Name:</b> Karthik Kappaganthu</div>
        <div>
          <b>Email:</b>{' '}
          <a href="mailto:kaykappa01@gmail.com" className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-200">
            kaykappa01@gmail.com
          </a>
        </div>
        <div>
          <b>LinkedIn:</b>{' '}
          <a href="https://www.linkedin.com/in/kkappa/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-200">
            https://www.linkedin.com/in/kkappa/
          </a>
        </div>
      </div>
      </p>
      <a
        href="https://app.formbricks.com/s/cmfjwp9q03hayy501efmeqm3o"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-xl px-4 py-2 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900 text-sm font-medium w-max"
      >
        Contact Us
      </a>
    </div>
  </div>

  </div>
  </p>
  </section>
{/* 

  <section className="rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-800">
  <h2 className="text-xl font-semibold mb-2">Collaborations</h2>
  <ul className="list-disc pl-5 space-y-1">
  <li>LLM/SLM post-training (LoRA, DPO/RLHF)</li>
  <li>Agentic evaluation & safety harnesses</li>
  <li>Efficient training/inference on limited compute</li>
  <li>Data/tooling for Indian languages</li>
  </ul>
  </section> */}
  </div>
  );
  }

