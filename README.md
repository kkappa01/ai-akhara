# AI Akhara

> An arena for model builders — to learn, practice and build confidence in Agentic AI, post-training, and production systems.

AI Akhara is a developer-first community focused on building model training skills and open AI systems. We're creating a confident community of AI engineers who can design, and deploy cutting-edge useful AI systems.

**Note**: This is an initial version of the AI Akhara website (vide coded over a weekend).

## Our Mission

Building a confident community of AI engineers who can design, and deploy cutting-edge useful AI systems. The intent is to make the next era of AI more inclusive and relevant to every region and industry.

## What We Do

AI Akhara focuses on three pillars:

1. **Model Building** — Post-training and Evals
2. **Agentic AI** — Designing systems for key real-world use cases  
3. **Production Readiness** — Infrastructure, monitoring, data pipelines, and deployment

## Activities

- **Weekend Akharas** – Intensive project-based sessions
- **AI Clinics & Office Hours** – Start-ups and college/university students, bring your questions and we will help or be your sounding board
- **Collaborative Research** – Applied research collaborations with universities and research institutions
- **Invited Talks & Showcases** – Talks from researchers, practitioners and builders, along with opportunities to showcase the projects

## Tech Stack

This website is built 90% by cursor:

- **Framework**: [Next.js](https://nextjs.org) with App Router
- **Styling**: Tailwind CSS
- **Content**: React Markdown for dynamic content
- **Deployment**: Vercel-ready

## Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/ai-akhara.git
cd ai-akhara
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Google Analytics Setup

To enable Google Analytics tracking:

1. Create a Google Analytics 4 (GA4) property in your [Google Analytics dashboard](https://analytics.google.com/)
2. Get your Measurement ID (format: `G-XXXXXXXXXX`)
3. Create a `.env.local` file in the root directory:
```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```
4. Replace `G-XXXXXXXXXX` with your actual Google Analytics Measurement ID
5. Restart your development server

The Google Analytics component will automatically load and start tracking page views and user interactions.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page (formerly manifesto)
│   ├── news/              # News page (formerly curated)
│   ├── projects/          # Projects showcase
│   ├── office-hours/      # Office hours booking
│   └── api/               # API routes
├── components/            # Reusable React components
├── data/                  # JSON data files
│   ├── projects.json      # Project data
│   └── news.json          # News/curated content
└── lib/                   # Utility functions and types
    └── types.ts           # TypeScript type definitions
```

## Contributing

We welcome contributions from the community! Here's how you can get involved:

1. **Join Us**: Reach out about which [project areas](/projects) you want to get involved with
2. **Office Hours**: Set up time for a 1:1 chat via our [office hours](/office-hours) page
3. **Collaborate**: Interested in collaborating on a project? [Message us](https://app.formbricks.com/s/cmfjwp9q03hayy501efmeqm3o)

## License

This project is licensed under the Apache License, Version 2.0 - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

AI Akhara draws inspiration from community-driven initiatives such as BigScience, EleutherAI, LAION, and Hugging Face's open collaborations. These efforts demonstrate the benefits of shared knowledge, open datasets, transparent training practices, and collective problem-solving.

---

*Building the next generation of AI engineers, one project at a time.*