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
                                      <img src="https://qph.fs.quoracdn.net/main-qimg-48b7a3d8958565e7aa3ad4dbf2312770.webp" alt="Java logo" style={{maxWidth:'15%'}} />
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
                                      <img src="https://qph.fs.quoracdn.net/main-qimg-48b7a3d8958565e7aa3ad4dbf2312770.webp" alt="Java logo" style={{maxWidth:'15%'}} />
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
