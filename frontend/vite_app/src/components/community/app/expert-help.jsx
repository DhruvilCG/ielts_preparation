"use client"

import { useState } from "react"
import { Button } from "./button.jsx"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./card.jsx"
import { Input } from "./input.jsx"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./Tabs/Tabs.jsx"
import { Avatar, AvatarFallback, AvatarImage } from "./avatar.jsx"
import { Bot, Send } from "lucide-react"
import styles from "./expert-help.module.css"

// Sample data for previously answered questions
const previousQuestions = [
  {
    id: 1,
    question: "How can I improve my speaking fluency?",
    answer:
      "Practice speaking daily, even if it's just to yourself. Record yourself and listen back. Join language exchange groups or find a speaking partner. Focus on speaking without pausing too much rather than being perfect.",
    expert: "Dr. Emma Wilson",
    expertAvatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    question: "What's the difference between Task 1 and Task 2 in writing?",
    answer:
      "Task 1 requires you to describe visual information (graph, chart, diagram, or process) in at least 150 words. Task 2 is an essay of at least 250 words on a given topic. Task 2 is worth more marks (2/3 of your writing score).",
    expert: "Prof. James Lee",
    expertAvatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    question: "How can I improve my reading speed?",
    answer:
      "Practice skimming and scanning techniques. Don't read every word - learn to identify key information. Practice with timed exercises to build speed. Expand your vocabulary to recognize more words quickly.",
    expert: "Sarah Thompson",
    expertAvatar: "/placeholder.svg?height=40&width=40",
  },
]

// Sample AI chat messages
const initialAiMessages = [
  {
    role: "bot",
    content: "Hello! I'm your IELTS AI assistant. How can I help with your IELTS preparation today?",
  },
]

export default function ExpertHelp() {
  const [aiMessages, setAiMessages] = useState(initialAiMessages)
  const [inputMessage, setInputMessage] = useState("")
  const [expertQuestion, setExpertQuestion] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [questionSubmitted, setQuestionSubmitted] = useState(false)

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      // Add user message
      setAiMessages([...aiMessages, { role: "user", content: inputMessage.trim() }])

      // Simulate AI response
      setTimeout(() => {
        const aiResponses = [
          "To improve your IELTS score, focus on consistent practice and familiarizing yourself with the test format.",
          "For the writing section, make sure to fully address all parts of the question and use a variety of sentence structures.",
          "In the speaking test, it's important to elaborate on your answers and provide examples from your personal experience.",
          "Reading comprehension improves with practice. Try to read English materials daily and expand your vocabulary.",
          "For listening, practice with different accents and take detailed notes during the recording.",
        ]
        const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)]
        setAiMessages((prev) => [...prev, { role: "bot", content: randomResponse }])
      }, 1000)

      setInputMessage("")
    }
  }

  const handleSubmitQuestion = () => {
    if (expertQuestion.trim()) {
      setIsSubmitting(true)
      // Simulate submission
      setTimeout(() => {
        setIsSubmitting(false)
        setQuestionSubmitted(true)
        setExpertQuestion("")
        // Reset after 3 seconds
        setTimeout(() => {
          setQuestionSubmitted(false)
        }, 3000)
      }, 1500)
    }
  }

  return (
    <div className={styles.container}>
      <Tabs defaultValue="ai" className={styles.tabs}>
        <TabsList className={styles.tabsList}>
          <TabsTrigger value="ai">AI Assistant</TabsTrigger>
          <TabsTrigger value="expert">Expert Help</TabsTrigger>
        </TabsList>

        <TabsContent value="ai" className={styles.tabContent}>
          <div className={styles.chatContainer}>
            <div className={styles.chatHeader}>
              <div className={styles.chatHeaderContent}>
                <Bot className={styles.botIcon} />
                <h3 className={styles.chatTitle}>IELTS AI Assistant</h3>
              </div>
            </div>
            <div className={styles.chatMessages}>
              {aiMessages.map((message, index) => (
                <div
                  key={index}
                  className={`${styles.messageContainer} ${
                    message.role === "user" ? styles.userMessage : styles.botMessage
                  }`}
                >
                  <div
                    className={`${styles.message} ${
                      message.role === "user" ? styles.userMessageBubble : styles.botMessageBubble
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.chatInputContainer}>
              <div className={styles.chatInputWrapper}>
                <Input
                  placeholder="Ask about IELTS preparation..."
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSendMessage()
                    }
                  }}
                  className={styles.chatInput}
                />
                <Button size="icon" onClick={handleSendMessage} className={styles.sendButton}>
                  <Send className={styles.sendIcon} />
                </Button>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="expert" className={styles.tabContent}>
          <Card className={styles.askExpertCard}>
            <CardHeader>
              <CardTitle className={styles.cardTitle}>Ask an IELTS Expert</CardTitle>
              <CardDescription className={styles.cardDescription}>
                Submit your question and get a response from a certified IELTS instructor within 24 hours
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className={styles.questionForm}>
                <Input
                  placeholder="Type your IELTS question here..."
                  value={expertQuestion}
                  onChange={(e) => setExpertQuestion(e.target.value)}
                  className={styles.questionInput}
                />
                <p className={styles.formHint}>Be specific with your question for the most helpful response</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                onClick={handleSubmitQuestion}
                disabled={isSubmitting || questionSubmitted}
                className={styles.submitQuestionButton}
              >
                {isSubmitting ? "Submitting..." : questionSubmitted ? "Question Submitted!" : "Submit Question"}
              </Button>
            </CardFooter>
          </Card>

          <div className={styles.previousQuestionsSection}>
            <h3 className={styles.sectionTitle}>Previously Answered Questions</h3>
            <div className={styles.questionsList}>
              {previousQuestions.map((item) => (
                <Card key={item.id} className={styles.questionCard}>
                  <CardHeader>
                    <CardTitle className={styles.questionTitle}>{item.question}</CardTitle>
                    <CardDescription className={styles.expertInfo}>
                      <Avatar className={styles.expertAvatar}>
                        <AvatarImage src={item.expertAvatar} alt={item.expert} />
                        <AvatarFallback>{item.expert.substring(0, 2).toUpperCase()}</AvatarFallback>
                      </Avatar>
                      Answered by {item.expert}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className={styles.answerText}>{item.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

