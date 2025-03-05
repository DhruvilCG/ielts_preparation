"use client"

import { useState } from "react"
import { Button } from "./button.jsx"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./card.jsx"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./dropdown-menu.jsx"
import { Input } from "./input.jsx"
import { Textarea } from "./Textarea.jsx"
import { Avatar, AvatarFallback, AvatarImage } from "./avatar.jsx"
import { ChevronDown, Heart, MessageSquare, Share } from "lucide-react"
import styles from "./user-posts.module.css"

// Sample data for posts
const initialPosts = [
  {
    id: 1,
    author: "Sarah Johnson",
    avatar: "/placeholder.svg?height=40&width=40",
    time: "2 hours ago",
    title: "My IELTS Writing Journey: From 6.5 to 8.0",
    content:
      "After struggling with the writing section for months, I finally improved my score from 6.5 to 8.0! Here are the strategies that worked for me...",
    image: "/placeholder.svg?height=300&width=600",
    likes: 42,
    comments: 15,
    liked: false,
  },
  {
    id: 2,
    author: "David Chen",
    avatar: "/placeholder.svg?height=40&width=40",
    time: "Yesterday",
    title: "Speaking Test Anxiety: How I Overcame It",
    content:
      "Speaking in front of an examiner used to terrify me. Here's how I managed to control my anxiety and improve my fluency...",
    image: null,
    likes: 28,
    comments: 7,
    liked: false,
  },
  {
    id: 3,
    author: "Maria Garcia",
    avatar: "/placeholder.svg?height=40&width=40",
    time: "3 days ago",
    title: "Listening Section: Common Traps to Avoid",
    content:
      "After taking the test twice, I noticed these recurring patterns in the listening section that often trick test-takers...",
    image: "/placeholder.svg?height=300&width=600",
    likes: 56,
    comments: 23,
    liked: false,
  },
]

export default function UserPosts() {
  const [posts, setPosts] = useState(initialPosts)
  const [sortOption, setSortOption] = useState("recent")
  const [newPostTitle, setNewPostTitle] = useState("")
  const [newPostContent, setNewPostContent] = useState("")

  const handleLike = (id) => {
    setPosts(
      posts.map((post) =>
        post.id === id
          ? {
              ...post,
              likes: post.liked ? post.likes - 1 : post.likes + 1,
              liked: !post.liked,
            }
          : post,
      ),
    )
  }

  const handleSort = (option) => {
    setSortOption(option)
    if (option === "recent") {
      setPosts([...posts].sort((a, b) => b.id - a.id))
    } else if (option === "popular") {
      setPosts([...posts].sort((a, b) => b.likes - a.likes))
    }
  }

  const handleCreatePost = () => {
    if (newPostTitle.trim() && newPostContent.trim()) {
      const newPost = {
        id: posts.length + 1,
        author: "You",
        avatar: "/placeholder.svg?height=40&width=40",
        time: "Just now",
        title: newPostTitle,
        content: newPostContent,
        image: null,
        likes: 0,
        comments: 0,
        liked: false,
      }
      setPosts([newPost, ...posts])
      setNewPostTitle("")
      setNewPostContent("")
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Learning & Challenges</h2>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className={styles.sortButton}>
              {sortOption === "recent" ? "Recent Posts" : "Most Liked"}
              <ChevronDown className={styles.icon} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => handleSort("recent")}>Recent Posts</DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleSort("popular")}>Most Liked</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <Card className={styles.createPostCard}>
        <CardHeader>
          <CardTitle className={styles.cardTitle}>Share Your Experience</CardTitle>
          <CardDescription>Post about your IELTS journey, challenges, or tips</CardDescription>
        </CardHeader>
        <CardContent className={styles.cardContent}>
          <Input
            placeholder="Title"
            value={newPostTitle}
            onChange={(e) => setNewPostTitle(e.target.value)}
            className={styles.input}
          />
          <Textarea
            placeholder="What's on your mind about IELTS?"
            className={styles.textarea}
            value={newPostContent}
            onChange={(e) => setNewPostContent(e.target.value)}
          />
        </CardContent>
        <CardFooter className={styles.cardFooter}>
          <Button variant="outline" className={styles.addImageButton}>
            Add Image
          </Button>
          <Button onClick={handleCreatePost} className={styles.postButton}>
            Post
          </Button>
        </CardFooter>
      </Card>

      {posts.map((post) => (
        <Card key={post.id} className={styles.postCard}>
          <CardHeader>
            <div className={styles.postHeader}>
              <Avatar className={styles.avatar}>
                <AvatarImage src={post.avatar} alt={post.author} />
                <AvatarFallback>{post.author.substring(0, 2).toUpperCase()}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className={styles.postTitle}>{post.title}</CardTitle>
                <CardDescription className={styles.postMeta}>
                  {post.author} • {post.time}
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className={styles.postContent}>{post.content}</p>
            {post.image && (
              <img src={post.image || "/placeholder.svg"} alt="Post attachment" className={styles.postImage} />
            )}
          </CardContent>
          <CardFooter className={styles.postFooter}>
            <div className={styles.postActions}>
              <Button
                variant="ghost"
                size="sm"
                className={`${styles.actionButton} ${post.liked ? styles.likedButton : ""}`}
                onClick={() => handleLike(post.id)}
              >
                <Heart className={`${styles.actionIcon} ${post.liked ? styles.likedIcon : ""}`} />
                {post.likes}
              </Button>
              <Button variant="ghost" size="sm" className={styles.actionButton}>
                <MessageSquare className={styles.actionIcon} />
                {post.comments}
              </Button>
            </div>
            <Button variant="ghost" size="sm" className={styles.shareButton}>
              <Share className={styles.actionIcon} />
              Share
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

