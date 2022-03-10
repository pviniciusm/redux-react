import { Container, Grid, Typography, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useRef } from 'react';

export const MainLayout = ({ children }) => {
    const emojis = ['&#128543;', '&#129299;'];
    const emoji = useRef(emojis[1]);
    const emojiRef = useRef(0);

    const handleEmojiClick = () => {
        emoji.current = emoji.current == emojis[0] ? emojis[1] : emojis[0];
        emojiRef.current.innerHTML = emoji.current;
    };

    useEffect(() => {
        handleEmojiClick();
    }, []);

    return (
        <React.Fragment>
            <Container
                maxWidth=""
                sx={{
                    backgroundColor: '#1479bd',
                    padding: '20px 10px',
                }}
            >
                <Container maxWidth="md">
                    <Grid
                        container
                        sx={{
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}
                    >
                        <Grid item>
                            <Typography
                                variant="title"
                                onClick={handleEmojiClick}
                            >
                                <span ref={emojiRef}></span> Redux!
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1">
                                React - Growdev
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Container>

            <Container maxWidth="md">
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        marginTop: '20px',
                    }}
                >
                    {children}
                </Box>
            </Container>
        </React.Fragment>
    );
};
