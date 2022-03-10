export const getCart = () => {
    return {
        type: 'cart/GET',
        payload: '',
    };
};

export const addToCart = (payload) => {
    return {
        type: 'cart/ADD',
        payload,
    };
};
