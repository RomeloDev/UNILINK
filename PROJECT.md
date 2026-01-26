# 🚀 UniLink v1 — Interactive MVP (Map + Backend-Ready)

> **Purpose:**
> UniLink v1 builds on v0 by introducing **real-world UI complexity** (maps, client-only libraries, progressive data modeling) while still prioritizing **Next.js learning over product completion**.

---

## 🧠 Primary Goals (v1)

* Learn how to integrate **client-only libraries** in Next.js
* Understand **SSR vs CSR boundaries** clearly
* Prepare data models for backend integration
* Improve UX without introducing backend complexity too early

---

## 🎯 Non-Goals (Still Out of Scope)

* ❌ Full production auth flows
* ❌ Chat / messaging
* ❌ Monetization
* ❌ Mobile app
* ❌ Large-scale moderation system

---

## 🧩 Project Concept (v1)

UniLink v1 enhances the homepage experience by introducing a **map-based university selector**, while keeping the university lobby and student discovery flow intact.

---

## 🗺️ Core Features (UniLink v1)

### 1. Homepage — Interactive Philippines Map

**Replaces:** simple university list
**Enhances:** discovery experience

Features:

* Interactive map of the Philippines
* University pins rendered from mock data
* Clicking a pin navigates to `/university/[slug]`
* Each pin shows:

  * University name
  * Students online (mock)

**Technical Notes:**

* Map rendered as a **Client Component**
* Uses OpenStreetMap via `react-leaflet`
* University coordinates stored in mock data

**Route:**

```
/
```

---

### 2. University Lobby (Same as v0, Refined)

* Dynamic routing remains unchanged
* Lobby continues to:

  * Render students
  * Support intent filtering
* Minor UI refinements allowed

---

### 3. Enhanced Mock Data Model

Universities now include:

* `lat`
* `lng`
* (future-ready for backend migration)

Students remain unchanged.

---

## 🧱 Technical Stack (v1)

### Frontend

* **Framework:** Next.js (App Router)
* **Language:** TypeScript (practical, minimal)
* **Styling:** Tailwind CSS
* **Maps:** react-leaflet + OpenStreetMap

### Data

* Still **Mock Data**
* No Firebase yet
* Structured to mirror backend collections later

---

## 🗂️ Updated Project Structure (v1)

```txt
src/
 ├─ app/
 │   ├─ page.tsx                 // Map-based homepage
 │   ├─ layout.tsx
 │   ├─ university/
 │   │   └─ [slug]/
 │   │       ├─ page.tsx
 │   │       └─ layout.tsx
 │
 ├─ components/
 │   ├─ MapView.tsx              // Client-only map
 │   ├─ UniversityMarker.tsx
 │   ├─ UniversityCard.tsx
 │   ├─ StudentCard.tsx
 │   ├─ IntentToggle.tsx
 │   ├─ StudentListWithFilter.tsx
 │
 ├─ data/
 │   ├─ universities.ts          // now includes lat/lng
 │   ├─ students.ts
 │
 ├─ types/
 │   ├─ university.ts            // extended
 │   ├─ student.ts
```

---

## 🧠 New Next.js Concepts Practiced in v1

* Client-only libraries in App Router
* Dynamic imports (`next/dynamic`)
* Hydration boundaries
* Progressive enhancement
* Data-driven navigation from UI elements

---

## 🔮 What Comes After v1 (Not Now)

### v1.5

* Firebase Auth
* Persist intent
* Basic profile editing

### v2

* Freedom Wall (Realtime)
* Moderation
* Analytics

---

## ✅ Success Criteria for v1

UniLink v1 is successful if:

* Homepage map renders correctly
* Pins navigate reliably
* No SSR hydration errors
* You understand *why* the map must be client-side

---
