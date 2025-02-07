# Park Management System (MERN Stack)

## Project Overview
The Park Management System is a full-stack web application developed using the **MERN (MongoDB, Express.js, React.js, Node.js) stack. This system is designed to streamline park-related operations, providing functionalities for both park visitors and administrators. It includes features such as ticket booking, animal adoption, and a virtual zoo experience.

## Features
- User Authentication: Secure sign-up and login for both users and administrators.
- Ticket Booking: Easy online ticket reservation system.
- Animal Adoption: Users can adopt animals directly through the platform.
- Virtual Zoo: Interactive virtual zoo experience for visitors.
- Admin Dashboard: Manage user details, tickets, and animal adoption reports.
- Real-Time Notifications: Announcements for park events and guidelines.

## Tech Stack
- Frontend: React.js, Bootstrap
- Backend: Node.js, Express.js
- Database: MongoDB
- Authentication: JSON Web Tokens (JWT)
- State Management: React hooks

## Folder Structure
...
park-management/
├── backend/
│   ├── server.js
│   ├── routes/
│   ├── models/
│   ├── controllers/
│   └── config/
└── frontend/
    ├── public/
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   ├── services/
    │   └── App.js
```

## Installation

### Prerequisites
Ensure you have the following installed:
- Node.js (v14+)
- MongoDB
- npm or yarn

### Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/park-management.git
   cd park-management
   ```
2. Install backend dependencies:
   ```bash
   cd backend
   npm install
   ```
3. Install frontend dependencies:
   ```bash
   cd ../frontend
   npm install
   ```
4. Configure Environment Variables: 
   Create a `.env` file in the `backend` directory and add the 
   following:
   ```env
   MONGO_URI=your-mongodb-uri
   JWT_SECRET=your-secret-key
   PORT=5000
   ```

## Running the Application
1. Start the backend server:
   ```bash
   cd backend
   npm start
   ```
2. Start the frontend development server:
   ```bash
   cd ../frontend
   npm start
   ```

## Usage
1. Open your browser and navigate to `http://localhost:3000`.
2. Register or log in to access park management features.

## API Endpoints
| Method | Endpoint         | Description                  |
|--------|------------------|------------------------------|
| GET    | /api/users       | Fetch all user details       |
| POST   | /api/register    | Register a new user          |
| POST   | /api/login       | Authenticate user            |
| POST   | /api/tickets     | Book a ticket                |
| POST   | /api/adopt       | Adopt an animal              |
| GET    | /api/tickets     | Fetch all ticket details     |

## Admin Features
- Manage Users: View and delete user details.
- Track Tickets: Monitor ticket bookings and their statuses.
- Animal Adoption: Keep track of adoption records.
- Update Animal Details: Manage animal entries for the zoo.

## Future Enhancements
- IoT Integration: Sensors to monitor park conditions and optimize resource allocation.
- Educational Programs: Interactive learning sessions for visitors.
- Enhanced Virtual Zoo: Augmented reality experiences.

## Contributing
Feel free to fork this repository and submit pull requests. Contributions are welcome!

## License
This project is licensed under the [MIT License](LICENSE).

## Acknowledgements
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [MongoDB Documentation](https://www.mongodb.com/docs/)
- [Express Documentation](https://expressjs.com/)
- [Bootstrap Documentation](https://getbootstrap.com/)

