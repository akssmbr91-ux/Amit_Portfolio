# Amit Kumar Portfolio

React frontend + Node.js/Express backend portfolio based on Amit Kumar's resume.

## Folder Structure

- `client` - React + Vite frontend
- `server` - Node.js + Express backend

## Run Frontend

```bash
cd client
npm install
npm run dev
```

Frontend: http://localhost:5173

## Run Backend

```bash
cd server
npm install
npm start
```

Backend: http://localhost:5000

Contact API:
POST http://localhost:5000/api/contact

Example JSON:
{
  "name": "Recruiter",
  "email": "recruiter@example.com",
  "message": "Let's connect."
}

## Notes

Replace the placeholder LinkedIn and GitHub links in `client/src/App.jsx` with the real profile URLs.
