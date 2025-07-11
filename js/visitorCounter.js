document.addEventListener('DOMContentLoaded', () => {
    const visitorCountElement = document.getElementById('visitor-count');
    const functionApiUrl = 'https://crc-api-01-function.azurewebsites.net/api/visitorCount?';

    // Ensure the visitor count element exists before proceeding
    if (!visitorCountElement) {
        console.error('Error: Element with ID "visitor-count" was not found in the DOM.');
        return;
    }

    // Define the function to fetch and display the visitor count
    const getVisitorCount = async () => {
        try {
            // Fetch the data from the Azure Function endpoint
            const response = await fetch(functionApiUrl);

            // Check if the network response is successful
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.statusText}`);
            }

            // Get the visitor count as plain text from the response
            const count = await response.text();

            // Update the element with the retrieved count
            visitorCountElement.innerText = count;

        } catch (error) {
            // Log any errors to the console and display an error message
            console.error('Failed to fetch visitor count:', error);
            visitorCountElement.innerText = 'Failed to load';
        }
    };

    // Call the function to run it
    getVisitorCount();
});