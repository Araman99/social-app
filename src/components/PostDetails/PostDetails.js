import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from '@material-ui/core';
import Comments from '../Comments/Comments';
import database from '../../database';
import ThumbUpRoundedIcon from '@material-ui/icons/ThumbUpRounded'
import ChatSharpIcon from '@material-ui/icons/ChatSharp';
import ShareRoundedIcon from '@material-ui/icons/ShareRounded';

const PostDetails = () => {
    const { id } = useParams();
    const [post, setPost] = useState({});

    useEffect(() => {
        const url =  `https://jsonplaceholder.typicode.com/posts/${id}`;
        fetch(url)
        .then((res)=> res.json())
        .then(data => { setPost(data);});
    }, [id]);


    const [comments, setComments] = useState([]);
    useEffect(() => {
        const commentUrl = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;
        fetch(commentUrl)
        .then(res => res.json())
        .then(data => {setComments(data);})
    },[id])

    const postStyle = { 
        backgroundColor: '#cfe8fc', 
        padding: '10px', 
        border: '1px solid pink' , 
        textAlign: "left", 
        marginLeft: '100px'}
    const socialIconStyle = {
        width: 500,
        display: "flex"
    }
    const displayStyle = { 
        display: "flex",
        width: "100%"
    }
    const iconName ={
        display: "flex",
        margin: "0 200px 0 10px "
    }

    return (
        <div>
            <Container style={{ backgroundColor: '#cfe8fc'}}>
                <div style={postStyle}>
                <h3>{post.title}</h3>
                <h2>{post.body}</h2>
                <div style={socialIconStyle}>
                <div style={displayStyle}>
            <ThumbUpRoundedIcon/>
            <b style={iconName}>Like</b>
          </div>
          <div style={displayStyle}>
            <ChatSharpIcon />
            <b style={iconName}>Comment</b>
          </div>
          <div style={displayStyle}>
            <ShareRoundedIcon/>
            <b style={iconName}>Share</b>
          </div>
                </div>
                </div>
                {comments.map(comment => {
                    const imgNo = Math.floor((Math.random() * 19) + 1);
        const image= database[imgNo];
        return (
          <Comments key={comment.id} comment={comment} id={imgNo} image={image}></Comments>
        );
      })}
                
            </Container>
        </div>
    );
};

export default PostDetails;