"use client";

import { motion } from "framer-motion";
import React from "react";

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.main
      className="flex-grow"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.main>
  );
}