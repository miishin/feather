import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'
import Footer from '../components/footer'

export default function About() {
  return (
    <div className = "flex flex-col min-h-screen">
      <Header/>
        <div className = "md:mx-auto flex items-start justify-center h-1/2 max-w-prose text-xl text-justify flex-grow px-16">
          <br/><br/>
        Mihane Sahara is a contemporary illustrator and photographer who is currently based in Tokyo, Japan. Born and raised in a Japanese household in Brooklyn, New York, she is bilingual in Japanese and English. Her photographic works reflect an interest in her close surroundings and draw attention towards what may seem mundane or even taken for granted, expressing the beauty in what is usually overlooked.
          <br/><br/>
        In September 2018 she enrolled into Temple University Japan Campus as an art major and graduated in December 2021 with a Bachelor’s in Art.
          <br/><br/>
        Both her drawings and photographs capture everyday objects and sensations that emanate calmness and comfort that ease the mind from the bustling streets of the city. Her works also function as a diary or collection of visual memories that she wants to preserve. Although the subjects are familiar to the audience, they may each have different interpretations than the artist, thus creating a larger story about the work than it initially was. As her motivation to create artwork  is to find a balance between self expression and demand for art, she shares works that express her personal interests and act as food for thought for the viewers.
          <br/>
        </div>
      <Footer/>
    </div>
  )
}
