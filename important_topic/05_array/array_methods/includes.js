// Profile filter for chat app
const bannedWords = ['idiot', 'dumb', 'stupid'];
const message = "You are so dumb!";
const isOffensive = bannedWords.some(word => 
  message.toLowerCase().includes(word)
);

// Input Validate
const validExtensions = ['jpg', 'png', 'gif'];
const fileName = 'profile.jpeg';
const ext = fileName.split('.').pop();
if (!validExtensions.includes(ext)) {
  throw new Error('Unsupported file type');
}

// Tag input auto-suggest filter
const suggestions = ['react', 'redux', 'node', 'next', 'vue'];
const query = 're';
const filtered = suggestions.filter(tag => tag.includes(query));  

