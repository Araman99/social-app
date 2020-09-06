import React from 'react';
import { Card, CardContent } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
    imgStyle:{
        height:"50px",
        width: "50px",
        borderRadius:"50%",
        marginRight:"10px"
    },
    
    commentArea:{
        marginLeft:"100px"

    },

    comment:{
        display:"flex",
        alignItems:"right",
        color:"blue"
    },

    container:{
        display:"flex",
        width:"100%",
        justifyContent:"space-between",
        
        
    }
  });

const Comments = (props) => {
    const classes = useStyles();
    const { name }= props.comment;
    const { img } = props.image;
    console.log(props.id);
    return (
        <div className={classes.commentArea}>
            <Card className={classes.container}>
                <CardContent>
                <div className={classes.comment}>
                    <img className={classes.imgStyle} src={img} alt=""/>
                    <p>{name}</p>
                </div>        
                </CardContent>
            </Card>          
        </div>
    );
};

export default Comments;