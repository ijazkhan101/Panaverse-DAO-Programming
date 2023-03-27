import Image from 'next/image'
//import { Inter } from 'next/font/google'
// import styles from './page.module.css'


export default function About() {
  return (
    <div className="flex justify-center mt-20">
        <div className='mx-4 '>
            <Image  src='/imgs/ijaz.png'  width={500} height={100} alt='ijaz'/>
        </div>
        <div className='mx-4 self-center'>
            <h1 className='text-3xl font-bold underline'>Ijaz Ullah </h1>
            <p>
            I am a professional Web developer having experience in Data Science ,Data Analytics ,web application,blockchain applications,front-end development React js and wordpress As a Software Engineering Graduate I worked on Data Science and Analytics as well. I have developed my skills in data cleaning, manipulation, exploratory data analysis, and data visualization with Python and SQL. Data Science Skills: pandas · NumPy · Plotly · Presentation Skills · SQL · Python (Programming Language) · Data Visualization
            </p>
            <button>Vist </button>
        </div>
   
    </div>
  )
}
