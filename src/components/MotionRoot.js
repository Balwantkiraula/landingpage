"use client";

import { MotionConfig } from "framer-motion";

export function MotionRoot({ children }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
