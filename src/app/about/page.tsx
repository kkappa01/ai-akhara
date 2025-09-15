import React from "react";
import ReactMarkdown from "react-markdown";

export default function ManifestoPage() {
    const markdown = `
# AI Akhara: Empowering a New Generation of AI Builders
## Our Vision – Democratize AI Expertise and Innovation
Our goal is to cultivate skilled AI engineers who can design, build, **post-train**, and deploy AI Systems. 
We aim to spark a diverse ecosystem that creates and democratizes useful AI models and solutions.

#### 12-Month Mission – A Community of 100 AI Engineers

*In Sanskrit/Hindi, an “akhara” is a training arena or gymnasium—a fitting metaphor for our initiative as a “gym” for AI expertise.*

## What’s Needed for the Next Era of AI – More AI Builders, Everywhere
Generative AI is transforming industries and daily life, and to sustain this momentum, the world would benefit greatly from many more engineers with a deep understanding of the models powering this transformation. This capability includes post-training to improve large and small language models (LLMs and SLMs) along with designing and building agentic AI systems. These skills—spanning architecture design to real-world performance optimization—must be cultivated broadly to enable effective, innovative, and inclusive use of AI.

Yet much of this expertise remains concentrated in a handful of companies. To truly democratize AI expertise [1], these opportunities must expand to places where talent is abundant but access to compute, mentorship, and collaborative networks is limited. Broadening the capacity to build (not just use) advanced AI systems and models ensures that innovation reflects the voices, languages, and priorities of a far more broader global community. This is not only essential for fairness and inclusion—it is vital for creating AI that serves the needs of many (industries, regions, and people).

AI Akhara draws inspiration from existing community-driven initiatives such as BigScience, EleutherAI, LAION, and Hugging Face’s open collaborations [2–5]. These efforts demonstrate the benefits of shared knowledge, open datasets, transparent training practices, and collective problem-solving—accelerating innovation, increasing accountability, and producing AI systems better aligned with diverse societal needs.


## 12-Month Mission – A Community of 100 AI Engineers


Our immediate mission is bold: within the next 12 months, create a community of 100 engineers skilled in the full lifecycle of post-training LLM/SLM development. This community will be fluent and hands-on in key facets of modern AI model development. From problem formulation to deployment, they will be capable of taking a base model and making it excel in innovative, real-world applications.
This includes:
- Data Curation & Generation – Setting up high-quality training and evaluation datasets, including human labeling and automated data generation techniques.
- Model Fine-Tuning & Training – Gaining practical experience in fine-tuning specialized generative models efficiently. This includes leveraging GPUs and distributed compute for scalable training, using techniques such as low-rank adaptation (LoRA), prompt tuning, and reinforcement learning fine-tuning (RLHF).
Agentic Architectures – Designing and implementing AI agents and autonomous workflows capable of reasoning, planning, and chaining model capabilities to perform complex tasks.
- Evaluation & Iterative Improvement – Conducting rigorous model evaluations using automated metrics and human feedback.
- Efficient Deployment & MLOps – Serving models in production while optimizing for efficient inference, scalability, and reliability.
- AI Product Integration – Translating real-world problems into AI solutions, integrating models into user-facing applications, collecting feedback, and rolling out iterative improvements.
By year-end, this community will form a nucleus of expertise—mentoring others and driving independent AI projects.

## Approach: Learn by Doing

AI Akhara’s approach is hands-on and community-driven, inspired by successful grassroots AI education programs such as AI Saturdays [6]. Our emphasis is on “growing by doing” in a collaborative peer environment.
Key pillars of our program include:
- Project-Based Growing Sprints: Every few weeks, we organize a short sprints centered on practical AI challenges. These projects cover the gamut of LLM/SLM development – one might involve optimizing a model for reasoning model/gpt-x level performance on a niche task, another may involve continued training of a small language model from on a domain-specific corpus.
- AI Clinics & Office Hours: Weekly open sessions where startups, non-profits, or student teams bring AI challenges for live problem-solving or chatting about careers in AI or anything AI related.
- Mentorship & Pair Programming: Structured collaboration through pair programming, experimentation sessions, infrastructure setup, and code reviews.
- Community Networking & Events: Paper Review, Meetups, guest talks, and mixers to foster collaborations and spark new project ideas.

## Collaboration
We welcome AI experts, research labs, and organizations to join us as collaborators. This could mean volunteering as a mentor, hosting a workshop, or offering a project idea for the community. If you’re an AI researcher or practitioner, mentoring with AI Akhara is a chance to pay it forward – while also fine tuning your own leadership and skills. We have seen in other domains how community-driven collaboration leads to breakthroughs – AI Akhara aims to be a hub where such synergy happens for AI development.

We invite forward-thinking organizations to support AI Akhada in our mission to democratize AI expertise.Forward-thinking organizations can sponsor AI Akhara via cloud credits, GPU hardware, compute grants, or funding. This directly fuels training of the next generation of AI innovators, expanding the global AI talent pool that the industry urgently needs [7].

## References
- Bengio, Y. (2023). Democratizing AI Research. Montreal AI Ethics Institute.
- BigScience. (2022). Large Open-Science Open-Access Multilingual Language Model. Hugging Face.
- EleutherAI. (2021). Open Language Models for Research. EleutherAI.org.
- Schuhmann, C. et al. (2022). LAION: Large-scale Artificial Intelligence Open Network. arXiv:2210.08402.
- Cohere for AI. (2023). Global Research Lab for Machine Learning. cohere.com/research.
- AI Saturdays. (2017). Community-led AI Education. aisaturdays.com.
- Ng, A. (2023). AI Talent Bottleneck. deeplearning.ai newsletter.

    `;

    return (
        <main className="p-6 max-w-4xl mx-auto">
            <div className="prose prose-lg dark:prose-invert max-w-none">
                <ReactMarkdown>
                    {markdown}
                </ReactMarkdown>
            </div>
        </main>
    );
}