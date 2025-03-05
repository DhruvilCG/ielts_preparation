"use client"

import { useState } from "react"
import { Button } from "./button.jsx"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./card.jsx" ;
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog.jsx"
import { Input } from "./input.jsx"
import { Label } from "./label.jsx"
import { Avatar, AvatarFallback, AvatarImage } from "./avatar.jsx"
import { Badge } from "./badge.jsx"
import { Calendar, Clock, Users, Video } from "lucide-react"
import styles from "./workshops.module.css"

// Sample data for workshops
const initialWorkshops = [
  {
    id: 1,
    title: "Mastering IELTS Writing Task 2",
    instructor: "Dr. Emma Wilson",
    instructorAvatar: "/placeholder.svg?height=40&width=40",
    date: "March 10, 2025",
    time: "10:00 AM - 11:30 AM GMT",
    platform: "Zoom",
    participants: 42,
    maxParticipants: 50,
    description:
      "Learn how to structure your essay effectively and address all parts of the question to achieve a high band score in Writing Task 2.",
    registered: false,
  },
  {
    id: 2,
    title: "Speaking Part 2: Storytelling Techniques",
    instructor: "Prof. James Lee",
    instructorAvatar: "/placeholder.svg?height=40&width=40",
    date: "March 12, 2025",
    time: "3:00 PM - 4:00 PM GMT",
    platform: "Google Meet",
    participants: 28,
    maxParticipants: 30,
    description:
      "Master the art of storytelling for Speaking Part 2. Learn how to organize your thoughts quickly and speak fluently for 2 minutes.",
    registered: false,
  },
  {
    id: 3,
    title: "Reading Section: Skimming and Scanning",
    instructor: "Sarah Thompson",
    instructorAvatar: "/placeholder.svg?height=40&width=40",
    date: "March 15, 2025",
    time: "9:00 AM - 10:30 AM GMT",
    platform: "Zoom",
    participants: 35,
    maxParticipants: 60,
    description:
      "Improve your reading speed and accuracy with effective skimming and scanning techniques. Perfect for those struggling with time management.",
    registered: false,
  },
]

export default function Workshops() {
  const [workshops, setWorkshops] = useState(initialWorkshops)
  const [email, setEmail] = useState("")
  const [selectedWorkshop, setSelectedWorkshop] = useState(null)
  const [registrationSuccess, setRegistrationSuccess] = useState(false)

  const handleRegister = (id) => {
    setWorkshops(
      workshops.map((workshop) =>
        workshop.id === id
          ? {
              ...workshop,
              participants: workshop.participants + 1,
              registered: true,
            }
          : workshop,
      ),
    )
    setRegistrationSuccess(true)
    setTimeout(() => {
      setRegistrationSuccess(false)
    }, 3000)
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Free IELTS Workshops</h2>
        <p className={styles.subtitle}>Join our expert-led sessions to boost your IELTS preparation</p>
      </div>

      <div className={styles.workshopGrid}>
        {workshops.map((workshop) => (
          <Card key={workshop.id} className={styles.workshopCard}>
            <CardHeader>
              <div className={styles.workshopHeader}>
                <CardTitle className={styles.workshopTitle}>{workshop.title}</CardTitle>
                <Badge className={workshop.registered ? styles.registeredBadge : styles.freeBadge}>
                  {workshop.registered ? "Registered" : "Free"}
                </Badge>
              </div>
              <CardDescription className={styles.instructorInfo}>
                <Avatar className={styles.instructorAvatar}>
                  <AvatarImage src={workshop.instructorAvatar} alt={workshop.instructor} />
                  <AvatarFallback>{workshop.instructor.substring(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
                {workshop.instructor}
              </CardDescription>
            </CardHeader>
            <CardContent className={styles.workshopContent}>
              <p className={styles.workshopDescription}>{workshop.description}</p>
              <div className={styles.workshopDetails}>
                <div className={styles.detailItem}>
                  <Calendar className={styles.detailIcon} />
                  <span>{workshop.date}</span>
                </div>
                <div className={styles.detailItem}>
                  <Clock className={styles.detailIcon} />
                  <span>{workshop.time}</span>
                </div>
                <div className={styles.detailItem}>
                  <Video className={styles.detailIcon} />
                  <span>{workshop.platform}</span>
                </div>
                <div className={styles.detailItem}>
                  <Users className={styles.detailIcon} />
                  <span>
                    {workshop.participants}/{workshop.maxParticipants} registered
                  </span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    className={`${styles.registerButton} ${workshop.registered ? styles.registeredButton : ""}`}
                    disabled={workshop.registered}
                    onClick={() => setSelectedWorkshop(workshop.id)}
                  >
                    {workshop.registered ? "Already Registered" : "Register Now"}
                  </Button>
                </DialogTrigger>
                <DialogContent className={styles.dialogContent}>
                  <DialogHeader>
                    <DialogTitle>Register for Workshop</DialogTitle>
                    <DialogDescription>
                      Enter your email to register for "{workshops.find((w) => w.id === selectedWorkshop)?.title}"
                    </DialogDescription>
                  </DialogHeader>
                  <div className={styles.dialogForm}>
                    <div className={styles.formGroup}>
                      <Label htmlFor="email" className={styles.formLabel}>
                        Email
                      </Label>
                      <Input
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your.email@example.com"
                        className={styles.formInput}
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button
                      type="submit"
                      className={styles.submitButton}
                      onClick={() => {
                        if (selectedWorkshop) {
                          handleRegister(selectedWorkshop)
                        }
                      }}
                    >
                      Register
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </CardFooter>
          </Card>
        ))}
      </div>

      {registrationSuccess && (
        <div className={styles.successNotification}>
          Registration successful! You'll receive a confirmation email shortly.
        </div>
      )}
    </div>
  )
}

