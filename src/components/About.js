import React from 'react';
import './About.css'; // Import your custom CSS file

const About = () => {
  return (
    <div className='container'>
      <div className="about-container">
        <div className="about-image">
          <img
            src={'b.jpg'}
            alt="About Us"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>
        <div className="about-text">
          <h2>About Us</h2>
          <p>
            Welcome to iNoteSync, your digital companion for seamless note-taking and organization! At iNoteSync, we understand the importance of keeping your thoughts, ideas, and important information organized and accessible from anywhere. That's why we've created a powerful note-taking solution that securely stores your notes in the cloud.<br />
          </p>
          <h2>Our Mission</h2>
          <p>
            Our mission at iNoteSync is to empower individuals and teams to capture, organize, and share their thoughts effortlessly. We believe that a well-organized notebook is a key to productivity and creativity. With iNoteSync, you can create, edit, and access your notes anytime, anywhere.<br />
          </p>
          <h2>Key Features</h2>
          <p>
            Cloud Storage: iNoteSync utilizes state-of-the-art cloud technology to store your notes securely. Never worry about losing your valuable information again.<br />
            Cross-Platform Accessibility: Access your notes seamlessly across various devices, whether it's your computer, tablet, or smartphone. iNoteSync is designed to be your companion on any platform.<br />

            Collaboration: Collaborate with friends, colleagues, or classmates by sharing your notes. Work together in real-time to enhance productivity and creativity.<br />

            Intuitive Interface: Our user-friendly interface ensures that you can navigate through your notes effortlessly. Enjoy a smooth and delightful note-taking experience.<br />

            Customization: Personalize your notes with colors, tags, and categories. Tailor your iNoteSync to suit your unique organizational style.<br />
          </p>

          <h2>Get Started Today</h2>
          <p>Join the iNoteSync community and revolutionize the way you take notes. Whether you're a student, professional, or creative thinker, iNoteSync is here to enhance your note-taking journey.<br /><br />


            Thank you for choosing iNoteSync, where your ideas find a home in the cloud!<br />

            Feel free to use and customize this content according to your branding for iNoteSync.<br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
