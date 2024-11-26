# Test Assignment for DevelopsToday

## Overview

This project is a test assignment implemented using **Next.js**. The application allows users to filter vehicles by make and model year, displaying a list of corresponding vehicle models based on the selected criteria.

The app features a dynamic and responsive user interface built with **Tailwind CSS**. It utilizes **TypeScript** for type safety and **React Suspense** for efficient data loading.

---

## Features

1. **Dynamic Routes**  
   The application dynamically generates pages for selected vehicle makes and years using `getStaticProps` and `getStaticPaths`.

2. **Vehicle Makes and Models Filtering**  
   - Fetches vehicle makes from the API endpoint:  
     `https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json`
   - Allows users to select a make and a model year (2015 to the current year).
   - Displays vehicle models for the selected make and year using the endpoint:  
     `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/{makeId}/modelyear/{year}?format=json`.

3. **React Suspense**  
   - Ensures a smooth loading experience by using `Suspense` components for API data fetching.

4. **Responsive Design**  
   - The application is designed to be fully responsive, ensuring compatibility across various devices.

5. **Type Safety**  
   - All components and data types are fully typed with **TypeScript**, ensuring fewer bugs and better code readability.

6. **Code Quality Tools**  
   - Pre-configured **ESLint** and **Prettier** ensure consistent and high-quality code.

---

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/alexrrxo/develops-today-test.git
cd develops-today-test
```

### Install Dependencies

```bash
npm install
```

### Add Environment Variables

Create a `.env.local` file in the root directory and add the following variable:

```env
NEXT_PUBLIC_API_BASE_URL=https://vpic.nhtsa.dot.gov/api
```

### Start the Development Server

```bash
npm run dev
```

### Open in Browser

Visit [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## Screenshots

### Home Page
The home page features:
- A dropdown to select vehicle make.
- A dropdown to select model year.
- A button to proceed to the results page.

![My photo](/public/main.PNG)

### Results Page
The results page dynamically fetches and displays vehicle models based on user input.

![My photo](/public/result.PNG)

---

## Technologies Used

- **Next.js**: For server-side rendering and dynamic routing.
- **Tailwind CSS**: For styling and responsive design.
- **TypeScript**: For static typing and code reliability.
- **React Suspense**: For efficient asynchronous data fetching.
- **ESLint and Prettier**: For maintaining consistent code quality.

---

## Notes

This assignment demonstrates the use of modern tools and frameworks to build a scalable, maintainable, and user-friendly application.