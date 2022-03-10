import { Box, Button, Card, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';

const Header = () => {
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
                    <span> 8 itens</span>
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
    const items = [
        {
            name: 'Growcoin',
            value: '10,00',
            img: 'https://images.unsplash.com/photo-1586974710160-55f48f417990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29pbnxlbnwwfHwwfHw%3D&w=1000&q=80',
        },
        {
            name: 'Caneca',
            value: '10,00',
            img: 'https://socd.vteximg.com.br/arquivos/ids/172402-1310-1310/Caneca-Magica-para-Sublimacao.jpg?v=636523795113200000',
        },
        {
            name: 'Caramelo',
            value: '150,00',
            img: 'https://www.rbsdirect.com.br/imagesrc/25743537.jpg?w=700',
        },
        {
            name: 'Maizena',
            value: '10,00',
            img: 'https://www.maizena.com.br/sk-eu/content/dam/brands/maizena/brazil/52445116-maizena-1kg.png',
        },
        {
            name: 'Prantinha',
            value: '1,00',
            img: 'data:image/jpeg;base64,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',
        },
        {
            name: 'Epidrat',
            value: '60,00',
            img: 'https://araujo.vteximg.com.br/arquivos/ids/4138066-1000-1000/07891142200235.jpg',
        },
    ];

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
                        const toAddItem = [{ ...items[0] }];
                        toAddItem.name = 'new name #' + 0;
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
    const [items, setItems] = useState([
        {
            name: 'Growcoin',
            value: '10,00',
            img: 'https://images.unsplash.com/photo-1586974710160-55f48f417990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29pbnxlbnwwfHwwfHw%3D&w=1000&q=80',
        },
        { name: 'Caneca', value: '10,00', img: '' },
        { name: 'Certificado', value: '150,00', img: '' },
        { name: 'Maizena', value: '10,00', img: '' },
        { name: 'Boné', value: '10,00', img: '' },
        { name: 'Epidrat', value: '10,00', img: '' },
    ]);

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
                <Header itemCounter={items.length} />
                <MainContent items={items} />
            </Box>
        </React.Fragment>
    );
};
