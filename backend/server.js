const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Path to CSV file
const CSV_FILE = path.join(__dirname, '../leads.csv');

// Initialize CSV with headers if it doesn't exist
const initializeCSV = () => {
    if (!fs.existsSync(CSV_FILE)) {
        const headers = 'Timestamp,Name,Email,Domain,Description\n';
        fs.writeFileSync(CSV_FILE, headers);
        console.log('Created leads.csv with headers.');
    }
};

initializeCSV();

// Format CSV Field (handle commas/quotes)
const formatField = (field) => {
    if (!field) return '';
    const stringField = String(field).replace(/"/g, '""'); // Escape quotes
    return `"${stringField}"`;
};

// API Endpoint
app.post('/api/submit-inquiry', (req, res) => {
    const { name, email, domain, description } = req.body;

    if (!name || !email) {
        return res.status(400).json({ error: 'Name and Email are required.' });
    }

    const timestamp = new Date().toISOString();
    const row = [
        timestamp,
        formatField(name),
        formatField(email),
        formatField(domain),
        formatField(description)
    ].join(',') + '\n';

    fs.appendFile(CSV_FILE, row, (err) => {
        if (err) {
            console.error('Error writing to CSV:', err);
            return res.status(500).json({ error: 'Failed to save lead.' });
        }
        console.log('New lead saved:', email);
        res.json({ success: true, message: 'Lead saved successfully.' });
    });
});

app.listen(PORT, () => {
    console.log(`Bokle Operations Server running at http://localhost:${PORT}`);
    console.log(`Leads will be saved to: ${CSV_FILE}`);
});
