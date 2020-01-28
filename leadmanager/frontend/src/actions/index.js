export const increment = (num=1) => {
    return {
        type: "Increment", 
        payload: num
    };
};