import { useState, useEffect, useRef, useMemo } from "react";
import {
  RotateCcw,
  Sparkles,
  Layout,
  Activity,
  Cpu,
  Layers,
  Tv,
  Send,
  Database,
  Network,
  ShieldCheck,
  CornerDownLeft,
  Server,
  Zap,
} from "lucide-react";

// Virtual Filesystem Definition
const VIRTUAL_FS = {
  "~": {
    name: "~",
    type: "dir",
    items: {
      "bio.md": {
        name: "bio.md",
        type: "file",
        size: "1.8 KB",
        perms: "-rw-r--r--",
        updated: "Sep 13 12:00",
        content: `# SOWMAJIT KAR // AI/ML + FULL-STACK SYSTEMS ENGINEER
Location: Kolkata, West Bengal, India
Email:    kar893216@gmail.com
GitHub:   https://github.com/Sowmajit-Kar
Live:     https://portfolio-web-six-murex.vercel.app/

========================================================================
[ARCHITECTURAL PHILOSOPHY]
"Full Stack dev by day, deep neural researcher & systems architect by night."

I design at the nexus of high-dimensional deep learning workflows and low-latency
production web infrastructure. My work specializes in:
1. Spatiotemporal Optical Flow & Satellite Video Interpolation (PyTorch, FP16 CUDA)
2. Forensic DeepFake Computer Vision Classifiers (Facial Gradient Artifacts)
3. Autonomous CrewAI Agent Swarms with RAG (Google Gemini API, ChromaDB)
4. Sub-20ms Reactive Web Platforms (React 19, Modern Tailwind, WebSockets)

[CORE CAPABILITIES]
- Deep Learning: PyTorch, CNNs, Optical Flow, OpenCV, TensorRT, Model Quantization
- GenAI & Agents: CrewAI Multi-Agents, LangChain, ChromaDB Vector Indexing, Prompt Tuning
- Full Stack: React 19, Tailwind CSS, Next.js, Node.js, Express, Python FastAPI, MongoDB
- Systems: Linux, Docker, Distributed Scraping, REST & WebSocket Pipelines

[AVAILABILITY & COLLABORATION]
Open for high-impact AI/ML & Full-Stack Engineering roles.
Type 'sudo contact' to send an interactive dispatch or 'run architecture_test' to stress-test.`,
      },
      "skills.json": {
        name: "skills.json",
        type: "file",
        size: "860 B",
        perms: "-rw-r--r--",
        updated: "Sep 13 08:30",
        content: `{
  "ai_deep_learning": ["PyTorch", "Computer Vision", "Optical Flow", "CNNs", "OpenCV"],
  "genai_agents": ["Google Gemini API", "CrewAI Multi-Agents", "LangChain", "ChromaDB", "RAG"],
  "full_stack": ["React 19", "Tailwind CSS", "Next.js", "JavaScript ES6+", "Motion UI"],
  "backend_systems": ["Python (FastAPI, Flask)", "Node.js", "Express", "MongoDB", "WebSockets"]
}`,
      },
      "system_specs.log": {
        name: "system_specs.log",
        type: "file",
        size: "520 B",
        perms: "-r--r--r--",
        updated: "Sep 13 12:00",
        content: `[KERNEL] Sowmajit Kar Workstation // Linux 6.8.4-x86_64
[CPU] 16 Cores Hyperthreaded @ 4.8GHz
[ACCELERATOR] NVIDIA Tensor Core Engine (CUDA 12.4)
[MEMORY] 32GB High-Bandwidth Unified RAM
[STATUS] All telemetry services operating at nominal latency (<15ms)`,
      },
      projects: {
        name: "projects",
        type: "dir",
        items: {
          chronocloud: {
            name: "chronocloud",
            type: "dir",
            items: {
              "readme.md": {
                name: "readme.md",
                type: "file",
                size: "3.2 KB",
                perms: "-rw-r--r--",
                updated: "Sep 12 18:40",
                content: `### 🛰️ ChronoCloud // Satellite Optical Flow Frame Interpolation
Repo:    https://github.com/Sowmajit-Kar/ChronoCloud
Domain:  Computer Vision / Deep Learning (PyTorch)

[SYSTEM ARCHITECTURE]
- Ingests raw bilateral multi-spectral infrared imagery (GOES-16 & Himawari-8).
- High-order bidirectional optical flow estimation across temporal gaps (15-30min intervals).
- Synthesizes intermediate high-frequency cloud motion frames with sub-pixel alignment.

[BOTTLENECKS SOLVED]
- Eliminated severe spatial warping artifacts in non-rigid cloud boundary deformations.
- Reduced inference memory footprint by 42% via half-precision FP16 tensor core execution.

[BENCHMARKS]
- PSNR: 38.4 dB | SSIM: 0.974 | Frame Generation Latency: 27ms (37 FPS)`,
              },
              "eval.py": {
                name: "eval.py",
                type: "file",
                size: "1.1 KB",
                perms: "-rwxr-xr-x",
                updated: "Sep 12 18:42",
                content: "#!/usr/bin/env python3\n# Usage: eval chronocloud\nimport torch\n# Benchmark suite ready",
              },
            },
          },
          campuscart: {
            name: "campuscart",
            type: "dir",
            items: {
              "readme.md": {
                name: "readme.md",
                type: "file",
                size: "2.4 KB",
                perms: "-rw-r--r--",
                updated: "Sep 10 14:12",
                content: `### 🛒 CampusCart // Peer-to-Peer Campus Marketplace
Live:    https://campuscart-iota-one.vercel.app/
Stack:   React 19, Node.js, Express, MongoDB, Tailwind CSS

[SYSTEM ARCHITECTURE]
- Decentralized student-to-student marketplace & textbook/lab equipment rental engine.
- Real-time inventory sync with WebSocket transaction broadcasting.
- Optimistic UI updates with zero-flicker cached state.`,
              },
            },
          },
          "researchmind-ai": {
            name: "researchmind-ai",
            type: "dir",
            items: {
              "readme.md": {
                name: "readme.md",
                type: "file",
                size: "2.8 KB",
                perms: "-rw-r--r--",
                updated: "Sep 08 09:25",
                content: `### 🧠 ResearchMIND AI // PDF Intelligence & Multimodal Q&A
Repo:    https://github.com/Sowmajit-Kar/ResearchMIND_AI
Stack:   Google Gemini API, LangChain, ChromaDB, Python

[SYSTEM ARCHITECTURE]
- Semantic parsing & hierarchical chunking of academic PDFs and scientific literature.
- ChromaDB vector indexing with cosine similarity reranking.
- Interactive multi-turn Q&A with grounded citations and automatic flashcard synthesis.`,
              },
            },
          },
          "deepfake-detection": {
            name: "deepfake-detection",
            type: "dir",
            items: {
              "readme.md": {
                name: "readme.md",
                type: "file",
                size: "2.9 KB",
                perms: "-rw-r--r--",
                updated: "Sep 05 16:30",
                content: `### 🔍 DeepFake Forensic Detection System
Repo:    https://github.com/Sowmajit-Kar/Deep_Fake_Detection_model
Stack:   PyTorch, OpenCV, Spatiotemporal CNNs

[SYSTEM ARCHITECTURE]
- Frame-level facial landmark tracking combined with spatiotemporal artifact gradient analysis.
- Detects subtle temporal warping inconsistencies and blending boundary seams.
- Evaluated on FaceForensics++ benchmark with 99.1% classification accuracy.`,
              },
            },
          },
          scriptoria: {
            name: "scriptoria",
            type: "dir",
            items: {
              "readme.md": {
                name: "readme.md",
                type: "file",
                size: "2.5 KB",
                perms: "-rw-r--r--",
                updated: "Sep 01 11:20",
                content: `### 🖋️ Scriptoria // Autonomous Multi-Agent Content Studio
Repo:    https://github.com/Sowmajit-Kar/-Scriptoria
Stack:   CrewAI, Python, LLMs

[SYSTEM ARCHITECTURE]
- 3 autonomous agents collaborating sequentially:
  1. Researcher Agent (web and paper synthesis)
  2. Writer Agent (drafting technical narrative)
  3. Critic Agent (fact verification, style validation & iterative revision).`,
              },
            },
          },
          "job-portal": {
            name: "job-portal",
            type: "dir",
            items: {
              "readme.md": {
                name: "readme.md",
                type: "file",
                size: "2.1 KB",
                perms: "-rw-r--r--",
                updated: "Aug 28 20:15",
                content: `### 💼 Job Search Engine // High-Throughput Aggregator
Repo:    https://github.com/Sowmajit-Kar/Job_searching_app
Stack:   Flask, Python, BeautifulSoup, REST APIs

[SYSTEM ARCHITECTURE]
- Asynchronous scraping workers aggregating tech job listings across multiple boards.
- Natural language query parser filtering by tech stack, seniority, and remote status.`,
              },
            },
          },
        },
      },
    },
  },
};

const BANNER = `
   ____                               _ _     _  __            
  / ___|  _____      ___ __ ___   __ _(_) |_  | |/ /__ _ _ __  
  \\___ \\ / _ \\ \\ /\\ / / '_ \` _ \\ / _\` | | __| | ' // _\` | '__| 
   ___) | (_) \\ V  V /| | | | | | (_| | | |_  | . \\ (_| | |    
  |____/ \\___/ \\_/\\_/ |_| |_| |_|\\__,_|_|\\__| |_|\\_\\__,_|_|    
  ==============================================================
  SOWMAJIT KAR // MULTI-PANEL COCKPIT & SYSTEM CONSOLE v3.0
  Type 'help' for command matrix | 'cat bio.md' to stream bio
  Type 'run architecture_test' to trigger synchronized stress test
  Type 'gui' to return to graphical UI.
`;

const INITIAL_OUTPUT = [
  { type: "system", text: BANNER },
  { type: "system", text: "[OK] Orbit Neural Kernel initialized. 3 Telemetry panels online." },
  { type: "system", text: "Ready. Type a command or click a quick-action pill below." },
];

const AUTONOMOUS_LOGS = [
  "[CRON:INFO] ChromaDB: 14,200 vector chunks indexed (0.942 cosine similarity)",
  "[CRON:DEBUG] Cache hit on user query vector in 1.4ms (Redis Layer)",
  "[CRON:HEALTH] ChronoCloud optical flow worker node-01: 27ms avg latency",
  "[CRON:AGENT] CrewAI autonomous synthesis loop idle. Awaiting job dispatch",
  "[CRON:INGRESS] Reverse proxy: 0% packet loss across 12,400 requests",
  "[CRON:TENSOR] GPU cluster 0: 2.1GB / 12GB VRAM allocated (nominal)",
  "[CRON:STREAM] CampusCart order event stream listener healthy",
  "[CRON:MONITOR] Zero buffer underrun detected in temporal frame pipeline",
];

export const InteractiveTerminal = ({ onSwitchToGui }) => {
  // Navigation & Shell State
  const [currentPath, setCurrentPath] = useState(["~"]);
  const [history, setHistory] = useState(INITIAL_OUTPUT);
  const [inputVal, setInputVal] = useState("");
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [activeTab, setActiveTab] = useState("all"); // 'all' (cockpit), 'terminal', 'telemetry', 'topology'

  // Live Visual Effects State
  const [crtEnabled, setCrtEnabled] = useState(true);
  const [streamingText, setStreamingText] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const [autonomousLogIndex, setAutonomousLogIndex] = useState(0);

  // Diagnostic / Stress Test State
  const [isStressTesting, setIsStressTesting] = useState(false);
  const [stressStep, setStressStep] = useState(0);
  const [throughput, setThroughput] = useState(42);
  const [tensorLoad, setTensorLoad] = useState(64);
  const [latencyP95, setLatencyP95] = useState(24.1);

  // Contact Shell Form State
  const [contactFormStep, setContactFormStep] = useState(null); // 'name' | 'email' | 'message' | null
  const [contactData, setContactData] = useState({ name: "", email: "", message: "" });

  // References
  const bottomRef = useRef(null);
  const inputRef = useRef(null);
  const streamIntervalRef = useRef(null);
  const streamQueueRef = useRef("");

  // Directory Path String
  const promptPath = useMemo(() => {
    if (currentPath.length === 1 && currentPath[0] === "~") return "~";
    return currentPath.join("/").replace("~/", "");
  }, [currentPath]);

  // Helper to resolve directory object in virtual filesystem
  const resolveDirectory = (pathArray) => {
    let current = VIRTUAL_FS["~"];
    for (let i = 1; i < pathArray.length; i++) {
      const part = pathArray[i];
      if (current.items && current.items[part] && current.items[part].type === "dir") {
        current = current.items[part];
      } else {
        return null;
      }
    }
    return current;
  };

  // Scroll to bottom when history changes or streaming updates
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history, streamingText]);

  // Focus input automatically
  useEffect(() => {
    inputRef.current?.focus();
  }, [contactFormStep]);

  // Autonomous background logging ticker (idle cron simulator)
  useEffect(() => {
    const timer = setInterval(() => {
      setAutonomousLogIndex((prev) => (prev + 1) % AUTONOMOUS_LOGS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  // Telemetry chart jitter loop (oscilloscope effect)
  useEffect(() => {
    const jitter = setInterval(() => {
      if (!isStressTesting) {
        setThroughput(Math.floor(38 + Math.random() * 12));
        setLatencyP95(+(23.5 + Math.random() * 1.5).toFixed(1));
        setTensorLoad(Math.floor(62 + Math.random() * 5));
      }
    }, 1200);
    return () => clearInterval(jitter);
  }, [isStressTesting]);

  // Streaming Text Tokenization Engine
  const startTokenStream = (fullText, onComplete) => {
    if (streamIntervalRef.current) clearInterval(streamIntervalRef.current);
    setIsStreaming(true);
    setStreamingText("");
    streamQueueRef.current = fullText;

    let index = 0;
    const chunkSize = 6; // characters per token tick

    streamIntervalRef.current = setInterval(() => {
      index += chunkSize;
      if (index >= fullText.length) {
        clearInterval(streamIntervalRef.current);
        setStreamingText(fullText);
        setIsStreaming(false);
        if (onComplete) onComplete(fullText);
      } else {
        setStreamingText(fullText.slice(0, index));
      }
    }, 15);
  };

  const skipStreaming = () => {
    if (isStreaming && streamQueueRef.current) {
      clearInterval(streamIntervalRef.current);
      setStreamingText(streamQueueRef.current);
      setIsStreaming(false);
      setHistory((prev) => [
        ...prev,
        { type: "output", text: streamQueueRef.current },
      ]);
      streamQueueRef.current = "";
      setStreamingText("");
    }
  };

  // Trigger Flashy Architecture Stress Test
  const triggerArchitectureTest = () => {
    setIsStressTesting(true);
    setStressStep(1);

    const testLogs = [
      {
        step: 1,
        text: "[LOAD TEST: 1/4] Injecting 2,500 synthetic concurrent requests through ingress gateway...",
        tp: 780,
        tl: 78,
        lat: 18.2,
      },
      {
        step: 2,
        text: "[LOAD TEST: 2/4] ChromaDB vector indexing under burst load... Embedding hit-rate 99.4%",
        tp: 1650,
        tl: 88,
        lat: 14.1,
      },
      {
        step: 3,
        text: "[LOAD TEST: 3/4] GPU Tensor Cores executing ChronoCloud optical flow interpolation @ 37 FPS...",
        tp: 2450,
        tl: 96,
        lat: 11.8,
      },
      {
        step: 4,
        text: "[LOAD TEST: 4/4] Dynamic packet routing verified. Zero packet drops. Benchmarks passed 🚀",
        tp: 2400,
        tl: 94,
        lat: 12.0,
      },
    ];

    testLogs.forEach((item, idx) => {
      setTimeout(() => {
        setStressStep(item.step);
        setThroughput(item.tp);
        setTensorLoad(item.tl);
        setLatencyP95(item.lat);
        setHistory((prev) => [...prev, { type: "system", text: item.text }]);

        if (idx === testLogs.length - 1) {
          setTimeout(() => {
            setIsStressTesting(false);
            setStressStep(0);
            setHistory((prev) => [
              ...prev,
              {
                type: "output",
                text: `DIAGNOSTIC SUMMARY:
  Throughput Peak: 2,450 req/sec (Nominal)
  p95 Latency:     11.8 ms (Sub-20ms SLA Passed)
  Memory Buffer:   Optimal (Zero OOM / Zero Leaks)
  Result:          SYSTEM EXTREMELY RESILIENT`,
              },
            ]);
          }, 1200);
        }
      }, (idx + 1) * 900);
    });
  };

  // Main Command Handler
  const handleCommand = (rawInput) => {
    const rawCmd = rawInput.trim();
    if (!rawCmd && !contactFormStep) return;

    // Interactive sudo contact form sequence
    if (contactFormStep) {
      handleContactFormInput(rawCmd);
      return;
    }

    // Support compound bash command execution (e.g., 'cd projects/chronocloud && cat readme.md')
    if (rawCmd.includes("&&")) {
      const subCommands = rawCmd.split("&&").map((s) => s.trim());
      setCommandHistory((prev) => [...prev, rawCmd]);
      setHistoryIndex(-1);
      setInputVal("");

      subCommands.forEach((sub, i) => {
        setTimeout(() => {
          executeSingleCommand(sub);
        }, i * 350);
      });
      return;
    }

    setCommandHistory((prev) => [...prev, rawCmd]);
    setHistoryIndex(-1);
    setInputVal("");
    executeSingleCommand(rawCmd);
  };

  // Single Command Execution Logic
  const executeSingleCommand = (rawCmd) => {
    const cmd = rawCmd.trim();
    const lowerCmd = cmd.toLowerCase();
    const args = cmd.split(" ").filter(Boolean);
    const mainAction = args[0]?.toLowerCase();
    const target = args[1];

    // Append user input prompt to history
    const inputEntry = {
      type: "input",
      text: `sowmajit@deepmind-arch:${promptPath}$ ${rawCmd}`,
    };

    const currentDirObj = resolveDirectory(currentPath);

    switch (mainAction) {
      case "help":
        setHistory((prev) => [
          ...prev,
          inputEntry,
          {
            type: "output",
            text: `========================================================================
AVAILABLE ACTIONS & COMMAND MATRIX:
========================================================================
[FILESYSTEM NAVIGATION]
  ls [path]                     - List directory items with permissions & sizes
  cd <dir>                      - Change active directory (e.g. 'cd projects/chronocloud')
  cd .. / cd ~                  - Move to parent directory or home root
  pwd                           - Print current working directory path
  cat <file>                    - Output file contents (e.g. 'cat bio.md', 'cat readme.md')
  <cmd1> && <cmd2>              - Execute chained commands sequentially

[SYSTEM DIAGNOSTICS & BENCHMARKS]
  run architecture_test         - Stress-test system with synchronized Panel B & C telemetry
  eval chronocloud              - Benchmark satellite optical flow interpolation model
  eval deepfake                 - Run forensic video classifier test suite

[PORTFOLIO & PROFILE]
  cat bio.md                    - Stream technical background & engineering philosophy
  projects                      - Direct catalog of all 6 flagship GitHub repositories
  skills                        - Categorized technical stack and proficiency matrix
  sudo contact                  - Interactive terminal shell form to dispatch an inquiry
  sudo hire-me                  - Priority candidate acquisition protocol

[SYSTEM & INTERFACE]
  gui                           - Switch to visual Graphical User Interface
  clear                         - Flush console buffer
  whoami                        - Display current authenticated session identity`,
          },
        ]);
        break;

      case "pwd":
        setHistory((prev) => [
          ...prev,
          inputEntry,
          {
            type: "output",
            text: `/home/sowmajit${currentPath.length > 1 ? "/" + currentPath.slice(1).join("/") : ""}`,
          },
        ]);
        break;

      case "ls": {
        let targetDir = currentDirObj;
        if (target) {
          if (target === "projects" || target === "projects/") {
            targetDir = VIRTUAL_FS["~"].items.projects;
          } else if (currentDirObj.items && currentDirObj.items[target]) {
            targetDir = currentDirObj.items[target];
          }
        }

        if (!targetDir || targetDir.type !== "dir") {
          setHistory((prev) => [
            ...prev,
            inputEntry,
            { type: "error", text: `ls: cannot access '${target}': No such file or directory` },
          ]);
          break;
        }

        const items = Object.values(targetDir.items || {});
        const outputLines = items.map((item) => {
          const isDir = item.type === "dir";
          const perm = isDir ? "drwxr-xr-x" : item.perms || "-rw-r--r--";
          const size = isDir ? "4.0 KB" : item.size || "1.0 KB";
          const date = item.updated || "Sep 13 12:00";
          const displayName = isDir ? `${item.name}/` : item.name;
          return `${perm}  sowmajit staff  ${size.padEnd(7)}  ${date}  ${displayName}`;
        });

        setHistory((prev) => [
          ...prev,
          inputEntry,
          {
            type: "output",
            text: `total ${items.length}\n` + outputLines.join("\n"),
          },
        ]);
        break;
      }

      case "cd": {
        if (!target || target === "~" || target === "/home/sowmajit") {
          setCurrentPath(["~"]);
          setHistory((prev) => [...prev, inputEntry]);
          break;
        }

        if (target === "..") {
          if (currentPath.length > 1) {
            setCurrentPath((prev) => prev.slice(0, -1));
          }
          setHistory((prev) => [...prev, inputEntry]);
          break;
        }

        // Relative or path traversal
        const cleaned = target.replace(/\/$/, "");
        const parts = cleaned.split("/").filter(Boolean);

        let testPath = [...currentPath];
        let valid = true;

        for (const p of parts) {
          if (p === "..") {
            if (testPath.length > 1) testPath.pop();
          } else if (p === "~") {
            testPath = ["~"];
          } else {
            const dir = resolveDirectory(testPath);
            if (dir && dir.items && dir.items[p] && dir.items[p].type === "dir") {
              testPath.push(p);
            } else {
              valid = false;
              break;
            }
          }
        }

        if (valid) {
          setCurrentPath(testPath);
          setHistory((prev) => [...prev, inputEntry]);
        } else {
          setHistory((prev) => [
            ...prev,
            inputEntry,
            { type: "error", text: `cd: no such file or directory: ${target}` },
          ]);
        }
        break;
      }

      case "cat": {
        if (!target) {
          setHistory((prev) => [
            ...prev,
            inputEntry,
            { type: "error", text: "cat: missing file operand. Example: 'cat bio.md'" },
          ]);
          break;
        }

        // Check if looking for bio.md
        if (target === "bio.md" || target === "~/bio.md") {
          const bioContent = VIRTUAL_FS["~"].items["bio.md"].content;
          setHistory((prev) => [...prev, inputEntry]);
          startTokenStream(bioContent, (completedText) => {
            setHistory((prev) => [...prev, { type: "output", text: completedText }]);
            setStreamingText("");
          });
          break;
        }

        // Check current directory items
        const fileObj = currentDirObj?.items?.[target];
        if (fileObj) {
          if (fileObj.type === "dir") {
            setHistory((prev) => [
              ...prev,
              inputEntry,
              { type: "error", text: `cat: ${target}: Is a directory` },
            ]);
          } else {
            setHistory((prev) => [
              ...prev,
              inputEntry,
              { type: "output", text: fileObj.content },
            ]);
          }
          break;
        }

        // Check if target is a path like projects/chronocloud/readme.md
        const targetParts = target.split("/");
        if (targetParts.length > 1) {
          const fileName = targetParts[targetParts.length - 1];
          const dirParts = targetParts.slice(0, -1);
          let dir = currentDirObj;
          for (const d of dirParts) {
            if (dir?.items?.[d]) dir = dir.items[d];
            else dir = null;
          }
          if (dir?.items?.[fileName]) {
            setHistory((prev) => [
              ...prev,
              inputEntry,
              { type: "output", text: dir.items[fileName].content },
            ]);
            break;
          }
        }

        setHistory((prev) => [
          ...prev,
          inputEntry,
          { type: "error", text: `cat: ${target}: No such file or directory` },
        ]);
        break;
      }

      case "run":
        if (target === "architecture_test" || lowerCmd === "run architecture_test") {
          setHistory((prev) => [...prev, inputEntry]);
          triggerArchitectureTest();
        } else {
          setHistory((prev) => [
            ...prev,
            inputEntry,
            { type: "error", text: `run: unknown test target '${target}'. Try 'run architecture_test'` },
          ]);
        }
        break;

      case "sudo":
        if (target === "contact" || lowerCmd === "sudo contact") {
          setContactFormStep("name");
          setHistory((prev) => [
            ...prev,
            inputEntry,
            {
              type: "system",
              text: `[AUTH] Recruiter intake protocol activated.\nEnter details step-by-step or type 'exit' to cancel.\n\nStep 1/3: What is your name / company?`,
            },
          ]);
        } else if (target === "hire-me" || lowerCmd === "sudo hire-me") {
          setHistory((prev) => [
            ...prev,
            inputEntry,
            {
              type: "system",
              text: `[ACCESS GRANTED] High-impact candidate profile selected.\nOpening direct communication channel to kar893216@gmail.com...`,
            },
          ]);
          window.open("mailto:kar893216@gmail.com?subject=Opportunity%20for%20Sowmajit%20Kar", "_blank");
        } else {
          setHistory((prev) => [
            ...prev,
            inputEntry,
            { type: "error", text: `sudo: ${target || "command"}: command not found. Try 'sudo contact' or 'sudo hire-me'` },
          ]);
        }
        break;

      case "eval":
        if (target === "chronocloud" || lowerCmd === "eval chronocloud") {
          setHistory((prev) => [
            ...prev,
            inputEntry,
            {
              type: "system",
              text: `[BENCHMARK] Executing ChronoCloud temporal optical flow interpolation test...
  [1/4] Ingesting GOES-16 infrared channel pairs (1024x1024)... [DONE]
  [2/4] Computing bilateral optical flow vectors...             [12.2ms]
  [3/4] Synthesizing interpolated mid-frame...                  [14.8ms]
  [4/4] Validating structural similarity index...
  -------------------------------------------------------------
  Peak Signal-to-Noise Ratio (PSNR): 38.4 dB  (Exemplary)
  Structural Similarity (SSIM):       0.974   (High Fidelity)
  Total Inference Time:               27.0 ms (Real-Time 37 FPS)
  Status: BENCHMARK PASSED 🚀`,
            },
          ]);
        } else if (target === "deepfake" || lowerCmd === "eval deepfake") {
          setHistory((prev) => [
            ...prev,
            inputEntry,
            {
              type: "system",
              text: `[BENCHMARK] Testing DeepFake Forensic Classifier on sample video stream...
  [+] Extracted 48 face crops from test sequence.
  [+] Computing spatiotemporal artifact gradients...
  -------------------------------------------------------------
  Prediction:     AUTHENTIC (Probability: 99.1%)
  False Positive: < 0.9%
  CNN Latency:    18.4ms / frame
  Status: CLASSIFICATION COMPLETE`,
            },
          ]);
        } else {
          setHistory((prev) => [
            ...prev,
            inputEntry,
            { type: "error", text: `eval: unknown model '${target}'. Available: 'eval chronocloud', 'eval deepfake'` },
          ]);
        }
        break;

      case "about":
        setHistory((prev) => [
          ...prev,
          inputEntry,
          {
            type: "output",
            text: `PROFILE:  Sowmajit Kar
ROLE:     AI/ML + Full Stack Engineer
LOCATION: Kolkata, West Bengal, India
GITHUB:   https://github.com/Sowmajit-Kar
LIVE:     https://portfolio-web-six-murex.vercel.app/

Full Stack developer with deep roots in AI and Computer Vision.
Building high-performance neural interpolation systems, forensic vision models,
autonomous CrewAI agent studios, and production web applications.`,
          },
        ]);
        break;

      case "projects":
        setHistory((prev) => [
          ...prev,
          inputEntry,
          {
            type: "output",
            text: `FLAGSHIP REPOSITORIES (GitHub: @Sowmajit-Kar):
------------------------------------------------------------------------
1. ChronoCloud (AI/ML)
   Satellite optical flow frame interpolation (PyTorch, FP16)
   https://github.com/Sowmajit-Kar/ChronoCloud

2. CampusCart (Full Stack)
   College e-commerce & lab gear rental marketplace
   https://campuscart-iota-one.vercel.app/

3. ResearchMIND AI (GenAI)
   Academic PDF intelligence & Q&A powered by Google Gemini API
   https://github.com/Sowmajit-Kar/ResearchMIND_AI

4. DeepFake Detection System (AI/ML)
   Deep CNN video classifier for forensic video manipulation
   https://github.com/Sowmajit-Kar/Deep_Fake_Detection_model

5. Scriptoria Studio (GenAI)
   Autonomous multi-agent research & content synthesis studio
   https://github.com/Sowmajit-Kar/-Scriptoria

6. Job Search Engine (Full Stack)
   High-throughput asynchronous job aggregation platform
   https://github.com/Sowmajit-Kar/Job_searching_app`,
          },
        ]);
        break;

      case "skills":
        setHistory((prev) => [
          ...prev,
          inputEntry,
          {
            type: "output",
            text: `TECHNICAL ARSENAL:
[AI / Deep Learning]
  - PyTorch & Deep Neural Nets    [====================] 90%
  - Computer Vision & OpenCV      [=================== ] 88%
  - Satellite Optical Flow        [=================== ] 85%
  - DeepFake Forensics            [==================  ] 84%

[GenAI & Autonomous Agents]
  - Google Gemini API & LLMs      [====================] 94%
  - CrewAI Multi-Agent Teams      [====================] 92%
  - ChromaDB Vector Indexing      [=================== ] 88%

[Full Stack & Frontend]
  - React 19 & Modern Hooks       [====================] 92%
  - Tailwind CSS & Motion UI      [====================] 95%
  - Next.js & JavaScript ES6+     [=================== ] 90%

[Backend & Systems]
  - Python (FastAPI, Flask)       [====================] 90%
  - Node.js & Express REST APIs   [=================== ] 85%
  - MongoDB & WebSockets          [==================  ] 84%`,
          },
        ]);
        break;

      case "contact":
        setHistory((prev) => [
          ...prev,
          inputEntry,
          {
            type: "output",
            text: `COMMUNICATION CHANNELS:
  Email:    kar893216@gmail.com
  Phone:    +91-9635242578
  Location: Kolkata, West Bengal, India
  GitHub:   https://github.com/Sowmajit-Kar
  Vercel:   https://portfolio-web-six-murex.vercel.app/

* Tip: Type 'sudo contact' to send a message directly from this terminal!`,
          },
        ]);
        break;

      case "gui":
        setHistory((prev) => [
          ...prev,
          inputEntry,
          { type: "system", text: "Switching to Graphical User Interface..." },
        ]);
        setTimeout(() => onSwitchToGui(), 400);
        break;

      case "clear":
        setHistory([]);
        break;

      case "whoami":
        setHistory((prev) => [
          ...prev,
          inputEntry,
          { type: "output", text: "guest@orbit-workstation (Role: Recruiter / Engineer, Perm: READ + EXECUTE)" },
        ]);
        break;

      default:
        setHistory((prev) => [
          ...prev,
          inputEntry,
          {
            type: "error",
            text: `zsh: command not found: ${rawCmd}. Type 'help' for valid commands or 'cat bio.md'.`,
          },
        ]);
        break;
    }
  };

  // Interactive sudo contact multi-step form input handler
  const handleContactFormInput = (val) => {
    if (val.toLowerCase() === "exit" || val.toLowerCase() === "cancel") {
      setContactFormStep(null);
      setHistory((prev) => [
        ...prev,
        { type: "input", text: val },
        { type: "system", text: "[CANCELLED] Recruiter intake form aborted." },
      ]);
      setInputVal("");
      return;
    }

    if (contactFormStep === "name") {
      setContactData((prev) => ({ ...prev, name: val }));
      setContactFormStep("email");
      setHistory((prev) => [
        ...prev,
        { type: "input", text: val },
        { type: "system", text: `Step 2/3: Enter your contact email:` },
      ]);
    } else if (contactFormStep === "email") {
      setContactData((prev) => ({ ...prev, email: val }));
      setContactFormStep("message");
      setHistory((prev) => [
        ...prev,
        { type: "input", text: val },
        { type: "system", text: `Step 3/3: What is your project opportunity or message?` },
      ]);
    } else if (contactFormStep === "message") {
      const finalSubmission = { ...contactData, message: val };
      setContactFormStep(null);
      setInputVal("");

      const mailtoUrl = `mailto:kar893216@gmail.com?subject=Inquiry%20from%20${encodeURIComponent(
        finalSubmission.name
      )}&body=${encodeURIComponent(
        `From: ${finalSubmission.name} (${finalSubmission.email})\n\nMessage:\n${finalSubmission.message}`
      )}`;

      setHistory((prev) => [
        ...prev,
        { type: "input", text: val },
        {
          type: "system",
          text: `[TRANSMISSION ENCRYPTED] Intake record compiled successfully:
-------------------------------------------------------------
From:    ${finalSubmission.name} <${finalSubmission.email}>
To:      Sowmajit Kar <kar893216@gmail.com>
Message: "${finalSubmission.message}"
-------------------------------------------------------------
Status: DISPATCHED TO QUEUE. Click the button below to send via your email client.`,
        },
        {
          type: "action",
          mailto: mailtoUrl,
          payload: `From: ${finalSubmission.name} <${finalSubmission.email}>\nMessage: ${finalSubmission.message}`,
        },
      ]);
    }
  };

  const handleKeyDown = (e) => {
    if (isStreaming) {
      skipStreaming();
      return;
    }

    if (e.key === "Enter") {
      handleCommand(inputVal);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length === 0) return;
      const nextIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIndex);
      setInputVal(commandHistory[nextIndex]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex === -1) return;
      const nextIndex = historyIndex + 1;
      if (nextIndex >= commandHistory.length) {
        setHistoryIndex(-1);
        setInputVal("");
      } else {
        setHistoryIndex(nextIndex);
        setInputVal(commandHistory[nextIndex]);
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      const commands = [
        "help",
        "cat bio.md",
        "ls",
        "ls projects/",
        "cd projects/chronocloud",
        "cat readme.md",
        "run architecture_test",
        "sudo contact",
        "eval chronocloud",
        "eval deepfake",
        "skills",
        "projects",
        "contact",
        "gui",
        "clear",
      ];
      const match = commands.find((c) => c.startsWith(inputVal.trim().toLowerCase()));
      if (match) setInputVal(match);
    }
  };

  const quickActions = [
    { label: "help", cmd: "help" },
    { label: "cat bio.md", cmd: "cat bio.md" },
    { label: "run test", cmd: "run architecture_test" },
    { label: "ls projects/", cmd: "ls projects/" },
    { label: "eval chronocloud", cmd: "eval chronocloud" },
    { label: "sudo contact", cmd: "sudo contact" },
  ];

  return (
    <div className="min-h-screen pt-20 pb-12 px-3 sm:px-6 flex flex-col items-center justify-center">
      {/* Cockpit Master Wrapper */}
      <div
        className={`w-full max-w-7xl rounded-2xl bg-zinc-950/95 border border-zinc-800/90 shadow-2xl overflow-hidden backdrop-blur-2xl flex flex-col transition-all duration-300 ${
          crtEnabled ? "crt-screen crt-scanlines crt-curve" : ""
        }`}
      >
        {/* Cockpit Top Bar / Header */}
        <div className="px-4 py-3 bg-zinc-900/90 border-b border-zinc-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center space-x-2">
            <button
              onClick={onSwitchToGui}
              title="Close terminal (Switch to GUI)"
              className="w-3 h-3 rounded-full bg-red-500 hover:opacity-80 transition-opacity cursor-pointer"
            />
            <span className="w-3 h-3 rounded-full bg-yellow-500 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
            <span className="ml-3 text-xs font-mono text-zinc-400 font-semibold tracking-wide">
              SOWMAJIT-COCKPIT // v3.0 &bull; {promptPath}
            </span>
          </div>

          {/* Center Tabs (for mobile/tablet toggle) */}
          <div className="flex lg:hidden items-center gap-1 bg-zinc-950/80 p-1 rounded-lg border border-zinc-800 text-[11px] font-mono">
            <button
              onClick={() => setActiveTab("terminal")}
              className={`px-2.5 py-1 rounded cursor-pointer ${
                activeTab === "terminal" ? "bg-violet-600 text-white" : "text-zinc-400"
              }`}
            >
              Terminal
            </button>
            <button
              onClick={() => setActiveTab("telemetry")}
              className={`px-2.5 py-1 rounded cursor-pointer ${
                activeTab === "telemetry" ? "bg-violet-600 text-white" : "text-zinc-400"
              }`}
            >
              Telemetry
            </button>
            <button
              onClick={() => setActiveTab("topology")}
              className={`px-2.5 py-1 rounded cursor-pointer ${
                activeTab === "topology" ? "bg-violet-600 text-white" : "text-zinc-400"
              }`}
            >
              Topology
            </button>
            <button
              onClick={() => setActiveTab("all")}
              className={`px-2 py-1 rounded cursor-pointer ${
                activeTab === "all" ? "bg-violet-600 text-white" : "text-zinc-400"
              }`}
            >
              All
            </button>
          </div>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2">
            {/* CRT Shader Toggle */}
            <button
              onClick={() => setCrtEnabled(!crtEnabled)}
              title="Toggle CRT Screen Scanlines & Curve"
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-mono border transition-all cursor-pointer ${
                crtEnabled
                  ? "bg-emerald-500/15 text-emerald-400 border-emerald-500/40 shadow-[0_0_12px_rgba(52,211,153,0.2)]"
                  : "bg-zinc-800 text-zinc-400 border-zinc-700"
              }`}
            >
              <Tv size={12} />
              <span>CRT: {crtEnabled ? "ON" : "OFF"}</span>
            </button>

            <button
              onClick={onSwitchToGui}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono bg-violet-600/20 text-violet-300 border border-violet-500/30 hover:bg-violet-600/30 transition-all cursor-pointer"
            >
              <Layout size={13} />
              <span className="hidden sm:inline">Switch to GUI</span>
            </button>

            <button
              onClick={() => setHistory([])}
              title="Clear terminal buffer"
              className="p-1.5 text-zinc-400 hover:text-zinc-200 cursor-pointer rounded bg-zinc-800"
            >
              <RotateCcw size={13} />
            </button>
          </div>
        </div>

        {/* Cockpit Multi-Panel Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[580px] lg:h-[72vh] divide-y lg:divide-y-0 lg:divide-x divide-zinc-800">
          {/* ========================================================================= */}
          {/* PANEL A: Interactive CLI Shell (Left Column)                              */}
          {/* ========================================================================= */}
          <div
            className={`flex flex-col h-full bg-black/60 overflow-hidden ${
              activeTab === "all" || activeTab === "terminal" ? "lg:col-span-7" : "hidden"
            }`}
          >
            {/* Terminal Screen Stream Area */}
            <div className="flex-1 p-4 overflow-y-auto font-mono text-xs text-zinc-200 space-y-2.5 select-text">
              {history.map((item, index) => (
                <div key={index} className="leading-relaxed">
                  {item.type === "input" && (
                    <div className="text-cyan-400 font-semibold flex items-center gap-1.5">
                      <span className="text-emerald-400 font-bold">&gt;</span>
                      <span>{item.text}</span>
                    </div>
                  )}

                  {item.type === "system" && (
                    <pre
                      className={`whitespace-pre-wrap font-mono text-[11px] sm:text-xs text-violet-300 bg-violet-950/20 p-2.5 rounded-lg border border-violet-800/30 ${
                        crtEnabled ? "crt-glow" : ""
                      }`}
                    >
                      {item.text}
                    </pre>
                  )}

                  {item.type === "output" && (
                    <pre
                      className={`whitespace-pre-wrap font-mono text-[11px] sm:text-xs text-zinc-300 leading-relaxed ${
                        crtEnabled ? "crt-glow" : ""
                      }`}
                    >
                      {item.text}
                    </pre>
                  )}

                  {item.type === "error" && (
                    <div className="text-rose-400 font-mono text-xs bg-rose-950/20 p-2 rounded border border-rose-800/30">
                      {item.text}
                    </div>
                  )}

                  {item.type === "action" && (
                    <div className="mt-2 flex flex-wrap items-center gap-2">
                      <a
                        href={item.mailto}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs font-semibold shadow-lg shadow-emerald-900/40 transition-all cursor-pointer"
                      >
                        <Send size={12} />
                        <span>Open in Email Client</span>
                      </a>
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(item.payload);
                          alert("Dispatch payload copied to clipboard!");
                        }}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-mono text-xs border border-zinc-700 cursor-pointer"
                      >
                        <span>Copy Payload</span>
                      </button>
                    </div>
                  )}
                </div>
              ))}

              {/* Real-Time Token Streaming Active View */}
              {isStreaming && (
                <div className="p-2.5 rounded-lg bg-cyan-950/20 border border-cyan-800/40">
                  <div className="flex items-center justify-between mb-1.5 text-[10px] text-cyan-400">
                    <span className="flex items-center gap-1">
                      <Sparkles size={10} className="animate-spin" />
                      LLM TOKEN STREAM IN PROGRESS...
                    </span>
                    <button
                      onClick={skipStreaming}
                      className="px-1.5 py-0.5 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 cursor-pointer"
                    >
                      Skip &gt;&gt;
                    </button>
                  </div>
                  <pre className="whitespace-pre-wrap font-mono text-[11px] sm:text-xs text-cyan-200 leading-relaxed">
                    {streamingText}
                    <span className="terminal-cursor" />
                  </pre>
                </div>
              )}

              {/* Active Command Input Line */}
              <div className="flex items-center gap-2 pt-2">
                <span className="text-emerald-400 font-bold shrink-0">
                  {contactFormStep ? `[sudo contact]` : `sowmajit@deepmind-arch:${promptPath}$`}
                </span>
                <input
                  ref={inputRef}
                  type="text"
                  value={inputVal}
                  disabled={isStreaming}
                  onChange={(e) => setInputVal(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 bg-transparent text-zinc-100 font-mono focus:outline-none caret-emerald-400 text-xs sm:text-sm"
                  autoFocus
                  placeholder={
                    contactFormStep
                      ? "Type your response and press Enter..."
                      : "Type command (e.g. 'help', 'cat bio.md', 'run architecture_test')..."
                  }
                />
                <button
                  onClick={() => handleCommand(inputVal)}
                  className="p-1 rounded bg-zinc-800 text-zinc-300 hover:text-white cursor-pointer sm:hidden"
                >
                  <CornerDownLeft size={14} />
                </button>
              </div>

              <div ref={bottomRef} />
            </div>

            {/* Autonomous Background Logging Stream Bar (Idle Cron) */}
            <div className="px-3 py-1.5 bg-zinc-950/90 border-t border-zinc-900/80 flex items-center justify-between text-[10px] font-mono text-zinc-500 overflow-hidden">
              <div className="flex items-center gap-2 truncate">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping shrink-0" />
                <span className="text-zinc-600 shrink-0">CRON STATUS:</span>
                <span className="truncate text-zinc-400 font-mono transition-all duration-300">
                  {AUTONOMOUS_LOGS[autonomousLogIndex]}
                </span>
              </div>
              <span className="text-[9px] text-zinc-600 shrink-0 ml-2 hidden sm:inline">60 FPS SYNC</span>
            </div>

            {/* Quick Action Pills Footer */}
            <div className="p-2.5 bg-zinc-900/70 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-1.5 text-xs">
              <div className="flex flex-wrap items-center gap-1">
                <span className="text-zinc-500 font-mono text-[10px] mr-1">Run:</span>
                {quickActions.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => handleCommand(item.cmd)}
                    className="px-2 py-0.5 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-cyan-300 font-mono text-[10px] transition-colors cursor-pointer border border-zinc-700/60"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              <span className="text-zinc-500 font-mono text-[9px] hidden md:inline">
                Tab: Autocomplete &bull; Up/Down: History
              </span>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* RIGHT COLUMN: Stacked Panel B (Telemetry) + Panel C (Topology)            */}
          {/* ========================================================================= */}
          <div
            className={`flex flex-col h-full bg-zinc-950/70 overflow-y-auto divide-y divide-zinc-800/80 ${
              activeTab === "all" || activeTab === "telemetry" || activeTab === "topology"
                ? "lg:col-span-5"
                : "hidden"
            }`}
          >
            {/* PANEL B: Live Telemetry & Neon Charts */}
            <div
              className={`p-4 flex flex-col space-y-3 ${
                activeTab === "topology" && activeTab !== "all" ? "hidden" : "block"
              }`}
            >
              <div className="flex items-center justify-between border-b border-zinc-800/70 pb-2">
                <div className="flex items-center gap-2">
                  <Activity size={14} className="text-cyan-400" />
                  <span className="text-xs font-mono font-bold text-zinc-200 tracking-wider">
                    PANEL B // TELEMETRY OSCILLOSCOPE
                  </span>
                </div>
                <span
                  className={`px-2 py-0.5 rounded text-[10px] font-mono uppercase font-semibold ${
                    isStressTesting
                      ? "bg-rose-500/20 text-rose-300 border border-rose-500/40 animate-pulse"
                      : "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30"
                  }`}
                >
                  {isStressTesting ? `BURST LOAD [STEP ${stressStep}/4]` : "NOMINAL"}
                </span>
              </div>

              {/* Throughput Sparkline Chart */}
              <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800 relative overflow-hidden">
                <div className="flex items-center justify-between text-xs font-mono mb-2">
                  <span className="text-zinc-400 text-[11px]">Dynamic Throughput</span>
                  <span className="text-cyan-400 font-bold text-sm">{throughput} req/s</span>
                </div>

                {/* SVG Oscilloscope Sparkline */}
                <div className="h-16 w-full">
                  <svg className="w-full h-full" viewBox="0 0 200 60" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="neonGlow" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    {/* Grid Lines */}
                    <line x1="0" y1="15" x2="200" y2="15" stroke="#27272a" strokeDasharray="3 3" />
                    <line x1="0" y1="30" x2="200" y2="30" stroke="#27272a" strokeDasharray="3 3" />
                    <line x1="0" y1="45" x2="200" y2="45" stroke="#27272a" strokeDasharray="3 3" />

                    {/* Dynamic Path */}
                    {isStressTesting ? (
                      <path
                        d="M 0 50 Q 25 10, 50 15 T 100 8 T 150 12 T 200 10 L 200 60 L 0 60 Z"
                        fill="url(#neonGlow)"
                        className="transition-all duration-300"
                      />
                    ) : (
                      <path
                        d="M 0 45 Q 25 35, 50 42 T 100 38 T 150 40 T 200 36 L 200 60 L 0 60 Z"
                        fill="url(#neonGlow)"
                        className="transition-all duration-300"
                      />
                    )}
                    {isStressTesting ? (
                      <path
                        d="M 0 50 Q 25 10, 50 15 T 100 8 T 150 12 T 200 10"
                        fill="none"
                        stroke="#06b6d4"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                    ) : (
                      <path
                        d="M 0 45 Q 25 35, 50 42 T 100 38 T 150 40 T 200 36"
                        fill="none"
                        stroke="#06b6d4"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                    )}
                  </svg>
                </div>
              </div>

              {/* Latency & Hardware Tensor Core Meters */}
              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                {/* Latency Gauge */}
                <div className="p-2.5 rounded-lg bg-zinc-900/50 border border-zinc-800/80">
                  <div className="flex items-center justify-between text-zinc-400 text-[10px] mb-1">
                    <span>p95 LATENCY</span>
                    <span className="text-emerald-400 font-bold">{latencyP95} ms</span>
                  </div>
                  <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-emerald-500 to-cyan-400 transition-all duration-500"
                      style={{ width: `${Math.min(100, latencyP95 * 3)}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-[9px] text-zinc-500 mt-1">
                    <span>p50: 12.2ms</span>
                    <span>SLA: &lt;50ms</span>
                  </div>
                </div>

                {/* GPU Tensor Core Meter */}
                <div className="p-2.5 rounded-lg bg-zinc-900/50 border border-zinc-800/80">
                  <div className="flex items-center justify-between text-zinc-400 text-[10px] mb-1">
                    <span className="flex items-center gap-1">
                      <Cpu size={10} className="text-violet-400" />
                      TENSOR CORE
                    </span>
                    <span className="text-violet-400 font-bold">{tensorLoad}%</span>
                  </div>
                  <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-violet-500 to-purple-400 transition-all duration-500"
                      style={{ width: `${tensorLoad}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-[9px] text-zinc-500 mt-1">
                    <span>CUDA 12.4</span>
                    <span>FP16 Mode</span>
                  </div>
                </div>
              </div>
            </div>

            {/* PANEL C: Interactive Architecture Topology Graph */}
            <div
              className={`p-4 flex-1 flex flex-col space-y-3 ${
                activeTab === "telemetry" && activeTab !== "all" ? "hidden" : "block"
              }`}
            >
              <div className="flex items-center justify-between border-b border-zinc-800/70 pb-2">
                <div className="flex items-center gap-2">
                  <Network size={14} className="text-violet-400" />
                  <span className="text-xs font-mono font-bold text-zinc-200 tracking-wider">
                    PANEL C // DISTRIBUTED TOPOLOGY
                  </span>
                </div>
                <button
                  onClick={triggerArchitectureTest}
                  disabled={isStressTesting}
                  className="px-2 py-0.5 rounded text-[10px] font-mono bg-violet-600/20 text-violet-300 border border-violet-500/40 hover:bg-violet-600/30 transition-all cursor-pointer flex items-center gap-1"
                >
                  <Zap size={10} />
                  <span>Stress Test</span>
                </button>
              </div>

              {/* Topology Mesh Canvas Container */}
              <div className="flex-1 min-h-[220px] p-3 rounded-xl bg-zinc-900/40 border border-zinc-800/80 relative flex flex-col justify-between overflow-hidden">
                {/* Connection Flow Lines (SVG) */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
                  <line
                    x1="25%"
                    y1="25%"
                    x2="50%"
                    y2="25%"
                    stroke={isStressTesting ? "#a855f7" : "#3f3f46"}
                    strokeWidth={isStressTesting ? "2" : "1"}
                    strokeDasharray={isStressTesting ? "4 2" : "none"}
                  />
                  <line
                    x1="50%"
                    y1="25%"
                    x2="75%"
                    y2="25%"
                    stroke={isStressTesting ? "#06b6d4" : "#3f3f46"}
                    strokeWidth={isStressTesting ? "2" : "1"}
                    strokeDasharray={isStressTesting ? "4 2" : "none"}
                  />
                  <line
                    x1="50%"
                    y1="25%"
                    x2="50%"
                    y2="75%"
                    stroke={isStressTesting ? "#10b981" : "#3f3f46"}
                    strokeWidth={isStressTesting ? "2" : "1"}
                  />
                  <line
                    x1="25%"
                    y1="75%"
                    x2="50%"
                    y2="75%"
                    stroke={isStressTesting ? "#a855f7" : "#3f3f46"}
                    strokeWidth={isStressTesting ? "2" : "1"}
                  />
                  <line
                    x1="50%"
                    y1="75%"
                    x2="75%"
                    y2="75%"
                    stroke={isStressTesting ? "#06b6d4" : "#3f3f46"}
                    strokeWidth={isStressTesting ? "2" : "1"}
                  />
                </svg>

                {/* Node Row 1 */}
                <div className="grid grid-cols-3 gap-2 z-10">
                  <div
                    className={`p-2 rounded-lg bg-zinc-950/90 border transition-all text-center ${
                      isStressTesting
                        ? "border-cyan-500 shadow-[0_0_12px_rgba(6,182,212,0.3)]"
                        : "border-zinc-800"
                    }`}
                  >
                    <Server size={14} className="mx-auto mb-1 text-cyan-400" />
                    <div className="text-[10px] font-mono font-bold text-zinc-200">Ingress Gateway</div>
                    <div className="text-[8px] font-mono text-zinc-500">Cloudflare Edge</div>
                  </div>

                  <div
                    className={`p-2 rounded-lg bg-zinc-950/90 border transition-all text-center ${
                      isStressTesting
                        ? "border-violet-500 shadow-[0_0_12px_rgba(168,85,247,0.3)]"
                        : "border-zinc-800"
                    }`}
                  >
                    <Database size={14} className="mx-auto mb-1 text-violet-400" />
                    <div className="text-[10px] font-mono font-bold text-zinc-200">ChromaDB</div>
                    <div className="text-[8px] font-mono text-zinc-500">Vector Embeddings</div>
                  </div>

                  <div
                    className={`p-2 rounded-lg bg-zinc-950/90 border transition-all text-center ${
                      isStressTesting
                        ? "border-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.3)]"
                        : "border-zinc-800"
                    }`}
                  >
                    <Layers size={14} className="mx-auto mb-1 text-emerald-400" />
                    <div className="text-[10px] font-mono font-bold text-zinc-200">CrewAI Swarm</div>
                    <div className="text-[8px] font-mono text-zinc-500">3 Agent Loops</div>
                  </div>
                </div>

                {/* Node Row 2 */}
                <div className="grid grid-cols-3 gap-2 z-10 pt-4">
                  <div
                    className={`p-2 rounded-lg bg-zinc-950/90 border transition-all text-center ${
                      isStressTesting
                        ? "border-purple-500 shadow-[0_0_12px_rgba(168,85,247,0.3)]"
                        : "border-zinc-800"
                    }`}
                  >
                    <Cpu size={14} className="mx-auto mb-1 text-purple-400" />
                    <div className="text-[10px] font-mono font-bold text-zinc-200">TensorRT Engine</div>
                    <div className="text-[8px] font-mono text-zinc-500">ChronoCloud Optical Flow</div>
                  </div>

                  <div
                    className={`p-2 rounded-lg bg-zinc-950/90 border transition-all text-center ${
                      isStressTesting
                        ? "border-cyan-500 shadow-[0_0_12px_rgba(6,182,212,0.3)]"
                        : "border-zinc-800"
                    }`}
                  >
                    <Zap size={14} className="mx-auto mb-1 text-cyan-400" />
                    <div className="text-[10px] font-mono font-bold text-zinc-200">Redis Cache</div>
                    <div className="text-[8px] font-mono text-zinc-500">Sub-1ms Query Hits</div>
                  </div>

                  <div
                    className={`p-2 rounded-lg bg-zinc-950/90 border transition-all text-center ${
                      isStressTesting
                        ? "border-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.3)]"
                        : "border-zinc-800"
                    }`}
                  >
                    <ShieldCheck size={14} className="mx-auto mb-1 text-emerald-400" />
                    <div className="text-[10px] font-mono font-bold text-zinc-200">Delivery API</div>
                    <div className="text-[8px] font-mono text-zinc-500">GraphQL / WebSocket</div>
                  </div>
                </div>

                {/* Stress Test Live Packet Monitor */}
                <div className="mt-3 px-2 py-1 bg-zinc-950/80 rounded border border-zinc-800 text-[9px] font-mono flex items-center justify-between text-zinc-400 z-10">
                  <span className="flex items-center gap-1">
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        isStressTesting ? "bg-cyan-400 animate-ping" : "bg-emerald-400"
                      }`}
                    />
                    Mesh Sync: 6 nodes responding
                  </span>
                  <span>Packet Flow: {isStressTesting ? "BURST (2.4k/s)" : "Nominal (40/s)"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
