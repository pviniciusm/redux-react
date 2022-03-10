import { Box, Button, Card, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/modules/cart/actions';

const Header = () => {
    const items = useSelector((state) => state.cart);

    return (
        <Container
            maxWidth=""
            sx={{
                backgroundColor: '#3fa',
                padding: '10px 15px',
            }}
        >
            <Grid container justifyContent={'space-between'}>
                <Grid item>E-Commerce</Grid>
                <Grid item>
                    <span>Carrinho -</span>
                    <span> {items.length} itens</span>
                </Grid>
            </Grid>
        </Container>
    );
};

const MainContent = () => {
    return (
        <Container maxWidth="" sx={{ marginTop: '30px' }}>
            <Grid container direction={'column'}>
                <Grid item>
                    <ItemWrapper />
                </Grid>
                <Grid item>
                    <p>Carrinho tem 10 itens!</p>
                    <Button variant="contained">Comprar</Button>
                </Grid>
            </Grid>
        </Container>
    );
};

const ItemWrapper = () => {
    const items = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    return (
        <React.Fragment>
            <Grid container spacing={3} sx={{ marginBottom: '20px ' }}>
                {items.map((item, index) => (
                    <Item
                        name={item.name}
                        value={item.value}
                        img={item.img}
                        config={{
                            xs: 4,
                        }}
                        key={`commerce-item-${index}`}
                    />
                ))}
                <Button
                    onClick={() => {
                        const toAddItem = { ...items[0] };
                        toAddItem.name = 'new name #' + 0;

                        dispatch(addToCart(toAddItem));
                    }}
                >
                    Add to cart
                </Button>
            </Grid>
        </React.Fragment>
    );
};

const Item = ({ config, name, value, img }) => {
    return (
        <Grid item {...config}>
            <Card
                elevation={3}
                sx={{
                    padding: '10px 20px',
                }}
            >
                <Grid container direction={'column'} alignItems={'center'}>
                    <img src={img} alt="teste" height={100} />
                    <Typography variant="button">{name}</Typography>
                    <Typography variant="caption">R$ {value}</Typography>
                </Grid>
            </Card>
        </Grid>
    );
};

export const ECommercePage = () => {
    return (
        <React.Fragment>
            <Box
                sx={{
                    padding: '10px 20px',
                    border: '1px solid #555',
                    borderRadius: '6px',
                    width: '100%',
                }}
            >
                <Header />
                <MainContent />
            </Box>
        </React.Fragment>
    );
};
