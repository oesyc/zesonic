"use client";
import React, { useEffect, useState, useRef } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
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
import { Line, Doughnut } from "react-chartjs-2";

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, ArcElement, Tooltip, Legend, Filler);

export default function AnimatedSection() {
  const [animationState, setAnimationState] = useState("full");
  const animationTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
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

  // **Progress Bar Animation**
  const ProgressBar = ({ value }: { value: number }) => (
    <div className="w-full bg-[#0f0a1e] rounded-full h-4 overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${value}%` }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="bg-[#8c52ff] h-4 rounded-full"
      />
    </div>
  );

  // **Counter Animation**
  const Counter = ({ from = 0, to }: { from?: number; to: number }) => {
    const [count, setCount] = useState(from);

    useEffect(() => {
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
    }, [to]);

    return <span>{count}</span>;
  };

  return (
    <div className="flex justify-center items-center pt-4">
      <Head>
        <title>Interactive Dashboard</title>
        <meta name="description" content="Interactive dashboard with animations" />
      </Head>

      <div className="w-full mx-auto relative overflow-hidden rounded-xl shadow-2xl h-[500px] bg-[#1e1836]">
        <div className="grid grid-cols-4 gap-4 p-6">
          {/* Performance Chart */}
          <div className="col-span-2 bg-[#1a1530] rounded-lg p-4 shadow-md">
            <h3 className="text-white text-lg font-semibold mb-3">Performance Overview</h3>
            <div className="h-48">
              <Line data={lineChartData} options={chartOptions} />
            </div>
          </div>

          {/* Doughnut Chart */}
          <div className="col-span-1 bg-[#1a1530] rounded-lg p-4 shadow-md">
            <h3 className="text-white text-lg font-semibold mb-2">Tasks</h3>
            <div className="h-40 flex items-center justify-center">
              <Doughnut data={doughnutData} options={chartOptions} />
            </div>
            <div className="mt-2 text-center text-[#a09cb5]">
              <p>65% Complete</p>
            </div>
          </div>

          {/* Server Status */}
          <div className="col-span-1 bg-[#1a1530] rounded-lg p-4 shadow-md">
            <h3 className="text-white text-lg font-semibold mb-2">Server Status</h3>
            <div className="flex flex-col gap-2 mt-4">
              <ProgressBar value={78} />
              <p className="text-[#a09cb5] text-sm">CPU: 78%</p>
              <ProgressBar value={45} />
              <p className="text-[#a09cb5] text-sm">Memory: 45%</p>
            </div>
          </div>

          {/* Stats Boxes */}
          {[
            { title: "Users", value: 2457 },
            { title: "Revenue", value: "$85.4k" },
            { title: "Conversion", value: "64.7%" },
            { title: "Sessions", value: "12.8k" },
          ].map((stat, index) => (
            <div key={index} className="col-span-1 bg-[#1a1530] rounded-lg p-4 shadow-md">
              <h3 className="text-white text-lg font-semibold mb-2">{stat.title}</h3>
              <div className="flex flex-col items-center justify-center h-24">
                <div className="text-[#8c52ff] text-4xl font-bold">
                <Counter to={parseInt(stat.value.toString().replace(/[^\d]/g, ""))} />
                {typeof stat.value === "string" && stat.value.includes("%") ? "%" : ""}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
