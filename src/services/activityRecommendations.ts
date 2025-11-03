
// This is a mock implementation of the activity recommendation system
// In a real app, this would integrate with an actual API or database

interface EmotionActivities {
  [key: string]: string[];
}

const activitiesByEmotion: EmotionActivities = {
  happy: [
    "Connect with friends and share your happiness",
    "Try a new creative activity like painting or cooking",
    "Go for a walk in nature to enhance your mood",
    "Write in a gratitude journal about what's making you happy",
    "Dance to your favorite upbeat songs"
  ],
  sad: [
    "Practice deep breathing for 5 minutes",
    "Write your feelings in a journal",
    "Take a warm shower or bath",
    "Listen to calming music",
    "Reach out to a trusted friend or family member"
  ],
  excited: [
    "Channel your energy into a creative project",
    "Go for a run or do some exercise",
    "Plan your next adventure or goal",
    "Share your excitement with friends",
    "Try something new that you've been wanting to do"
  ],
  tired: [
    "Take a short 20-minute nap",
    "Drink a glass of water and have a healthy snack",
    "Do some gentle stretching",
    "Go to bed early tonight",
    "Take a break from screens for an hour"
  ],
  anxious: [
    "Practice the 4-7-8 breathing technique",
    "Go for a mindful walk",
    "Write down your worries, then challenge each one",
    "Do a short guided meditation",
    "Call a friend who makes you feel calm"
  ],
  angry: [
    "Take 10 deep breaths",
    "Go for a brisk walk or jog",
    "Write down what's bothering you",
    "Practice progressive muscle relaxation",
    "Listen to calming music"
  ],
  neutral: [
    "Try a new hobby or activity",
    "Learn something new through a podcast or video",
    "Reconnect with an old friend",
    "Make a vision board for your goals",
    "Declutter one small area of your home"
  ]
};

export function getActivityRecommendations(emotion: string, count: number = 2): string[] {
  const emotionKey = emotion.toLowerCase();
  const availableActivities = activitiesByEmotion[emotionKey] || activitiesByEmotion.neutral;
  
  // Shuffle the array and pick the first 'count' elements
  const shuffled = [...availableActivities].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}
