import { useState, useEffect } from "react";
import {Container,Row,Col }from "react-bootstrap";
import picture_home from '../../img/picture-home.png'
// import { ArrowRightCircle } from 'react-bootstrap-icons';
import '../../CSS/Home.css';
import TrackVisibility from 'react-on-screen';

const Home=() => {
      const [loopNum, setLoopNum] = useState(0);
      const [isDeleting, setIsDeleting] = useState(false);
      const [text, setText] = useState('');
      const [delta, setDelta] = useState(300 - Math.random() * 100);
      // eslint-disable-next-line no-unused-vars
      const [index, setIndex] = useState(1);
      const toRotate = [ "Hello ", "My name is ", "Nguyet Anh" ];
      const period = 800;
    
      useEffect(() => {
        let ticker = setInterval(() => {
          tick();
        }, delta);
    
        return () => { clearInterval(ticker) };
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [text])
    
      const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    
        setText(updatedText);
    
        if (isDeleting) {
          setDelta(prevDelta => prevDelta / 2);
        }
    
        if (!isDeleting && updatedText === fullText) {
          setIsDeleting(true);
          setIndex(prevIndex => prevIndex - 1);
          setDelta(period);
        } else if (isDeleting && updatedText === '') {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          setIndex(1);
          setDelta(300);
        } else {
          setIndex(prevIndex => prevIndex + 1);
        }
      }
    
      return (
       <>
        
        <section className="banner" id="home">
          <Container>
            <Row className="aligh-items-center">
              <Col xs={12} md={6} xl={7}>
                <TrackVisibility>
                  {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <span className="tagline">Welcome to my TodoList</span>
                      <h1>{``} 
                        <span className="txt-rotate" dataPeriod="500" data-rotate='[ "Hello ", "My name is ", "Nguyet Anh" ]'>
                        <span className="wrap">{text}</span></span>
                      </h1>
                      {/* <p>One of the most significant benefits of why to do list is important that it will help you stay organized. It will also help those tasks appear more manageable.</p> */}
                      <p>  You’ll be able to stay more focused because you’ve got an outline of what you’ve got to do and things you’ve already completed. Having tasks written in a list frees up space in your mind and allows you to be more creative.</p>

                      <p><strong>Read More:</strong>    <a href="https://checkify.com/blog/why-to-do-list-is-important/">Why to do list is important?</a> </p>
                  </div>}
                </TrackVisibility>
              </Col>
              <Col xs={12} md={6} xl={5}>
                <TrackVisibility>
                  {({ isVisible }) =>
                    <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                       <img src={picture_home} alt="Header Img"/>
                    </div>}
                </TrackVisibility>
              </Col>
            </Row>
          </Container>
        </section>
        </>

      );
};

export default Home;