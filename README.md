# Vendora — AI-Powered Multi-Vendor Marketplace

> India's smartest marketplace for buyers and sellers — built with React, TypeScript, and AI.

![React](https://img.shields.io/badge/React-18-61DAFB?style=flat&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-06B6D4?style=flat&logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat&logo=vite&logoColor=white)
![OpenAI](https://img.shields.io/badge/OpenAI-API-412991?style=flat&logo=openai&logoColor=white)

---

## Overview

Vendora is a two-sided electronics and lifestyle marketplace where **buyers** discover products through AI-powered search and comparison, and **sellers** list products commission-free with an AI-assisted storefront — all in one React application with role-based routing.

This repository contains the **frontend application** for Vendora.
The backend (Node.js + Express + Prisma + PostgreSQL) lives at [`vendora-backend`](https://github.com/Sandeep-K-A/vendora-backend).

---

## The Problem

Indian online shoppers face decision paralysis — existing platforms return hundreds of sponsored results with no intent-aware search and no reliable comparison tool. Small resellers have no professional, zero-commission storefront outside of WhatsApp and OLX.

Vendora solves both sides simultaneously.

---

## Features

### For Buyers

- **AI natural language search** — type queries like _"best phone under ₹15000 for photography"_ and get ranked, relevant results
- **AI product verdict** — every product page shows a two-line AI summary: _Best for_ and _Weak at_
- **AI comparison recommendation** — pin up to 3 products and get an AI paragraph explaining the best choice for your use case
- **Multi-category browsing** — Electronics, Fashion, Home & Kitchen, Books, Sports
- **Verified seller storefronts** — browse any seller's full catalogue and ratings
- **Persistent cart and wishlist** — survives page refresh via localStorage
- **Recently viewed history** — last 8 products always one scroll away

### For Sellers

- **Zero commission storefront** — list products and keep 100% of every sale
- **AI description generator** — fill in specs, click Generate, get professional listing copy instantly
- **Full product CRUD** — add, edit, delete, toggle stock status
- **Order management** — track and update order status end to end
- **Seller dashboard** — revenue, orders, active listings, top products at a glance
- **Sales analytics** — revenue chart and top products over time

---

## Tech Stack

| Layer            | Technology               |
| ---------------- | ------------------------ |
| Framework        | React 19 + TypeScript 6  |
| Build tool       | Vite 8                   |
| Styling          | Tailwind CSS 3           |
| Routing          | React Router v7          |
| State management | Zustand                  |
| AI integration   | OpenAI API (gpt-4o-mini) |
| HTTP client      | Axios                    |
| Icons            | Lucide React             |
| Charts           | Recharts                 |
| Fonts            | Space Grotesk + Inter    |

---

## Project Structure

```
vendora-frontend/
├── src/
│   ├── pages/
│   │   ├── Landing.tsx
│   │   ├── buyer/
│   │   │   ├── ProductListing.tsx
│   │   │   ├── ProductDetail.tsx
│   │   │   ├── Compare.tsx
│   │   │   ├── Cart.tsx
│   │   │   └── StorePage.tsx
│   │   ├── seller/
│   │   │   ├── Dashboard.tsx
│   │   │   ├── Products.tsx
│   │   │   ├── Orders.tsx
│   │   │   ├── Analytics.tsx
│   │   │   └── Settings.tsx
│   │   └── auth/
│   │       ├── Login.tsx
│   │       ├── Register.tsx
│   │       └── SellerOnboarding.tsx
│   ├── layouts/
│   │   ├── RootLayout.tsx
│   │   ├── BuyerLayout.tsx
│   │   └── SellerLayout.tsx
│   ├── components/
│   │   ├── common/
│   │   ├── buyer/
│   │   └── seller/
│   ├── store/
│   │   ├── cartStore.ts
│   │   ├── compareStore.ts
│   │   ├── authStore.ts
│   │   └── themeStore.ts
│   ├── hooks/
│   ├── services/
│   │   ├── openai.ts
│   │   └── api.ts
│   ├── data/
│   │   ├── products.json
│   │   └── stores.json
│   └── types/
│       └── index.ts
├── index.html
├── vite.config.ts
├── tailwind.config.ts
├── tsconfig.app.json
├── .env.local
└── package.json
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+
- An OpenAI API key

### Installation

```bash
# Clone the repository
git clone https://github.com/Sandeep-K-A/vendora-frontend.git
cd vendora-frontend

# Install dependencies
npm install

# Create environment file
cp .env.example .env.local
```

### Environment Variables

Create a `.env.local` file in the root with:

```
VITE_OPENAI_KEY=sk-your-openai-key-here
VITE_API_URL=http://localhost:3000/api
```

> The OpenAI key is required for AI search, product verdict, comparison recommendation, and seller description generator features. The app runs without it but AI features will show a fallback message.

### Run

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

### Build

```bash
npm run build
```

---

## User Roles

| Role   | How obtained                               | Access                                           |
| ------ | ------------------------------------------ | ------------------------------------------------ |
| Guest  | No registration                            | Browse, search, compare, cart                    |
| Buyer  | Register with email + password             | Guest access + wishlist, order history, checkout |
| Seller | Buyer account + "Start selling" onboarding | All buyer access + seller portal                 |

One account, two roles. A seller can still browse and buy as a buyer using the same account and toggle between experiences from the navbar.

---

## Build Phases

| Phase   | Scope                                                          | Status         |
| ------- | -------------------------------------------------------------- | -------------- |
| Phase 0 | Landing page                                                   | 🚧 In progress |
| Phase 1 | Buyer app — all screens with mock data + AI features           | 🔜 Upcoming    |
| Phase 2 | Seller portal — onboarding, dashboard, CRUD, orders, analytics | 🔜 Upcoming    |
| Phase 3 | Backend connection — replace mock JSON with live Vendora API   | 🔜 Upcoming    |

---

## Backend

The Vendora backend (Node.js + Express + TypeScript + Prisma + PostgreSQL) is maintained separately.

Repository: [`vendora-backend`](https://github.com/Sandeep-K-A/vendora-backend)

In Phase 1 and 2, all product and store data is served from static mock JSON files inside `src/data/`. Phase 3 replaces these with live API calls.

---

## Environment File Reference

```
# .env.example
VITE_OPENAI_KEY=        # OpenAI API key — required for AI features
VITE_API_URL=           # Vendora backend URL — required for Phase 3
```

---

## License

MIT © [Sandeep K A](https://github.com/Sandeep-K-A)

---

<p align="center">Built by <a href="https://github.com/Sandeep-K-A">Sandeep K A</a> · Kochi, Kerala</p>
