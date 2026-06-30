import React, { useState, useEffect } from "react";

// Full Day-by-Day Roadmap Data Structure
const PHASES = [
  {
    id: "phase1",
    title: "PHASE 1: THE SANDBOX REVERSE-ENGINEERING & HABIT RESET",
    dates: "June 30 – July 26, 2026",
    color: "#F59E0B",
    dimColor: "rgba(245, 158, 11, 0.15)",
    glowColor: "rgba(245, 158, 11, 0.4)",
    weeks: [
      {
        id: "p1_w1",
        number: 1,
        dates: "June 30 - July 3",
        intensity: 5,
        focus: "Overcoming the Tutorial Trap",
        days: [
          {
            id: "p1_w1_d1",
            date: "June 30, 2026",
            tasks: [
              { id: "p1_w1_d1_t1", text: "💻 LeetCode #1 (Two Sum) typed out manually line-by-line.", type: "dsa" },
              { id: "p1_w1_d1_t2", text: "🛠 Sandbox Method: Open CUJ PYQ Portal codebase, locate the API routing folder, trace how requests pass from frontend to backend.", type: "build" },
              { id: "p1_w1_d1_t3", text: "🎤 Voice record a 2-minute raw walkthrough of the PYQ portal, list all filler words used.", type: "comm" },
              { id: "p1_w1_d1_t4", text: "🏋️ Study Bracing & Valsalva mechanics (Alan Thrall video analysis).", type: "lifting" }
            ]
          },
          {
            id: "p1_w1_d2",
            date: "July 1, 2026",
            tasks: [
              { id: "p1_w1_d2_t1", text: "💻 LeetCode Easy (String problem).", type: "dsa" },
              { id: "p1_w1_d2_t2", text: "🛠 Sandbox Method: Delete the Express route handler for a single endpoint in your local PYQ portal environment, watch it crash, and type it back from memory.", type: "build" },
              { id: "p1_w1_d2_t3", text: "🛠 Git: Practice CLI commands (git init, git add, git commit).", type: "build" },
              { id: "p1_w1_d2_t4", text: "🏋️ Review Squat stance fundamentals (Calgary Barbell video analysis).", type: "lifting" }
            ]
          },
          {
            id: "p1_w1_d3",
            date: "July 2, 2026",
            tasks: [
              { id: "p1_w1_d3_t1", text: "💻 LeetCode Easy.", type: "dsa" },
              { id: "p1_w1_d3_t2", text: "🛠 Sandbox Method: Trace how MongoDB queries (Mongoose models) pull data inside the catalog.", type: "build" },
              { id: "p1_w1_d3_t3", text: "🛠 Git: Practice branching and merging locally via CLI.", type: "build" },
              { id: "p1_w1_d3_t4", text: "🎤 Read an English tech article out loud for 5 minutes.", type: "comm" },
              { id: "p1_w1_d3_t5", text: "🏋️ Check out Nizamabad/Telangana Powerlifting groups on social media.", type: "lifting" }
            ]
          },
          {
            id: "p1_w1_d4",
            date: "July 3, 2026",
            tasks: [
              { id: "p1_w1_d4_t1", text: "💻 LeetCode Easy.", type: "dsa" },
              { id: "p1_w1_d4_t2", text: "🛠 Sandbox Method: Document the complete data flow of the AI-OCR pipeline from Ghostscript upload to Tesseract.js extraction.", type: "build" },
              { id: "p1_w1_d4_t3", text: "🛠 Git: Simulating and resolving a merge conflict on a test file.", type: "build" },
              { id: "p1_w1_d4_t4", text: "🏋️ DM @ts_powerlifting on Instagram to verify 2027 district calendar baselines.", type: "lifting" },
              { id: "p1_w1_d4_t5", text: "🏋️ Buy lifting chalk.", type: "lifting" }
            ]
          }
        ]
      },
      {
        id: "p1_w2",
        number: 2,
        dates: "July 4 - July 10",
        intensity: 6,
        focus: "Java OOP Muscle Memory & Linux Tools",
        days: [
          {
            id: "p1_w2_d1",
            date: "July 4, 2026",
            tasks: [
              { id: "p1_w2_d1_t1", text: "💻 LeetCode Easy daily.", type: "dsa" },
              { id: "p1_w2_d1_t2", text: "🛠 Hand-write core Java OOP code blocks (Classes, Constructors, Polymorphism, Method Overriding) inside a basic text editor without AI tools or autocomplete.", type: "build" },
              { id: "p1_w2_d1_t3", text: "🏋️ Track protein targets with MyFitnessPal (Target: 118.8g protein - Weight 66kg x 1.8g).", type: "lifting" }
            ]
          },
          {
            id: "p1_w2_d2",
            date: "July 5, 2026",
            tasks: [
              { id: "p1_w2_d2_t1", text: "💻 LeetCode Easy daily.", type: "dsa" },
              { id: "p1_w2_d2_t2", text: "🛠 Linux: Practice essential server navigation tools (cd, ls, mkdir, grep, basic SSH setup).", type: "build" },
              { id: "p1_w2_d2_t3", text: "🏋️ Keep macro tracking consistent on MyFitnessPal.", type: "lifting" }
            ]
          },
          {
            id: "p1_w2_d3",
            date: "July 6, 2026",
            tasks: [
              { id: "p1_w2_d3_t1", text: "💻 LeetCode Easy daily.", type: "dsa" },
              { id: "p1_w2_d3_t2", text: "🛠 Tools: Set up Postman to manually test the API endpoints of your PYQ portal.", type: "build" },
              { id: "p1_w2_d3_t3", text: "🏋️ Squat session: Record training metrics and analyze stance depth.", type: "lifting" }
            ]
          },
          {
            id: "p1_w2_d4",
            date: "July 7, 2026",
            tasks: [
              { id: "p1_w2_d4_t1", text: "💻 LeetCode Easy daily.", type: "dsa" },
              { id: "p1_w2_d4_t2", text: "🛠 Toggle LinkedIn 'Open to Work' for internships.", type: "build" },
              { id: "p1_w2_d4_t3", text: "🏋️ Review bench press setup: scapular retraction.", type: "lifting" }
            ]
          },
          {
            id: "p1_w2_d5",
            date: "July 8, 2026",
            tasks: [
              { id: "p1_w2_d5_t1", text: "💻 LeetCode Easy daily.", type: "dsa" },
              { id: "p1_w2_d5_t2", text: "🛠 Linux: practice terminal piping and file search commands.", type: "build" },
              { id: "p1_w2_d5_t3", text: "🏋️ Focus deadlift bracing: engage lats, pull slack out of bar.", type: "lifting" }
            ]
          },
          {
            id: "p1_w2_d6",
            date: "July 9, 2026",
            tasks: [
              { id: "p1_w2_d6_t1", text: "💻 LeetCode Easy daily.", type: "dsa" },
              { id: "p1_w2_d6_t2", text: "🛠 Postman: Save endpoints in collection and test response formats.", type: "build" },
              { id: "p1_w2_d6_t3", text: "🏋️ Powerlifting: Review district calendar timeline milestones.", type: "lifting" }
            ]
          },
          {
            id: "p1_w2_d7",
            date: "July 10, 2026",
            tasks: [
              { id: "p1_w2_d7_t1", text: "💻 LeetCode Easy daily.", type: "dsa" },
              { id: "p1_w2_d7_t2", text: "🛠 Write custom Java OOP sample projects using terminal compilation.", type: "build" },
              { id: "p1_w2_d7_t3", text: "🎤 Voice record a 2-minute walkthrough of the week's accomplishments.", type: "comm" }
            ]
          }
        ]
      },
      {
        id: "p1_w3",
        number: 3,
        dates: "July 11 - July 17",
        intensity: 7,
        focus: "Certification Wrap-up & Core Structures",
        days: [
          {
            id: "p1_w3_d1",
            date: "July 11, 2026",
            tasks: [
              { id: "p1_w3_d1_t1", text: "🛠 Finish and submit the final modules of the IIT Jammu x Techible Full-Stack Certification.", type: "build" },
              { id: "p1_w3_d1_t2", text: "💻 Transition to Java Collections syntax: ArrayList manual coding.", type: "dsa" }
            ]
          },
          {
            id: "p1_w3_d2",
            date: "July 12, 2026",
            tasks: [
              { id: "p1_w3_d2_t1", text: "🛠 Pin the certification directly on LinkedIn upon completion.", type: "build" },
              { id: "p1_w3_d2_t2", text: "💻 Java Collections: Write HashMap string frequency algorithms by hand.", type: "dsa" }
            ]
          },
          {
            id: "p1_w3_d3",
            date: "July 13, 2026",
            tasks: [
              { id: "p1_w3_d3_t1", text: "🎓 Core Data Structures: Master Linked Lists using visualization tools.", type: "academics" },
              { id: "p1_w3_d3_t2", text: "💻 Solve 1 LeetCode Linked List traversal problem.", type: "dsa" }
            ]
          },
          {
            id: "p1_w3_d4",
            date: "July 14, 2026",
            tasks: [
              { id: "p1_w3_d4_t1", text: "🎓 Core Data Structures: Study Stack architecture, properties & overflow/underflow.", type: "academics" },
              { id: "p1_w3_d4_t2", text: "💻 Implement custom stack in Java.", type: "dsa" }
            ]
          },
          {
            id: "p1_w3_d5",
            date: "July 15, 2026",
            tasks: [
              { id: "p1_w3_d5_t1", text: "🎓 Core Data Structures: Study Queue architecture and dequeue patterns.", type: "academics" },
              { id: "p1_w3_d5_t2", text: "💻 Implement custom queue in Java using ArrayDeque.", type: "dsa" }
            ]
          },
          {
            id: "p1_w3_d6",
            date: "July 16, 2026",
            tasks: [
              { id: "p1_w3_d6_t1", text: "💻 Solve 1 LeetCode Stack-based problem (Valid Parentheses).", type: "dsa" },
              { id: "p1_w3_d6_t2", text: "🎤 Voice record 2-minute explanation of stack vs queue differences.", type: "comm" }
            ]
          },
          {
            id: "p1_w3_d7",
            date: "July 17, 2026",
            tasks: [
              { id: "p1_w3_d7_t1", text: "🛠 Double check certification updates on LinkedIn page.", type: "build" },
              { id: "p1_w3_d7_t2", text: "🏋️ Powerlifting: Review squat form and macro target compliance.", type: "lifting" }
            ]
          }
        ]
      },
      {
        id: "p1_w4",
        number: 4,
        dates: "July 18 - July 26",
        intensity: 7,
        focus: "Architectural Deep Dive & MNC Prep",
        days: [
          {
            id: "p1_w4_d1",
            date: "July 18, 2026",
            tasks: [
              { id: "p1_w4_d1_t1", text: "💻 Dive into structural patterns (Two-Pointer pattern concepts).", type: "dsa" },
              { id: "p1_w4_d1_t2", text: "🎓 Core CS: Review DBMS normalization forms (1NF).", type: "academics" }
            ]
          },
          {
            id: "p1_w4_d2",
            date: "July 19, 2026",
            tasks: [
              { id: "p1_w4_d2_t1", text: "💻 Dive into structural patterns (Sliding Window patterns).", type: "dsa" },
              { id: "p1_w4_d2_t2", text: "🎓 Core CS: Review DBMS normalization forms (2NF).", type: "academics" }
            ]
          },
          {
            id: "p1_w4_d3",
            date: "July 20, 2026",
            tasks: [
              { id: "p1_w4_d3_t1", text: "🛠 Reverse-engineer the JWT HTTP-only cookie authentication mechanism inside the PYQ portal.", type: "build" },
              { id: "p1_w4_d3_t2", text: "🎓 Core CS: Review DBMS normalization forms (3NF).", type: "academics" }
            ]
          },
          {
            id: "p1_w4_d4",
            date: "July 21, 2026",
            tasks: [
              { id: "p1_w4_d4_t1", text: "🛠 Type the authentication middleware function out from a blank screen.", type: "build" },
              { id: "p1_w4_d4_t2", text: "🎓 Core CS: Review SQL join syntax (INNER, LEFT, RIGHT, FULL).", type: "academics" }
            ]
          },
          {
            id: "p1_w4_d5",
            date: "July 22, 2026",
            tasks: [
              { id: "p1_w4_d5_t1", text: "🎤 Weekly Aptitude Practice (Probability & Logical Reasoning screening prep).", type: "comm" },
              { id: "p1_w4_d5_t2", text: "💻 Solve 2 LeetCode Sliding Window problems.", type: "dsa" }
            ]
          },
          {
            id: "p1_w4_d6",
            date: "July 23, 2026",
            tasks: [
              { id: "p1_w4_d6_t1", text: "🎤 Weekly Aptitude Practice: Logical Reasoning patterns.", type: "comm" },
              { id: "p1_w4_d6_t2", text: "💻 Solve 2 LeetCode Two-Pointer problems.", type: "dsa" }
            ]
          },
          {
            id: "p1_w4_d7",
            date: "July 24, 2026",
            tasks: [
              { id: "p1_w4_d7_t1", text: "💻 Review Phase 1 progress: Target 35+ LeetCode problems fully mastered.", type: "dsa" },
              { id: "p1_w4_d7_t2", text: "🛠 Authenticate local endpoints using JWT middleware configuration.", type: "build" }
            ]
          },
          {
            id: "p1_w4_d8",
            date: "July 25, 2026",
            tasks: [
              { id: "p1_w4_d8_t1", text: "🏋️ Equipped powerlifting gear check: wrist wraps and lift chalk.", type: "lifting" },
              { id: "p1_w4_d8_t2", text: "💻 Solve LeetCode problems to hit targets.", type: "dsa" }
            ]
          },
          {
            id: "p1_w4_d9",
            date: "July 26, 2026",
            tasks: [
              { id: "p1_w4_d9_t1", text: "🎓 Verify backlog files and prepare for 7th Sem starting tomorrow.", type: "academics" },
              { id: "p1_w4_d9_t2", text: "🎤 Voice record Phase 1 summary walk-through.", type: "comm" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "phase2",
    title: "PHASE 2: 7TH SEM BEAST MODE & BACKLOG ERASURE",
    dates: "July 27 – December 2026",
    color: "#8B5CF6",
    dimColor: "rgba(139, 92, 246, 0.15)",
    glowColor: "rgba(139, 92, 246, 0.4)",
    weeks: [
      {
        id: "p2_w5",
        number: 5,
        dates: "July 27 - August 9",
        intensity: 8,
        focus: "SIH Team Formations & Socket.io",
        days: [
          {
            id: "p2_w5_d1",
            date: "July 27, 2026",
            tasks: [
              { id: "p2_w5_d1_t1", text: "🎓 7th Semester officially starts. Locate classroom blocks.", type: "academics" },
              { id: "p2_w5_d1_t2", text: "🏆 Locate the SIH 2026 SPOC within the CS department.", type: "hackathon" }
            ]
          },
          {
            id: "p2_w5_d2",
            date: "July 28, 2026",
            tasks: [
              { id: "p2_w5_d2_t1", text: "🏆 Assemble a balanced 6-member hackathon team (minimum 1 female member mandatory).", type: "hackathon" },
              { id: "p2_w5_d2_t2", text: "🎓 Isolate 1.5 hours daily for 3rd and 5th-semester backlog coursework.", type: "academics" }
            ]
          },
          {
            id: "p2_w5_d3",
            date: "July 29, 2026",
            tasks: [
              { id: "p2_w5_d3_t1", text: "🛠 Sandbox Project: Build a real-time Socket.io Chat App completely from scratch to learn web sockets.", type: "build" },
              { id: "p2_w5_d3_t2", text: "💻 Grind Trees logic patterns.", type: "dsa" }
            ]
          },
          {
            id: "p2_w5_d4",
            date: "July 30, 2026",
            tasks: [
              { id: "p2_w5_d4_t1", text: "🛠 Socket.io Chat App: Set up server rooms and connection events.", type: "build" },
              { id: "p2_w5_d4_t2", text: "💻 Grind Graphs logic patterns.", type: "dsa" }
            ]
          },
          {
            id: "p2_w5_d5",
            date: "July 31, 2026",
            tasks: [
              { id: "p2_w5_d5_t1", text: "🛠 Socket.io Chat App: Establish state sync mechanism.", type: "build" },
              { id: "p2_w5_d5_t2", text: "🎓 Backlog: Study 3rd sem Object-Oriented Analysis & Design concepts.", type: "academics" }
            ]
          },
          {
            id: "p2_w5_d6",
            date: "August 1, 2026",
            tasks: [
              { id: "p2_w5_d6_t1", text: "🛠 Socket.io Chat App: Code room joining frontend interface.", type: "build" },
              { id: "p2_w5_d6_t2", text: "🎓 Backlog: Study 5th sem databases queries.", type: "academics" }
            ]
          },
          {
            id: "p2_w5_d7",
            date: "August 2, 2026",
            tasks: [
              { id: "p2_w5_d7_t1", text: "💻 Solve 2 LeetCode Tree problems.", type: "dsa" },
              { id: "p2_w5_d7_t2", text: "🏋️ Heavy squat day: Record bracing metrics.", type: "lifting" }
            ]
          },
          {
            id: "p2_w5_d8",
            date: "August 3, 2026",
            tasks: [
              { id: "p2_w5_d8_t1", text: "🎓 Attend core 7th-sem lectures: Compiler Design & OS.", type: "academics" },
              { id: "p2_w5_d8_t2", text: "💻 Solve 2 LeetCode Graph traversal problems.", type: "dsa" }
            ]
          },
          {
            id: "p2_w5_d9",
            date: "August 4, 2026",
            tasks: [
              { id: "p2_w5_d9_t1", text: "🏆 SIH: Brainstorm problem statement ideas with team.", type: "hackathon" },
              { id: "p2_w5_d9_t2", text: "🛠 Socket.io Chat App: Build typing indicator states.", type: "build" }
            ]
          },
          {
            id: "p2_w5_d10",
            date: "August 5, 2026",
            tasks: [
              { id: "p2_w5_d10_t1", text: "💻 Grind Trees traversals algorithms.", type: "dsa" },
              { id: "p2_w5_d10_t2", text: "🎓 Backlog: Study 3rd sem OS structures.", type: "academics" }
            ]
          },
          {
            id: "p2_w5_d11",
            date: "August 6, 2026",
            tasks: [
              { id: "p2_w5_d11_t1", text: "🛠 Socket.io Chat App: Integrate database logs storage.", type: "build" },
              { id: "p2_w5_d11_t2", text: "🏋️ Powerlifting: Focus on equipped bench setup.", type: "lifting" }
            ]
          },
          {
            id: "p2_w5_d12",
            date: "August 7, 2026",
            tasks: [
              { id: "p2_w5_d12_t1", text: "🎓 Backlog: Study 3rd sem Data Structures theory.", type: "academics" },
              { id: "p2_w5_d12_t2", text: "🎤 Voice record a 2-minute project architecture overview.", type: "comm" }
            ]
          },
          {
            id: "p2_w5_d13",
            date: "August 8, 2026",
            tasks: [
              { id: "p2_w5_d13_t1", text: "🛠 Socket.io Chat App: Push code to Github, write README.md.", type: "build" },
              { id: "p2_w5_d13_t2", text: "💻 Solve 1 Graph Dijkstra's algorithm problem.", type: "dsa" }
            ]
          },
          {
            id: "p2_w5_d14",
            date: "August 9, 2026",
            tasks: [
              { id: "p2_w5_d14_t1", text: "🏆 SIH: Run prototype database design checks.", type: "hackathon" },
              { id: "p2_w5_d14_t2", text: "🏋️ Rest and recovery validation.", type: "lifting" }
            ]
          }
        ]
      },
      {
        id: "p2_w6",
        number: 6,
        dates: "August 10 - September 6",
        intensity: 9,
        focus: "SIH Prototypes Sprint & Portfolio",
        days: [
          {
            id: "p2_w6_d1",
            date: "August 10, 2026",
            tasks: [
              { id: "p2_w6_d1_t1", text: "🏆 SIH: Run rapid team sprint to wireframe the core product.", type: "hackathon" },
              { id: "p2_w6_d1_t2", text: "💻 DSA: Kadane’s Algorithm (LeetCode Medium).", type: "dsa" }
            ]
          },
          {
            id: "p2_w6_d2",
            date: "August 15, 2026",
            tasks: [
              { id: "p2_w6_d2_t1", text: "🏆 SIH: Build mock schema endpoints and deploy initial server APIs.", type: "hackathon" },
              { id: "p2_w6_d2_t2", text: "💻 DSA: 3Sum (LeetCode Medium).", type: "dsa" }
            ]
          },
          {
            id: "p2_w6_d3",
            date: "August 20, 2026",
            tasks: [
              { id: "p2_w6_d3_t1", text: "🏆 SIH: Complete dashboard layout frontend client integration.", type: "hackathon" },
              { id: "p2_w6_d3_t2", text: "💻 DSA: Merge Intervals (LeetCode Medium).", type: "dsa" }
            ]
          },
          {
            id: "p2_w6_d4",
            date: "August 25, 2026",
            tasks: [
              { id: "p2_w6_d4_t1", text: "🛠 Build: Launch React Minimalist Portfolio Site highlighting live links.", type: "build" },
              { id: "p2_w6_d4_t2", text: "💻 DSA: Grind 2 LeetCode Mediums daily.", type: "dsa" }
            ]
          },
          {
            id: "p2_w6_d5",
            date: "August 30, 2026",
            tasks: [
              { id: "p2_w6_d5_t1", text: "🏆 SIH: Run final integration testing and deploy live URL.", type: "hackathon" },
              { id: "p2_w6_d5_t2", text: "💻 DSA: Grind 2 LeetCode Mediums daily.", type: "dsa" }
            ]
          },
          {
            id: "p2_w6_d6",
            date: "September 5, 2026",
            tasks: [
              { id: "p2_w6_d6_t1", text: "🏆 SIH: Run final product walk-through and compile PDF presentation.", type: "hackathon" },
              { id: "p2_w6_d6_t2", text: "🎤 Perform mock presentation pitching and review gaps.", type: "comm" }
            ]
          },
          {
            id: "p2_w6_d7",
            date: "September 6, 2026",
            tasks: [
              { id: "p2_w6_d7_t1", text: "🏆 SIH: SIH 2026 registration closes strictly today. Finalize submission.", type: "hackathon" },
              { id: "p2_w6_d7_t2", text: "💻 DSA: 2 LeetCode Mediums to preserve streak.", type: "dsa" }
            ]
          }
        ]
      },
      {
        id: "p2_w7",
        number: 7,
        dates: "September 7 - October 2026",
        intensity: 9,
        focus: "LeetCode 100+ & Pramp Interviews",
        days: [
          {
            id: "p2_w7_d1",
            date: "September 7, 2026",
            tasks: [
              { id: "p2_w7_d1_t1", text: "💻 DSA: Cross the milestone of 100+ LeetCode problems.", type: "dsa" },
              { id: "p2_w7_d1_t2", text: "🏋️ 2027 District Prep: Commit to a dedicated strength block. Record squat logs.", type: "lifting" }
            ]
          },
          {
            id: "p2_w7_d2",
            date: "September 14, 2026",
            tasks: [
              { id: "p2_w7_d2_t1", text: "💻 Formulate technical fluency: Pramp.com mock interview. Practice 'Think Aloud'.", type: "dsa" },
              { id: "p2_w7_d2_t2", text: "🏋️ Record squat logs and monitor stance changes.", type: "lifting" }
            ]
          },
          {
            id: "p2_w7_d3",
            date: "September 21, 2026",
            tasks: [
              { id: "p2_w7_d3_t1", text: "💻 Solve 2 LeetCode Mediums on Graph algorithms.", type: "dsa" },
              { id: "p2_w7_d3_t2", text: "🏋️ Record deadlift logs, focus on bracing alignment.", type: "lifting" }
            ]
          },
          {
            id: "p2_w7_d4",
            date: "September 28, 2026",
            tasks: [
              { id: "p2_w7_d4_t1", text: "💻 Pramp.com mock coding interview: Solve array challenges.", type: "dsa" },
              { id: "p2_w7_d4_t2", text: "🏋️ Record bench press training metrics.", type: "lifting" }
            ]
          },
          {
            id: "p2_w7_d5",
            date: "October 5, 2026",
            tasks: [
              { id: "p2_w7_d5_t1", text: "💻 Solve 2 LeetCode Mediums on Dynamic Programming patterns.", type: "dsa" },
              { id: "p2_w7_d5_t2", text: "🏋️ Maintain consistency in evening lifting schedules.", type: "lifting" }
            ]
          },
          {
            id: "p2_w7_d6",
            date: "October 15, 2026",
            tasks: [
              { id: "p2_w7_d6_t1", text: "💻 Pramp.com mock coding interview: Solve graph algorithms.", type: "dsa" },
              { id: "p2_w7_d6_t2", text: "🏋️ Powerlifting strength block evaluation.", type: "lifting" }
            ]
          },
          {
            id: "p2_w7_d7",
            date: "October 31, 2026",
            tasks: [
              { id: "p2_w7_d7_t1", text: "💻 Complete weekly LeetCode review checklist.", type: "dsa" },
              { id: "p2_w7_d7_t2", text: "🏋️ Verify bracing stability under maximum loads.", type: "lifting" }
            ]
          }
        ]
      },
      {
        id: "p2_w8",
        number: 8,
        dates: "November - December 2026",
        intensity: 10,
        focus: "Backlogs Erasure & Semester Finals",
        days: [
          {
            id: "p2_w8_d1",
            date: "November 1, 2026",
            tasks: [
              { id: "p2_w8_d1_t1", text: "🎓 Academics: Dedicate 4 hours daily to erasing all 5 pending backlogs.", type: "academics" },
              { id: "p2_w8_d1_t2", text: "💻 DSA: Maintain LeetCode streak (1 targeted problem daily).", type: "dsa" }
            ]
          },
          {
            id: "p2_w8_d2",
            date: "November 10, 2026",
            tasks: [
              { id: "p2_w8_d2_t1", text: "🎓 Academics: Deep-dive into 3rd-semester backlog syllabus revision.", type: "academics" },
              { id: "p2_w8_d2_t2", text: "💻 DSA: 1 targeted problem to keep streak.", type: "dsa" }
            ]
          },
          {
            id: "p2_w8_d3",
            date: "November 20, 2026",
            tasks: [
              { id: "p2_w8_d3_t1", text: "🎓 Academics: Deep-dive into 5th-semester backlog syllabus revision.", type: "academics" },
              { id: "p2_w8_d3_t2", text: "💻 DSA: LeetCode Easy/Medium daily.", type: "dsa" }
            ]
          },
          {
            id: "p2_w8_d4",
            date: "December 1, 2026",
            tasks: [
              { id: "p2_w8_d4_t1", text: "🎓 Academics: Practice answering backlog papers using CUJ PYQ Portal.", type: "academics" },
              { id: "p2_w8_d4_t2", text: "💻 DSA: Keep streak alive.", type: "dsa" }
            ]
          },
          {
            id: "p2_w8_d5",
            date: "December 10, 2026",
            tasks: [
              { id: "p2_w8_d5_t1", text: "🎓 Academics: Backlog exams commencement - study 4 hours daily.", type: "academics" },
              { id: "p2_w8_d5_t2", text: "💻 DSA: LeetCode daily problem.", type: "dsa" }
            ]
          },
          {
            id: "p2_w8_d6",
            date: "December 20, 2026",
            tasks: [
              { id: "p2_w8_d6_t1", text: "🎓 Academics: 7th-semester regular examinations commencement.", type: "academics" },
              { id: "p2_w8_d6_t2", text: "💻 DSA: Keep streak alive.", type: "dsa" }
            ]
          },
          {
            id: "p2_w8_d7",
            date: "December 31, 2026",
            tasks: [
              { id: "p2_w8_d7_t1", text: "🎓 Academics: Confirm all 5 backlogs cleared successfully for 6.97+ final graduation CGPA.", type: "academics" },
              { id: "p2_w8_d7_t2", text: "💻 DSA: Target 130+ LeetCode problems documented.", type: "dsa" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "phase3",
    title: "PHASE 3: STARTUP INTERNSHIP BLITZ & ATHLETIC PLATFORM PREP",
    dates: "January – February 2027",
    color: "#EF4444",
    dimColor: "rgba(239, 68, 68, 0.15)",
    glowColor: "rgba(239, 68, 68, 0.4)",
    weeks: [
      {
        id: "p3_w9",
        number: 9,
        dates: "January 2027",
        intensity: 10,
        focus: "LeetCode 150+ & STAR Framework Profiles",
        days: [
          {
            id: "p3_w9_d1",
            date: "January 1, 2027",
            tasks: [
              { id: "p3_w9_d1_t1", text: "💻 DSA: Hit 3 LeetCode Mediums daily.", type: "dsa" },
              { id: "p3_w9_d1_t2", text: "🛠 Career: Scale applications to 5 startups per day via Wellfound.", type: "build" }
            ]
          },
          {
            id: "p3_w9_d2",
            date: "January 5, 2027",
            tasks: [
              { id: "p3_w9_d2_t1", text: "💻 DSA: Grind 3 LeetCode Mediums daily.", type: "dsa" },
              { id: "p3_w9_d2_t2", text: "🛠 Career: Scale applications to 5 startups per day via Internshala.", type: "build" }
            ]
          },
          {
            id: "p3_w9_d3",
            date: "January 10, 2027",
            tasks: [
              { id: "p3_w9_d3_t1", text: "💻 DSA: Break the 150+ problem milestone.", type: "dsa" },
              { id: "p3_w9_d3_t2", text: "🛠 Career: Format behavioral answers utilizing the STAR framework mapped to actual PYQ portal deployment hurdles.", type: "build" }
            ]
          },
          {
            id: "p3_w9_d4",
            date: "January 15, 2027",
            tasks: [
              { id: "p3_w9_d4_t1", text: "💻 DSA: Solve LeetCode problems on graphs and backtracking.", type: "dsa" },
              { id: "p3_w9_d4_t2", text: "🛠 Career: Wellfound applications tracking updates.", type: "build" }
            ]
          },
          {
            id: "p3_w9_d5",
            date: "January 20, 2027",
            tasks: [
              { id: "p3_w9_d5_t1", text: "💻 DSA: Hit 3 LeetCode Mediums.", type: "dsa" },
              { id: "p3_w9_d5_t2", text: "🛠 Career: Apply for paid Sem 8 startup SDE internships.", type: "build" }
            ]
          },
          {
            id: "p3_w9_d6",
            date: "January 25, 2027",
            tasks: [
              { id: "p3_w9_d6_t1", text: "💻 DSA: Grind Medium problems.", type: "dsa" },
              { id: "p3_w9_d6_t2", text: "🎤 Practice mock behavioral questions with video recordings.", type: "comm" }
            ]
          },
          {
            id: "p3_w9_d7",
            date: "January 31, 2027",
            tasks: [
              { id: "p3_w9_d7_t1", text: "💻 DSA: 150+ milestone completed and documented.", type: "dsa" },
              { id: "p3_w9_d7_t2", text: "🛠 Career: Follow up on screening test evaluations.", type: "build" }
            ]
          }
        ]
      },
      {
        id: "p3_w10",
        number: 10,
        dates: "February 2027",
        intensity: 10,
        focus: "District Meet Launch & SDE Interfacing",
        days: [
          {
            id: "p3_w10_d1",
            date: "February 1, 2027",
            tasks: [
              { id: "p3_w10_d1_t1", text: "🛠 Career: High-volume SDE internship application follow-ups.", type: "build" },
              { id: "p3_w10_d1_t2", text: "🏋️ Powerlifting Meet Action: Submit your official Telangana Powerlifting Association (TPA) annual athlete card registration (Aadhaar, photo, fee processing).", type: "lifting" }
            ]
          },
          {
            id: "p3_w10_d2",
            date: "February 5, 2027",
            tasks: [
              { id: "p3_w10_d2_t1", text: "🛠 Career: Follow up with recruiters on Wellfound.", type: "build" },
              { id: "p3_w10_d2_t2", text: "🏋️ Powerlifting Meet Action: Submit the specific 66kg Equipped Category District Entry form.", type: "lifting" }
            ]
          },
          {
            id: "p3_w10_d3",
            date: "February 10, 2027",
            tasks: [
              { id: "p3_w10_d3_t1", text: "🛠 Career: Mock technical interviews (System Design & DS).", type: "build" },
              { id: "p3_w10_d3_t2", text: "🏋️ Powerlifting: Attempt selections based on heavy lift singles.", type: "lifting" }
            ]
          },
          {
            id: "p3_w10_d4",
            date: "February 15, 2027",
            tasks: [
              { id: "p3_w10_d4_t1", text: "💻 DSA: Solve 1 LeetCode Medium problem.", type: "dsa" },
              { id: "p3_w10_d4_t2", text: "🏋️ Powerlifting: Equipped gear checks and platform command runs.", type: "lifting" }
            ]
          },
          {
            id: "p3_w10_d5",
            date: "February 20, 2027",
            tasks: [
              { id: "p3_w10_d5_t1", text: "🎤 Career: Review STAR framework project summaries.", type: "comm" },
              { id: "p3_w10_d5_t2", text: "🏋️ Powerlifting: Begin light stretching and recovery routine.", type: "lifting" }
            ]
          },
          {
            id: "p3_w10_d6",
            date: "February 25, 2027",
            tasks: [
              { id: "p3_w10_d6_t1", text: "🛠 Career: Target internship contract signing.", type: "build" },
              { id: "p3_w10_d6_t2", text: "🏋️ Powerlifting: Manage nutritional water/food intake to nail the official 2-hour pre-meet weigh-in scale.", type: "lifting" }
            ]
          },
          {
            id: "p3_w10_d7",
            date: "February 28, 2027",
            tasks: [
              { id: "p3_w10_d7_t1", text: "🏋️ Powerlifting: Compete at the District Meet, executing all 9 command-timed platform attempts.", type: "lifting" },
              { id: "p3_w10_d7_t2", text: "🎤 Complete post-meet raw reflection recording.", type: "comm" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "phase4",
    title: "PHASE 4: CORPORATE RUNWAY & MNC CONQUEST",
    dates: "March 2027 Onwards",
    color: "#10B981",
    dimColor: "rgba(16, 185, 129, 0.15)",
    glowColor: "rgba(16, 185, 129, 0.4)",
    weeks: [
      {
        id: "p4_w11",
        number: 11,
        dates: "March - May 2027",
        intensity: 8,
        focus: "Startup Internship & Infrastructure",
        days: [
          {
            id: "p4_w11_d1",
            date: "March 1, 2027",
            tasks: [
              { id: "p4_w11_d1_t1", text: "🛠 Career: Onboard at your 6-month startup SDE internship. Configure local workspace.", type: "build" },
              { id: "p4_w11_d1_t2", text: "💻 DSA: Maintain LeetCode problem count.", type: "dsa" }
            ]
          },
          {
            id: "p4_w11_d2",
            date: "March 15, 2027",
            tasks: [
              { id: "p4_w11_d2_t1", text: "🛠 Career: Write backend integration tests using Jest for api layers.", type: "build" },
              { id: "p4_w11_d2_t2", text: "💻 DSA: Grind 1 LeetCode daily.", type: "dsa" }
            ]
          },
          {
            id: "p4_w11_d3",
            date: "April 1, 2027",
            tasks: [
              { id: "p4_w11_d3_t1", text: "🛠 Career: Study production deployment infrastructure (Docker files & parameters).", type: "build" },
              { id: "p4_w11_d3_t2", text: "💻 DSA: Grind 1 LeetCode daily.", type: "dsa" }
            ]
          },
          {
            id: "p4_w11_d4",
            date: "April 15, 2027",
            tasks: [
              { id: "p4_w11_d4_t1", text: "🛠 Career: Study production deployment infrastructure (AWS fundamentals).", type: "build" },
              { id: "p4_w11_d4_t2", text: "💻 DSA: Keep count up to 180+ problems.", type: "dsa" }
            ]
          },
          {
            id: "p4_w11_d5",
            date: "May 1, 2027",
            tasks: [
              { id: "p4_w11_d5_t1", text: "🛠 Career: Complete minor features at internship.", type: "build" },
              { id: "p4_w11_d5_t2", text: "💻 DSA: Maintain streak." }
            ]
          },
          {
            id: "p4_w11_d6",
            date: "May 15, 2027",
            tasks: [
              { id: "p4_w11_d6_t1", text: "🛠 Career: Optimize SQL queries and query caching systems.", type: "build" },
              { id: "p4_w11_d6_t2", text: "💻 DSA: Keep streak." }
            ]
          },
          {
            id: "p4_w11_d7",
            date: "May 31, 2027",
            tasks: [
              { id: "p4_w11_d7_t1", text: "🛠 Career: Document internship achievements for resume optimization.", type: "build" },
              { id: "p4_w11_d7_t2", text: "💻 DSA: Maintain problem count to clear 180+ threshold.", type: "dsa" }
            ]
          }
        ]
      },
      {
        id: "p4_w12",
        number: 12,
        dates: "June 2027+",
        intensity: 9,
        focus: "MNC Referral Blitz & SDE-1 Offer",
        days: [
          {
            id: "p4_w12_d1",
            date: "June 1, 2027",
            tasks: [
              { id: "p4_w12_d1_t1", text: "🛠 Career: Leverage 6 months of corporate SDE experience to bypass automated resume filters.", type: "build" },
              { id: "p4_w12_d1_t2", text: "🛠 Career: Initiate targeted LinkedIn Referral Strategy with SDE leads.", type: "build" }
            ]
          },
          {
            id: "p4_w12_d2",
            date: "June 5, 2027",
            tasks: [
              { id: "p4_w12_d2_t1", text: "🛠 Career: Target SDE-1 roles at Amazon, Adobe, Microsoft.", type: "build" },
              { id: "p4_w12_d2_t2", text: "🎤 Practice cold outreach templates and pitches.", type: "comm" }
            ]
          },
          {
            id: "p4_w12_d3",
            date: "June 10, 2027",
            tasks: [
              { id: "p4_w12_d3_t1", text: "🛠 Career: Reach out to SDE leads at Amazon.", type: "build" },
              { id: "p4_w12_d3_t2", text: "💻 DSA: Solve Amazon-specific coding rounds problems.", type: "dsa" }
            ]
          },
          {
            id: "p4_w12_d4",
            date: "June 15, 2027",
            tasks: [
              { id: "p4_w12_d4_t1", text: "🛠 Career: Reach out to SDE leads at Microsoft.", type: "build" },
              { id: "p4_w12_d4_t2", text: "💻 DSA: Solve Microsoft-specific coding rounds problems.", type: "dsa" }
            ]
          },
          {
            id: "p4_w12_d5",
            date: "June 20, 2027",
            tasks: [
              { id: "p4_w12_d5_t1", text: "🛠 Career: Reach out to SDE leads at Adobe.", type: "build" },
              { id: "p4_w12_d5_t2", text: "💻 DSA: Solve Adobe-specific coding rounds problems.", type: "dsa" }
            ]
          },
          {
            id: "p4_w12_d6",
            date: "June 25, 2027",
            tasks: [
              { id: "p4_w12_d6_t1", text: "🛠 Career: Practice mock System Design rounds.", type: "build" },
              { id: "p4_w12_d6_t2", text: "🎤 Mock behavioral interview sessions.", type: "comm" }
            ]
          },
          {
            id: "p4_w12_d7",
            date: "June 30, 2027",
            tasks: [
              { id: "p4_w12_d7_t1", text: "🛠 Career: Transition from startup intern directly into a full-time, high-paying SDE-1 role.", type: "build" },
              { id: "p4_w12_d7_t2", text: "🎓 Academics: Complete graduation from CUJ with definitive 6.97+ final graduation CGPA.", type: "academics" }
            ]
          }
        ]
      }
    ]
  }
];

const INTENSITY_COLORS = {
  1: "#93C5FD", 2: "#60A5FA", 3: "#3B82F6", 4: "#2563EB", 
  5: "#A78BFA", 6: "#8B5CF6", 7: "#F59E0B", 8: "#D97706",
  9: "#EF4444", 10: "#DC2626"
};

const INTENSITY_LABELS = {
  1: "Easy", 2: "Easy+", 3: "Moderate", 4: "Moderate+",
  5: "Hard", 6: "Hard+", 7: "Very Hard", 8: "Very Hard+",
  9: "Extreme", 10: "MAX 🔥"
};

const FILTERS = [
  { key: "all", label: "All Tasks", emoji: "⚡" },
  { key: "dsa", label: "DSA", emoji: "💻" },
  { key: "build", label: "Build/Java", emoji: "🛠" },
  { key: "academics", label: "Academics", emoji: "🎓" },
  { key: "lifting", label: "Powerlifting", emoji: "🏋️" },
  { key: "comm", label: "Communication", emoji: "🎤" }
];

export default function App() {
  // State management with localStorage persistence
  const [completedTasks, setCompletedTasks] = useState(() => {
    try {
      const saved = localStorage.getItem("prince_tracker_completed_tasks");
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [expandedPhases, setExpandedPhases] = useState(() => {
    try {
      const saved = localStorage.getItem("prince_tracker_expanded_phases");
      // Default Phase 1 to expanded
      return saved ? JSON.parse(saved) : { phase1: true };
    } catch {
      return { phase1: true };
    }
  });

  const [expandedWeeks, setExpandedWeeks] = useState(() => {
    try {
      const saved = localStorage.getItem("prince_tracker_expanded_weeks");
      // Default first week of Phase 1 to expanded
      return saved ? JSON.parse(saved) : { p1_w1: true };
    } catch {
      return { p1_w1: true };
    }
  });

  const [expandedDays, setExpandedDays] = useState(() => {
    try {
      const saved = localStorage.getItem("prince_tracker_expanded_days");
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [completedGaps, setCompletedGaps] = useState(() => {
    try {
      const saved = localStorage.getItem("prince_tracker_completed_gaps");
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [activeFilter, setActiveFilter] = useState("all");
  const [activeTab, setActiveTab] = useState("roadmap"); // "roadmap" or "gaps"
  const [routineExpanded, setRoutineExpanded] = useState(false);

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem("prince_tracker_completed_tasks", JSON.stringify(completedTasks));
  }, [completedTasks]);

  useEffect(() => {
    localStorage.setItem("prince_tracker_expanded_phases", JSON.stringify(expandedPhases));
  }, [expandedPhases]);

  useEffect(() => {
    localStorage.setItem("prince_tracker_expanded_weeks", JSON.stringify(expandedWeeks));
  }, [expandedWeeks]);

  useEffect(() => {
    localStorage.setItem("prince_tracker_expanded_days", JSON.stringify(expandedDays));
  }, [expandedDays]);

  useEffect(() => {
    localStorage.setItem("prince_tracker_completed_gaps", JSON.stringify(completedGaps));
  }, [completedGaps]);

  // Date Logic
  const baselineDate = new Date("2026-06-30");
  const [currentDate, setCurrentDate] = useState(() => new Date("2026-06-30"));
  
  // Calculate day difference
  const diffTime = Math.abs(currentDate - baselineDate);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;

  // Toggle tasks
  const toggleTask = (taskId) => {
    setCompletedTasks(prev => ({
      ...prev,
      [taskId]: !prev[taskId]
    }));
  };

  // Toggle collapsible day
  const toggleDay = (dayId) => {
    setExpandedDays(prev => ({
      ...prev,
      [dayId]: !prev[dayId]
    }));
  };

  // Toggle collapsible week
  const toggleWeek = (weekId) => {
    setExpandedWeeks(prev => ({
      ...prev,
      [weekId]: !prev[weekId]
    }));
  };

  // Toggle collapsible phase
  const togglePhase = (phaseId) => {
    setExpandedPhases(prev => ({
      ...prev,
      [phaseId]: !prev[phaseId]
    }));
  };

  // Toggle structural gaps
  const toggleGap = (gapId) => {
    setCompletedGaps(prev => ({
      ...prev,
      [gapId]: !prev[gapId]
    }));
  };

  // Check if a task matches current filter
  const matchesFilter = (task) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "dsa" && task.type === "dsa") return true;
    if (activeFilter === "build" && (task.type === "build" || task.type === "hackathon")) return true;
    if (activeFilter === "academics" && task.type === "academics") return true;
    if (activeFilter === "lifting" && task.type === "lifting") return true;
    if (activeFilter === "comm" && task.type === "comm") return true;
    return false;
  };

  // Calculations for global progress
  let totalRoadmapTasks = 0;
  let completedRoadmapTasks = 0;
  PHASES.forEach(phase => {
    phase.weeks.forEach(week => {
      week.days.forEach(day => {
        day.tasks.forEach(task => {
          totalRoadmapTasks++;
          if (completedTasks[task.id]) {
            completedRoadmapTasks++;
          }
        });
      });
    });
  });

  const globalProgressPercent = totalRoadmapTasks > 0
    ? Math.round((completedRoadmapTasks / totalRoadmapTasks) * 100)
    : 0;

  // Render a progress bar component
  const ProgressBar = ({ percent, color = "var(--color-purple)", height = "8px", label = "" }) => (
    <div style={{ width: "100%" }}>
      {label && (
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px", fontSize: "0.8rem" }}>
          <span style={{ color: "var(--text-secondary)", fontWeight: 500 }}>{label}</span>
          <span style={{ color, fontWeight: 700 }}>{percent}%</span>
        </div>
      )}
      <div style={{ width: "100%", height, background: "var(--border-color)", borderRadius: "9999px", overflow: "hidden" }}>
        <div style={{
          width: `${percent}%`,
          height: "100%",
          background: color,
          borderRadius: "9999px",
          transition: "width 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
          boxShadow: `0 0 10px ${color}`
        }} />
      </div>
    </div>
  );

  return (
    <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "20px" }}>
      
      {/* 1. TOP PROFILE BANNER */}
      <div className="glass-panel" style={{
        borderRadius: "16px",
        padding: "24px",
        marginBottom: "24px",
        position: "relative",
        overflow: "hidden",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.5)",
        background: "radial-gradient(ellipse at top right, rgba(139, 92, 246, 0.1), transparent), var(--card-bg)"
      }}>
        <div style={{
          position: "absolute",
          top: "0",
          left: "0",
          right: "0",
          height: "4px",
          background: "linear-gradient(90deg, var(--color-amber), var(--color-purple), var(--color-red), var(--color-green))"
        }} />

        {/* Profile Grid */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {/* Header Row */}
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-start", gap: "16px" }}>
            <div>
              <span style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                color: "var(--color-purple)",
                letterSpacing: "2px",
                textTransform: "uppercase",
                display: "block",
                marginBottom: "4px"
              }}>BUILDER · ATHLETE · ENGINEER</span>
              <h1 style={{
                fontFamily: "var(--font-heading)",
                fontSize: "2rem",
                fontWeight: 900,
                color: "var(--text-primary)",
                lineHeight: "1.2",
                marginBottom: "4px"
              }}>Kajipuram Prince Dharmapala</h1>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>
                🎓 Central University of Jammu, Computer Science (Class of 2027)
              </p>
            </div>
            
            {/* Quick Status Pill Info */}
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              <span className="badge" style={{ background: "rgba(239, 68, 68, 0.15)", color: "var(--color-red)", border: "1px solid rgba(239, 68, 68, 0.3)" }}>
                ⚠️ 5 Active Backlogs
              </span>
              <span className="badge" style={{ background: "rgba(245, 158, 11, 0.15)", color: "var(--color-amber)", border: "1px solid rgba(245, 158, 11, 0.3)" }}>
                🏋️ 66kg Equipped Division
              </span>
              <span className="badge" style={{ background: "rgba(16, 185, 129, 0.15)", color: "var(--color-green)", border: "1px solid rgba(16, 185, 129, 0.3)" }}>
                ⚡ 7th Sem: July 27, 2026
              </span>
            </div>
          </div>

          <div style={{ height: "1px", background: "var(--border-color)" }} />

          {/* Details Row */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
            fontSize: "0.9rem"
          }}>
            {/* Graduation Targets */}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", fontWeight: 700, color: "var(--text-primary)" }}>
                <span style={{ color: "var(--color-amber)", fontSize: "1.1rem" }}>🎯</span>
                Academic & Graduation Target
              </div>
              <p style={{ color: "var(--text-secondary)", lineHeight: "1.5" }}>
                Clear all 5 active backlogs (4 from 3rd sem, 1 from 5th sem) to secure a definitive <strong style={{ color: "var(--text-primary)" }}>6.97+ final graduation CGPA</strong>.
              </p>
              <div style={{ marginTop: "4px" }}>
                <span style={{ color: "var(--text-muted)", fontSize: "0.8rem", display: "block" }}>Tracker Deployment:</span>
                <a href="https://prince-tracker.vercel.app/" target="_blank" rel="noopener noreferrer" style={{
                  color: "var(--color-blue)",
                  textDecoration: "none",
                  fontWeight: 600,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px"
                }}>
                  🌐 prince-tracker.vercel.app (Live Dashboard)
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg>
                </a>
              </div>
            </div>

            {/* Career Vision */}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", fontWeight: 700, color: "var(--text-primary)" }}>
                <span style={{ color: "var(--color-purple)", fontSize: "1.1rem" }}>💼</span>
                Career Vision & Strategy
              </div>
              <p style={{ color: "var(--text-secondary)", lineHeight: "1.5" }}>
                8th Sem Startup SDE Intern ➔ Fast-Growing Startup Corporate Shipping ➔ Off-Campus Tech MNC SDE-1 Referral Blitz (Amazon, Adobe, Microsoft).
              </p>
              <span style={{
                fontSize: "0.75rem",
                color: "var(--color-red)",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "1px",
                display: "inline-flex",
                alignItems: "center",
                gap: "4px"
              }}>
                🛑 GATE is officially decommissioned.
              </span>
            </div>

            {/* Athletic Profile */}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", fontWeight: 700, color: "var(--text-primary)" }}>
                <span style={{ color: "var(--color-green)", fontSize: "1.1rem" }}>🏋️</span>
                Athletic Profile & Goals
              </div>
              <p style={{ color: "var(--text-secondary)", lineHeight: "1.5" }}>
                66kg Equipped Division competitor representing Kamareddy District (Telangana Powerlifting Association / IPF Pathway). Focus on strength blocks and strict platform rules.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. UNIFIED GLOBAL PROGRESS & TIMELINE CARD */}
      <div className="glass-panel" style={{
        borderRadius: "16px",
        padding: "24px",
        marginBottom: "24px",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
        border: "1px solid var(--border-color)"
      }}>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
          <div>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "1.3rem", fontWeight: 800, color: "var(--text-primary)", display: "flex", alignItems: "center", gap: "8px" }}>
              📊 Unified Roadmap Tracker
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", marginTop: "2px" }}>
              Timeline baseline starts exactly on June 30, 2026.
            </p>
          </div>

          {/* Date Simulator Widget */}
          <div className="glass-panel" style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            padding: "8px 16px",
            borderRadius: "9999px",
            border: "1px solid var(--border-color)"
          }}>
            <span style={{ fontSize: "0.8rem", color: "var(--text-secondary)" }}>
              📅 Current Date: <strong>{currentDate.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</strong>
            </span>
            <div style={{ display: "flex", gap: "4px" }}>
              <button 
                onClick={() => setCurrentDate(new Date("2026-06-30"))} 
                style={{
                  background: "transparent",
                  border: "none",
                  color: "var(--color-blue)",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  cursor: "pointer",
                  padding: "2px 6px"
                }}
              >
                Reset
              </button>
              <button 
                onClick={() => setCurrentDate(prev => new Date(prev.getTime() + 24 * 60 * 60 * 1000))} 
                style={{
                  background: "var(--border-color)",
                  border: "none",
                  color: "var(--text-primary)",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  padding: "2px 8px",
                  borderRadius: "4px"
                }}
              >
                +1 Day
              </button>
            </div>
          </div>
        </div>

        {/* Global Progress Metrics */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr auto", alignItems: "center", gap: "20px", marginBottom: "20px" }}>
          <ProgressBar 
            percent={globalProgressPercent} 
            color="linear-gradient(90deg, var(--color-amber), var(--color-purple))"
            height="12px"
            label="Unified Core Roadmap Progress"
          />
          <div style={{ textAlign: "right" }}>
            <span style={{ fontSize: "1.8rem", fontWeight: 900, color: "var(--text-primary)", fontFamily: "var(--font-heading)" }}>{globalProgressPercent}%</span>
            <span style={{ display: "block", fontSize: "0.75rem", color: "var(--text-muted)" }}>{completedRoadmapTasks} of {totalRoadmapTasks} Tasks</span>
          </div>
        </div>

        {/* Horizontal Phase Stages */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: "12px",
          marginTop: "16px"
        }}>
          {PHASES.map((phase, idx) => {
            // Calculate completion rate per phase
            let phaseTasks = 0;
            let phaseDone = 0;
            phase.weeks.forEach(w => w.days.forEach(d => d.tasks.forEach(t => {
              phaseTasks++;
              if (completedTasks[t.id]) phaseDone++;
            })));
            const phasePct = phaseTasks > 0 ? Math.round((phaseDone / phaseTasks) * 100) : 0;

            return (
              <div 
                key={phase.id} 
                onClick={() => togglePhase(phase.id)}
                style={{
                  background: "rgba(8, 12, 24, 0.4)",
                  border: `1px solid ${expandedPhases[phase.id] ? phase.color : "var(--border-color)"}`,
                  borderRadius: "8px",
                  padding: "10px 14px",
                  cursor: "pointer",
                  transition: "all 0.2s ease"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "4px" }}>
                  <span style={{ fontSize: "0.7rem", fontWeight: 700, color: phase.color }}>PHASE {idx+1}</span>
                  <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--text-primary)" }}>{phasePct}%</span>
                </div>
                <div style={{ height: "4px", background: "var(--border-color)", borderRadius: "9999px", overflow: "hidden", marginBottom: "6px" }}>
                  <div style={{ width: `${phasePct}%`, height: "100%", background: phase.color }} />
                </div>
                <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>{phase.dates.split(" – ")[0]}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. LAYOUT GRID FOR MAIN SECTIONS */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "24px" }}>
        
        {/* Navigation Tabs (Roadmap vs Gaps Checklist) */}
        <div style={{ display: "flex", gap: "12px", borderBottom: "1px solid var(--border-color)", paddingBottom: "12px" }}>
          <button 
            onClick={() => setActiveTab("roadmap")}
            style={{
              background: "transparent",
              border: "none",
              borderBottom: activeTab === "roadmap" ? "3px solid var(--color-purple)" : "3px solid transparent",
              color: activeTab === "roadmap" ? "var(--text-primary)" : "var(--text-muted)",
              fontFamily: "var(--font-heading)",
              fontSize: "1.1rem",
              fontWeight: 800,
              padding: "8px 16px",
              cursor: "pointer",
              transition: "all 0.2s ease"
            }}
          >
            🗓 4-Phase Roadmap
          </button>
          
          <button 
            onClick={() => setActiveTab("gaps")}
            style={{
              background: "transparent",
              border: "none",
              borderBottom: activeTab === "gaps" ? "3px solid var(--color-purple)" : "3px solid transparent",
              color: activeTab === "gaps" ? "var(--text-primary)" : "var(--text-muted)",
              fontFamily: "var(--font-heading)",
              fontSize: "1.1rem",
              fontWeight: 800,
              padding: "8px 16px",
              cursor: "pointer",
              transition: "all 0.2s ease"
            }}
          >
            📋 Structural Gaps & Budgets
          </button>
        </div>

        {/* ROADMAP VIEW */}
        {activeTab === "roadmap" && (
          <div>
            {/* Filter Pills */}
            <div style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              marginBottom: "20px",
              padding: "4px",
              background: "rgba(13, 20, 38, 0.4)",
              borderRadius: "12px",
              border: "1px solid var(--border-color)"
            }}>
              {FILTERS.map(filter => (
                <button
                  key={filter.key}
                  onClick={() => setActiveFilter(filter.key)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "8px 16px",
                    borderRadius: "8px",
                    border: "1px solid transparent",
                    background: activeFilter === filter.key ? "var(--border-color)" : "transparent",
                    color: activeFilter === filter.key ? "var(--text-primary)" : "var(--text-secondary)",
                    fontWeight: activeFilter === filter.key ? 700 : 500,
                    fontSize: "0.85rem",
                    cursor: "pointer",
                    transition: "all 0.2s ease"
                  }}
                >
                  <span>{filter.emoji}</span>
                  {filter.label}
                </button>
              ))}
            </div>

            {/* Phases Accordion Container */}
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {PHASES.map((phase) => {
                const isPhaseExpanded = !!expandedPhases[phase.id];

                // Calculate progress within this phase
                let totalTasks = 0;
                let doneTasks = 0;
                phase.weeks.forEach(w => w.days.forEach(d => d.tasks.forEach(t => {
                  totalTasks++;
                  if (completedTasks[t.id]) doneTasks++;
                })));
                const phaseProgress = totalTasks > 0 ? Math.round((doneTasks / totalTasks) * 100) : 0;

                return (
                  <div 
                    key={phase.id} 
                    className="glass-panel" 
                    style={{
                      borderRadius: "12px",
                      overflow: "hidden",
                      border: `1px solid ${isPhaseExpanded ? phase.color : "var(--border-color)"}`,
                      transition: "border-color 0.3s ease"
                    }}
                  >
                    {/* Phase Header */}
                    <div 
                      onClick={() => togglePhase(phase.id)}
                      style={{
                        padding: "16px 20px",
                        background: "rgba(13, 20, 38, 0.95)",
                        cursor: "pointer",
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: "12px",
                        borderBottom: isPhaseExpanded ? `1px solid ${phase.color}33` : "none"
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                        <div style={{
                          width: "12px",
                          height: "12px",
                          borderRadius: "50%",
                          background: phase.color,
                          boxShadow: `0 0 8px ${phase.color}`
                        }} />
                        <div>
                          <h3 style={{
                            fontFamily: "var(--font-heading)",
                            fontSize: "1.05rem",
                            fontWeight: 800,
                            color: "var(--text-primary)"
                          }}>{phase.title}</h3>
                          <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>{phase.dates}</span>
                        </div>
                      </div>

                      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                        <span className="badge" style={{ background: phase.dimColor, color: phase.color, border: `1px solid ${phase.color}33` }}>
                          {phaseProgress}% Complete
                        </span>
                        <span style={{
                          transform: isPhaseExpanded ? "rotate(180deg)" : "rotate(0deg)",
                          transition: "transform 0.2s ease",
                          color: "var(--text-muted)"
                        }}>
                          ▼
                        </span>
                      </div>
                    </div>

                    {/* Phase Body (Weeks List) */}
                    {isPhaseExpanded && (
                      <div style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "20px", background: "rgba(8, 12, 24, 0.6)" }}>
                        {phase.weeks.map((week) => {
                          const isWeekExpanded = !!expandedWeeks[week.id];

                          // Calculate week's completion
                          let totalWeekTasks = 0;
                          let doneWeekTasks = 0;
                          week.days.forEach(d => d.tasks.forEach(t => {
                            totalWeekTasks++;
                            if (completedTasks[t.id]) doneWeekTasks++;
                          }));
                          const weekProgress = totalWeekTasks > 0 ? Math.round((doneWeekTasks / totalWeekTasks) * 100) : 0;

                          return (
                            <div 
                              key={week.id} 
                              style={{
                                background: "var(--card-bg)",
                                borderRadius: "10px",
                                border: `1px solid ${isWeekExpanded ? "rgba(139, 92, 246, 0.3)" : "var(--border-color)"}`,
                                overflow: "hidden",
                                transition: "border-color 0.2s ease"
                              }}
                            >
                              {/* Week Header */}
                              <div 
                                onClick={() => toggleWeek(week.id)}
                                style={{
                                  padding: "12px 16px",
                                  background: "rgba(26, 42, 69, 0.2)",
                                  cursor: "pointer",
                                  display: "flex",
                                  flexWrap: "wrap",
                                  justifyContent: "space-between",
                                  alignItems: "center",
                                  gap: "8px"
                                }}
                              >
                                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                  <span style={{
                                    fontSize: "0.75rem",
                                    fontWeight: 800,
                                    background: "rgba(139, 92, 246, 0.2)",
                                    color: "var(--color-purple)",
                                    padding: "3px 8px",
                                    borderRadius: "4px"
                                  }}>WEEK {week.number}</span>
                                  <div>
                                    <h4 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--text-primary)" }}>
                                      {week.focus}
                                    </h4>
                                    <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>{week.dates}</span>
                                  </div>
                                </div>

                                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                                    <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>Intensity:</span>
                                    <span style={{
                                      fontSize: "0.75rem",
                                      fontWeight: 700,
                                      color: INTENSITY_COLORS[week.intensity] || "var(--text-primary)"
                                    }}>
                                      {week.intensity}/10 ({INTENSITY_LABELS[week.intensity]})
                                    </span>
                                  </div>
                                  
                                  <span className="badge" style={{ background: "rgba(16, 185, 129, 0.15)", color: "var(--color-green)" }}>
                                    {weekProgress}%
                                  </span>

                                  <span style={{
                                    transform: isWeekExpanded ? "rotate(180deg)" : "rotate(0deg)",
                                    transition: "transform 0.2s ease",
                                    fontSize: "0.8rem",
                                    color: "var(--text-muted)"
                                  }}>
                                    ▼
                                  </span>
                                </div>
                              </div>

                              {/* Week Content (Days List) */}
                              {isWeekExpanded && (
                                <div style={{ padding: "16px", display: "flex", flexDirection: "column", gap: "12px" }}>
                                  {week.days.map((day) => {
                                    const isDayExpanded = !!expandedDays[day.id];
                                    
                                    // Filter day's tasks
                                    const filteredTasks = day.tasks.filter(matchesFilter);

                                    // If filter is active and this day has no matches, skip rendering
                                    if (activeFilter !== "all" && filteredTasks.length === 0) return null;

                                    // Calculate day completion status
                                    let dayTotal = day.tasks.length;
                                    let dayDoneCount = day.tasks.filter(t => completedTasks[t.id]).length;
                                    const isDayAllDone = dayTotal > 0 && dayDoneCount === dayTotal;

                                    return (
                                      <div 
                                        key={day.id} 
                                        style={{
                                          borderRadius: "8px",
                                          border: "1px solid var(--border-color)",
                                          overflow: "hidden"
                                        }}
                                      >
                                        {/* Day Header */}
                                        <div 
                                          onClick={() => toggleDay(day.id)}
                                          style={{
                                            padding: "10px 14px",
                                            background: "rgba(13, 20, 38, 0.6)",
                                            cursor: "pointer",
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center"
                                          }}
                                        >
                                          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                            <div style={{
                                              width: "20px",
                                              height: "20px",
                                              borderRadius: "4px",
                                              background: isDayAllDone ? "var(--color-green)" : "var(--border-color)",
                                              display: "flex",
                                              alignItems: "center",
                                              justifyContent: "center",
                                              fontSize: "0.7rem",
                                              fontWeight: 800,
                                              color: "#fff",
                                              transition: "background 0.2s"
                                            }}>
                                              {isDayAllDone ? "✓" : "•"}
                                            </div>
                                            <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--text-primary)" }}>
                                              {day.date}
                                            </span>
                                          </div>

                                          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                            <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
                                              {dayDoneCount}/{dayTotal} Done
                                            </span>
                                            <span style={{
                                              transform: isDayExpanded ? "rotate(180deg)" : "rotate(0deg)",
                                              transition: "transform 0.2s ease",
                                              fontSize: "0.75rem",
                                              color: "var(--text-muted)"
                                            }}>
                                              ▼
                                            </span>
                                          </div>
                                        </div>

                                        {/* Day Tasks List */}
                                        {isDayExpanded && (
                                          <div style={{ background: "rgba(8, 12, 24, 0.4)", borderTop: "1px solid var(--border-color)" }}>
                                            {filteredTasks.map((task) => {
                                              const isTaskDone = !!completedTasks[task.id];
                                              
                                              // Tag text conversion
                                              const taskTagLabel = 
                                                task.type === "dsa" ? "DSA" :
                                                task.type === "build" ? "BUILD" :
                                                task.type === "academics" ? "ACADEMICS" :
                                                task.type === "lifting" ? "POWERLIFTING" :
                                                task.type === "comm" ? "COMMUNICATION" :
                                                task.type === "hackathon" ? "SIH HACKATHON" : "TASK";

                                              const taskTagColor = 
                                                task.type === "dsa" ? "var(--color-blue)" :
                                                task.type === "build" ? "var(--color-purple)" :
                                                task.type === "academics" ? "var(--color-amber)" :
                                                task.type === "lifting" ? "var(--color-green)" :
                                                task.type === "comm" ? "#EC4899" :
                                                task.type === "hackathon" ? "var(--color-red)" : "var(--text-muted)";

                                              return (
                                                <div 
                                                  key={task.id}
                                                  onClick={() => toggleTask(task.id)}
                                                  style={{
                                                    display: "flex",
                                                    alignItems: "flex-start",
                                                    gap: "12px",
                                                    padding: "12px 14px",
                                                    borderBottom: "1px solid rgba(30, 42, 69, 0.4)",
                                                    cursor: "pointer",
                                                    background: isTaskDone ? "rgba(16, 185, 129, 0.05)" : "transparent",
                                                    transition: "background 0.2s ease"
                                                  }}
                                                >
                                                  {/* Custom checkbox */}
                                                  <div className="checkbox-spin" style={{
                                                    width: "18px",
                                                    height: "18px",
                                                    borderRadius: "4px",
                                                    border: `2px solid ${isTaskDone ? "var(--color-green)" : "var(--text-muted)"}`,
                                                    background: isTaskDone ? "var(--color-green)" : "transparent",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    marginTop: "2px",
                                                    flexShrink: 0
                                                  }}>
                                                    {isTaskDone && (
                                                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                                                        <path d="M1 4L3.5 6.5L9 1" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                                      </svg>
                                                    )}
                                                  </div>

                                                  <div style={{ flex: 1 }}>
                                                    <span style={{
                                                      fontSize: "0.85rem",
                                                      lineHeight: "1.5",
                                                      color: isTaskDone ? "var(--text-muted)" : "var(--text-secondary)",
                                                      textDecoration: isTaskDone ? "line-through" : "none"
                                                    }}>
                                                      {task.text}
                                                    </span>
                                                    <div style={{ marginTop: "6px" }}>
                                                      <span className="badge" style={{ 
                                                        background: `${taskTagColor}15`, 
                                                        color: taskTagColor,
                                                        border: `1px solid ${taskTagColor}33`,
                                                        fontSize: "0.65rem",
                                                        padding: "1px 6px"
                                                      }}>
                                                        {taskTagLabel}
                                                      </span>
                                                    </div>
                                                  </div>
                                                </div>
                                              );
                                            })}
                                          </div>
                                        )}
                                      </div>
                                    );
                                  })}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* INTEGRATED UNIFIED COVERAGE SECTION */}
        {activeTab === "gaps" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
            
            {/* Gaps checklist items */}
            {/* 1. English & Communication */}
            <div className="glass-panel" style={{ borderRadius: "12px", padding: "20px", border: "1px solid var(--border-color)" }}>
              <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.1rem", color: "#EC4899", marginBottom: "14px", display: "flex", alignItems: "center", gap: "8px" }}>
                <span>🎤</span> English & Communication
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {[
                  { id: "gap_comm_1", text: "🎤 2-minute daily project voice log tracking" },
                  { id: "gap_comm_2", text: "🎤 Non-subtitle video shadowing sessions" },
                  { id: "gap_comm_3", text: "🎤 Technical blog reading out loud (5-10 mins)" }
                ].map(item => (
                  <div key={item.id} onClick={() => toggleGap(item.id)} style={{ display: "flex", gap: "10px", alignItems: "center", cursor: "pointer" }}>
                    <div style={{
                      width: "16px", height: "16px", borderRadius: "3px", 
                      border: `2px solid ${completedGaps[item.id] ? "#EC4899" : "var(--text-muted)"}`,
                      background: completedGaps[item.id] ? "#EC4899" : "transparent",
                      display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0
                    }}>
                      {completedGaps[item.id] && <span style={{ fontSize: "0.6rem", color: "#fff" }}>✓</span>}
                    </div>
                    <span style={{ fontSize: "0.85rem", color: completedGaps[item.id] ? "var(--text-muted)" : "var(--text-secondary)" }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. System Design Foundations */}
            <div className="glass-panel" style={{ borderRadius: "12px", padding: "20px", border: "1px solid var(--border-color)" }}>
              <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.1rem", color: "var(--color-blue)", marginBottom: "14px", display: "flex", alignItems: "center", gap: "8px" }}>
                <span>💻</span> System Design Foundations
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {[
                  { id: "gap_sys_1", text: "💻 Client-Server interactions & HTTP codes" },
                  { id: "gap_sys_2", text: "💻 NoSQL vs SQL architectural scaling" },
                  { id: "gap_sys_3", text: "💻 Load Balancing mechanics & round-robin" },
                  { id: "gap_sys_4", text: "💻 Caching strategies (Write-Through vs Cache-Aside)" },
                  { id: "gap_sys_5", text: "💻 Background Worker management (Queue brokers)" }
                ].map(item => (
                  <div key={item.id} onClick={() => toggleGap(item.id)} style={{ display: "flex", gap: "10px", alignItems: "center", cursor: "pointer" }}>
                    <div style={{
                      width: "16px", height: "16px", borderRadius: "3px", 
                      border: `2px solid ${completedGaps[item.id] ? "var(--color-blue)" : "var(--text-muted)"}`,
                      background: completedGaps[item.id] ? "var(--color-blue)" : "transparent",
                      display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0
                    }}>
                      {completedGaps[item.id] && <span style={{ fontSize: "0.6rem", color: "#fff" }}>✓</span>}
                    </div>
                    <span style={{ fontSize: "0.85rem", color: completedGaps[item.id] ? "var(--text-muted)" : "var(--text-secondary)" }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. CS Core Frameworks */}
            <div className="glass-panel" style={{ borderRadius: "12px", padding: "20px", border: "1px solid var(--border-color)" }}>
              <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.1rem", color: "var(--color-amber)", marginBottom: "14px", display: "flex", alignItems: "center", gap: "8px" }}>
                <span>🎓</span> CS Core Frameworks
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {[
                  { id: "gap_core_1", text: "🎓 OOP pillars (Encapsulation, Polymorphism, Inheritance)" },
                  { id: "gap_core_2", text: "🎓 OS processes vs threads, scheduling & context swaps" },
                  { id: "gap_core_3", text: "🎓 Database ACID properties (Transactions locks)" },
                  { id: "gap_core_4", text: "🎓 TCP/UDP protocol selections & handshake" }
                ].map(item => (
                  <div key={item.id} onClick={() => toggleGap(item.id)} style={{ display: "flex", gap: "10px", alignItems: "center", cursor: "pointer" }}>
                    <div style={{
                      width: "16px", height: "16px", borderRadius: "3px", 
                      border: `2px solid ${completedGaps[item.id] ? "var(--color-amber)" : "var(--text-muted)"}`,
                      background: completedGaps[item.id] ? "var(--color-amber)" : "transparent",
                      display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0
                    }}>
                      {completedGaps[item.id] && <span style={{ fontSize: "0.6rem", color: "#fff" }}>✓</span>}
                    </div>
                    <span style={{ fontSize: "0.85rem", color: completedGaps[item.id] ? "var(--text-muted)" : "var(--text-secondary)" }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. Tools Mastery */}
            <div className="glass-panel" style={{ borderRadius: "12px", padding: "20px", border: "1px solid var(--border-color)" }}>
              <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.1rem", color: "var(--color-purple)", marginBottom: "14px", display: "flex", alignItems: "center", gap: "8px" }}>
                <span>🛠</span> Tools Mastery
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {[
                  { id: "gap_tool_1", text: "🛠 Postman endpoint routing validations & automated scripts" },
                  { id: "gap_tool_2", text: "🛠 LeetCode SQL-50 track progression (Active queries)" },
                  { id: "gap_tool_3", text: "🛠 Writing a clean custom Dockerfile for multi-stage node builds" }
                ].map(item => (
                  <div key={item.id} onClick={() => toggleGap(item.id)} style={{ display: "flex", gap: "10px", alignItems: "center", cursor: "pointer" }}>
                    <div style={{
                      width: "16px", height: "16px", borderRadius: "3px", 
                      border: `2px solid ${completedGaps[item.id] ? "var(--color-purple)" : "var(--text-muted)"}`,
                      background: completedGaps[item.id] ? "var(--color-purple)" : "transparent",
                      display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0
                    }}>
                      {completedGaps[item.id] && <span style={{ fontSize: "0.6rem", color: "#fff" }}>✓</span>}
                    </div>
                    <span style={{ fontSize: "0.85rem", color: completedGaps[item.id] ? "var(--text-muted)" : "var(--text-secondary)" }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 5. Powerlifting Gear Budget Timeline */}
            <div className="glass-panel" style={{ borderRadius: "12px", padding: "20px", border: "1px solid var(--border-color)", gridColumn: "span 1" }}>
              <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.1rem", color: "var(--color-green)", marginBottom: "14px", display: "flex", alignItems: "center", gap: "8px" }}>
                <span>🏋️</span> Gear Budget Milestones
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {[
                  { id: "gap_gear_1", text: "🏋️ Chalk (Immediate Target)", sub: "Status: Acquired" },
                  { id: "gap_gear_2", text: "🏋️ Wrist Wraps (Month 2 Target)", sub: "Estimated cost: ₹1,500" },
                  { id: "gap_gear_3", text: "🏋️ Knee Sleeves (Month 3 Target)", sub: "Estimated cost: ₹3,500" },
                  { id: "gap_gear_4", text: "🏋️ 10mm Lever Belt (Month 4 Target)", sub: "Estimated cost: ₹8,000" },
                  { id: "gap_gear_5", text: "🏋️ IPF Approved Singlet (Pre-Competition)", sub: "Estimated cost: ₹6,000" }
                ].map(item => (
                  <div key={item.id} onClick={() => toggleGap(item.id)} style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    cursor: "pointer",
                    padding: "6px 8px",
                    borderRadius: "6px",
                    background: completedGaps[item.id] ? "rgba(16, 185, 129, 0.05)" : "transparent"
                  }}>
                    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                      <div style={{
                        width: "16px", height: "16px", borderRadius: "3px", 
                        border: `2px solid ${completedGaps[item.id] ? "var(--color-green)" : "var(--text-muted)"}`,
                        background: completedGaps[item.id] ? "var(--color-green)" : "transparent",
                        display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0
                      }}>
                        {completedGaps[item.id] && <span style={{ fontSize: "0.6rem", color: "#fff" }}>✓</span>}
                      </div>
                      <div>
                        <span style={{ fontSize: "0.85rem", color: completedGaps[item.id] ? "var(--text-muted)" : "var(--text-secondary)" }}>{item.text}</span>
                        <span style={{ display: "block", fontSize: "0.7rem", color: "var(--text-muted)" }}>{item.sub}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

      </div>

      {/* 4. STICKY DAILY ROUTINE ANCHOR */}
      <div className="glass-panel" style={{
        position: "fixed",
        bottom: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "calc(100% - 40px)",
        maxWidth: "800px",
        borderRadius: "16px",
        boxShadow: "0 -8px 32px rgba(0, 0, 0, 0.6)",
        border: "1px solid var(--border-color)",
        zIndex: 100,
        overflow: "hidden",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
      }}>
        {/* Anchor Header */}
        <div 
          onClick={() => setRoutineExpanded(!routineExpanded)}
          style={{
            padding: "12px 20px",
            background: "rgba(13, 20, 38, 0.95)",
            cursor: "pointer",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ fontSize: "1.2rem" }}>🌅</span>
            <span style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--text-primary)" }}>
              Daily Routine Anchor (Flipped for Evening Workouts)
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
              {routineExpanded ? "Click to Collapse" : "Click to Expand"}
            </span>
            <span style={{ transform: routineExpanded ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s", fontSize: "0.75rem", color: "var(--text-muted)" }}>
              ▼
            </span>
          </div>
        </div>

        {/* Anchor Expanded Details */}
        {routineExpanded && (
          <div style={{
            padding: "16px 20px",
            background: "var(--card-bg)",
            borderTop: "1px solid var(--border-color)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "16px",
            maxHeight: "350px",
            overflowY: "auto"
          }}>
            {[
              { time: "🌅 Morning (Fresh Brain)", desc: "1 LeetCode problem (30 mins) + Core Sandbox Reverse-Engineering." },
              { time: "⚡ Afternoon Block", desc: "University classes, intensive backlog preparation, and documentation reviews." },
              { time: "🏋️ Evening (Maximum Fuel)", desc: "Hit gym after exactly 3 solid pre-workout meals for optimal equipped powerlifting." },
              { time: "🎤 Late Evening", desc: "Post-workout recovery meal, 2-minute voice recording, daily Git commit push." },
              { time: "🌙 Night Recovery", desc: "8 hours of strict non-negotiable sleep." }
            ].map((block, idx) => (
              <div key={idx} style={{
                background: "rgba(8, 12, 24, 0.4)",
                padding: "12px",
                borderRadius: "8px",
                borderLeft: `3px solid ${idx === 2 ? "var(--color-green)" : "var(--color-purple)"}`
              }}>
                <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--text-primary)", display: "block", marginBottom: "4px" }}>
                  {block.time}
                </span>
                <p style={{ fontSize: "0.75rem", color: "var(--text-secondary)", lineHeight: "1.4" }}>
                  {block.desc}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}