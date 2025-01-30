"use client";
"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function Projects() {
  const cards = data.map((card, index) => (
    <CardComponent key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Recent Projects
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const data = [
  {
    category: "Lunar Site",
    title:
      "You can do more with AI, We predicting Mineral Composition given the soil samples.",
    src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://github.com/DibbayajyotiRoy/Lunar-Mining-Project-HACKATHON-2024-",
  },
  {
    category: "BloodLink",
    title: "Ensuring No-one dies shortage of Blood.",
    src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://github.com/DibbayajyotiRoy/BloodLink/tree/main",
  },
  {
    category: "Austin Fitness",
    title: "Launching the new Gym Website App.",
    src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://github.com/DibbayajyotiRoy/FitnessGymWebsite",
  },
  {
    category: "ProductivityPal",
    title: "Helps you keep in touch with your schedule.",
    src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://github.com/DibbayajyotiRoy/ProductivityPal",
  },
  {
    category: "Real Estate Website",
    title: "Under Development.",
    src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://github.com/yourusername/photography-project",
  },
  {
    category: "Learning Management System",
    title: "Under Development.",
    src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://github.com/yourusername/hiring-project",
  },
];

const CardComponent = ({ card, index }) => {
  const handleCardClick = () => {
    window.open(card.link, "_blank"); // Opens the GitHub link in a new tab
  };

  return (
    <div onClick={handleCardClick} className="cursor-pointer">
      <Card card={card} index={index} /> {/* Use the existing Card component */}
    </div>
  );
};
