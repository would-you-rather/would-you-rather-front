import { Component } from "react";
import { ReactComponent as WelcomeSVG } from './welcome.svg'

class About extends Component {

  render() {
    return (
      <>
        <h1>About The Devs</h1>
        
          <img src='./deiosha.jpg' alt='Deiosha'/>
          <p>Hi, I am Deiosha Sparks. Before I decided to change careers, I worked at UW Medicine as a Medical Assistant, and I'm a Junior attending the University of Washington. I enjoy solving complex problems because programming challenges me to be creative and improves my problem-solving skills. I have always been interested in learning more about game development, and I wanted to get the fundamental skills of a software developer by taking this Code Fellows course to explore that in the future.</p>
          
       

        <img src='./ash.jpg' alt='Ashwini'/>
        <p>My name is Ashwini Uppal. I have a Master’s degree in Finance. Before I decided to change my career, I was an educator. When the pandemic hit and everything went remote, I saw how my co-workers who were not tech savvy struggled a lot. At that point the thought of a career change came to my mind where I want to make apps which are user friendly. When I started self-studying, I quickly realized that I really like coding and this is what I want to do! That is when I decided to become a full stack developer. I am hoping that my masters degree in Finance and my experience in education along with the experience I am getting in tech now, I will be able to land the job of my dreams.</p>
       
        <img src='./adrian.jpg' alt='adrian'/>
        <p>I am a software engineering student with a background in the medical field as well as the customer service industry. I recently exited the Army after 6 years of service as an Army nurse. Being in the military taught me the importance of teamwork and nursing helped me hone my interpersonal skills. I love the challenge software engineering is providing me and I look forward to seeing what I can contribute to the field.</p>
       
     <div>{<WelcomeSVG/>}
   </div>
     
      </>
    )
  }
};

export default About;