# 🚀 UniLink v1.5 — Auth + Persistence Learning Phase

> **Purpose:**
> UniLink v1.5 introduces the **first real backend layer** while preserving the project’s learning-first philosophy.
> The goal is to learn how frontend apps connect to real data — not to build a production social network.

---

## 🧠 Primary Goals (v1.5)

* Learn Firebase Authentication basics
* Connect frontend UI to persistent data
* Understand client ↔ backend data flow
* Practice safe incremental architecture
* Keep complexity controlled and intentional

---

## 🎯 Non-Goals (Still Out of Scope)

* ❌ Full social system
* ❌ Messaging/chat
* ❌ Complex moderation
* ❌ Payments/monetization
* ❌ Enterprise architecture
* ❌ Mobile app

v1.5 is about **learning persistence**, not scaling.

---

## 🧩 Project Concept (v1.5)

UniLink becomes a **real user-aware app**:

Users can:

* Create an account
* Log in
* Save their intent (study/social)
* Edit a basic profile

Everything else still uses mock or hybrid data.

This is a **controlled bridge** between prototype and real app.

---

## 🔐 Core Features (UniLink v1.5)

### 1. Firebase Authentication

Users can:

* Sign up (email/password)
* Log in
* Log out
* Persist session

Auth is intentionally simple.

No:

* OAuth complexity
* Password recovery flows
* Security hardening yet

Goal = understand auth pipeline.

---

### 2. Persistent User Intent

The intent toggle is no longer temporary.

User intent:

* Saves to Firestore
* Loads on login
* Updates live

This connects UI → database → UI loop.

Critical learning moment.

---

### 3. Basic Profile Editing

Logged-in users can edit:

* Display name
* Major
* Year
* Intent

Stored in Firestore as a user document.

No avatars yet. Keep it lean.

---

### 4. Hybrid Data Model

Universities + map:

* Still mock data

User profiles:

* Real database

This hybrid approach avoids backend overload.

---

## 🧱 Technical Stack (v1.5)

### Frontend

* Next.js (App Router)
* TypeScript (practical usage)
* Tailwind CSS
* react-leaflet

### Backend

* Firebase Authentication
* Firebase Firestore
* Firebase SDK (client-side only for now)

No server functions yet.

---

## 🗂️ Updated Project Structure (v1.5)

```txt
src/
 ├─ app/
 │   ├─ page.tsx
 │   ├─ login/
 │   │   └─ page.tsx
 │   ├─ profile/
 │   │   └─ page.tsx
 │   ├─ university/
 │   │   └─ [slug]/page.tsx
 │
 ├─ components/
 │   ├─ MapView.tsx
 │   ├─ StudentCard.tsx
 │   ├─ IntentToggle.tsx
 │   ├─ AuthGuard.tsx
 │
 ├─ lib/
 │   ├─ firebase.ts
 │   ├─ auth.ts
 │   ├─ user.ts
 │
 ├─ data/
 │   ├─ universities.ts
 │   ├─ students.ts (fallback/mock)
 │
 ├─ types/
 │   ├─ university.ts
 │   ├─ student.ts
 │   ├─ user.ts
```

---

## 🧠 New Concepts Practiced in v1.5

* Authentication flow
* Persistent user state
* Firestore document structure
* Client SDK integration
* Protected routes
* Async UI state handling
* Hybrid mock + real data architecture

---

## 🔮 Future Direction (After v1.5)

### v2

* Freedom Wall (Realtime feed)
* Anonymous posting system
* Moderation tools
* Role system (admin/student)

### v3+

* Messaging
* Notifications
* Realtime campus activity

Not priorities yet.

---

## ✅ Success Criteria for v1.5

UniLink v1.5 is successful if:

* Users can log in/out reliably
* Intent persists across sessions
* Profile edits save correctly
* No auth-state UI confusion
* You understand how frontend talks to backend

Understanding > polish.

---

## 🧠 Philosophy Reminder

UniLink is still a **learning project**.

You are not building a startup yet.
You are building skill.

Every feature must answer:

> “What am I learning from this?”

If the answer is unclear → don’t add it.

---