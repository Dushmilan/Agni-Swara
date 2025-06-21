import React from 'react';

const AboutUs = () => {
  return (
    <section className="about-us-section full-height position-relative">
      <div className="about-overlay position-absolute top-0 left-0 w-100 h-100"></div>
      <div className="container h-100 px-4">
        <div className="row h-100 align-items-center">
          <div className="col-12 col-lg-8 mx-auto text-center">
            <div className="about-content">
              <h1 className="display-1 fw-bold text-white mb-5">Agni Swara</h1>
              <p className="lead text-white mb-5">Your Gateway to Cinematic Soundscapes</p>
              <p className="text-white mb-5">
                Founded in 2015, Agni Swara has been captivating audiences with our unique blend of film music and live performance. Our journey began with a shared passion for cinematic soundtracks and a vision to bring these iconic scores to life on stage.
              </p>
              <div className="story-section mt-5">
                <h3 className="display-5 fw-bold text-white mb-4">Our Story</h3>
                <p className="text-white">
                  We are a group of passionate musicians dedicated to bringing the magic of film music to live audiences. Our journey began when we came together with a shared vision of creating immersive musical experiences that transport listeners to different worlds through the power of cinematic scores.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
