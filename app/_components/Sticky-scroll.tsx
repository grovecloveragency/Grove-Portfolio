import { HoverEffect } from "../../components/ui/hovercard";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Amaan Shaikh  / Founder",
    description:
      "A Visionary in Full Stack Development With a B.E. in Artificial Intelligence and Data Science, Amaan brings a unique blend of innovation and technical expertise to the table. He’s not just the Founder of our company but the driving force behind its success. His profound understanding of both front-end and back-end technologies enables him to architect solutions that are both robust and scalable",
    link: "https://stripe.com",
  },
  {
    title: "Ayman Sayed  / Co-Founder",
    description:
      "Mastering Data Analytics for the Future A data wizard at heart, Ayman excels in harnessing the power of data to drive growth and innovation. With a B.E. degree in Artificial Intelligence and Data Science, he has mastered the art of Data Analytics. Sayed’s insights have shaped our company's strategic vision, ensuring we stay ahead of the curve. ",
    link: "https://netflix.com",
  },
  {
    title: "Saad Sayyed  / CEO/Director",
    description:
      "As a certified front-end and back-end developer, Sayyed has not only led teams but has also laid the foundation of our company’s technology stack. His BCS in Computer Science gives him the edge to understand complex technical landscapes while driving the company towards strategic goals.",
    link: "https://google.com",
  },
  {
    title: "Faraz Pathan  / Project Manager",
    description:
      "Bringing Ideas to Life Through Development Faraz is the engine behind every project, making sure that ideas transform into deliverable realities. With a strong background in Software Development and a degree in Computer Science Engineering, he ensures our projects stay on track and meet the highest quality standar ",
    link: "https://meta.com",
  },
  {
    title: "Abdul Basit Khan  / Marketing team",
    description:
      "Crafting Strategies that Resonate As the Head of our Marketing Team, Khan Abdul Basit leads with creativity and data-driven strategies. With specialized training in marketing platforms, he designs campaigns that not only engage but also convert, making sure our products reach the right audience.",
    link: "https://amazon.com",
  },
  {
    title: "Saquib Badami / HR",
    description:
      "Shaping Teams for Success Saquib brings a unique perspective to human resource management with his background in BB-IB. His expertise ensures that our teams are not only well-equipped but also culturally aligned with our mission, creating a work environment that fosters innovation and collaboration.",
    link: "https://microsoft.com",
  },
];
