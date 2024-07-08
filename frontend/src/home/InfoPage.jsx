import React from "react"
import "../css/Info.css"

const InfoPage = () => {
  return (
    <div className="info-container">
      <h1>Welcome to our app, the ultimate platform for art enthusiasts!</h1>
      <div className="info-section">
        <h2>Features for All Users:</h2>
        <ul>
          <li>
            <strong>Chat Board:</strong> Access a public chat board where
            everyone can share their thoughts and ideas.
          </li>
          <li>
            <strong>Art Gallery Search:</strong> Easily search for art galleries
            near you.
          </li>
          <li>
            <strong>Random Draw:</strong> Discover random characters, places,
            and themes to inspire your creativity.
          </li>
        </ul>
      </div>
      <div className="info-section">
        <h2>Features for Registered Users:</h2>
        <ul>
          <li>
            <strong>Personal Page:</strong> Share your posts and pictures,
            showcasing your artistic creations.
          </li>
          <li>
            <strong>User Search:</strong> Find and connect with other users who
            share your passion for art.
          </li>
          <li>
            <strong>Private Chat:</strong> Chat with friends and fellow artists.
          </li>
          <li>
            <strong>Friend Requests:</strong> Send and receive friend requests
            to build your artistic network.
          </li>
        </ul>
      </div>
      <p>
        Our app is designed to inspire, connect, and foster a community of art
        lovers. Whether you're looking to share your art, find new friends, or
        simply get inspired, our app is here to help you on your artistic
        journey.
      </p>
      <h2>Join us and become a part of a vibrant community of artists!</h2>
    </div>
  )
}

export default InfoPage
