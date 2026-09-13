import { useState } from "react";
import { Play, Database, Brain, Sparkles, Cpu, Send, CheckCircle, Terminal, Layers } from "lucide-react";
import { cn } from "@/lib/utils";

const PIPELINE_NODES = [
  {
    id: "ingest",
    title: "1. Data Ingestion",
    role: "Multimodal Telemetry & Stream",
    icon: Send,
    tech: "Satellite Rasters / WebSockets",
    latency: "3.2ms",
    status: "Active",
    color: "from-blue-500 to-cyan-500",
    description: "Ingests raw geospatial infrared frames (GOES-16), user queries, or video frame chunks.",
    projectRef: "ChronoCloud & CampusCart",
  },
  {
    id: "vectordb",
    title: "2. Vector DB & RAG",
    role: "Semantic Retrieval & Top-K",
    icon: Database,
    tech: "ChromaDB / Embeddings",
    latency: "8.1ms",
    status: "Indexed",
    color: "from-cyan-500 to-emerald-500",
    description: "Performs dense vector similarity matching and context extraction for zero-hallucination grounding.",
    projectRef: "ResearchMIND AI",
  },
  {
    id: "orchestrator",
    title: "3. CrewAI Agents",
    role: "Autonomous Tool Dispatch",
    icon: Sparkles,
    tech: "CrewAI / Agentic Graph",
    latency: "12.4ms",
    status: "Coordinating",
    color: "from-violet-500 to-purple-500",
    description: "Multi-agent orchestration delegating tasks across Researcher, Analyst, and Synthesizer roles.",
    projectRef: "Scriptoria Studio",
  },
  {
    id: "neural",
    title: "4. Neural Model",
    role: "Deep Learning Inference",
    icon: Brain,
    tech: "PyTorch / FlowNet / CNNs",
    latency: "16.8ms",
    status: "Inference",
    color: "from-purple-500 to-pink-500",
    description: "Executes temporal optical flow interpolation and deepfake forensic feature classification.",
    projectRef: "ChronoCloud & DeepFake Detector",
  },
  {
    id: "delivery",
    title: "5. Production API",
    role: "Low-Latency Edge Delivery",
    icon: Cpu,
    tech: "FastAPI / Node.js / React 19",
    latency: "4.5ms",
    status: "Delivered",
    color: "from-pink-500 to-rose-500",
    description: "Packages tensors into responsive interactive UI components and high-throughput REST endpoints.",
    projectRef: "All Flagship Systems",
  },
];

const MOCK_LOGS = [
  { level: "INGEST", text: "Batch #4092 received: 4x GOES-16 satellite raster frames loaded." },
  { level: "VEC_DB", text: "ChromaDB cosine similarity query matched 5 semantic contexts (dist < 0.12)." },
  { level: "AGENT",  text: "CrewAI VisionAgent activated optical-flow interpolation tool." },
  { level: "INFER",  text: "PyTorch forward pass completed in 14.8ms. SSIM: 0.974, PSNR: 38.2dB." },
  { level: "OUTPUT", text: "Synthesized 60fps frame broadcasted to React client. Status: 200 OK." },
];

export const AIPipelineVisualizer = () => {
  const [selectedNode, setSelectedNode] = useState(PIPELINE_NODES[3]); // Default to Neural Model
  const [isRunning, setIsRunning] = useState(false);
  const [activeStep, setActiveStep] = useState(3);
  const [logs, setLogs] = useState(MOCK_LOGS);

  const runPipeline = () => {
    if (isRunning) return;
    setIsRunning(true);
    setActiveStep(0);

    let step = 0;
    const interval = setInterval(() => {
      step++;
      if (step < PIPELINE_NODES.length) {
        setActiveStep(step);
        setSelectedNode(PIPELINE_NODES[step]);
      } else {
        clearInterval(interval);
        setIsRunning(false);
        // Prepend a fresh timestamped execution log
        const timestamp = new Date().toLocaleTimeString();
        setLogs((prev) => [
          { level: "SUCCESS", text: `[${timestamp}] Pipeline batch executed: End-to-end latency: 45.0ms.` },
          ...prev.slice(0, 4),
        ]);
      }
    }, 700);
  };

  return (
    <div className="w-full max-w-5xl mx-auto rounded-2xl sm:rounded-3xl bg-card/85 backdrop-blur-xl border border-border/80 shadow-2xl overflow-hidden text-left mt-6 sm:mt-8">
      {/* Top Header Dashboard Bar */}
      <div className="px-3.5 sm:px-6 py-3 sm:py-4 border-b border-border/70 flex flex-wrap items-center justify-between gap-2.5 bg-secondary/40">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="flex space-x-1 sm:space-x-1.5">
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/80 inline-block" />
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500/80 inline-block" />
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <div className="h-4 w-px bg-border mx-0.5 sm:mx-1" />
          <div className="flex items-center gap-1.5 sm:gap-2">
            <Layers className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" />
            <span className="text-xs sm:text-sm font-bold tracking-tight text-foreground">
              Live AI/ML Architecture Pipeline
            </span>
          </div>
          <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-semibold text-emerald-500">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            ONLINE
          </span>
        </div>

        {/* Trigger Button */}
        <button
          onClick={runPipeline}
          disabled={isRunning}
          className={cn(
            "inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl text-[11px] sm:text-xs font-bold transition-all cursor-pointer shadow-xs",
            isRunning
              ? "bg-primary/20 text-primary border border-primary/30 cursor-not-allowed"
              : "bg-primary text-primary-foreground hover:scale-105 active:scale-95 hover:shadow-primary/30"
          )}
        >
          <Play size={13} className={isRunning ? "animate-spin" : "fill-current"} />
          <span>{isRunning ? "Processing Stream..." : "Run Pipeline Batch"}</span>
        </button>
      </div>

      {/* Pipeline Node Flow Diagram */}
      <div className="p-3.5 sm:p-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3 relative">
          {PIPELINE_NODES.map((node, index) => {
            const Icon = node.icon;
            const isSelected = selectedNode.id === node.id;
            const isCurrentActive = activeStep === index;

            return (
              <div
                key={node.id}
                onClick={() => setSelectedNode(node)}
                className={cn(
                  "p-3.5 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between relative group",
                  isSelected
                    ? "bg-primary/10 border-primary shadow-lg ring-2 ring-primary/20 scale-[1.02]"
                    : "bg-card/60 hover:bg-card border-border/70 hover:border-primary/40",
                  isCurrentActive && isRunning && "border-cyan-400 ring-2 ring-cyan-400/40 animate-pulse"
                )}
              >
                {/* Node Status Dot */}
                <div className="flex items-center justify-between mb-2">
                  <div
                    className={cn(
                      "p-2 rounded-xl text-white bg-gradient-to-tr shadow-sm",
                      node.color
                    )}
                  >
                    <Icon size={16} />
                  </div>
                  <span className="text-[10px] font-mono text-muted-foreground">
                    {node.latency}
                  </span>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-foreground line-clamp-1">{node.title}</h4>
                  <p className="text-[11px] text-muted-foreground mt-0.5 line-clamp-1 font-mono">
                    {node.tech}
                  </p>
                </div>

                {/* Active indicator bar */}
                <div
                  className={cn(
                    "w-full h-1 rounded-full mt-3 transition-colors",
                    isSelected ? "bg-primary" : "bg-transparent group-hover:bg-primary/30"
                  )}
                />
              </div>
            );
          })}
        </div>

        {/* Node Deep-Dive Inspection Card */}
        {selectedNode && (
          <div className="mt-5 p-5 rounded-2xl bg-secondary/30 border border-border/70 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1 max-w-xl">
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase font-bold tracking-wider px-2 py-0.5 rounded-md bg-primary/15 text-primary border border-primary/30">
                  {selectedNode.role}
                </span>
                <span className="text-xs font-mono text-muted-foreground">
                  Benchmark: {selectedNode.latency}
                </span>
              </div>
              <h5 className="text-base font-bold text-foreground">
                {selectedNode.title} &bull; <span className="text-primary">{selectedNode.tech}</span>
              </h5>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {selectedNode.description}
              </p>
            </div>

            <div className="shrink-0 p-3 rounded-xl bg-card border border-border text-right md:text-right w-full md:w-auto">
              <span className="text-[10px] uppercase font-mono text-muted-foreground block">
                Implemented In
              </span>
              <span className="text-xs font-bold text-foreground block mt-0.5">
                {selectedNode.projectRef}
              </span>
            </div>
          </div>
        )}

        {/* Live Terminal Telemetry Feed */}
        <div className="mt-4 rounded-xl sm:rounded-2xl bg-black/80 border border-zinc-800 p-3 sm:p-4 font-mono text-xs overflow-hidden">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-zinc-800 text-zinc-400">
            <div className="flex items-center gap-2">
              <Terminal size={14} className="text-emerald-400" />
              <span className="font-semibold text-zinc-200 text-[11px] sm:text-xs">Real-Time Telemetry Stream</span>
            </div>
            <span className="text-[10px] text-zinc-500">Live Buffer</span>
          </div>

          <div className="space-y-1.5 text-[11px] overflow-x-auto">
            {logs.map((log, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <span
                  className={cn(
                    "px-1.5 py-0.2 rounded text-[9px] sm:text-[10px] font-bold shrink-0",
                    log.level === "INGEST" && "bg-cyan-900/60 text-cyan-300",
                    log.level === "VEC_DB" && "bg-emerald-900/60 text-emerald-300",
                    log.level === "AGENT" && "bg-purple-900/60 text-purple-300",
                    log.level === "INFER" && "bg-amber-900/60 text-amber-300",
                    log.level === "OUTPUT" && "bg-blue-900/60 text-blue-300",
                    log.level === "SUCCESS" && "bg-emerald-500 text-black font-extrabold"
                  )}
                >
                  {log.level}
                </span>
                <span className="text-zinc-300 leading-relaxed break-words min-w-0">{log.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
