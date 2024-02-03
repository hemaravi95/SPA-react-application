import { Button, Col, Container, Row } from "react-bootstrap";
import data from "../src/data.json"
import Form from 'react-bootstrap/Form';
import TopNav from "./TopNav";

function Home() {

    return (
        <>
            <TopNav />
            <Container>
                <b>Filters</b>
                <Row>
                    <Col lg={6} md={6}>
                        <div className="label-float">
                            <p>Location</p>
                            <select>
                                {
                                    data.location.map((location) => (
                                        <option value={location.id}>
                                            {location.name}
                                        </option>
                                    ))
                                }
                            </select>
                        </div>
                    </Col>
                    <Col lg={6} md={6}>
                        <div className="label-float">
                            <p>Body Type</p>
                            <select>
                                {
                                    data.bodyType.map((bodyType) => (
                                        <option value={bodyType.id}>
                                            {bodyType.name}
                                        </option>
                                    ))
                                }
                            </select>
                        </div>
                    </Col>
                    <Col lg={6} md={6} className="mt-4">
                        <div><strong>Brand</strong></div>
                        <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                            {data.brand.map((brand) => (
                                <li key={brand.id}>
                                    <Form.Check
                                        inline
                                        label={brand.name}
                                        name="brand"
                                        type="checkbox"
                                        id={`brand-${brand.id}`}
                                    />
                                </li>
                            ))}
                        </ul>
                    </Col>
                    <Col lg={6} md={6} className="mt-4">
                        <div><strong>Owners</strong></div>
                        <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                            {data.owners.map((owners) => (
                                <li key={owners.id}>
                                    <Form.Check
                                        inline
                                        label={owners.name}
                                        name="owners"
                                        type="radio"
                                        id={`owners-${owners.id}`}
                                    />
                                </li>
                            ))}
                        </ul>
                    </Col>
                    <Col lg={6} md={6} className="mt-4">
                        <div><strong>Budget</strong></div>
                        <div className="chips-group">
                            {data.owners.map((owners) => (
                                <div className="single-chip"  >
                                    <label htmlFor="chip">
                                        <input type="checkbox" name="filter" id="chip" value={owners.id} />
                                        <span className="chipBody">{owners.name}</span>
                                    </label>
                                </div>
                            ))}
                        </div>
                    </Col>
                    <Col lg={6} md={6} className="mt-4">
                        <div><strong>Fuel Type</strong></div>
                        <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                            {data.fuelType.map((fuelType) => (
                                <li key={fuelType.id}>
                                    <Form.Check
                                        inline
                                        label={fuelType.name}
                                        name="fuelType"
                                        type="radio"
                                        id={`fuelType-${fuelType.id}`}
                                    />
                                </li>
                            ))}
                        </ul>
                    </Col>
                    <Col lg={6} md={6} className="mt-4">
                        <div><strong>Transmission</strong></div>
                        <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                            {data.transmission.map((transmission) => (
                                <li key={transmission.id}>
                                    <Form.Check
                                        inline
                                        label={transmission.name}
                                        name="transmission"
                                        type="radio"
                                        id={`transmission-${transmission.id}`}
                                    />
                                </li>
                            ))}
                        </ul>
                    </Col>
                </Row>
                <Button className='button_submit mt-5' >Submit</Button>
            </Container >
            <b>Result Details</b>
        </>
    )
}

export default Home;