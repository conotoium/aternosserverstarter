const axios = require('axios');

async function turnOnAternosServer() {
  try {
    // Replace with actual API endpoint and parameters
    const response = await axios.post('https://aternos.org/api/server/start', {
      apiKey: 'YOUR_API_KEY', // replace with your API key
    });
    console.log('Aternos server response:', response.data);
  } catch (error) {
    console.error('Error turning on Aternos server:', error);
  }
}

// Run the function
turnOnAternosServer();
