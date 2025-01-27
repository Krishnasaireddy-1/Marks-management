# Marks-management
<!DOCTYPE html>
<html>
<head>
    <title>Student Marks Management System</title>
</head>
<body>
    <h1>Student Marks Management System</h1>
    <p>This project demonstrates managing student data using API endpoints and a React-based frontend. It showcases the use of <strong>Axios</strong> for making HTTP requests and <strong>Express.js</strong> for creating a backend server.</p>

    <h2>API Endpoints</h2>

    <h3>1. Retrieve Student Data</h3>
    <ul>
        <li><strong>Endpoint:</strong> <code>GET /data/:id</code></li>
        <li><strong>Description:</strong> Retrieves the student details (name and marks) for a given student ID.</li>
        <li><strong>Request Parameters:</strong>
            <ul>
                <li><code>id</code>: The unique ID of the student.</li>
            </ul>
        </li>
        <li><strong>Response:</strong>
            <ul>
                <li><strong>Success (200):</strong>
                    <pre>
{
    "name": "Harsh",
    "marks": 95
}
                    </pre>
                </li>
                <li><strong>Failure (404):</strong>
                    <pre>
{
    "error": "Data not found for the given ID"
}
                    </pre>
                </li>
            </ul>
        </li>
    </ul>

    <h3>2. Add or Update Student Data</h3>
    <ul>
        <li><strong>Endpoint:</strong> <code>POST /data/:id</code></li>
        <li><strong>Description:</strong> Adds a new student or updates an existing student's data.</li>
        <li><strong>Request Parameters:</strong>
            <ul>
                <li><code>id</code>: The unique ID of the student.</li>
            </ul>
        </li>
        <li><strong>Request Body:</strong>
            <pre>
{
    "name": "Harshu",
    "marks": 85
}
            </pre>
        </li>
        <li><strong>Response:</strong>
            <ul>
                <li><strong>Success (200):</strong>
                    <pre>
{
    "message": "Data added/updated successfully"
}
                    </pre>
                </li>
                <li><strong>Failure (400):</strong>
                    <pre>
{
    "error": "Invalid input data"
}
                    </pre>
                </li>
            </ul>
        </li>
    </ul>

    <h2>Frontend Functionality</h2>
    <p>The frontend is built using React and allows the user to:</p>
    <ul>
        <li>Fetch student data by entering their ID and clicking the "Fetch Data" button.</li>
        <li>Add or update student data by providing their ID, name, and marks, and clicking the "Send Data" button.</li>
    </ul>

    <h2>Technologies Used</h2>
    <ul>
        <li><strong>Frontend:</strong> React, Axios</li>
        <li><strong>Backend:</strong> Express.js, Node.js</li>
        <li><strong>Data Storage:</strong> JSON file</li>
    </ul>

    <h2>How to Run the Project</h2>
    <ol>
        <li>Clone the repository.</li>
        <li>Install dependencies for both frontend and backend:
            <pre>
cd frontend
npm install

cd ../backend
npm install
            </pre>
        </li>
        <li>Start the backend server:
            <pre>
node server.js
            </pre>
        </li>
        <li>Start the frontend development server:
            <pre>
npm start
            </pre>
        </li>
    </ol>

    <h2>Project Demo</h2>
    <p>Below is a screenshot of the project:</p>
    <img src="image.png" alt="Project UI" width="600">

    <h2>License</h2>
    <p>This project is open-source and can be freely used and modified.</p>
</body>
</html>
