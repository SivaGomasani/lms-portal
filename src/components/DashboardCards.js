import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Bar, Line, Doughnut, Pie } from 'react-chartjs-2';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaQuestionCircle, FaTasks, FaClipboardList, FaChartLine } from 'react-icons/fa';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
        {
            label: 'Questions Solved',
            data: [10, 20, 30, 40, 50, 60],
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
        },
    ],
};

const pieData = {
    labels: ['Solved', 'Unsolved'],
    datasets: [
        {
            data: [30, 70],
            backgroundColor: ['#28a745', '#ffc107'],
        },
    ],
};

const pieData2 = {
    labels: ['Solved', 'Unsolved'],
    datasets: [
        {
            data: [40, 60],
            backgroundColor: ['#28a745', '#dc3545'],
        },
    ],
};

const lineData = {
    labels: ['', 'Assessment 1', 'Assessment 2', 'Assessment 3', 'Assessment 4'],
    datasets: [
        {
            label: 'Average Assessment Marks',
            data: [0, 50, 30, 60, 70],
            fill: false,
            backgroundColor: 'rgba(40, 167, 69, 1)',
            borderColor: 'rgba(40, 167, 69, 0.8)',
        },
    ],
};

function DashboardCards() {
    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,  // Ensures it doesn't scale based on container size
    };

    const chartContainerStyle = {
        position: 'relative',
        width: '100%',
        maxHeight: '300px',  // Limits height across all screen sizes
        margin: '0 auto',
    };

    return (
        <Container className="mt-5">
            <h2 className="text-center mb-4">Dashboard Overview</h2>
            <Row className="g-4">
                <Col md={6} xs={12}>
                    <Card className="h-100 shadow-sm border-primary">
                        <Card.Header className="bg-primary text-white text-center">
                            <FaQuestionCircle size={25} className="me-2" />
                            Package Questions
                        </Card.Header>
                        <Card.Body>
                            <p className="text-muted">
                                Track your monthly progress in solving practice questions. Each bar represents the total questions solved each month.
                            </p>
                            <div style={chartContainerStyle}>
                                <Bar data={data} options={chartOptions} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6} xs={12}>
                    <Card className="h-100 shadow-sm border-info">
                        <Card.Header className="bg-info text-white text-center">
                            <FaChartLine size={25} className="me-2" />
                            Average Marks
                        </Card.Header>
                        <Card.Body>
                            <p className="text-muted">
                                Visualize your average scores over recent assessments to monitor improvement and identify areas for focus.
                            </p>
                            <div style={chartContainerStyle}>
                                <Line data={lineData} options={chartOptions} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6} xs={12}>
                    <Card className="h-100 shadow-sm border-success">
                        <Card.Header className="bg-success text-white text-center">
                            <FaTasks size={25} className="me-2" />
                            Assessments Solved
                        </Card.Header>
                        <Card.Body>
                            <p className="text-muted">
                                This pie chart shows your overall progress in assessments, highlighting solved and unsolved sections.
                            </p>
                            <div style={chartContainerStyle}>
                                <Pie data={pieData} options={chartOptions} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6} xs={12}>
                    <Card className="h-100 shadow-sm border-danger">
                        <Card.Header className="bg-danger text-white text-center">
                            <FaClipboardList size={25} className="me-2" />
                            Tasks
                        </Card.Header>
                        <Card.Body>
                            <p className="text-muted">
                                Track completed and pending tasks with this breakdown, helping you stay organized and on top of your workload.
                            </p>
                            <div style={chartContainerStyle}>
                                <Doughnut data={pieData2} options={chartOptions} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default DashboardCards;
