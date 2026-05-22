import { useState } from "react"
import { quizTopics } from "../data/QuizData"
import type { QuizTopic } from "../data/QuizData"

// ── Question card ──────────────────────────────────────────────
interface QuestionCardProps {
  topic: QuizTopic
  qIndex: number
  total: number
  showAnswer: boolean
  isMarked: boolean
  onToggleAnswer: () => void
  onToggleMark: () => void
}

function QuestionCard({
  topic,
  qIndex,
  total,
  showAnswer,
  isMarked,
  onToggleAnswer,
  onToggleMark,
}: QuestionCardProps) {
  const question = topic.questions[qIndex]

  return (
    <div
      className="w-full border border-black/10 p-6 mb-4 relative overflow-hidden"
      style={{ backgroundColor: topic.color + "08" }}
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-[0.7rem] tracking-[.22em] uppercase opacity-40">
          Question {qIndex + 1} of {total}
        </span>
        {isMarked && (
          <span className="text-[0.7rem] tracking-[.22em] uppercase opacity-40">
            ✓ Marked
          </span>
        )}
      </div>

      <p className="text-base mb-5 leading-relaxed">{question.q}</p>

      <button
        onClick={onToggleAnswer}
        className="text-[0.75rem] tracking-[.15em] uppercase opacity-60 hover:opacity-100 transition"
      >
        {showAnswer ? "− Hide answer" : "+ Show answer"}
      </button>

      {showAnswer && (
        <div className="mt-4 pt-4 border-t border-black/10">
          <p className="text-[0.7rem] tracking-[.22em] uppercase opacity-40 mb-2">
            Answer
          </p>
          <p className="text-sm leading-relaxed mb-4">{question.a}</p>
          <button
            onClick={onToggleMark}
            className="text-[0.75rem] tracking-[.15em] uppercase px-3 py-1.5 border border-black/20 hover:border-black/40 transition"
          >
            {isMarked ? "✓ Got it" : "Mark as got it"}
          </button>
        </div>
      )}
    </div>
  )
}

// ── Main page ──────────────────────────────────────────────────
export default function EnergyQuizPage() {
  const [currentTopic, setCurrentTopic] = useState(0)
  const [currentQ, setCurrentQ] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)
  const [marked, setMarked] = useState<Record<string, boolean>>({})

  const topic = quizTopics[currentTopic]
  const key = `${currentTopic}-${currentQ}`
  const totalQs = quizTopics.reduce((s, t) => s + t.questions.length, 0)
  const markedCount = Object.keys(marked).length

  const handleTopic = (i: number) => {
    setCurrentTopic(i)
    setCurrentQ(0)
    setShowAnswer(false)
  }

  const navigate = (dir: number) => {
    const newQ = currentQ + dir
    if (newQ >= 0 && newQ < topic.questions.length) {
      setCurrentQ(newQ)
      setShowAnswer(false)
    }
  }

  const toggleMark = () => {
    setMarked((prev) => {
      const next = { ...prev }
      if (next[key]) delete next[key]
      else next[key] = true
      return next
    })
  }

  return (
    <div className="min-h-screen text-[#0d0d0d]">
      <div className="max-w-5xl mx-auto px-6 pt-15 pb-24">

        {/* HEADER */}
        <div className="text-left mb-10">
          <p className="text-[0.7rem] tracking-[.22em] uppercase opacity-40 mb-3">
            IN5410 Eksamen
          </p>
          <h1
            className="text-[2rem] sm:text-[3rem] md:text-[4rem] lg:text-[6rem] mb-1"
            style={{ color: "var(--font-color)" }}
          >
            Quiz
          </h1>
          <p
            className="text-muted-foreground italic text-base pb-6"
            style={{ color: "var(--font-color)" }}
          >
            Energy informatics — øvelsesspørsmål
          </p>
        </div>

        {/* PROGRESS */}
        <p className="text-left text-[0.7rem] tracking-[.22em] uppercase opacity-40 mb-3">
          Fremgang — {markedCount} / {totalQs} markert
        </p>

        {/* TOPIC PILLS */}
        <div className="flex flex-wrap gap-2 mb-10">
          {quizTopics.map((t, i) => (
            <button
              key={t.name}
              onClick={() => handleTopic(i)}
              className={`text-[0.75rem] px-3 py-1.5 border transition ${
                i === currentTopic
                  ? "border-black/40"
                  : "border-black/10 opacity-60 hover:opacity-100"
              }`}
              style={
                i === currentTopic
                  ? { backgroundColor: t.color + "20" }
                  : undefined
              }
            >
              <span className="mr-1.5">{t.emoji}</span>
              {t.name}
            </button>
          ))}
        </div>

        {/* QUESTION SECTION */}
        <p className="text-left text-[0.7rem] tracking-[.22em] uppercase opacity-40 mb-3">
          {topic.emoji} {topic.name}
        </p>

        <QuestionCard
          topic={topic}
          qIndex={currentQ}
          total={topic.questions.length}
          showAnswer={showAnswer}
          isMarked={!!marked[key]}
          onToggleAnswer={() => setShowAnswer((s) => !s)}
          onToggleMark={toggleMark}
        />

        {/* NAVIGATION */}
        <div className="flex items-center justify-between gap-3 mt-6">
          <button
            onClick={() => navigate(-1)}
            disabled={currentQ === 0}
            className="text-[0.75rem] tracking-[.15em] uppercase px-3 py-1.5 border border-black/20 hover:border-black/40 transition disabled:opacity-20 disabled:cursor-not-allowed"
          >
            ← Forrige
          </button>

          <div className="flex gap-1.5">
            {topic.questions.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setCurrentQ(i)
                  setShowAnswer(false)
                }}
                className={`w-1.5 h-1.5 rounded-full transition ${
                  i === currentQ
                    ? "bg-black"
                    : marked[`${currentTopic}-${i}`]
                    ? "bg-black/40"
                    : "bg-black/15"
                }`}
                aria-label={`Gå til spørsmål ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => navigate(1)}
            disabled={currentQ === topic.questions.length - 1}
            className="text-[0.75rem] tracking-[.15em] uppercase px-3 py-1.5 border border-black/20 hover:border-black/40 transition disabled:opacity-20 disabled:cursor-not-allowed"
          >
            Neste →
          </button>
        </div>

      </div>
    </div>
  )
}