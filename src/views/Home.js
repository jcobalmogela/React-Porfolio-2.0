import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';
import ChatBot from 'react-simple-chatbot';
import '../css/chatboxStyle.css'

const Home = () => {


  return (
    <>
      <Hero className="illustration-section-01" />
      <FeaturesTiles />
      <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
      <Testimonial topDivider />
      <Cta split />
      <div className='chatboxx hide'>
        <ChatBot
              steps={[
                {
                  id: '1',
                  message: 'What is your name?',
                  trigger: '2',
                },
                {
                  id: '2',
                  user: true,
                  trigger: '3',
                },
                {
                  id: '3',
                  message: 'Hi {previousValue}, nice to meet you!',
                  end: true,
                },
              ]}
          />
      </div>
      <div class="w-100 p-5 d-flex justify-content-center align-items-center">
        <button className='chatBtn button button-primary p-2'>Chat Me</button>
      </div>
    </>
    
  );
}

export default Home;