# sweng861-capstone-nmk5457
Campus Ride is a full-stack, on-demand ride-hailing web application designed to provide safe transportation for university students. Students can request rides, while authorized campus drivers can accept requests and manage trips. The system will support driver matching, route calculation, trip-status tracking, and student ride quotas.

Author: Noah Kerch
Course: SWENG 861

## Technology Stack

### Frontend
- Angular
- TypeScript
- HTML
- CSS
- Node.js / npm

### Backend
- Java 21
- Spring Boot
- Spring Web
- Maven

### Planned Infrastructure and Integrations
- PostgreSQL
- PostGIS
- Google Maps API

## Running the Project Locally

The frontend and backend run separately during development. Both should be running at the same time when developing the full application.

### Start the Backend

Open a terminal from the repository root:

```powershell
cd backend
.\mvnw.cmd spring-boot:run
```

The Spring Boot backend will run at:

`http://localhost:8080`

The health endpoint can be tested at:

`http://localhost:8080/api/health`

A successful response will return:

`Campus Ride API is running`

### Start the Frontend

Open a second terminal from the repository root:

```powershell
cd frontend
npm install
npm start
```

`npm install` installs the required frontend dependencies. This is generally only required after initially cloning the repository or when dependencies change.

The Angular development server will run at:

`http://localhost:4200`

Open `http://localhost:4200` in a browser to view the application.
