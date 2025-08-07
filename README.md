# Giphy App

A React application that allows users to view, lock, and refresh GIFs from the Giphy API.

---

## Features

-   **Fetch new GIFs** by pressing SPACE or clicking the Refresh button
-   **Lock/unlock GIFs** by clicking on them
-   **Locked GIFs remain in place** and are unaffected by new fetches
-   **Persist locked GIFs** across sessions using `localStorage`
-   **Sort GIFs** by the `import_datetime` parameter
-   **Mobile-friendly** and responsive design
-   **Global state management** using React Context API

---

## 🛠️ Tech Stack

-   React
-   SCSS
-   JavaScript ES6+
-   Giphy API
-   Context API (`createContext`, `useContext`)
-   localStorage

---

## 📁 Project Structure

```
src/
├── assets/
│   └── Refresh.svg
├── components/
│   ├── App/
│   ├── GifCard/
│   └── RefreshButton/
├── context/
│   ├── LockedGifsProvider.jsx
│   ├── LockedGifsContext.jsx
│   └── useLockedGifs.jsx
├── hooks/
│   └── useFetchGifs.jsx
├── scss/
│   ├── abstracts/
│   ├── base/
│   ├── utils/
│   └── main.scss
└── main.jsx
```

---

## Getting Started

1. **Clone the repository**

```bash
git clone https://github.com/EivydasLeo/giphy-app
cd giphy-app
```

2. **Install dependencies**

```bash
npm install
```

1. **Add your key to `.env` file**

```
VITE_GIPHY_API_KEY=YOUR_GIPHY_API_KEY
```

Get your API key from [Giphy Developers](https://developers.giphy.com/dashboard/).

4. **Run the project**

```bash
npm run dev
```
