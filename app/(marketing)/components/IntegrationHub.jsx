import React, { useState, useEffect } from "react";

const IntegrationHub = () => {
  const [hoveredIntegration, setHoveredIntegration] = useState(null);
  const [animatedLines, setAnimatedLines] = useState([]);

  // Define the logos with their positions on a circle
  const integrations = [
    {
      id: 1,
      name: "Microsoft",
      logo: "MS",
      angle: 0,
      gradient: "from-purple-800 to-indigo-700",
    },
    {
      id: 2,
      name: "SAP Ariba",
      logo: "SAP",
      angle: 60,
      gradient: "from-purple-800 to-indigo-600",
    },
    {
      id: 3,
      name: "Oracle",
      logo: "ORA",
      angle: 120,
      gradient: "from-purple-700 to-indigo-600",
    },
    {
      id: 4,
      name: "Workday",
      logo: "W",
      angle: 180,
      gradient: "from-purple-700 to-indigo-500",
    },
    {
      id: 5,
      name: "ServiceNow",
      logo: "SN",
      angle: 240,
      gradient: "from-purple-600 to-indigo-500",
    },
    {
      id: 6,
      name: "Coupa",
      logo: "CP",
      angle: 300,
      gradient: "from-purple-600 to-indigo-400",
    },
  ];

  // Create line animation effect with staggered timing
  useEffect(() => {
    const interval = setInterval(() => {
      const randomIntegration = Math.floor(Math.random() * integrations.length) + 1;
      setAnimatedLines((prev) => [...prev, randomIntegration]);

      setTimeout(() => {
        setAnimatedLines((prev) =>
          prev.filter((id) => id !== randomIntegration)
        );
      }, 2000);
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  const calculatePosition = (angle, radius) => {
    // Convert angle to radians
    const radians = (angle - 90) * (Math.PI / 180);
    // Calculate position based on angle and radius
    return {
      x: 50 + radius * Math.cos(radians),
      y: 50 + radius * Math.sin(radians),
    };
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 text-white relative">
      {/* Refined background gradients */}
      <div className="absolute inset-0  z-0"></div>
      <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-purple-900/10 blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-indigo-900/10 blur-3xl"></div>
      
      <div className="relative z-10 w-full max-w-6xl flex flex-col items-center">
        {/* Refined header accent */}
        <div className="flex items-center gap-2 mb-8">
          <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></div>
          <div className="w-12 h-0.5 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500"></div>
        </div>

        {/* Main heading with refined typography */}
        <h1 className="text-4xl md:text-5xl font-extralight text-center mb-4 max-w-2xl leading-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            Enhance your applications
          </span>
          <span className="block mt-1 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400 font-light">
            with integrations
          </span>
        </h1>

        {/* Refined subheading */}
        <p className="text-gray-400 text-center max-w-lg mb-16 font-light">
          Integrate your existing Enterprise applications out of the box. Terzo
          connects to ERP, P2P, SSO, and more.
        </p>

        {/* Integration diagram with improved aesthetics */}
        <div className="relative w-full max-w-4xl aspect-square">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            {/* Refined circular grid */}
            {[38, 28, 18].map((radius, i) => (
              <circle
                key={`circle-${i}`}
                cx="50"
                cy="50"
                r={radius}
                fill="none"
                stroke={`rgba(107, 114, 128, ${0.1 - i * 0.02})`}
                strokeWidth="0.2"
                strokeDasharray={i > 0 ? "0.5,0.8" : "none"}
              />
            ))}

            {/* Pulse effect radiating from center */}
            <circle
              cx="50"
              cy="50"
              r="8"
              fill="none"
              stroke="rgba(139, 92, 246, 0.3)"
              strokeWidth="0.3"
              className="animate-ping"
              style={{ animationDuration: "3s" }}
            />

            {/* Connecting lines from center to each integration */}
            {integrations.map((integration) => {
              const pos = calculatePosition(integration.angle, 38);
              const isAnimated = animatedLines.includes(integration.id);
              const isHovered = hoveredIntegration === integration.id;

              return (
                <g key={`line-group-${integration.id}`}>
                  {/* Base line */}
                  <line
                    x1="50"
                    y1="50"
                    x2={pos.x}
                    y2={pos.y}
                    stroke={isHovered ? "#A855F7" : "#4B5563"}
                    strokeWidth={isHovered ? "0.5" : "0.2"}
                    strokeDasharray={isHovered ? "none" : "0.7,0.7"}
                    strokeOpacity={isHovered ? "0.9" : "0.5"}
                  />
                  
                  {/* Animated pulse line overlay */}
                  {isAnimated && (
                    <line
                      x1="50"
                      y1="50"
                      x2={pos.x}
                      y2={pos.y}
                      stroke="#A855F7"
                      strokeWidth="0.6"
                      strokeOpacity="0.8"
                      className="animate-pulse"
                    >
                      <animate
                        attributeName="stroke-dashoffset"
                        from="0"
                        to="100"
                        dur="1.5s"
                        repeatCount="1"
                      />
                    </line>
                  )}
                </g>
              );
            })}

            {/* Integration boxes with improved styling */}
            {integrations.map((integration) => {
              const pos = calculatePosition(integration.angle, 38);
              const isHovered = hoveredIntegration === integration.id;
              
              return (
                <g
                  key={`box-${integration.id}`}
                  transform={`translate(${pos.x - 8} ${pos.y - 8})`}
                  onMouseEnter={() => setHoveredIntegration(integration.id)}
                  onMouseLeave={() => setHoveredIntegration(null)}
                  style={{ cursor: "pointer" }}
                  className="transition-transform duration-300"
                >
                  <defs>
                    <linearGradient
                      id={`grad-${integration.id}`}
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#4C1D95" />
                      <stop offset="100%" stopColor="#312E81" />
                    </linearGradient>
                    <filter id={`glow-${integration.id}`} height="130%" width="130%">
                      <feGaussianBlur stdDeviation={isHovered ? "1" : "0.5"} result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>
                  
                  {/* Box with glow effect on hover */}
                  <rect
                    width="16"
                    height="16"
                    rx="3"
                    fill={`url(#grad-${integration.id})`}
                    fillOpacity={isHovered ? "1" : "0.85"}
                    stroke={isHovered ? "#A855F7" : "#4C1D95"}
                    strokeWidth={isHovered ? "0.6" : "0.3"}
                    filter={isHovered ? `url(#glow-${integration.id})` : "none"}
                    transform={isHovered ? "scale(1.08)" : "scale(1)"}
                    className="transition-all duration-300"
                  />
                  
                  <text
                    x="8"
                    y="8.5"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize="3.5"
                    fill="white"
                    fontWeight={isHovered ? "bold" : "medium"}
                    opacity={isHovered ? "1" : "0.9"}
                    className="pointer-events-none select-none"
                  >
                    {integration.logo}
                  </text>

                  {/* Enhanced tooltip on hover */}
                  {isHovered && (
                    <g className="pointer-events-none">
                      <rect
                        x="-14"
                        y="-24"
                        width="44"
                        height="14"
                        rx="3"
                        fill="#1F2937"
                        fillOpacity="0.95"
                        stroke="#4C1D95"
                        strokeWidth="0.3"
                      />
                      <text
                        x="8"
                        y="-17"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fontSize="3.2"
                        fill="white"
                        fontWeight="medium"
                      >
                        {integration.name}
                      </text>
                    </g>
                  )}
                </g>
              );
            })}

            {/* Enhanced center Terzo logo */}
            <g>
              <circle cx="50" cy="50" r="12" fill="#4C1D95" fillOpacity="0.15" />
              <circle
                cx="50"
                cy="50"
                r="6"
                fill="none"
                stroke="url(#center-stroke)"
                strokeWidth="0.3"
              />
              
              {/* Diamond logo with gradient */}
              <path
                d="M50 42 L58 50 L50 58 L42 50 Z M46 50 L50 54 L54 50 L50 46 Z"
                fill="url(#center-gradient)"
                strokeWidth="0.3"
                stroke="#8B5CF6"
                className="transition-all duration-500"
              />
              
              <defs>
                <linearGradient
                  id="center-gradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#A855F7" />
                  <stop offset="100%" stopColor="#8B5CF6" />
                </linearGradient>
                <linearGradient
                  id="center-stroke"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#A855F7" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.6" />
                </linearGradient>
              </defs>
            </g>

            {/* Refined add button */}
            <g 
              transform="translate(43, 67)" 
              className="cursor-pointer"
              onMouseEnter={(e) => {
                const circle = e.currentTarget.querySelector('circle:nth-child(1)');
                if (circle) circle.setAttribute('fill', '#374151');
              }}
              onMouseLeave={(e) => {
                const circle = e.currentTarget.querySelector('circle:nth-child(1)');
                if (circle) circle.setAttribute('fill', '#1F2937');
              }}
            >
              <circle
                cx="7"
                cy="7"
                r="5"
                fill="#1F2937"
                stroke="#4C1D95"
                strokeWidth="0.3"
                className="transition-colors duration-300"
              />
              <circle
                cx="7"
                cy="7"
                r="6"
                fill="none"
                stroke="#4C1D95"
                strokeWidth="0.2"
                strokeDasharray="0.5,0.5"
              />
              <line
                x1="7"
                y1="4"
                x2="7"
                y2="10"
                stroke="white"
                strokeWidth="0.6"
              />
              <line
                x1="4"
                y1="7"
                x2="10"
                y2="7"
                stroke="white"
                strokeWidth="0.6"
              />
            </g>
          </svg>
        </div>

        {/* Refined caption */}
        <p className="text-gray-400 text-sm mt-8 font-light">
          Explore any integration to learn more
        </p>
      </div>
    </div>
  );
};

export default IntegrationHub;