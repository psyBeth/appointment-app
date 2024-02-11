import Container from "react-bootstrap/Container"
import {doctorData} from "../helper/data"
import { Col } from "react-bootstrap"
import { Row } from "react-bootstrap"

const Doctors = () => {
  return (
    <Container className="p-2">
      <h3 className="display-6 mb-3" style={{ color: "rgb(166, 18, 189)" }}>
        Our Doctors
      </h3>
      <Row>
        {doctorData.map(({id, img, dep, name}) => (
          <Col>
          <img src={img} alt={name} />
          <h5>{name}</h5>
          <h6>{dep}</h6>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Doctors