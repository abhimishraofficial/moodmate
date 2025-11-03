
// This is a mock implementation of the message generation service
// In a real app, this would integrate with an LLM API

interface EmotionMessages {
  [key: string]: string[];
}

const messagesByEmotion: EmotionMessages = {
  happy: [
    "Your smile is contagious! I'm so glad to see you feeling happy today. It's these moments of joy that make life beautiful. Keep embracing this wonderful feeling and let it brighten not just your day, but the day of everyone around you. Remember, happiness multiplies when shared!",
    "What a wonderful day to be happy! Your positive energy is radiating, and it's exactly what the world needs. Cherish this feeling and ride this wave of joy. You deserve every moment of happiness that comes your way!",
    "Seeing you happy fills me with joy too! There's something magical about the way happiness transforms everything around us. Take a moment to savor this feeling and remember it for days when clouds appear. Your happiness is a gift – to yourself and everyone fortunate enough to be in your presence!"
  ],
  sad: [
    "I see you're feeling a bit down today, and that's perfectly okay. Sadness is just as valid as any other emotion. Give yourself permission to feel these emotions without judgment. Remember that this feeling, like all others, will pass. Until then, be gentle with yourself – you're doing the best you can with what you have right now.",
    "It's okay to not be okay sometimes. Your feelings are valid, and sadness is a natural part of the human experience. Take the time you need to process these emotions. I'm here for you, and I believe in your strength to weather this difficult time. Better days are ahead, even if they feel distant right now.",
    "I can see you're feeling sad today. Remember that it's okay to feel this way - sadness is part of our human journey. These feelings won't stay forever, even though they might feel heavy right now. Be kind to yourself during this time, just as you would be to a dear friend going through the same thing. Tomorrow brings new possibilities and fresh perspectives."
  ],
  excited: [
    "Your enthusiasm is absolutely contagious! This excitement you're feeling is such a powerful force - it can transform dreams into plans and plans into reality. Channel this incredible energy into the things that matter most to you. The world needs more of your passionate spirit!",
    "Look at that spark in your eyes! Your excitement is palpable and it's wonderful to witness. This feeling of anticipation and joy is one of life's greatest gifts. Embrace it fully and let it propel you forward into new adventures and opportunities. The possibilities seem endless when you're riding this wave of enthusiasm!",
    "Your excitement is lighting up the room! This vibrant energy you're feeling is perfect for tackling new challenges and seizing opportunities. Harness this powerful momentum and let it carry you toward your goals. With this level of enthusiasm, there's very little you can't accomplish!"
  ],
  tired: [
    "I can see you're feeling tired today. Your body and mind are simply asking for some well-deserved rest. Listen to what they're telling you - it's okay to slow down and recharge. Remember that rest isn't a luxury; it's an essential part of being productive and feeling your best. Take this as permission to prioritize yourself today.",
    "Feeling tired is your body's way of saying it needs care and attention. There's wisdom in slowing down when needed. Give yourself permission to rest without guilt - you don't need to be productive every moment of every day. A well-rested you is a more effective, happier you in the long run.",
    "I notice you're carrying some fatigue today. Remember that rest is not the opposite of productivity - it's the foundation of it. Your value doesn't come from constant doing, but from simply being. Take this as an opportunity to practice some gentle self-care and replenish your energy. Tomorrow is a new day, and your well-rested self will be ready to embrace it."
  ],
  anxious: [
    "I see that anxiety has come to visit today. Remember that you've faced anxious feelings before, and each time, you've made it through. Focus on what's within your control right now - your breath, your next small action, the comfort you can give yourself. This feeling will pass, as it always does. Until then, be as patient with yourself as you would be with a friend in your position.",
    "When anxiety rises, remember that it's just a feeling - not a fact about the world or your future. Ground yourself in the present moment - feel your feet on the floor, notice five things you can see, and take three deep breaths. You have the tools to navigate this wave of unease, and it will subside. You are safe, even when it doesn't feel that way.",
    "I can see you're feeling anxious right now. Remember that anxiety often makes our thoughts race toward the worst possibilities, but these thoughts aren't predictions. They're just thoughts. Try to observe them with curiosity rather than belief. Your nervous system is temporarily in overdrive, but with gentle attention to your breathing and present surroundings, you can help it find balance again."
  ],
  angry: [
    "I can see you're feeling anger right now, and that's completely valid. Anger often comes to protect us when we feel threatened or when our boundaries have been crossed. Try to give this emotion space without letting it make decisions for you. Behind anger, there's usually another emotion asking for attention - perhaps hurt, fear, or disappointment. When you're ready, see if you can check in with what's beneath the surface.",
    "Your anger is a signal worth listening to - it's telling you something important about your boundaries or values. Take some time to let the initial intensity cool before making any big decisions. Sometimes, the wisest response to anger is simply to acknowledge it: 'I'm angry right now, and that's okay.' This creates space between the feeling and your actions.",
    "I see you're experiencing anger right now. This powerful emotion gives us important information about our boundaries and what matters to us. Try to harness its energy without being controlled by it. Take a moment to breathe deeply and ask yourself what this anger is trying to protect or what it's responding to. Within this understanding, you'll find wisdom that can guide your next steps."
  ],
  neutral: [
    "You seem to be in a balanced state today - neither too high nor too low. These neutral moments can actually be quite special. They offer us clarity and perspective that might be harder to access during more intense emotional states. This is a good time to reflect on what truly matters to you or to make decisions that align with your deeper values.",
    "I notice you're in a calm, neutral space right now. This balanced emotional state is like a clear sky - it allows you to see far and wide without distortion. Consider using this clarity to check in with yourself about what you need, what's working well in your life, and where you might want to make adjustments. Neutral moments offer us unique wisdom if we pause to listen.",
    "You seem to be in an even, balanced mood today. There's something valuable about these neutral spaces between the peaks and valleys of our emotional landscape. They give us room to breathe, to assess, and to simply be. Consider this a comfortable viewing platform from which you can observe your life with gentle curiosity and openness to what comes next."
  ]
};

export function getPersonalizedMessage(emotion: string): string {
  const emotionKey = emotion.toLowerCase();
  const availableMessages = messagesByEmotion[emotionKey] || messagesByEmotion.neutral;
  
  // Pick a random message from the available ones
  return availableMessages[Math.floor(Math.random() * availableMessages.length)];
}
