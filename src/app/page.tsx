import { Layout } from '@/components/layout';
import { Hero, AboutHome, Skills, Projects, CTA } from '@/components/sections';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <AboutHome />
      <Skills />
      <Projects />
      <CTA />
    </Layout>
  );
}
