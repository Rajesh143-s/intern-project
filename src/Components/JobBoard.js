// src/components/JobBoard.js
import React, { useState, useEffect } from 'react';
import JobListing from './JobListing';
import axios from 'axios'
import Button from 'react-bootstrap/Button';

const JobBoard = () => {
    const [jobPostings, setJobPostings] = useState([]);
    const [page, setPage] = useState(1);

    const loadMore = () => {
        setPage(page + 1);
    };

    let fdata = async () => {
        let data = await axios.get("https://hacker-news.firebaseio.com/v0/jobstories.json")
        console.log(data.data)
        let dataa = data.data
        const jobIds = dataa.slice((page - 1) * 6, page * 6);
        console.log(jobIds)
        const promises = jobIds.map((id) =>
            fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then((response) => response.json()));

        Promise.all(promises).then((jobData) => {
            setJobPostings(jobData);
            console.log(jobData);
        });
    }
    useEffect(() => {
        fdata()
    }, [page]);

    return (
        <div className="job-board">
            {jobPostings.map((job) => (
                <JobListing key={job.id} job={job} />
            ))}
            <Button style={{"color":"white","backgroundColor":"orange","margin": "3rem"}} onClick={loadMore}>Load more jobs</Button>
        </div>
    );
};

export default JobBoard;