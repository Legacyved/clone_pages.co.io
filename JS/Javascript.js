import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import './ServicesBanner.scss'
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade'; 

class ServicesBanner extends Component {
  constructor(props) {
    super(props)
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);

  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    const servicesItem = [
      {
        id: 1,
        // imgAsset: "/h1.jpeg",
        imgAsset: "/rp2.jpg",
        serviceH2: "AI + RPA is what we do",
        serviceH3: "Future-Proof your business. Drive efficiency, profitability and deliver on customer experience",
        link: "/services/AIandRPAautomation",
        linkText:"AI + RPA Automation"
      },
      {
        id : 2,
        imgAsset: "/p1.png",
        serviceH2: "Make Bolder Choices",
        serviceH3: "Digital focused strategies to realize market-changing ideas",
        link: "/services/enterprise-apps",
        linkText:"Build Better Apps"
    },
    {
      id: 3,
      imgAsset: "/p2.jpg",
      serviceH2: "Innovate with Speed",
      serviceH3: "Create higher quality software, deliver on customer expectations and business goals",
      link: "/services/delivery-pipeline-automation",
      linkText:"DevOps"
  },
  {
    id: 4,
    imgAsset: "/p3.jpg",
    serviceH2: "Embrace Cloud",
    serviceH3: "With Cloud-First accelerate innovation and optimize performance",
    link: "/services/cloud",
    linkText:"Cloud Services"
  },

    ]

    return (
      <div className="servicesMainDiv">
        {
          this.state.width > 756 &&
          servicesItem.map((service)=>{
            return(
              <Fade bottom>
              <Row>
                <Col md={6}>
                  <div className="servicesDescription">
                    <div className="servicesH2">
                      <h2>{service.serviceH2}</h2>
                    </div>
                    <div className="servicesH3">
    
                      <h3>{service.serviceH3}</h3>
                    </div>
                    <div className="servicesP">
                      <a href={service.link}>
                      <p>{service.linkText}</p>
                        <img src="/Arrow-black.svg" alt="arrow-black" />
                        </a>
                    </div>
                  </div>
                </Col>
                <Col md={6}>
                  <img className="serviceImage" src={service.imgAsset} alt="servicesimage" />
                </Col>
              </Row>
            </Fade>
            )
          })
         
        }
        {
          this.state.width <= 756 &&
          servicesItem.map((service) =>{
            return(
              <Fade bottom>
              <Row>
                <div className="servicesDescription-b">
                  <div className="servicesH2-b">
                    <h2>{service.serviceH2}</h2>
                  </div>
                  <div className="servicesImageDiv">
                    <img className="serviceImage-b" src={service.imgAsset} alt="servicesimage" />
                  </div>
                  <div className="servicesH3-b">
                    <h3>{service.serviceH3}</h3>
                  </div>
                  <div className="servicesP-b">
                    
                    <a href={service.link}>
                    <p>{service.linkText}</p>
                      <img src="/Arrow-black.svg" alt="arrow-black" />
                      </a>
                  </div>
                </div>
              </Row>
            </Fade>
            )
          })
         
        }
      </div>

    )
  }
}

export default ServicesBanner;