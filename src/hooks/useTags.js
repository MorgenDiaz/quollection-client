import { useState, useEffect } from "react";

function getAllTags() {
  const [tags, setTags] = useState([]);

  const testTags = [
    `Self-Development`,
    `Psychology`,
    `Spiritual`,
    `Productivity`,
    `Motivation`,
  ];

  useEffect(() => {
    setTags(testTags);
  }, []);

  return tags;
}

export default getAllTags;
