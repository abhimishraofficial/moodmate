
// This is a mock implementation of the quote recommendation system
// In a real app, this would integrate with an actual API or database

interface EmotionQuotes {
  [key: string]: string[];
}

const quotesByEmotion: EmotionQuotes = {
  happy: [
    "Happiness is not something ready-made. It comes from your own actions. - Dalai Lama",
    "The most wasted of all days is one without laughter. - E.E. Cummings",
    "Happiness is when what you think, what you say, and what you do are in harmony. - Mahatma Gandhi",
    "If you want to be happy, be. - Leo Tolstoy",
    "The purpose of our lives is to be happy. - Dalai Lama"
  ],
  sad: [
    "Even the darkest night will end and the sun will rise. - Victor Hugo",
    "Sadness flies away on the wings of time. - Jean de La Fontaine",
    "Life is a series of natural and spontaneous changes. Don't resist them; that only creates sorrow. - Lao Tzu",
    "The wound is the place where the Light enters you. - Rumi",
    "Every moment is a fresh beginning. - T.S. Eliot"
  ],
  excited: [
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Adventure is worthwhile in itself. - Amelia Earhart",
    "Life is either a daring adventure or nothing at all. - Helen Keller",
    "The biggest adventure you can take is to live the life of your dreams. - Oprah Winfrey",
    "Dream big and dare to fail. - Norman Vaughan"
  ],
  tired: [
    "Rest when you're weary. Refresh and renew yourself, your body, your mind, your spirit. - Ralph Marston",
    "Sleep is the golden chain that ties health and our bodies together. - Thomas Dekker",
    "Sometimes the most productive thing you can do is relax. - Mark Black",
    "Take rest; a field that has rested gives a bountiful crop. - Ovid",
    "Your body is precious. It is your vehicle for awakening. Treat it with care. - Buddha"
  ],
  anxious: [
    "You don't have to control your thoughts. You just have to stop letting them control you. - Dan Millman",
    "Anxiety is a thin stream of fear trickling through the mind. If encouraged, it cuts a channel into which all other thoughts are drained. - Arthur Somers Roche",
    "Nothing diminishes anxiety faster than action. - Walter Anderson",
    "Life is ten percent what you experience and ninety percent how you respond to it. - Dorothy M. Neddermeyer",
    "Present fears are less than horrible imaginings. - William Shakespeare"
  ],
  angry: [
    "For every minute you remain angry, you give up sixty seconds of peace of mind. - Ralph Waldo Emerson",
    "Holding on to anger is like grasping a hot coal with the intent of throwing it at someone else; you are the one who gets burned. - Buddha",
    "Speak when you are angry and you will make the best speech you will ever regret. - Ambrose Bierce",
    "Anger is an acid that can do more harm to the vessel in which it is stored than to anything on which it is poured. - Mark Twain",
    "The greatest remedy for anger is delay. - Seneca"
  ],
  neutral: [
    "The only journey is the one within. - Rainer Maria Rilke",
    "Life is a balance of holding on and letting go. - Rumi",
    "Be yourself; everyone else is already taken. - Oscar Wilde",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us. - Ralph Waldo Emerson",
    "The only way to do great work is to love what you do. - Steve Jobs"
  ]
};

export function getQuoteRecommendation(emotion: string): string {
  const emotionKey = emotion.toLowerCase();
  const availableQuotes = quotesByEmotion[emotionKey] || quotesByEmotion.neutral;
  
  // Pick a random quote from the available ones
  return availableQuotes[Math.floor(Math.random() * availableQuotes.length)];
}
