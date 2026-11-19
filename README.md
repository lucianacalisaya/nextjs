# Next.js Dashboard
 
An invoice and customer dashboard, built by following the official Next.js course.
 
**Live:** https://nextjs-lucianas-projects-f8fd3d49.vercel.app/
 
## What it does
 
- Login, with the dashboard pages protected
- Lists of invoices and customers, with search and pagination
- Create, edit and delete invoices
- Data fetched on the server from a PostgreSQL database
 
## Built with
 
Next.js (App Router), TypeScript, Tailwind CSS, PostgreSQL, NextAuth
 
## My part
 
I followed the course step by step. It's where I learned the App Router, server-side data fetching and TypeScript.
 
## Run it locally
 
Create a `.env` file with a PostgreSQL connection string and an `AUTH_SECRET`, as the course explains. Then:
 
```bash
npm install
npm run seed
npm run dev
```
