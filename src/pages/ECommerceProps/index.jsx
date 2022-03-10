import { Box, Button, Card, Container, Grid } from '@mui/material';
import React, { useState } from 'react';

const Header = ({ itemCounter }) => {
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
                    <span> {itemCounter} itens</span>
                </Grid>
            </Grid>
        </Container>
    );
};

const MainContent = ({ items, setItems }) => {
    return (
        <Container maxWidth="" sx={{ marginTop: '30px' }}>
            <Grid container direction={'column'}>
                <Grid item>
                    <ItemWrapper items={items} setItems={setItems} />
                </Grid>
                <Grid item>
                    <p>Carrinho tem {items.length} itens!</p>
                    <Button variant="contained">Comprar</Button>
                </Grid>
            </Grid>
        </Container>
    );
};

const ItemWrapper = ({ items, setItems }) => {
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
                        setItems([...items, toAddItem]);
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
                    <p>{img}</p>
                    <p>{name}</p>
                    <p>{value}</p>
                </Grid>
            </Card>
        </Grid>
    );
};

export const ECommercePageProps = () => {
    const [items, setItems] = useState([
        { name: 'Growcoin', value: '10,00', img: '' },
        { name: 'Caneca', value: '10,00', img: '' },
        { name: 'Certificado', value: '150,00', img: '' },
        { name: 'Maizena', value: '10,00', img: '' },
        { name: 'Boné', value: '10,00', img: '' },
        { name: 'Epidrat', value: '10,00', img: '' },
    ]);

    console.log('teste');
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
                <MainContent items={items} setItems={setItems} />
            </Box>
        </React.Fragment>
    );
};
