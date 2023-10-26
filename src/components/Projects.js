import { Col, Container, Row, Tab, Nav } from "react-bootstrap"
import { ProjectCard } from "./ProjectCard"
// import img from ".. assets/img/color-hsjj";

export const Projects = () => {
    const project = [
        // {
        //     title: "",
        //     description: "",
        //     imgUrl: ,
        // },
        // {
        //     title: "",
        //     description: "",
        //     imgUrl: ,
        // },
        // {
        //     title: "",
        //     description: "",
        //     imgUrl: ,
        // },
        // {
        //     title: "",
        //     description: "",
        //     imgUrl: ,
        // },
        // {
        //     title: "",
        //     description: "",
        //     imgUrl: ,
        // },
    ]
    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects </h2>
                        <p>Lorem Impsuom</p>
                        <Tab.Container id="project-tabs" defaultActiveKey="first">
                        <Nav variant="pills" defaultActiveKey="/home">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Tab 1</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Tab 2</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third" >
                                    Tab 3
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                        project.map((project, index) => {
                                            return(
                                                <ProjectCard
                                                key={index}
                                                {...project}
                                                />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                Lorem LoremIpsum
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                LoremIpsum
                            </Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>                   
                    </Col>
                </Row>
            </Container>
            {/* <img className="background-image-right" src={ img name} /> */}
        </section>

    )
}