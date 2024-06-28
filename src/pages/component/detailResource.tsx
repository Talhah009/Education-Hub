import React from 'react';
import { Card, CardContent, Typography, IconButton, CardActions } from '@mui/material';
import { Favorite as FavoriteIcon } from '@mui/icons-material';

interface CardProps {
    title: string;
    subtitle: string;
    description: string;
    isFavorite: boolean;
    fileUrl?: string;
}

const CustomCard: React.FC<CardProps> = ({ title, subtitle, description, isFavorite, fileUrl }) => {
    return (
        <Card>
            <CardContent>
                <Typography variant="h5" component="div">
                    {title}
                </Typography>
                <Typography color="text.secondary">
                    {subtitle}
                </Typography>
                <Typography variant="body2">
                    {description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                {fileUrl && (
                    <Typography variant="caption">
                        File available: <a href={fileUrl}>Download</a>
                    </Typography>
                )}
                <IconButton aria-label="add to favorites">
                    {isFavorite ? <FavoriteIcon color="error" /> : <FavoriteIcon />}
                </IconButton>
            </CardActions>
        </Card>
    );
}

export default CustomCard;
