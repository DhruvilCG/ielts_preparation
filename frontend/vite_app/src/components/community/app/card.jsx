import React from "react";
import "./card.css"; // Import the CSS file for styling

export function Card({ children }) {
  return <div className="card">{children}</div>;
}

export function CardHeader({ children }) {
  return <div className="card-header">{children}</div>;
}

export function CardTitle({ children }) {
  return <h2 className="card-title">{children}</h2>;
}

export function CardDescription({ children }) {
  return <p className="card-description">{children}</p>;
}

export function CardContent({ children }) {
  return <div className="card-content">{children}</div>;
}

export function CardFooter({ children }) {
  return <div className="card-footer">{children}</div>;
}
