"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setTimeout(() => setMounted(true), 200)
  }, [])

  return (
    <section
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background:
          "linear-gradient(180deg, #0F172A 0%, #020617 60%, #020617 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient background glow */}
      <div
        style={{
          position: "absolute",
          width: "900px",
          height: "900px",
          background: "#1E293B",
          borderRadius: "50%",
          filter: "blur(200px)",
          opacity: 0.15,
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "900px",
          textAlign: "center",
          padding: "0 24px",
        }}
      >
        {/* LINE 1 */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: mounted ? 1 : 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          style={{
            fontSize: "clamp(3rem, 6vw, 4.5rem)",
            fontWeight: 600,
            color: "#E5E7EB",
            marginBottom: "12px",
            letterSpacing: "-0.02em",
          }}
        >
          Cloud-Native CI/CD Platform
        </motion.h1>

        {/* LINE 2 */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: mounted ? 1 : 0 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          style={{
            fontSize: "clamp(3rem, 6vw, 4.5rem)",
            fontWeight: 600,
            color: "#94A3B8",
            marginBottom: "32px",
            letterSpacing: "-0.02em",
          }}
        >
          for Modern DevOps Teams
        </motion.h1>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: mounted ? 1 : 0 }}
          transition={{ duration: 1.2, delay: 0.9 }}
          style={{
            fontSize: "1.125rem",
            lineHeight: 1.7,
            color: "#9CA3AF",
            maxWidth: "680px",
            margin: "0 auto 56px",
          }}
        >
          Deploy with confidence using Kubernetes-native pipelines. Automated
          builds, real-time logs, and seamless integrations — powered by Tekton
          and Argo Workflows.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: mounted ? 1 : 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <button
            style={{
              padding: "16px 32px",
              borderRadius: "14px",
              background: "#E5E7EB",
              color: "#020617",
              fontWeight: 600,
              fontSize: "1rem",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
            }}
          >
            Get Started Free →
          </button>

          <button
            style={{
              padding: "16px 32px",
              borderRadius: "14px",
              background: "rgba(30,41,59,0.6)",
              color: "#E5E7EB",
              fontWeight: 500,
              fontSize: "1rem",
              border: "1px solid rgba(148,163,184,0.12)",
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",
              cursor: "pointer",
            }}
          >
            View Architecture
          </button>
        </motion.div>
      </div>
    </section>
  )
}
