import { createContext, useEffect, useState } from 'react';
import './App.css';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import ms from '../src/assets/MS.png'
import hy from '../src/assets/hy.png'
import re from '../src/assets/re.jpg'
import hd from '../src/assets/hd.png'
import TopNav from './TopNav';

interface FormData {
    model: string;
    location: string;
    color: string;
    numberOfOwners: string;
    yearOfManufacture: string;
    transmission: string;
    insuranceValidUpto: string;
    externalFitments: string;
    kms: string;
}

function App() {

    const MyContext = createContext<FormData | null>(null)

    const [currentPage, setCurrentPage] = useState('logo');
    const [selectedCar, setSelectedCar] = useState('');
    const [formData, setFormData] = useState({
        model: '',
        location: '',
        color: '',
        numberOfOwners: '',
        yearOfManufacture: '',
        transmission: '',
        insuranceValidUpto: '',
        externalFitments: '',
        kms: '',
    });
    const [submissions, setSubmissions] = useState<FormData[]>([]);

    //selectedCar value
    useEffect(() => {
        if (selectedCar) {
            setFormData(prevState => ({
                ...prevState,
                model: selectedCar,
            }));
        }
    }, [selectedCar]);

    //input change
    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    //submit
    const handleSubmit = () => {
        setSubmissions(prevSubmissions => [...prevSubmissions, formData]);
        setFormData({
            model: selectedCar,
            location: '',
            color: '',
            numberOfOwners: '',
            yearOfManufacture: '',
            transmission: '',
            insuranceValidUpto: '',
            externalFitments: '',
            kms: '',
        });
    };

    //input label
    const formatLabel = (label: any) => {
        return label
            .replace(/([A-Z])/g, ' $1')
            .replace(/_/g, ' ')
            .replace(/^./, (str: any) => str.toUpperCase());
    };

    //logo onclick
    const handleClick = (carName: any) => {
        setSelectedCar(carName);
    };

    return (
        <>
            <TopNav />
            {/* logo container */}
            <Container className="mt-3">
                {currentPage === 'logo' &&
                    <Container className='card_body'>
                        <Row className='mt-3 mb-3' style={{ paddingTop: '10px' }}>
                            <Col lg={2} md={2}>
                                <Card className='card_des' onClick={() => handleClick('Maruti')}>
                                    <img src={ms} />
                                </Card>
                            </Col>
                            <Col lg={2} md={2}>
                                <Card className='card_des' onClick={() => handleClick('Hyundai')}>
                                    <img src={hy} />
                                </Card>
                            </Col>
                            <Col lg={2} md={2}>
                                <Card className='card_des' onClick={() => handleClick('Renault')}>
                                    <img src={re} style={{ height: '75px' }} />
                                </Card>
                            </Col>
                            <Col lg={2} md={2}>
                                <Card className='card_des' onClick={() => handleClick('Honda')}>
                                    <img src={hd} />
                                </Card>
                            </Col>
                            <Col lg={2} md={2}>
                                <Card className='card_des'>
                                    <img src={ms} />
                                </Card>
                            </Col>
                            <Col lg={2} md={2}>
                                <Card className='card_des'>
                                    <img src={ms} />
                                </Card>
                            </Col>
                            <Col lg={2} md={2} className='mt-3'>
                                <Card className='card_des'>
                                    <img src={hy} />
                                </Card>
                            </Col>
                            <Col lg={2} md={2} className='mt-3'>
                                <Card className='card_des'>
                                    <img src={ms} />
                                </Card>
                            </Col>
                            <Col lg={2} md={2} className='mt-3'>
                                <Card className='card_des'>
                                    <img src={hy} />
                                </Card>
                            </Col>
                            <Col lg={2} md={2} className='mt-3'>
                                <Card className='card_des'>
                                    <img src={ms} />
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                }
            </Container>
            {selectedCar &&
                <Container >
                    <Row>
                        {Object.entries(formData).map(([key, value]) => (
                            <>
                                <Col lg={6} md={6}>
                                    <div className="label-float">
                                        <input
                                            type="text"
                                            placeholder=" "
                                            name={key}
                                            value={value}
                                            onChange={handleInputChange}
                                        />
                                        <label>{formatLabel(key)}</label>
                                    </div>
                                </Col>
                            </>
                        ))}
                        <Col lg={6} md={6}>
                            <div className="label-float">
                                <input
                                    type="file"
                                    placeholder=" "
                                />
                                <label>Photo</label>
                            </div>
                        </Col>
                    </Row>
                    <Button className='button_submit mt-5' onClick={handleSubmit}>Submit</Button>
                </Container >
            }
            {/* submitted data */}
            {submissions.length > 0 &&
                <Container className="mt-4">
                    <Row>
                        <Col>
                            <h3>Submissions</h3>
                            <pre style={{ backgroundColor: "#f8f9fa", padding: "15px", borderRadius: "5px" }}>
                                {JSON.stringify(submissions, null, 2)}
                            </pre>
                        </Col>
                    </Row>
                </Container>
            }
        </>
    );
}

export default App;