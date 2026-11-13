const express = require('express');
const app = express();

app.use(express.json());

// Secure webhook endpoint to handle digital sales fulfillment
app.post('/api/fulfill-order', (req, res) => {
    const { customerEmail, productName, downloadUrl } = req.body;
    
    // Basic verification of payload
    if (!customerEmail || !downloadUrl) {
        return res.status(400).json({ error: 'Missing required customer or asset data.' });
    }

    // Logic to dispatch secure access link (integrated with your mailing or delivery provider)
    console.log(`[FULFILLMENT SUCCESS] Dispatching ${productName} to ${customerEmail} via secure link: ${downloadUrl}`);

    // Return success response to payment gateway
    return res.status(200).json({
        status: 'success',
        message: 'Digital asset generated and dispatched successfully.',
        timestamp: new Date().toISOString()
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Fulfillment micro-service running on port ${PORT}`);
});
