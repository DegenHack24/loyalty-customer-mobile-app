// Example usage:
const apiEndpoint = 'https://jsonplaceholder.typicode.com/todos/1';

const getCoupons = async (): Promise<any> => {
  try {
    const response = await fetch(apiEndpoint);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // You might want to handle the error accordingly in your application
  }
};

const getShares = async (): Promise<any> => {
  try {
    const response = await fetch(apiEndpoint);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // You might want to handle the error accordingly in your application
  }
};


export {
    getCoupons
}



