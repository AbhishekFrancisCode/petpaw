import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const items1 = [
  { title: "Freshly Cooked", clipart: "" },
  { title: "Daily Delivered", clipart: "" },
  { title: "Freshly Sourced", clipart: "" },
  { title: "Human Grade", clipart: "" },
  { title: "Preservative Free", clipart: "" },
  { title: "Sustainable Packaging", clipart: "" },
  { title: "Clean Eating", clipart: "" },
  { title: "Wholesome", clipart: "" },
  { title: "Natural Flavor", clipart: "" },
  { title: "Freshly Cooked", clipart: "" }
];

const items: string[] = [
  "Freshly Cooked",
  "Daily Delivered",
  "Freshly Sourced",
  "Human Grade",
  "Preservative Free",
  "Sustainable Packaging",
  "Clean Eating",
  "Wholesome",
  "Natural Flavor",
  "Freshly Cooked",
  "Daily Delivered",
  "Freshly Sourced",
  "Human Grade",
  "Preservative Free",
  "Sustainable Packaging",
  "Clean Eating",
  "Wholesome",
  "Natural Flavor",
  "Freshly Cooked",
  "Daily Delivered",
  "Freshly Sourced",
  "Human Grade",
  "Preservative Free",
  "Sustainable Packaging",
  "Clean Eating",
  "Wholesome",
  "Natural Flavor"
];

const Marquee = () => {
  return (
    <div className="relative overflow-hidden w-full h-24 flex items-center bg-transparent">
      <motion.div
        className="flex gap-4"
        initial={{ x: 0 }} // Start from the initial position
        animate={{ x: "-100%" }} // Move one full width to the left
        transition={{
          duration: 200, // Adjust duration for smoothness
          repeat: Infinity, // Loop infinitely
          ease: "linear" // Constant speed
        }}
      >
        {/* Render items twice for seamless looping */}
        {items.concat(items).map((item, index) => (
          <div className="flex items-center justify-center gap-2 " key={index}>
            <div className="rounded-full min-w-16 min-h-16 max-w-16 max-h-16 ">
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTkiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA1OSA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwKSI+CjxwYXRoIGQ9Ik0yOS4zNTQ0IDAuNDMwNDE0QzEyLjQ4MiAtMC40MzA0MTggLTAuNjAyNTk2IDE1LjQwODkgMC41MTY0ODYgMzIuNTM5NUMxLjM3NzMyIDQ1LjcxMDIgMTYuMDExNSA2MC44NjA4IDMzLjY1ODUgNTkuMzk3NEM0NS42MjQxIDU4LjQ1MDUgNTguNTM2NiA0NS4xMDc2IDU4LjYyMjcgMjkuMjY4M0M1OC42MjI3IDE4LjA3NzUgNTEuMTMzNCAxLjU0OTUgMjkuMzU0NCAwLjQzMDQxNFoiIGZpbGw9IiNGNEY0RUMiLz4KPHBhdGggZD0iTTI5LjM1NDQgMC40MzA0MTRDMTIuNDgyMSAtMC40MzA0MTggLTAuNjAyNTk2IDE1LjQwODkgMC41MTY0ODYgMzIuNTM5NUMxLjM3NzMyIDQ1LjcxMDIgMTYuMDExNSA2MC44NjA4IDMzLjY1ODUgNTkuMzk3NEM0NS42MjQxIDU4LjQ1MDUgNTguNTM2NiA0NS4xMDc2IDU4LjYyMjcgMjkuMjY4M0M1OC42MjI3IDE4LjA3NzUgNTEuMTMzNCAxLjU0OTUgMjkuMzU0NCAwLjQzMDQxNFoiIHN0cm9rZT0iIzVFNTg0RSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIi8+CjxwYXRoIGQ9Ik0yNy45NzcgNDIuNDM5QzM0LjM0NzIgNDIuNDM5IDM5LjQyNjEgMzguMzkzMSAzOS41MTIyIDMzLjU3MjVDMzkuNzcwNCAyMi4yOTU2IDMzLjc0NDYgMi40MTAzMyAyOC4xNDkyIDcuNDAzMTZDMjEuMjYyNSAxMy42MDEyIDE0LjQ2MiAzNS4xMjIgMjEuMjYyNSA0MC4yODdDMjMuMzI4NSA0MS45MjI1IDI1LjczODkgNDIuNDM5IDI3Ljk3NyA0Mi40MzlaIiBmaWxsPSIjRjRGNEVDIi8+CjxwYXRoIGQ9Ik0yNy45NzcgNDIuNDM5QzM0LjM0NzIgNDIuNDM5IDM5LjQyNjEgMzguMzkzMSAzOS41MTIyIDMzLjU3MjVDMzkuNzcwNCAyMi4yOTU2IDMzLjc0NDYgMi40MTAzMyAyOC4xNDkyIDcuNDAzMTZDMjEuMjYyNSAxMy42MDEyIDE0LjQ2MiAzNS4xMjIgMjEuMjYyNSA0MC4yODdDMjMuMzI4NSA0MS45MjI1IDI1LjczODkgNDIuNDM5IDI3Ljk3NyA0Mi40MzlaIiBmaWxsPSIjRThFNEQ3IiBzdHJva2U9IiM1RTU4NEUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIvPgo8cGF0aCBkPSJNMjkuNTI2NiAxMy4xNzA3QzI5LjUyNjYgMTMuMTcwNyAyNy44OTEgNDMuOTg4NSAyOC4yMzUzIDUwLjQ0NDhMMjkuNTI2NiAxMy4xNzA3WiIgZmlsbD0iI0Y0RjRFQyIvPgo8cGF0aCBkPSJNMjkuNTI2NiAxMy4xNzA3QzI5LjUyNjYgMTMuMTcwNyAyNy44OTEgNDMuOTg4NSAyOC4yMzUzIDUwLjQ0NDgiIHN0cm9rZT0iIzVFNTg0RSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPHBhdGggZD0iTTI4LjMyMTQgMzYuMzI3MUMyOC4zMjE0IDM2LjMyNzEgMjMuNjcyOSAyOS4zNTQ0IDIyLjU1MzggMjcuNDYwNUwyOC4zMjE0IDM2LjMyNzFaIiBmaWxsPSIjRjRGNEVDIi8+CjxwYXRoIGQ9Ik0yOC4zMjE0IDM2LjMyNzFDMjguMzIxNCAzNi4zMjcxIDIzLjY3MjkgMjkuMzU0NCAyMi41NTM4IDI3LjQ2MDUiIHN0cm9rZT0iIzVFNTg0RSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPHBhdGggZD0iTTMzLjgzMDcgMTcuOTkxNEMzMi4xOTUxIDE5Ljg4NTIgMzAuNDczNSAyMi41NTM4IDI5LjE4MjIgMjQuMzYxNkwzMy44MzA3IDE3Ljk5MTRaIiBmaWxsPSIjRjRGNEVDIi8+CjxwYXRoIGQ9Ik0zMy44MzA3IDE3Ljk5MTRDMzIuMTk1MSAxOS44ODUyIDMwLjQ3MzUgMjIuNTUzOCAyOS4xODIyIDI0LjM2MTYiIHN0cm9rZT0iIzVFNTg0RSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPHBhdGggZD0iTTM1LjIwOCAyNC43OTJDMzMuNTcyNSAyNi42ODU4IDMwLjU1OTUgMjkuMDEgMjguNzUxOCAzMC44MTc4TDM1LjIwOCAyNC43OTJaIiBmaWxsPSIjRjRGNEVDIi8+CjxwYXRoIGQ9Ik0zNS4yMDggMjQuNzkyQzMzLjU3MjUgMjYuNjg1OCAzMC41NTk1IDI5LjAxIDI4Ljc1MTggMzAuODE3OCIgc3Ryb2tlPSIjNUU1ODRFIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwIj4KPHJlY3Qgd2lkdGg9IjU4Ljk2NyIgaGVpZ2h0PSI2MCIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K"
                className=""
              ></img>
            </div>
            <div key={index} className="text-black font-normal text-left py-2 min-w-40">
              {item.toUpperCase()}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
