export const projects = [
  {
    id: 1,
    slug: "agriculture-yield-prediction",
    title: "Agriculture Yield Prediction",
    category: "AI / ML",
    description: "Forecasted crop yields using regression and deep learning models (88% accuracy).",
    problem: "Farmers lacked accurate yield forecasts to plan resources; noisy environmental data and missing features made modeling hard.",
    solution: "Built a robust data pipeline, cleaned and engineered features, experimented with ensemble regression and deep learning models, and deployed a lightweight inference pipeline.",
    impact: [
      "88% predictive accuracy on hold-out test set",
      "Dashboard to visualize forecasts and recommended actions",
      "Reduced manual forecasting effort"
    ],
    tech: ["Python", "Scikit-Learn", "TensorFlow", "Pandas", "NumPy"],
    image: "/projects/proj4.png",
    github: "https://github.com/Ajaykumarch15/agriculture_yield_predictor",
    demo: "#"
  },
  {
    id: 2,
    slug: "road-lane-detection",
    title: "Road Lane Detection",
    category: "Computer Vision",
    description: "Real-time lane detection using OpenCV with precision improvements.",
    problem: "Existing lane detection failed in poor lighting and curved roads.",
    solution: "Built a robust pipeline using color transforms, edge detection, perspective transform and a lightweight CNN to refine lane masks.",
    impact: [
      "+20% detection precision in test scenarios",
      "Real-time inference at 25+ FPS on CPU"
    ],
    tech: ["OpenCV", "Python", "CNN", "NumPy"],
    image: "/projects/pms3.png",
    github: "https://github.com/Ajaykumarch15/your-lane-repo",
    demo: "#"
  },
  {
    id: 3,
    slug: "doctor-appointment-booking",
    title: "Doctor Appointment Booking",
    category: "Full-Stack",
    description: "MERN platform with role-based dashboards and real-time updates. Reduced booking conflicts by 40%.",
    problem: "Clinics suffered from double bookings and manual scheduling.",
    solution: "Built MERN stack app with role-based auth, real-time booking via sockets, robust UI and notifications.",
    impact: ["40% fewer booking conflicts", "Secure authentication and role-based data visibility"],
    tech: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
    image: "/projects/doc2.png",
    github: "https://github.com/Ajaykumarch15/your-doctor-repo",
    demo: "#"
  },
  {
    id: 4,
    slug: "absa-mern-sentiment-analysis",
    title: "ABSA – Aspect-Based Sentiment Analysis (MERN)",
    category: "AI / Full-Stack",
    description:
      "A full-stack MERN platform for aspect-based sentiment analysis with real-time visualization, API endpoints, and intelligent insights extraction.",
    
    problem:
      "Businesses struggle to understand customer opinions at a granular level. Traditional sentiment analysis cannot detect sentiment for each specific aspect (e.g., service, price, quality).",
    
    solution:
      "Developed a complete MERN + NLP-based system that takes customer reviews, extracts aspects, computes sentiment polarity for each aspect, and visualizes insights with interactive dashboards.",
    
    impact: [
      "Automated aspect extraction and sentiment classification",
      "Real-time sentiment insights for decision-making",
      "Modular API architecture for easy integration with products/web apps",
      "Significantly improved feedback analysis compared to manual review"
    ],
    
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Python (NLP)",
      "Flask (optional API)",
      "Scikit-Learn",
      "Vader / TextBlob"
    ],
    
    image: "/projects/absa1.png",   // Add your own image here
    github: "https://github.com/Ajaykumarch15/ABSA-MERN-Project",
    demo: "#"
}

];
