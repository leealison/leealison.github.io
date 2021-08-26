import React from 'react';
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Home() {
  return (
      <div>
            <div className='home'>
                <div className='imgContainer'>
                    <Image src="https://live.staticflickr.com/65535/50220352763_e61264f3ce_z.jpg" roundedCircle className='photo'/>
                </div>

                <div className='text'>
                    <h1 className='text1'>
                        <span role="img" aria-label="wave">👻</span> Hi, I'm Alison.
                    </h1>

                    <h3 className='text2'>
                        I'm a senior at Johns Hopkins University studying computer science.
                    </h3>
                    <br />
                    <a href="https://github.com/leealison">
                        <FontAwesomeIcon icon={faGithub} className="icon" style={{marginRight:'1.5%'}}/>
                    </a>
                    <a href="https://www.linkedin.com/in/00alisonlee/">
                        <FontAwesomeIcon icon={faLinkedin} className="icon" style={{marginLeft:'1.5%'}}/>
                    </a>
                </div>
            </div>
    </div>
  );
}

export default Home;
