// Example usage:

const signature =
    "eyJjb3Vwb25JZCI6MSwibWVzc2FnZSI6IjEiLCJzaWduYXR1cmUiOiIweDQwYjExYTU0NGE1OTQwYzlkYmQwMjVhNTFkYWUyNzA5ZWJlZjZmM2I4OWQzYjRjM2JhZWE0ZmQzMjQwMmI1ZmI0MGUyZTYxOTQ5NjIwNDQ1NGQ3ZDFlZWFhMDE5NDA1OWY3NWIwNDdmY2Y1Mjg4MjhhZTE2OTlkZTlmMWE0YzQ0MWIifQ==";
const apiEndpointCoupons = "http://172.20.10.7:3000/coupon";
const apiEndpointShares = `http://172.20.10.7:3000/discount/${signature}`;

const getCoupons = async (): Promise<any> => {
    try {
        const response = await fetch(apiEndpointCoupons);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error; // You might want to handle the error accordingly in your application
    }
};

const getShares = async (): Promise<any> => {
    try {
        const response = await fetch(apiEndpointShares);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error; // You might want to handle the error accordingly in your application
    }
};

export {getCoupons, getShares};
