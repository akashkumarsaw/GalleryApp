import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import itemData from './itemData';
import Image from 'next/image';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 100,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    button: {
        height:3,
        width:5,
        float:'right',
        margin: theme.spacing(1),
      },
    imageList: {
        width: 500,
        height: 450,
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
}));


const ImageGallery = () => {

    const [status, setStatus] = useState(itemData);
    const classes = useStyles();

    useEffect(() => {
        console.log('you liked or disliked')
      },[status]);

    return (
        <div className={classes.root}>
            <ImageList rowHeight={180} className={classes.imageList}>

                {itemData.map((item) => (
                    <ImageListItem key={item.title}>
                        <Image src={item.img} alt={item.title} />
                        <ImageListItemBar
                            title={item.title}
                            subtitle={<span >by: {item.author}</span>}
                            actionIcon={
                                <>
                                <Button
                                    
                                    variant="contained"
                                    color="secondary"
                                    className={classes.button}
                                    startIcon={<ThumbUpIcon />}
                                    onClick={(item) => { setStatus({...status}); item.like='Liked'}}
                                >
                                    {item.like}
                                </Button>
                                <Button
                                variant="contained"
                                color="secondary"
                                className={classes.button}
                                startIcon={<ThumbDownIcon />}
                                onClick={(item) => { setStatus({...status}); item.dislike='Disliked'}}
                            >
                                {item.dislike}
                            </Button>
                                </>
                            }
                            
                                
                                
                                
                            
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </div>
    );
}

export default ImageGallery;