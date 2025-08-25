import ichgramImage from "../../../assets/ichgram.webp";
import meetupImage from "../../../assets/meetup.webp";
import petshopImage from "../../../assets/petshop.webp";

const projects = [
  {
    id: 1,
    link: "https://meetup-project-gules.vercel.app/",
    image: meetupImage,
    title: "Meet up",
    description:
      "A web project built with HTML, SCSS, and JavaScript, designed to explore and join community events. The platform includes an interactive “Join Meetup” feature that navigates users to a dedicated event page. Advanced filtering options allow users to browse events by type, distance, category, and date. The project also features fully responsive design, ensuring a smooth experience across desktops, tablets, and mobile devices.",
  },
  {
    id: 2,
    link: "https://pet-shop-phi-plum.vercel.app/",
    image: petshopImage,
    title: "Pet Shop",
    description:
      "An e-commerce web application for a pet store, built with React and powered by Redux Toolkit for state management. Product categories and cart data are seamlessly stored in Redux, ensuring smooth user interaction. The app integrates a REST API (via Axios) to fetch categories, products, and individual product details by ID. Navigation between pages is handled with React Router DOM, while forms are managed using React Hook Form. Users can explore products with advanced filters by price, discounts, and sorting options, providing a convenient shopping experience. The project also features a fully responsive design, optimized for desktops, tablets, and mobile devices.",
  },
  {
    id: 3,
    link: "https://final-project-frontend-ashy.vercel.app/",
    title: "Ichgram",
    image: ichgramImage,
    description:
      "A full-stack Instagram clone developed with React + TypeScript on the frontend and Node.js, Express, and TypeScript on the backend, with MongoDB as the database. The platform supports user registration, login, email verification and password recovery via Resend. Real-time chat functionality is implemented with WebSockets, enabling smooth user communication. Core social features include following/unfollowing, likes, comments, post publishing and editing, profile management, notifications, and user search by username. The application is designed with a fully responsive layout, ensuring a seamless experience across all devices.",
  },
];

export default projects;
