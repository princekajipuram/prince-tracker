import { useState } from "react";

const PHASES = [
  {
    id: "p1", label: "Phase 1", sublabel: "Summer Grind",
    dates: "Jun 27 – Jul 26", color: "#F59E0B", dim: "#78350F",
    weeks: [
      {
        wn: 1, label: "Setup Everything", dates: "Jun 27 – Jul 3", intensity: 5,
        goal: "Install habits. No zero days. Foundation only.",
        days: [
          { date: "Sat Jun 27", tasks: [
            "💻 LeetCode Easy #1: Two Sum — create account, just do it",
            "🛠 Watch freeCodeCamp Git tutorial on YouTube — 1 hour",
            "📜 Techible cert — 1.5 hrs",
            "📱 DM @ts_powerlifting: 'Beginner 66kg equipped from Kamareddy, when is next competition?'",
            "🏋️ POWERLIFTING STUDY: Read 'Bracing & Valsalva Maneuver' — search Alan Thrall YouTube 'How to Brace'",
          ]},
          { date: "Sun Jun 28", tasks: [
            "💻 LeetCode Easy #2: Valid Palindrome",
            "🛠 Git: git init → git add → git commit → git push on test folder",
            "📜 Techible cert — 1.5 hrs",
            "🏋️ POWERLIFTING STUDY: Watch 'Squat stance and toe angle' — Calgary Barbell YouTube",
            "🎤 Voice record: 'Tell me about PYQ Portal' — 2 mins, listen back",
          ]},
          { date: "Mon Jun 29", tasks: [
            "💻 LeetCode Easy #3: Best Time to Buy Stock",
            "🛠 Git: branch → checkout → merge practice",
            "📜 Techible cert — 1.5 hrs",
            "🏋️ POWERLIFTING STUDY: Watch 'Hip hinge and deadlift setup' — Alan Thrall YouTube",
            "📱 Join Facebook: 'Nizamabad Powerlifting' + 'Telangana Powerlifting'",
          ]},
          { date: "Tue Jun 30", tasks: [
            "💻 LeetCode Easy #4: Contains Duplicate",
            "🛠 Git: pull → clone → fork a repo",
            "📜 Techible cert — 1.5 hrs",
            "🏋️ POWERLIFTING STUDY: Watch 'Bench Press setup — scapular retraction and arch' — Calgary Barbell",
            "🔗 LinkedIn: update headline to 'Full-Stack Developer | MERN | Open to Internships'",
          ]},
          { date: "Wed Jul 1", tasks: [
            "💻 LeetCode Easy #5: Valid Anagram",
            "🛠 Git: raise a Pull Request on your own repo",
            "📜 Techible cert — 1.5 hrs",
            "🏋️ POWERLIFTING STUDY: Read about Linear Progression — Starting Strength model (search 'linear progression powerlifting beginner')",
            "🌐 Register on devfolio.co — create account",
          ]},
          { date: "Thu Jul 2", tasks: [
            "💻 LeetCode Easy #6: Longest Common Prefix",
            "🛠 Git: stash → log → merge conflict resolution",
            "📜 Techible cert — 1.5 hrs",
            "🏋️ POWERLIFTING STUDY: Watch 'How to use RPE' — Calgary Barbell YouTube",
            "🌐 Register on unstop.com — post in team-finder",
          ]},
          { date: "Fri Jul 3", tasks: [
            "💻 LeetCode Easy #7: Reverse String",
            "📜 Techible cert — 2 hrs push",
            "🛠 Push PYQ Portal to GitHub with README + screenshots",
            "🏋️ POWERLIFTING STUDY: Watch 'What is MEV MAV MRV' — understand volume landmarks",
            "🎤 Voice record: 'What was the hardest part of PYQ Portal?' — 2 mins",
          ]},
        ]
      },
      {
        wn: 2, label: "Java + DSA Habit + PL Technique", dates: "Jul 4 – Jul 10", intensity: 6,
        goal: "Java daily. 14 LeetCode done. Squat and deadlift technique understood.",
        days: [
          { date: "Sat Jul 4", tasks: [
            "💻 LeetCode Easy #8: Single Number",
            "☕ Java: Kunal Kushwaha Episode 1 — 1.5 hrs",
            "📜 Techible cert — 1.5 hrs",
            "🏋️ POWERLIFTING STUDY: Watch 'How to Squat — full tutorial' Alan Thrall (45 mins). Take notes.",
            "🏋️ AT GYM: Film your squat from side angle. Watch it back.",
          ]},
          { date: "Sun Jul 5", tasks: [
            "💻 LeetCode Easy #9: Missing Number",
            "☕ Java: Student class — constructor, getters, setters",
            "📜 Techible cert — 1.5 hrs",
            "🏋️ POWERLIFTING STUDY: Watch 'How to Deadlift — full tutorial' Alan Thrall. Take notes.",
            "🏋️ AT GYM: Film your deadlift from side angle. Watch it back.",
          ]},
          { date: "Mon Jul 6", tasks: [
            "💻 LeetCode Easy #10: Climbing Stairs",
            "☕ Java: this keyword, method overloading",
            "📜 Techible cert — 1.5 hrs",
            "🏋️ POWERLIFTING STUDY: Watch 'How to Bench Press' Calgary Barbell. Take notes.",
            "🏋️ AT GYM: Film your bench from side angle. Watch it back.",
          ]},
          { date: "Tue Jul 7", tasks: [
            "💻 LeetCode Easy #11: Majority Element",
            "☕ Java: Inheritance — Animal → Dog + Cat",
            "📜 Techible cert — 1.5 hrs",
            "🏋️ POWERLIFTING STUDY: Read about 'Sets and Reps for beginners — 3x5 vs 5x5 vs 3x8'",
            "🔗 LinkedIn: turn on Open to Work — internships only",
          ]},
          { date: "Wed Jul 8", tasks: [
            "💻 LeetCode Easy #12: Move Zeroes",
            "☕ Java: Polymorphism + method overriding",
            "📜 Techible cert — 1.5 hrs",
            "🏋️ POWERLIFTING STUDY: Watch 'How to write your first beginner program' — Barbell Medicine YouTube",
            "🏋️ ACTION: Write your own weekly training plan — Squat/Bench/Deadlift with sets + reps",
          ]},
          { date: "Thu Jul 9", tasks: [
            "💻 LeetCode Easy #13: Happy Number",
            "☕ Java: Abstract classes + Interfaces",
            "📜 Techible cert — 1.5 hrs",
            "🏋️ POWERLIFTING STUDY: Read 'Protein for strength athletes — how much do I need?'",
            "🏋️ ACTION: Calculate your daily protein target (bodyweight in kg × 1.8g = daily grams)",
          ]},
          { date: "Fri Jul 10", tasks: [
            "💻 LeetCode Easy #14 + #15 — double day",
            "☕ Java: Library Book OOP mini project",
            "📜 Techible cert — 2 hrs",
            "🏋️ POWERLIFTING STUDY: Watch 'Creatine — everything you need to know' — Jeff Nippard (20 mins)",
            "🏋️ ACTION: Start taking 5g creatine daily if not already",
          ]},
        ]
      },
      {
        wn: 3, label: "Finish Cert + Java Collections + PL Programming", dates: "Jul 11 – Jul 17", intensity: 7,
        goal: "FINISH Techible cert. Java Collections done. Understand periodization basics.",
        days: [
          { date: "Sat Jul 11", tasks: [
            "💻 LeetCode Easy #16: Intersection of Two Arrays",
            "☕ Java: ArrayList — 5 programs",
            "📜 Techible cert — 2.5 hrs final push",
            "🏋️ POWERLIFTING STUDY: Watch 'What is periodization' — Barbell Medicine YouTube",
            "🏋️ GATE STUDY: Download GATE CS syllabus from gate.iitk.ac.in — read it fully (30 mins)",
          ]},
          { date: "Sun Jul 12", tasks: [
            "💻 LeetCode Easy #17: First Unique Character",
            "☕ Java: HashMap — word frequency counter",
            "📜 Techible cert — 2.5 hrs",
            "🏋️ POWERLIFTING STUDY: Watch 'DUP Daily Undulating Periodization explained' — 20 mins",
            "🏋️ GATE STUDY: Read GATE CS topic list — mark subjects you already know vs don't know",
          ]},
          { date: "Mon Jul 13", tasks: [
            "💻 LeetCode Easy #18: Ransom Note",
            "☕ Java: HashSet — remove duplicates",
            "📜 Techible cert — 2.5 hrs",
            "🏋️ POWERLIFTING STUDY: Watch 'How to peak for a powerlifting meet' — Calgary Barbell",
            "🎓 GATE STUDY: DSA revision — Arrays (you're already doing this on LeetCode, just connect it)",
          ]},
          { date: "Tue Jul 14", tasks: [
            "💻 LeetCode Easy #19: Isomorphic Strings",
            "☕ Java: String methods",
            "📜 Techible cert — 2.5 hrs",
            "🏋️ POWERLIFTING STUDY: Watch 'How to choose your opener at a powerlifting meet'",
            "🎓 GATE STUDY: Watch GATE lecture — Linked Lists (NPTEL or GateSmashers YouTube)",
          ]},
          { date: "Wed Jul 15", tasks: [
            "💻 LeetCode Easy #20: Length of Last Word",
            "☕ Java: StringBuilder vs String",
            "📜 Techible cert — 2.5 hrs — aim to FINISH",
            "🏋️ POWERLIFTING STUDY: Read 'Beginner equipped powerlifting — what gear do you need first'",
            "🎓 GATE STUDY: Watch GATE lecture — Stacks and Queues (GateSmashers YouTube)",
          ]},
          { date: "Thu Jul 16", tasks: [
            "💻 LeetCode Easy #21: Roman to Integer",
            "☕ Java: Student Management CLI — ArrayList + HashMap",
            "📜 FINISH TECHIBLE CERT TODAY — last module, done",
            "🔗 LinkedIn: add Techible cert — IIT Jammu × Techible immediately",
            "🎓 GATE STUDY: Watch GATE lecture — Trees (GateSmashers YouTube)",
          ]},
          { date: "Fri Jul 17", tasks: [
            "💻 LeetCode Easy #22 + #23 — double day",
            "☕ Java: push Student Management CLI to GitHub with README",
            "🌐 Start MongoDB University Node.js path — first 2 modules",
            "🏋️ POWERLIFTING STUDY: Watch 'RPE in practice — how to use it in training' — Calgary Barbell",
            "🎓 GATE STUDY: Watch GATE lecture — Graphs intro (GateSmashers YouTube)",
          ]},
        ]
      },
      {
        wn: 4, label: "DSA Patterns + GATE Foundation + PL Recovery", dates: "Jul 18 – Jul 26", intensity: 7,
        goal: "Learn DSA patterns. GATE foundation locked. Understand recovery science.",
        days: [
          { date: "Sat Jul 18", tasks: [
            "💻 LeetCode Easy #24: Two Pointer — Valid Palindrome II",
            "📺 NeetCode: Two Pointer pattern — 20 mins",
            "☕ Java: LinkedList traverse",
            "🏋️ POWERLIFTING STUDY: Watch 'Sleep for strength athletes' — Jeff Nippard (20 mins)",
            "🎓 GATE STUDY: GateSmashers — Operating Systems intro lecture",
          ]},
          { date: "Sun Jul 19", tasks: [
            "💻 LeetCode #25 + #26: Sliding Window",
            "📺 NeetCode: Sliding Window pattern",
            "☕ Java: Stack using ArrayDeque",
            "🏋️ POWERLIFTING STUDY: Watch 'Carbohydrates for powerlifters — pre and post workout'",
            "🎓 GATE STUDY: OS — Process vs Thread (GateSmashers YouTube)",
          ]},
          { date: "Mon Jul 20", tasks: [
            "💻 LeetCode Easy #27: Binary Search",
            "📺 NeetCode: Binary Search pattern",
            "☕ Java: Queue basics",
            "🏋️ POWERLIFTING STUDY: Read 'Deload weeks — what they are and when to take them'",
            "🎓 GATE STUDY: OS — CPU Scheduling algorithms",
          ]},
          { date: "Tue Jul 21", tasks: [
            "💻 LeetCode Easy #28 + #29",
            "☕ Java: Recursion — factorial + fibonacci",
            "🌐 MongoDB University — 1.5 hrs",
            "🏋️ POWERLIFTING STUDY: Watch 'How to fix a sticking point in the squat'",
            "🎓 GATE STUDY: DBMS — ER diagrams and Relational model (GateSmashers)",
          ]},
          { date: "Wed Jul 22", tasks: [
            "💻 LeetCode Easy #30 + #31",
            "☕ Java: Recursion — binary search recursive",
            "🌐 MongoDB University — 1.5 hrs",
            "🏋️ POWERLIFTING STUDY: Watch 'Weak point training — how to bring up your deadlift'",
            "🎓 GATE STUDY: DBMS — Normalization 1NF 2NF 3NF BCNF",
          ]},
          { date: "Thu Jul 23", tasks: [
            "💻 LeetCode Easy #32 + #33",
            "☕ Java: Two Sum in Java using HashMap",
            "🌐 MongoDB University — 1.5 hrs",
            "🏋️ POWERLIFTING STUDY: Watch 'How to video review your lifts properly'",
            "🎓 GATE STUDY: DBMS — SQL queries practice (SELECT, JOIN, GROUP BY)",
          ]},
          { date: "Fri Jul 24", tasks: [
            "💻 LeetCode Easy #34 + #35",
            "☕ Java: Stack-based calculator mini project",
            "🌐 MongoDB University — 1.5 hrs",
            "🏋️ POWERLIFTING STUDY: Watch 'Meet day strategy — openers, 2nd and 3rd attempts'",
            "🎓 GATE STUDY: CN — OSI model + TCP/IP layers",
          ]},
          { date: "Sat Jul 25", tasks: [
            "💻 LeetCode Easy #36",
            "📊 Monthly review: 36 problems ✅ Java OOP+Collections ✅ Git ✅ Techible ✅ GATE foundation ✅",
            "🏋️ POWERLIFTING: Film all 3 lifts today — compare to week 2 films. What improved?",
            "🧘 Rest well — college starts in 2 days",
          ]},
          { date: "Sun Jul 26", tasks: [
            "💻 LeetCode Easy — 1 problem",
            "🎒 Prepare for college tomorrow",
            "🏋️ POWERLIFTING STUDY: Write your competition goal — target total at district meet",
            "🎤 Full 3-min pitch — name, college, project, skills, what you want. Record it.",
          ]},
        ]
      },
    ]
  },
  {
    id: "p2", label: "Phase 2", sublabel: "7th Sem Beast Mode",
    dates: "Jul 27 – Dec 2026", color: "#8B5CF6", dim: "#4C1D95",
    weeks: [
      {
        wn: 5, label: "College Starts + SIH + GATE Serious", dates: "Jul 27 – Aug 9", intensity: 7,
        goal: "Find SIH SPOC day 1. GATE study daily. PL technique improving.",
        days: [
          { date: "Mon Jul 27 🎓", tasks: [
            "🏫 Find SIH SPOC (CS faculty) — ask seniors who it is — today",
            "💻 LeetCode Easy #38 — don't break streak",
            "🎓 GATE STUDY: DSA — Trees revision (GATE level, not just basics)",
            "🏋️ POWERLIFTING STUDY: Watch 'How to program your first powerlifting block' — Barbell Medicine",
          ]},
          { date: "Tue Jul 28", tasks: [
            "💻 LeetCode Easy #39",
            "👥 Form SIH team — 6 people, 1 female mandatory",
            "🎓 GATE STUDY: DSA — Graph BFS DFS (GateSmashers)",
            "🏋️ POWERLIFTING STUDY: Read about 'Accumulation vs Intensification phases'",
          ]},
          { date: "Wed Jul 29", tasks: [
            "💻 LeetCode Easy #40 + first Medium attempt (3Sum)",
            "👥 SIH: team roles assigned — you = full-stack",
            "🎓 GATE STUDY: Algorithms — sorting algorithms complexity (GateSmashers)",
            "🏋️ AT GYM: Focus on bracing — hold your brace for every rep, no exceptions",
          ]},
          { date: "Thu Jul 30", tasks: [
            "💻 1 Easy + 1 Medium",
            "☕ Java: Trees — BFS level order traversal",
            "🎓 GATE STUDY: Algorithms — Dynamic Programming intro (LCS, knapsack)",
            "🏋️ POWERLIFTING STUDY: Watch 'Bar path in the squat — what it should look like'",
          ]},
          { date: "Fri Jul 31", tasks: [
            "💻 1 Easy + 1 Medium",
            "☕ Java: DFS traversals",
            "🎓 GATE STUDY: Digital Logic — Boolean algebra, K-maps",
            "🏋️ POWERLIFTING: Film squat again — is bar path vertical? Compare to Alan Thrall video",
          ]},
          { date: "Sat Aug 1", tasks: [
            "💻 2 Medium — grind day",
            "☕ Java: BST insert + search",
            "🎓 GATE STUDY: 2 hrs — Computer Organization + Architecture basics",
            "🏋️ POWERLIFTING STUDY: Watch 'Leg drive on bench press — how it actually works'",
          ]},
          { date: "Sun Aug 2", tasks: [
            "💻 1 Easy",
            "🌐 MongoDB University — 1 hr",
            "🎓 GATE STUDY: 1 hr — review week 1 topics",
            "🏋️ POWERLIFTING: Review your training log — did you hit your sets? Any form breakdowns?",
            "🧘 8 hrs sleep",
          ]},
          { date: "Mon Aug 3 – Sun Aug 9 (Socket.io week)", tasks: [
            "💻 1 Easy + 1 Medium daily",
            "🛠 Build Socket.io chat app — server, client, rooms, typing indicator, deploy",
            "🎓 GATE STUDY: 1.5 hrs daily — OS: Process scheduling, Deadlocks, Memory management",
            "🏋️ POWERLIFTING STUDY: 30 mins daily — this week focus: Deadlift mechanics deep dive (Barbell Medicine podcast or YouTube)",
            "🏋️ AT GYM: Deadlift focus — slack pull, lat engagement, keeping bar close",
          ]},
        ]
      },
      {
        wn: 6, label: "SIH Sep 6 Deadline + 80 Problems", dates: "Aug 10 – Sep 6", intensity: 9,
        goal: "SIH submitted. 80 LeetCode. GATE OS done. PL programming understood.",
        days: [
          { date: "Aug 10 – Aug 23 (2 weeks)", tasks: [
            "💻 2 Medium daily — push toward 80",
            "🏆 SIH: build prototype → wireframe → internal hackathon → perform → submit",
            "🎓 GATE STUDY: 1.5 hrs daily — DBMS (complete), CN (complete OSI+TCP/IP+routing)",
            "🏋️ POWERLIFTING STUDY: 30 mins daily — this fortnight: Programming (DUP, block periodization, volume landmarks MEV/MAV/MRV)",
            "🏋️ ACTION: Design your own 8-week training block using DUP principles",
            "🌐 Portfolio website: build and deploy on Vercel",
          ]},
          { date: "Aug 24 – Sep 6 (final push)", tasks: [
            "💻 2 Medium daily — reach 80 problems total ✅",
            "🏆 SIH: polish demo, practice pitch, submit before Sep 6 HARD DEADLINE",
            "🎓 GATE STUDY: 1.5 hrs daily — Compiler Design basics (lexical analysis, parsing, CFG)",
            "🏋️ POWERLIFTING STUDY: 30 mins daily — Peaking: how to peak for a meet, tapering, attempt selection",
            "🏋️ AT GYM: Start filming every session — build a video bank to review weekly",
          ]},
          { date: "Sun Sep 6 ⚠️ SIH DEADLINE", tasks: [
            "🏆 SIH 2026 REGISTRATION CONFIRMED ✅",
            "💻 1 Medium — keep streak",
            "🎓 GATE: quick review of all topics done so far",
            "🏋️ POWERLIFTING: Write your competition attempt plan — opener, 2nd, 3rd for each lift",
            "🧘 Rest + train + sleep",
          ]},
        ]
      },
      {
        wn: 7, label: "100 Problems + GATE Mocks + PL Competition Prep", dates: "Sep 7 – Oct 2026", intensity: 9,
        goal: "100 problems. First GATE mock. Understand competition day execution.",
        days: [
          { date: "Sep 7 – Sep 28 (3 weeks)", tasks: [
            "💻 2 Medium daily — push to 100 problems ✅",
            "🎯 Pramp.com: first mock interview — register and schedule",
            "🎓 GATE STUDY: 2 hrs daily — Theory of Computation (DFA, NFA, PDA, Turing machines)",
            "🎓 GATE: Take first GATE mock test on testbook.com or gatebook.in — see where you stand",
            "🏋️ POWERLIFTING STUDY: 30 mins daily — Competition week: water cut basics, glycogen loading, weigh-in recovery, meet day nutrition",
            "🏋️ AT GYM: Practice competition commands — squat rack, start, press/rack, down command timing",
            "📚 7th sem — 1.5 hr study daily (backlogs priority)",
          ]},
          { date: "October 2026 (ongoing)", tasks: [
            "💻 2 Medium daily — push to 120 total",
            "🏆 SIH national finale if qualified — GO, worth it",
            "🎓 GATE STUDY: 2 hrs daily — Math (Linear Algebra, Probability, Calculus basics for GATE)",
            "🎓 GATE: Take mock test every 2 weeks — track score improvement",
            "🏋️ DISTRICT POWERLIFTING COMPETITION — confirm date with @ts_powerlifting",
            "🏋️ POWERLIFTING STUDY: Psychology — competition mindset, managing nerves, attempt aggression",
            "📚 7th sem — 2 hr study daily",
          ]},
        ]
      },
      {
        wn: 8, label: "Nov–Dec: Exam Crunch + Clear Backlogs", dates: "Nov – Dec 2026", intensity: 10,
        goal: "CLEAR ALL 5 BACKLOGS. GATE prep at full pace. PL state comp target.",
        days: [
          { date: "November (ongoing)", tasks: [
            "💻 2 Medium daily — 130+ total",
            "🎯 Pramp mock interview weekly",
            "🎓 GATE STUDY: 2.5 hrs daily — previous year GATE questions topic-wise (go to GATECSE.in)",
            "🏋️ POWERLIFTING STUDY: Advanced technique — weak point analysis, compensatory acceleration, intent-based lifting",
            "🏋️ COMPETITION: District meet this window — COMPETE. First meet ever. Just finish all attempts.",
            "📚 7th sem — 3 hr study daily (exam crunch)",
          ]},
          { date: "December exams", tasks: [
            "📚 Study 4 hrs daily — backlog subjects FIRST (3rd sem: 4 backs, 5th sem: 1 back)",
            "💻 1 Easy daily — keep streak even in exams (10 mins)",
            "🎓 GATE STUDY: 1 hr daily even during sem exams — don't lose momentum",
            "🏋️ POWERLIFTING: Maintain training — even 45 min session counts during exam week",
            "😴 8 hrs sleep — no all-nighters",
          ]},
          { date: "Post-exams (sem break)", tasks: [
            "📊 All backlogs cleared ✅",
            "🎓 GATE: Full-time prep begins — 4 hrs daily from now until Feb",
            "🏋️ POWERLIFTING STUDY: Long-term development — annual planning, hypertrophy phases vs strength phases",
            "📅 Mark April 2027 in calendar — Goldman Sachs Hackathon",
            "🌐 Resume update — add chat app, open source, portfolio link",
          ]},
        ]
      },
    ]
  },
  {
    id: "p3", label: "Phase 3", sublabel: "GATE + Applications",
    dates: "Jan – Feb 2027", color: "#EF4444", dim: "#7F1D1D",
    weeks: [
      {
        wn: 9, label: "GATE Full Prep + Applications Open", dates: "Jan 2027", intensity: 10,
        goal: "GATE full prep 4 hrs daily. 10 internship applications per week. 150 problems.",
        days: [
          { date: "Week 1 Jan", tasks: [
            "💻 3 Medium daily — push to 150 total",
            "🎓 GATE: 4 hrs daily — DSA + Algorithms full revision (your strongest section)",
            "🌐 Internshala: apply 5 internships daily (₹10k+ stipend, Full Stack)",
            "🔗 LinkedIn: 5 cold messages to founders daily",
            "🏋️ POWERLIFTING STUDY: Nervous system adaptation — motor unit recruitment, firing rate, neural efficiency",
          ]},
          { date: "Week 2 Jan", tasks: [
            "💻 3 Medium daily",
            "🎓 GATE: 4 hrs daily — OS + DBMS (your 2 weakest — more time here)",
            "🌐 Wellfound.com: apply 5 startups",
            "🎯 Pramp mock interview weekly",
            "🏋️ POWERLIFTING STUDY: Advanced programming — block periodization, accumulation-intensification-realization",
          ]},
          { date: "Week 3 Jan", tasks: [
            "💻 2 Medium daily — 150 milestone ✅",
            "🎓 GATE: 4 hrs daily — Compiler Design + TOC revision",
            "🎓 GATE: Take mock test — target 40+ marks now",
            "🌐 40+ applications sent total ✅",
            "🏋️ STATE COMPETITION PREP: Design 8-week peaking block leading to Feb–Mar state meet",
          ]},
          { date: "Week 4 Jan", tasks: [
            "💻 2 Medium daily",
            "🎓 GATE: 4 hrs daily — CN + Digital Logic + COA full revision",
            "🎓 GATE: Mock test — track time management",
            "🔗 Follow up all pending applications",
            "🏋️ POWERLIFTING: Intensification phase starts — heavier weights, lower volume",
          ]},
        ]
      },
      {
        wn: 10, label: "GATE Exam + Interviews Coming In", dates: "Feb 2027", intensity: 10,
        goal: "GATE exam. Keep interview pipeline moving. PL peak begins.",
        days: [
          { date: "Week 1–2 Feb (pre-GATE)", tasks: [
            "🎓 GATE: 5 hrs daily — full syllabus revision, 1 mock test every 2 days",
            "💻 1 LeetCode daily — maintain but don't overdo it",
            "🌐 Keep applying — 5 per week minimum",
            "🏋️ POWERLIFTING: Peak week begins — reduce volume, increase intensity",
            "😴 8 hrs sleep — non negotiable before GATE",
          ]},
          { date: "🎓 GATE 2027 EXAM DAY", tasks: [
            "🎓 GATE EXAM — give it everything you have",
            "Eat well. Arrive early. Read every question fully before answering.",
            "Don't leave early — review everything",
            "🌙 Sleep early night before. No last-minute cramming.",
          ]},
          { date: "Post-GATE (rest of Feb)", tasks: [
            "🎉 GATE done — take 2 days off completely",
            "💻 3 Medium daily — back to full grind",
            "🌐 Internship applications — 10 per week — full attack mode now",
            "🎯 Pramp mock interviews — 2 per week now",
            "🏋️ POWERLIFTING: State competition likely Feb–Mar — COMPETE",
          ]},
        ]
      },
    ]
  },
  {
    id: "p4", label: "Phase 4", sublabel: "Offer & Day 1",
    dates: "Mar – Apr 2027", color: "#10B981", dim: "#064E3B",
    weeks: [
      {
        wn: 11, label: "Final Interview Rounds + Offer", dates: "Mar – Apr 2027", intensity: 8,
        goal: "One yes is all it takes. Execute. Stay calm.",
        days: [
          { date: "Every interview day", tasks: [
            "🎯 60-sec intro — confident, specific, don't ramble",
            "🎯 DSA round — think out loud, don't code silently",
            "🎯 Project round — go deep on decisions, not just features",
            "🎯 Ask 2 questions at end — shows genuine interest",
            "😴 Sleep 8 hrs night before every interview",
          ]},
          { date: "After every interview", tasks: [
            "📝 Write every question they asked — build your question bank",
            "📝 What did you get wrong? Practice that specifically tomorrow",
            "💻 2 Medium daily — keep streak",
            "📧 Send thank you email within 24 hrs",
          ]},
          { date: "Weekly Mar–Apr", tasks: [
            "🌐 10 applications per week — never stop even while interviewing",
            "🎯 Pramp weekly",
            "🏋️ POWERLIFTING: Off-season begins after state — hypertrophy phase, higher volume",
            "🏋️ POWERLIFTING STUDY: Long-term planning — annual training calendar, bulking phase management",
            "💻 Push to 180+ problems",
          ]},
          { date: "🎉 OFFER RECEIVED", tasks: [
            "✅ Accept the offer — negotiate if very low",
            "📧 Email manager: 'What should I prepare before Day 1?'",
            "🔍 Read company's tech stack deeply",
            "📓 Set up Notion — take notes every day at internship",
          ]},
          { date: "🚀 DAY 1 OF INTERNSHIP", tasks: [
            "Introduce yourself: builder, shipped real things, here to learn",
            "📓 Take notes on EVERYTHING — people, codebase, processes",
            "🙋 Ask questions — never pretend to understand what you don't",
            "🌙 Come home, write what you learned today",
            "You started from zero and made it here. That's real. 🔥",
          ]},
        ]
      },
    ]
  },
];

const INTENSITY_BAR = ["","#93C5FD","#60A5FA","#3B82F6","#2563EB","#A78BFA","#8B5CF6","#EF4444","#DC2626","#B91C1C","#7F1D1D"];
const INTENSITY_LABEL = ["","Easy","Easy+","Moderate","Moderate+","Hard","Hard+","Very Hard","Very Hard+","Extreme","MAX 🔥"];

const TAG_COLOR = (t) => {
  if (t.startsWith("🎓 GATE")) return "#FEF3C7";
  if (t.startsWith("🏋️ POWERLIFTING") || t.startsWith("🏋️ AT GYM") || t.startsWith("🏋️ ACTION") || t.startsWith("🏋️ COMPETITION") || t.startsWith("🏋️ STATE") || t.startsWith("🏋️ DISTRICT")) return "#D1FAE5";
  if (t.startsWith("💻")) return "#DBEAFE";
  if (t.startsWith("🛠") || t.startsWith("☕")) return "#EDE9FE";
  if (t.startsWith("🏆")) return "#FEE2E2";
  if (t.startsWith("🎤")) return "#FCE7F3";
  if (t.startsWith("🔗") || t.startsWith("🌐")) return "#E0E7FF";
  return "#F1F5F9";
};

const TAG_TEXT = (t) => {
  if (t.startsWith("🎓 GATE")) return "#92400E";
  if (t.startsWith("🏋️")) return "#065F46";
  if (t.startsWith("💻")) return "#1E40AF";
  if (t.startsWith("🛠") || t.startsWith("☕")) return "#5B21B6";
  if (t.startsWith("🏆")) return "#991B1B";
  if (t.startsWith("🎤")) return "#9D174D";
  if (t.startsWith("🔗") || t.startsWith("🌐")) return "#3730A3";
  return "#334155";
};

export default function App() {
  const [phase, setPhase] = useState(0);
  const [week, setWeek] = useState(0);
  const [open, setOpen] = useState(null);
  const [done, setDone] = useState({});
  const [filter, setFilter] = useState("all");

  const p = PHASES[phase];
  const w = p.weeks[week];

  const taskId = (pi, wn, di, ti) => `${pi}-w${wn}-d${di}-t${ti}`;

  const allIds = w.days.flatMap((d, di) => d.tasks.map((_, ti) => taskId(p.id, w.wn, di, ti)));
  const doneCount = allIds.filter(id => done[id]).length;
  const pct = allIds.length ? Math.round((doneCount / allIds.length) * 100) : 0;

  const totalWeeks = PHASES.reduce((a, ph) => a + ph.weeks.length, 0);
  const prevWeeks = PHASES.slice(0, phase).reduce((a, ph) => a + ph.weeks.length, 0);
  const globalWk = prevWeeks + week + 1;

  const toggle = (id) => setDone(d => ({ ...d, [id]: !d[id] }));

  const FILTERS = [
    { key: "all", label: "All" },
    { key: "gate", label: "🎓 GATE" },
    { key: "lifting", label: "🏋️ Powerlifting" },
    { key: "dsa", label: "💻 DSA" },
    { key: "build", label: "🛠 Build" },
  ];

  const matchesFilter = (task) => {
    if (filter === "all") return true;
    if (filter === "gate") return task.startsWith("🎓");
    if (filter === "lifting") return task.startsWith("🏋️");
    if (filter === "dsa") return task.startsWith("💻");
    if (filter === "build") return task.startsWith("🛠") || task.startsWith("☕") || task.startsWith("🏆") || task.startsWith("🌐");
    return true;
  };

  return (
    <div style={{ fontFamily: "system-ui,-apple-system,sans-serif", background: "#080C18", minHeight: "100vh", color: "#F1F5F9", paddingBottom: 48 }}>

      {/* HEADER */}
      <div style={{ background: "#0D1426", borderBottom: "1px solid #1E2A45", padding: "14px 16px 0" }}>
        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", color: "#475569", textTransform: "uppercase", marginBottom: 2 }}>Prince Dharmapala · Full Journey</div>
        <div style={{ fontSize: 20, fontWeight: 900, color: "#F8FAFC", marginBottom: 2 }}>Week 1 → Internship Day 1</div>
        <div style={{ fontSize: 11, color: "#475569", marginBottom: 10 }}>Coding · GATE · Powerlifting · All in one</div>

        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
          <div style={{ fontSize: 10, color: "#475569", minWidth: 68 }}>Wk {globalWk}/{totalWeeks}</div>
          <div style={{ flex: 1, background: "#1E2A45", borderRadius: 99, height: 4, overflow: "hidden" }}>
            <div style={{ background: p.color, height: "100%", width: `${(globalWk/totalWeeks)*100}%`, borderRadius: 99, transition: "width 0.4s" }} />
          </div>
          <div style={{ fontSize: 11, color: p.color, fontWeight: 700, minWidth: 32 }}>{Math.round((globalWk/totalWeeks)*100)}%</div>
        </div>

        {/* Phase tabs */}
        <div style={{ display: "flex", gap: 2, overflowX: "auto" }}>
          {PHASES.map((ph, i) => (
            <button key={i} onClick={() => { setPhase(i); setWeek(0); setOpen(null); }} style={{
              padding: "7px 10px", borderRadius: "8px 8px 0 0", border: "none", cursor: "pointer",
              fontSize: 10, fontWeight: 700, whiteSpace: "nowrap", flexShrink: 0,
              background: phase === i ? "#080C18" : "transparent",
              color: phase === i ? ph.color : "#475569",
              borderTop: `2px solid ${phase === i ? ph.color : "transparent"}`,
              transition: "all 0.15s", lineHeight: 1.5
            }}>
              {ph.label}<br/><span style={{ fontWeight: 400, fontSize: 9 }}>{ph.sublabel}</span>
            </button>
          ))}
        </div>
      </div>

      <div style={{ padding: 14 }}>

        {/* Week pills */}
        <div style={{ display: "flex", gap: 5, overflowX: "auto", marginBottom: 12, paddingBottom: 2 }}>
          {p.weeks.map((wk, i) => (
            <button key={i} onClick={() => { setWeek(i); setOpen(null); }} style={{
              padding: "4px 10px", borderRadius: 99, flexShrink: 0, whiteSpace: "nowrap",
              border: `1px solid ${week === i ? p.color : "#1E2A45"}`,
              background: week === i ? p.color : "transparent",
              color: week === i ? "#fff" : "#64748B",
              fontSize: 10, fontWeight: 600, cursor: "pointer", transition: "all 0.15s"
            }}>Wk {wk.wn}</button>
          ))}
        </div>

        {/* Week info card */}
        <div style={{ background: "#0D1426", borderRadius: 12, padding: 14, marginBottom: 12, border: `1px solid ${p.color}44` }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 9, color: p.color, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 2 }}>{w.dates}</div>
              <div style={{ fontSize: 15, fontWeight: 800, color: "#F8FAFC", lineHeight: 1.3 }}>{w.label}</div>
            </div>
            <div style={{ textAlign: "right", flexShrink: 0, marginLeft: 10 }}>
              <div style={{ fontSize: 24, fontWeight: 900, color: "#F8FAFC", lineHeight: 1 }}>{pct}%</div>
              <div style={{ fontSize: 9, color: "#475569" }}>{doneCount}/{allIds.length}</div>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
            <div style={{ display: "flex", gap: 2 }}>
              {Array.from({ length: 10 }).map((_, i) => (
                <div key={i} style={{ width: 13, height: 4, borderRadius: 2, background: i < w.intensity ? INTENSITY_BAR[w.intensity] : "#1E2A45" }} />
              ))}
            </div>
            <span style={{ fontSize: 10, fontWeight: 700, color: INTENSITY_BAR[w.intensity] }}>{INTENSITY_LABEL[w.intensity]}</span>
          </div>

          <div style={{ background: "#1E2A45", borderRadius: 8, padding: "7px 10px", borderLeft: `3px solid ${p.color}` }}>
            <div style={{ fontSize: 9, color: "#475569", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 2 }}>Week Goal</div>
            <div style={{ fontSize: 12, color: "#CBD5E1", lineHeight: 1.5 }}>{w.goal}</div>
          </div>

          <div style={{ background: "#1E2A45", borderRadius: 99, height: 3, marginTop: 10, overflow: "hidden" }}>
            <div style={{ background: p.color, height: "100%", width: `${pct}%`, borderRadius: 99, transition: "width 0.4s" }} />
          </div>
        </div>

        {/* Filter pills */}
        <div style={{ display: "flex", gap: 5, overflowX: "auto", marginBottom: 12, paddingBottom: 2 }}>
          {FILTERS.map(f => (
            <button key={f.key} onClick={() => setFilter(f.key)} style={{
              padding: "4px 10px", borderRadius: 99, flexShrink: 0, whiteSpace: "nowrap",
              border: `1px solid ${filter === f.key ? p.color : "#1E2A45"}`,
              background: filter === f.key ? `${p.color}22` : "transparent",
              color: filter === f.key ? p.color : "#64748B",
              fontSize: 10, fontWeight: 600, cursor: "pointer", transition: "all 0.15s"
            }}>{f.label}</button>
          ))}
        </div>

        {/* Days */}
        {w.days.map((d, di) => {
          const filteredTasks = d.tasks.filter(matchesFilter);
          if (filteredTasks.length === 0) return null;

          const dayAllIds = d.tasks.map((_, ti) => taskId(p.id, w.wn, di, ti));
          const dayDone = dayAllIds.filter(id => done[id]).length;
          const allDone = dayDone === dayAllIds.length && dayAllIds.length > 0;
          const isOpen = open === di;

          return (
            <div key={di} style={{ marginBottom: 8 }}>
              <div onClick={() => setOpen(isOpen ? null : di)} style={{
                background: "#0D1426",
                borderRadius: isOpen ? "10px 10px 0 0" : 10,
                padding: "10px 12px", cursor: "pointer",
                display: "flex", alignItems: "center", gap: 10,
                border: `1px solid ${isOpen ? p.color+"88" : allDone ? p.color+"44" : "#1E2A45"}`,
                transition: "border-color 0.15s"
              }}>
                <div style={{
                  width: 30, height: 30, borderRadius: 7, flexShrink: 0,
                  background: allDone ? p.color : "#1E2A45",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  transition: "background 0.2s"
                }}>
                  {allDone
                    ? <svg width="13" height="10" viewBox="0 0 13 10" fill="none"><path d="M1 5L4.5 8.5L12 1" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    : <span style={{ fontSize: 10, fontWeight: 700, color: "#475569" }}>{d.date.split(" ")[0].slice(0,3)}</span>
                  }
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 12, fontWeight: 700, color: "#F1F5F9", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{d.date}</div>
                  <div style={{ fontSize: 10, color: "#475569" }}>{dayDone}/{dayAllIds.length} done · {filteredTasks.length} shown</div>
                </div>
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.2s", flexShrink: 0 }}>
                  <path d="M2.5 5L6.5 8.5L10.5 5" stroke="#475569" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              {isOpen && (
                <div style={{ border: `1px solid ${p.color}88`, borderTop: "none", borderRadius: "0 0 10px 10px", overflow: "hidden" }}>
                  {d.tasks.map((task, ti) => {
                    if (!matchesFilter(task)) return null;
                    const id = taskId(p.id, w.wn, di, ti);
                    const isDone = done[id];
                    const bg = TAG_COLOR(task);
                    const tc = TAG_TEXT(task);
                    return (
                      <div key={ti} onClick={() => toggle(id)} style={{
                        padding: "11px 12px", cursor: "pointer",
                        display: "flex", gap: 10, alignItems: "flex-start",
                        background: isDone ? "#0F2A1E" : ti % 2 === 0 ? "#0D1426" : "#0A1020",
                        borderTop: "1px solid #1E2A45", transition: "background 0.15s"
                      }}>
                        <div style={{
                          width: 18, height: 18, borderRadius: 4, flexShrink: 0, marginTop: 2,
                          background: isDone ? p.color : "transparent",
                          border: `2px solid ${isDone ? p.color : "#334155"}`,
                          display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.15s"
                        }}>
                          {isDone && <svg width="9" height="7" viewBox="0 0 9 7" fill="none"><path d="M1 3.5L3 5.5L8 1" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                        </div>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontSize: 12, lineHeight: 1.6, color: isDone ? "#475569" : "#CBD5E1", textDecoration: isDone ? "line-through" : "none" }}>{task}</div>
                          <div style={{ display: "inline-block", marginTop: 4, padding: "1px 7px", borderRadius: 99, background: bg, color: tc, fontSize: 9, fontWeight: 700 }}>
                            {task.startsWith("🎓") ? "GATE" : task.startsWith("🏋️") ? "POWERLIFTING" : task.startsWith("💻") ? "DSA" : task.startsWith("🛠") || task.startsWith("☕") ? "BUILD" : task.startsWith("🏆") ? "HACKATHON" : task.startsWith("🎤") ? "INTERVIEW" : "TASK"}
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

        {/* Daily routine */}
        <div style={{ background: "#0D1426", borderRadius: 12, padding: 14, marginTop: 12, border: "1px solid #1E2A45" }}>
          <div style={{ fontSize: 9, fontWeight: 700, color: "#475569", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 12 }}>Every Day — no exceptions</div>
          {[
            ["🌅","Morning","Train — gym, eat, recover. Non negotiable."],
            ["⚡","After meal","1 LeetCode problem — 30 mins max. Never zero."],
            ["💻","Afternoon","Main block: cert / Java / project / study (1.5 hrs)"],
            ["🎓","Late afternoon","GATE study — 1–2 hrs (increase to 4 hrs from Jan 2027)"],
            ["🏋️","Evening","Powerlifting study — 30 mins. Technique video OR programming theory."],
            ["🎤","Evening","Voice record 1 interview answer — 2 mins"],
            ["🌙","Night","8 hrs sleep. No exceptions. This is training too."],
          ].map(([icon, time, task]) => (
            <div key={time} style={{ display: "flex", gap: 10, marginBottom: 10 }}>
              <div style={{ fontSize: 14, flexShrink: 0, marginTop: 1 }}>{icon}</div>
              <div>
                <div style={{ fontSize: 9, color: "#475569", fontWeight: 700, marginBottom: 1 }}>{time}</div>
                <div style={{ fontSize: 11, color: "#94A3B8", lineHeight: 1.5 }}>{task}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div style={{ background: "#0D1426", borderRadius: 12, padding: 14, marginTop: 10, border: "1px solid #1E2A45" }}>
          <div style={{ fontSize: 9, fontWeight: 700, color: "#475569", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 10 }}>Filter Guide</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {[
              ["🎓 GATE", "#FEF3C7", "#92400E"],
              ["🏋️ Powerlifting", "#D1FAE5", "#065F46"],
              ["💻 DSA / LeetCode", "#DBEAFE", "#1E40AF"],
              ["🛠 Build / Java", "#EDE9FE", "#5B21B6"],
              ["🏆 Hackathon", "#FEE2E2", "#991B1B"],
            ].map(([label, bg, tc]) => (
              <div key={label} style={{ padding: "3px 9px", borderRadius: 99, background: bg, color: tc, fontSize: 10, fontWeight: 700 }}>{label}</div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}