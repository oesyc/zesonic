"use client";
import React, { useEffect, useState, useRef } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

// ✅ Dynamically Import Chart.js Components (Fix SSR Issue)
const Line = dynamic(() => import("react-chartjs-2").then((mod) => mod.Line), { ssr: false });
const Doughnut = dynamic(() => import("react-chartjs-2").then((mod) => mod.Doughnut), { ssr: false });

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, ArcElement, Tooltip, Legend, Filler);

export default function AnimatedSection() {
  const [animationState, setAnimationState] = useState("full");
  const [isMounted, setIsMounted] = useState(false);
  const animationTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setIsMounted(true);
    
    const runAnimation = () => {
      setAnimationState("full");

      animationTimer.current = setTimeout(() => {
        setAnimationState("metrics");

        animationTimer.current = setTimeout(() => {
          runAnimation();
        }, 4000);
      }, 4000);
    };

    runAnimation();

    return () => {
      if (animationTimer.current) {
        clearTimeout(animationTimer.current);
      }
    };
  }, []);

  // Line chart data
  const lineChartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Performance",
        data: [65, 59, 80, 81, 56, 75],
        fill: true,
        backgroundColor: "rgba(140, 82, 255, 0.2)",
        borderColor: "rgba(140, 82, 255, 1)",
        tension: 0.4,
      },
    ],
  };

  // Chart.js animation options
  const chartOptions = {
    animation: {
      duration: 2000, // 2 sec animation
    },
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top' as const,
        labels: {
          color: '#a09cb5',
          font: {
            size: 10
          }
        }
      }
    },
    scales: {
      x: {
        ticks: {
          color: '#a09cb5',
          font: {
            size: 10
          }
        }
      },
      y: {
        ticks: {
          color: '#a09cb5',
          font: {
            size: 10
          }
        }
      }
    }
  };

  // Doughnut chart data
  const doughnutData = {
    labels: ["Completed", "In Progress", "Pending"],
    datasets: [
      {
        data: [65, 25, 10],
        backgroundColor: ["rgba(140, 82, 255, 0.8)", "rgba(94, 23, 235, 0.8)", "rgba(160, 156, 181, 0.8)"],
        borderColor: ["rgba(140, 82, 255, 1)", "rgba(94, 23, 235, 1)", "rgba(160, 156, 181, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const doughnutOptions = {
    ...chartOptions,
    plugins: {
      ...chartOptions.plugins,
      legend: {
        ...chartOptions.plugins?.legend,
        display: false
      }
    }
  };

  // **Progress Bar Animation**
  const ProgressBar = ({ value }: { value: number }) => (
    <div className="w-full bg-[#0f0a1e] rounded-full h-3 overflow-hidden">
      {isMounted && (
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="bg-[#8c52ff] h-3 rounded-full"
        />
      )}
    </div>
  );

  // **Counter Animation**
  const Counter = ({ from = 0, to }: { from?: number; to: number }) => {
    const [count, setCount] = useState(from);

    useEffect(() => {
      if (!isMounted) return;
      
      let start = from;
      const increment = Math.ceil((to - from) / 50);
      const interval = setInterval(() => {
        start += increment;
        if (start >= to) {
          start = to;
          clearInterval(interval);
        }
        setCount(start);
      }, 40);
      return () => clearInterval(interval);
    }, [to, isMounted]);

    return <span>{count}</span>;
  };

  // Format stat value for display
  const formatStatValue = (value:any) => {
    if (typeof value === "string") {
      if (value.includes("$")) return "$" + value.replace(/[^\d.]/g, "");
      if (value.includes("%")) return value;
      return value;
    }
    return value;
  };

  // Extract suffix for counter display
  const getValueSuffix = (value:any) => {
    if (typeof value === "string") {
      if (value.includes("%")) return "%";
      if (value.includes("$")) return "";
      if (value.includes("k")) return "k";
    }
    return "";
  };

  return (
    <div className="flex justify-center items-center pt-2 px-2">
      <Head>
        <title>Interactive Dashboard</title>
        <meta name="description" content="Interactive dashboard with animations" />
      </Head>

      <div className="w-full mx-auto relative overflow-hidden rounded-lg shadow-xl h-auto bg-[#1e1836] p-2">
        <div className="grid grid-cols-4 gap-2">
          {/* Performance Chart */}
          <div className="col-span-2 bg-[#1a1530] rounded-lg p-2 shadow-md">
            <h3 className="text-white text-xs lg:text-lg font-semibold mb-1">Performance Overview</h3>
            <div className="h-24 lg:h-48">
              {isMounted && <Line data={lineChartData} options={chartOptions} />}
            </div>
          </div>

          {/* Doughnut Chart */}
          <div className="col-span-1 bg-[#1a1530] rounded-lg p-2 shadow-md">
            <h3 className="text-white text-xs lg:text-lg font-semibold mb-1">Tasks</h3>
            <div className="h-20 lg:h-40 flex items-center justify-center">
              {isMounted && <Doughnut data={doughnutData} options={doughnutOptions} />}
            </div>
            <div className="mt-1 text-center text-[#a09cb5] text-xs">
              <p>65% Complete</p>
            </div>
          </div>

          {/* Server Status */}
          <div className="col-span-1 bg-[#1a1530] rounded-lg p-2 shadow-md">
            <h3 className="text-white text-xs lg:text-lg font-semibold mb-1">Server Status</h3>
            <div className="flex flex-col gap-1 mt-2">
              <ProgressBar value={78} />
              <p className="text-[#a09cb5] text-xs">CPU: 78%</p>
              <ProgressBar value={45} />
              <p className="text-[#a09cb5] text-xs">Memory: 45%</p>
            </div>
          </div>

          {/* Stats Boxes */}
          {[
            { title: "Users", value: 2457 },
            { title: "Revenue", value: "$85.4k" },
            { title: "Conversion", value: "64.7%" },
            { title: "Sessions", value: "12.8k" },
          ].map((stat, index) => (
            <div key={index} className="col-span-1 bg-[#1a1530] rounded-lg p-2 shadow-md">
              <h3 className="text-white text-xs lg:text-lg font-semibold mb-1">{stat.title}</h3>
              <div className="flex flex-col items-center justify-center h-12 lg:h-24">
                <div className="text-[#8c52ff] text-lg lg:text-4xl font-bold">
                  {isMounted && (
                    <>
                      {stat.value.toString().includes("$") && "$"}
                      <Counter to={parseInt(stat.value.toString().replace(/[^\d]/g, ""))} />
                      {getValueSuffix(stat.value)}
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}