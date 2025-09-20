import { Layout } from '@/components/layout';
import { Hero, About, Skills, Projects, CTA } from '@/components/sections';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <CTA />
    </Layout>
  );
}
