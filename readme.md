# Solar Web Project

This project is a full-stack web application structured into a frontend and backend. It's designed to be deployed on [Vercel](https://vercel.com/), which hosts both static sites and serverless backend functions.

---

## 🌐 Project Structure

```
solar/
├── backend/               # Node.js backend (Express.js likely)
│   └── package.json
├── frontend/              # Static frontend files
│   └── index.html
├── vercel.json            # Vercel deployment configuration
├── .git/                  # Git repository data
└── .gitignore
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [Vercel CLI](https://vercel.com/docs/cli) *(for deployment)*

---

## 📦 Backend Setup

```bash
cd backend
npm install
```

To run the backend locally:

```bash
node index.js
# or
npm start
```

> Replace `index.js` with the correct entry file if different.

---

## 🌍 Frontend Setup

The frontend is a static HTML page. You can view it by simply opening:

```bash
frontend/index.html
```

Or serve it locally with any static server:

```bash
npm install -g serve
serve frontend/
```

---

## ☁️ Deployment

This project uses [Vercel](https://vercel.com/) for deployment. The configuration is handled in `vercel.json`.

To deploy:

```bash
vercel
```

Make sure you are logged in to Vercel CLI:

```bash
vercel login
```

---

## 📁 Key Files

- **vercel.json**: Configures routing and deployment settings for Vercel.
- **backend/package.json**: Declares dependencies and scripts for the backend.
- **frontend/index.html**: Main frontend entry point.
- **.gitignore**: Lists files and folders ignored by Git.

---

## ⚙️ Customization

- Update the frontend HTML/CSS/JS in `frontend/`.
- Modify backend routes and logic in `backend/`.

---

## 📝 License

This project is under your preferred license.

---

## 👨‍💻 Author

Developed by [TUSHAL JOSHI or SEJAL CHOUkSEY].

---

## 📬 Contact

For questions or feedback, reach out to: `joshitushal1gmail.com`
