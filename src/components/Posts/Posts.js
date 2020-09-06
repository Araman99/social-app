import React from 'react';
import { Container, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom'

const Posts = (props) => {
    const {title, body, id} = props.post;
    const postStyle = { 
                        backgroundColor: '#cfe8fc', 
                        padding: '10px', 
                        border: '1px solid pink' , 
                        textAlign: "left", 
                        marginLeft: '100px', 
                        lineHeight: '5px'}
    return (
        <div>
            <Container fixed>
            <Typography component="div" style={postStyle} >
                <h3>{title}</h3>
                <h6>{body}</h6>
                <Link to={`/post/${id}`}>
                <Button variant= "contained" color="primary">See More</Button>
                </Link>
            </Typography>
            </Container>
        </div>
    );
};

export default Posts;