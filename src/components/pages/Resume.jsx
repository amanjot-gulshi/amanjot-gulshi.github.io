import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { softwareSkills, hardwareSkills } from "../../skills";
import workList from "../../work";
import SkillCard from "../cards/SkillCard";
import WorkCard from "../cards/WorkCard";

function Resume() {

    const [softSkills, setSoftSkills] = useState([]);
    const [hardSkills, setHardSkills] = useState([]);
    const [work, setWork] = useState([]);

    useEffect(() => {
        if (softwareSkills != null) {
            setSoftSkills(softwareSkills);
        }

        if (hardwareSkills != null) {
            setHardSkills(hardwareSkills);
        }

        if (workList != null) {
            setWork(workList);
        }

        // console.log(softSkills);
        // console.log(hardSkills);
        // console.log(work);
    }, [])

    return (
        <div className="resume">
            <h1 className="resume-title">Resume</h1>

            <Container className="skills-container">
                <h2>Skills</h2>
                <Row>
                    <Col>
                        <div className="software-skills">
                            <h4>Software</h4>
                            {softSkills.map((skill) => (
                                <SkillCard
                                    name={skill.name}
                                    experience={skill.experience}
                                />
                            ))}

                        </div>
                    </Col>
                    <Col>
                        <div className="hardware-skills">
                            <h4>Hardware</h4>
                            {hardSkills.map((skill) => (
                                <SkillCard
                                    name={skill.name}
                                    experience={skill.experience}
                                />
                            ))}

                        </div>
                    </Col>
                </Row>

            </Container>
            <hr />

            <div className="work-experience">
                <h2>Work</h2>
                {work.map((job) => (
                    <WorkCard
                        className="work"
                        title={job.title}
                        company={job.company}
                        date={job.date}
                        description={job.description}
                    />
                ))}
            </div>

            <div className="education">
                {/* <h2>Education</h2>
                <h4>University of Ontario Institute of Technology</h4>
                <h5>Bachelors of Engineering in Mechatronics</h5>
                <h6>2016 - 2022</h6> */}
                <img className="degree-image" src={require("../../images/degree.png")} alt="Engineering Degree"></img>
            </div>

        </div >
    )
}

export default Resume;