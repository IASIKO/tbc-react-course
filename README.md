# Liquor Store

Welcome to the Liquor Store! This is a Next.js 14 app router built with TypeScript, Tailwind CSS, and various other libraries to provide a comprehensive online liquor store with internationalization, dark mode, payment processing, authentication, and much more.

## Live

Demo URL: https://tbc-react-course-mu.vercel.app/

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Pages](#pages)
- [Components](#components)
- [Libraries](#libraries)
- [APIs and Database](#apis-and-database)
- [Middleware](#middleware)
- [Public Folder](#public-folder)
- [Contributing](#contributing)
- [License](#license)

## Features

- Dark Mode
- Internationalization
- Authentication with Auth0
- Payment processing with Stripe
- PostgreSQL database
- Blob storage for photos
- Framer Motion animations
- Admin management
- User profile management
- Product management and ratings
- Blog with cocktail recipes
- Google Maps integration

## Installation

To get started with the Liquor Store project, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/IASIKO/tbc-react-course.git
    ```

2. Navigate to the project directory:
    ```bash
    cd tbc-react-course
    ```

3. Install the dependencies:
    ```bash
    npm install
    ```

4. Set up environment variables:
    Create a `.env.local` file and add the necessary environment variables for Auth0, Stripe, PostgreSQL, etc.

5. Run the development server:
    ```bash
    npm run dev
    ```

## Usage

Navigate to `http://localhost:3000` to view the application. The application will reload if you make edits.

## File Structure

The project structure is organized as follows:

tbc-react-course/<br/> 
├── app/ <br/> 
│   ├── about/ <br/> 
│   ├── admin/ <br/> 
│   ├── api/ <br/> 
│   │   └── [route handlers]<br/> 
│   ├── blog/<br/> 
│   ├── blog/[id]/<br/> 
│   ├── blog/add-blog/<br/> 
│   ├── blog/edit-blog/[id]/<br/> 
│   ├── cart/<br/> 
│   │   ├── cart/checkout/<br/> 
│   ├── contact/<br/> 
│   ├── orders/<br/> 
│   │   ├── orders/success/<br/> 
│   │   ├── orders/cancel/<br/> 
│   ├── products/<br/> 
│   ├── products/[id]/<br/> 
│   ├── products/add-product/<br/> 
│   ├── products/edit-product/[id]/<br/> 
│   ├── profile/<br/> 
├── components/<br/> 
│   ├── About/<br/> 
│   ├── Admin/<br/> 
│   ├── Blog/<br/> 
│   ├── Cart/<br/> 
│   ├── Contact/<br/> 
│   ├── Home/<br/> 
│   ├── Orders/<br/> 
│   ├── Products/<br/> 
│   ├── Profile/<br/> 
│   ├── RootLayout/<br/> 
│   ├── UI/<br/> 
├── lib/<br/> 
│   ├── actions.ts<br/> 
│   ├── api.ts<br/> 
│   ├── constants.ts<br/> 
├── messages/<br/> 
├── public/<br/> 
│   ├── images/<br/> 
│   ├── fonts/<br/> 
├── middleware.ts<br/> 
├── .env.local<br/> 
├── i18n.ts<br/> 
├── next.config.mjs<br/> 
├── tailwind.config.js<br/> 
├── tsconfig.json<br/> 

## Pages

### About

- **Path**: `/about`
- **Description**: Brief description of the company, its goals, and a partners slider.

### Admin

- **Path**: `/admin`
- **Description**: Admin dashboard for managing users, products, blogs, and orders.

### Contact

- **Path**: `/contact`
- **Description**: Company information, Google Map location, and a contact form to send messages to the company.

### Blog

- **Path**: `/blog`
- **Description**: Cocktail recipes with functionality to add, delete, and update blogs. Detailed blog pages are also included.

### Products

- **Path**: `/products`
- **Description**: List of products with add-to-cart functionality. Product details page includes product info, user ratings, and social sharing options.

### Profile

- **Path**: `/profile`
- **Description**: User's profile page with options to update data and avatar.

### Cart

- **Path**: `/cart`
- **Description**: Display of products added to the cart by the user, with individual and total pricing.

### cart/checkout

- **Path**: `/cart/checkout`
- **Description**: Payment page with auto-filled user information and integration with Stripe for payment processing.

## Components

Components are organized according to the page they belong to:

- `about`: Components related to the About page.
- `admin`: Components related to the Admin page.
- `blog`: Components related to the Blog pages.
- `cart`: Components related to the Cart page.
- `cart/checkout`: Components related to the checkout page.
- `contact`: Components related to the Contact page.
- `products`: Components related to the Products pages.
- `profile`: Components related to the Profile page.

## Libraries

- `next-themes`: For dark mode functionality.
- `next-intl`: For internationalization.
- `popmotion`: For animations.
- `framer-motion`: For animations.
- `next-share`: For social media sharing.
- `stripe`: For payment.
- `auth0`: For authentication and authorization.
- `tailwind`: For CSS.

## APIs and Database

- **Database**: PostgreSQL
- **Blob Storage**: Used for storing photos.
- **APIs**: Located in the `app/api` folder, route handlers are used for database interactions.

## Middleware

The `middleware` file contains files for protected routes and internationalization.

## Public Folder

The `public` folder contains project assets like images and fonts.
