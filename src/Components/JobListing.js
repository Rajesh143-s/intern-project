// src/components/JobListing.js
import React from 'react';
import Card from 'react-bootstrap/Card';

const JobListing = ({ job }) => {
    return (
        <div className="job-listing">
            <Card className="text-center">
                <Card.Header>
                    <a href={job.url} target="_blank" rel="noopener noreferrer">
                {job.title}
            </a></Card.Header>
                <Card.Body>
                    <Card.Title>by {job.by}</Card.Title>
                    <Card.Text>
                    Posted on {new Date(job.time ).toLocaleString()}  
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default JobListing;