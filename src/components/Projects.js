import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Collapse from 'react-bootstrap/Collapse';

function Projects() {
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);

    return (
        <div className="projects">
            <Container>
            <h2 id="projects" style={{marginBottom:'-8px'}}>Projects</h2>
            <br />
                <Row lg="3" sm="1">
                    <Col sm={true} lg={true} className="mt-3">
                        <Card onClick={() => setOpen1(!open1)}
                        aria-controls="example-collapse-text"
                        aria-expanded={open1}>
                        <div className="content">
                            <div className="content-overlay"></div>
                            <Card.Img variant="top" src="https://pbs.twimg.com/profile_images/943377199784169473/YaCC7nt5.jpg" style={{maxWidth: '100%',
                            height: '25vw', objectFit: 'cover'}} />
                            <div className="content-details">
                              <h3 className="content-title">HopHacks judge tool</h3>

                            </div>
                        </div>
                        <Collapse in={open1}>
                            <div>
                                <div style={{padding:'5%'}}>
                                    Web app for automating assigning judges to <a href="http://www.hophacks.com">HopHacks</a> submissions.
                                    <br /> <br />
                                    <OverlayTrigger placement="bottom" delay={{ show: 90, hide: 90 }} overlay={<Tooltip>Flask</Tooltip>}>
                                      <img src="https://upload.wikimedia.org/wikipedia/commons/1/1f/Horn_flask_%28PSF%29.png" alt="Flask logo" style={{maxWidth:'15%'}} />
                                    </OverlayTrigger>
                                    <OverlayTrigger placement="bottom" delay={{ show: 90, hide: 90 }} overlay={<Tooltip>React</Tooltip>}>
                                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt="React logo" style={{marginLeft:'2px', width:'15%'}} />
                                    </OverlayTrigger>
                                    <OverlayTrigger placement="bottom" delay={{ show: 90, hide: 90 }} overlay={<Tooltip>MongoDB</Tooltip>}>
                                        <img src="https://cdn.theorg.com/1d0c7e50-9da2-4a64-afa4-fcd47047d8a1_thumb.png" alt="MongoDB logo" style={{maxWidth:'11%'}} />
                                    </OverlayTrigger>
                                </div>
                            </div>
                      </Collapse>
                      </Card>
                    </Col>
                    <Col sm={true} lg={true} className="mt-3">
                        <Card className="card" onClick={() => setOpen2(!open2)}
                        aria-controls="example-collapse-text"
                        aria-expanded={open2}>
                        <div className="content">
                            <div className="content-overlay"></div>
                            <Card.Img variant="top" src="https://live.staticflickr.com/65535/50222590948_9007eec6c2_z.jpg" style={{maxWidth: '100%',
                            height: '25vw', objectFit: 'cover'}}/>
                            <div className="content-details">
                              <h3 className="content-title">Snow removal optimization</h3>
                            </div>
                        </div>
                        <Collapse in={open2}>
                            <div>
                                <div style={{padding:'5%'}}>
                                    Find cost efficient ways to clear snow
                                    at airports using traffic network modeling techniques.
                                    <br /> <br />
                                    <a href="https://github.com/mwlevin/HeatedPavement">
                                        <OverlayTrigger placement="bottom" delay={{ show: 90, hide: 90 }} overlay={<Tooltip>GitHub repo</Tooltip>}>
                                          <img src="https://image.flaticon.com/icons/svg/25/25231.svg" alt="GitHub logo" style={{maxWidth:'11%', marginRight:'8px'}} />
                                        </OverlayTrigger>
                                    </a>
                                    <OverlayTrigger placement="bottom" delay={{ show: 90, hide: 90 }} overlay={<Tooltip>Java</Tooltip>}>
                                      <img src="data:image/png;base64,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" alt="Java logo" style={{maxWidth:'13%'}} />
                                    </OverlayTrigger>
                                    <OverlayTrigger placement="bottom" delay={{ show: 90, hide: 90 }} overlay={<Tooltip>IBM CPLEX</Tooltip>}>
                                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQOyCR5qMxzqrZniqhYYSFRm_LqW9BRG7QaaA&usqp=CAU" alt="CPLEX logo" style={{marginLeft:'2px', maxWidth:'17%'}} />
                                    </OverlayTrigger>
                                </div>
                            </div>
                        </Collapse>
                        </Card>
                    </Col>
                    <Col sm={true} lg={true} className="mt-3">
                        <Card className="card" onClick={() => setOpen3(!open3)}
                        aria-controls="example-collapse-text"
                        aria-expanded={open3}>
                        <div className="content">
                            <div className="content-overlay"></div>
                            <Card.Img variant="top" src="https://live.staticflickr.com/65535/50222602823_6ebb8259bb_c.jpg" style={{maxWidth: '100%',
                            height: '25vw', objectFit: 'cover'}}/>
                            <div className="content-details">
                              <h3 className="content-title">JHU Marketplace</h3>
                            </div>
                        </div>
                        <Collapse in={open3}>
                            <div>
                                <div style={{padding:'5%'}}>
                                    Android app for JHU students to buy and sell textbooks, lab kits, clickers, and more.
                                    <br /><br />
                                    <a href="https://github.com/leealison/JHUMP">
                                        <OverlayTrigger placement="bottom" delay={{ show: 90, hide: 90 }} overlay={<Tooltip>GitHub repo</Tooltip>}>
                                          <img src="https://image.flaticon.com/icons/svg/25/25231.svg" alt="GitHub logo" style={{maxWidth:'11%', marginRight:'7px'}} />
                                        </OverlayTrigger>
                                    </a>
                                    <OverlayTrigger placement="bottom" delay={{ show: 90, hide: 90 }} overlay={<Tooltip>Java</Tooltip>}>
                                      <img src="data:image/png;base64,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" alt="Java logo" style={{maxWidth:'13%'}} />
                                    </OverlayTrigger>
                                    <OverlayTrigger placement="bottom" delay={{ show: 90, hide: 90 }} overlay={<Tooltip>Firebase</Tooltip>}>
                                      <img src="https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png" alt="Firebase logo" style={{maxWidth:'15%'}} />
                                    </OverlayTrigger>
                                </div>
                            </div>
                        </Collapse>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Projects;
