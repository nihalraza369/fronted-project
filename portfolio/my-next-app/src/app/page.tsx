import { useState, useEffect } from "react";
import "./styles.css"; // Ensure styles are properly linked

const App = () => {
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 5);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {loading ? (
        <div id="loadingScreen">Loading...</div>
      ) : (
        <div id="content">
          <header>
            <h1>Welcome to My React Page</h1>
          </header>

          <section className="carousel">
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className={`carousel-item ${index === activeIndex ? "active" : ""}`}
              >
                Item {index + 1}
              </div>
            ))}
          </section>

          <section className="skills">
            <h2>Skills</h2>
            <div className="skill">HTML</div>
            <div className="skill">CSS</div>
            <div className="skill">JavaScript</div>
            <div className="skill">React</div>
          </section>

          <footer>
            <p>&copy; 2025 My Website</p>
          </footer>
        </div>
      )}
    </div>
  );
};

export default App;
