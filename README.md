# UniLink

UniLink is a **learning-first Next.js project** built to explore modern React app architecture, routing, and component-based UI — without backend complexity.

This project intentionally starts with **mock data only**. No Firebase, no database, no auth (for now). The goal is to deeply understand **Next.js fundamentals** before adding real infrastructure.

---

## 🎯 Project Philosophy

* Learn **Next.js App Router** by doing
* Keep TypeScript **simple and readable**
* Avoid premature optimization and over-engineering
* Use AI (GitHub Copilot) as a **mentor**, not an autopilot
* Ship small, understand deeply

For full project context, scope, and constraints, see **`PROJECT.md`**.

---

## 🧩 Current Scope (v1)

* University list (mock data)
* University detail pages via routing
* Student profiles (mock data)
* Intent-based filtering (study / social / both)
* Clean, component-based UI

**Out of scope (intentionally):**

* Authentication
* Database / Firebase
* Realtime features
* Deployment concerns

---

## 🚀 Getting Started

First, install dependencies and run the development server:

```bash
npm install
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

You can start editing the app by modifying:

```
app/page.tsx
```

The page auto-updates as you edit.

---

## 🛠 Tech Stack

* **Next.js (App Router)**
* **React**
* **TypeScript** (basic usage only)
* **Mock data (local files)**

No backend. No external services.

---

## 📚 Learning Resources

* [Next.js Documentation](https://nextjs.org/docs)
* [Learn Next.js](https://nextjs.org/learn)
* [Next.js GitHub Repository](https://github.com/vercel/next.js)

---

## 🔮 Future Plans (Post-v1)

* Replace mock data with a real backend (Firebase or alternative)
* Add authentication
* Introduce realtime features (Freedom Wall / Chat)
* Evaluate scalability and architecture changes

These are **deliberately postponed** until the Next.js fundamentals are solid.

---

## 🧠 Note to Future Me

If this starts feeling "too simple" — that’s the point.
Master the basics first. Complexity can wait.
