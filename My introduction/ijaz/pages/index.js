import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>It's me ijaz, an experienced, professional Web developer having experience in Data Science ,Data Analytics ,web application,blockchain applications,front-end development React js and wordpress As a Software Engineering Graduate I worked on Data Science and Analytics as well. I have developed my skills in data cleaning, manipulation, exploratory data analysis, and data visualization with Python and SQL. Data Science Skills: pandas · NumPy · Plotly · Presentation Skills · SQL · Python (Programming Language) · Data Visualization  </p>
        <p>
          
          <a href="https://www.fiverr.com/ijazdev101?public_mode=true">Check my fiverr Account </a>.)
        </p>
      </section>
    </Layout>
  );
}