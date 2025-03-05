import {Tabs, TabsContent, TabsList, TabsTrigger } from "./Tabs/Tabs.jsx" ;
import UserPosts from "./user-posts.jsx";
import Workshops from "./workshops.jsx";
import ExpertHelp from "./expert-help.jsx" ;
import { ThemeProvider } from "./theme-provider.jsx" ;
import { ThemeToggle } from "./theme-toggle.jsx";
import styles from "./page.module.css" ;

export default function CommunityPage() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.headerContent}>
            <div className={styles.logoContainer}>
              <h1 className={styles.logo}>IELTS Prep Community</h1>
            </div>
            <div className={styles.headerActions}>
              <ThemeToggle />
              <button className={styles.signInButton}>Sign In</button>
              <button className={styles.joinButton}>Join Community</button>
            </div>
          </div>
        </header>
        <main className={styles.main}>
          <Tabs defaultValue="posts" className={styles.tabs}>
            <TabsList className={styles.tabsList}>
              <TabsTrigger value="posts">User Posts</TabsTrigger>
              <TabsTrigger value="workshops">Workshops</TabsTrigger>
              <TabsTrigger value="expert-help">AI & Expert Help</TabsTrigger>
            </TabsList>
            <TabsContent value="posts">
              <UserPosts />
            </TabsContent>
            <TabsContent value="workshops">
              <Workshops />
            </TabsContent>
            <TabsContent value="expert-help">
              <ExpertHelp />
            </TabsContent>
          </Tabs>
        </main>
        <div className={styles.chatButton}>
          <button className={styles.floatingButton}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={styles.chatIcon}
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </button>
        </div>
      </div>
    </ThemeProvider>
  )
}

