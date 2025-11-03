
// This is a mock implementation of the song recommendation system
// In a real app, this would integrate with an actual API or database

export interface SongRecommendation {
  name: string;
  artist: string;
  movie?: string;
  year?: number;
  link?: string;
}

interface EmotionSongs {
  [key: string]: SongRecommendation[];
}

const bollywoodSongsByEmotion: EmotionSongs = {
  happy: [
    { name: "Balam Pichkari", artist: "Pritam, Shalmali Kholgade", movie: "Yeh Jawaani Hai Deewani", year: 2013, link: "https://www.youtube.com/watch?v=0WtRNGubWGA" },
    { name: "Badtameez Dil", artist: "Pritam, Benny Dayal", movie: "Yeh Jawaani Hai Deewani", year: 2013, link: "https://www.youtube.com/watch?v=II2EO3Nw4m0" },
    { name: "London Thumakda", artist: "Amit Trivedi, Labh Janjua", movie: "Queen", year: 2014, link: "https://www.youtube.com/watch?v=udra3Mfw2oo" },
    { name: "Nagada Sang Dhol", artist: "Shreya Ghoshal, Osman Mir", movie: "Ram-Leela", year: 2013, link: "https://www.youtube.com/watch?v=B9CMVCsP6Jw" },
    { name: "Ghungroo", artist: "Arijit Singh, Shilpa Rao", movie: "War", year: 2019, link: "https://www.youtube.com/watch?v=qFkNATtc3mc" },
    { name: "Kala Chashma", artist: "Badshah, Neha Kakkar", movie: "Baar Baar Dekho", year: 2016, link: "https://www.youtube.com/watch?v=k4yXQkG2s1E" },
    { name: "Aaj Ki Raat", artist: "Sonu Nigam, Alisha Chinai", movie: "Don", year: 2006, link: "https://www.youtube.com/watch?v=sHrD5M4rn-U" },
    { name: "Mauja Hi Mauja", artist: "Mika Singh", movie: "Jab We Met", year: 2007, link: "https://www.youtube.com/watch?v=TRUzBM24BK0" },
    { name: "Desi Girl", artist: "Shankar Mahadevan", movie: "Dostana", year: 2008, link: "https://www.youtube.com/watch?v=XHnN2D0_f3A" },
    { name: "Gallan Goodiyaan", artist: "Yashita Sharma, Manish J. Tipu", movie: "Dil Dhadakne Do", year: 2015, link: "https://www.youtube.com/watch?v=ucU2MEbHUAc" },
    { name: "Kar Gayi Chull", artist: "Badshah, Fazilpuria", movie: "Kapoor & Sons", year: 2016, link: "https://www.youtube.com/watch?v=NTHz9ephYTw" },
    { name: "Naach Meri Rani", artist: "Guru Randhawa, Nikhita Gandhi", year: 2020, link: "https://www.youtube.com/watch?v=X9SLmY9NrCU" }
  ],
  sad: [
    { name: "Channa Mereya", artist: "Arijit Singh", movie: "Ae Dil Hai Mushkil", year: 2016, link: "https://www.youtube.com/watch?v=284Ov7ysmfA" },
    { name: "Tujhe Kitna Chahne Lage", artist: "Arijit Singh", movie: "Kabir Singh", year: 2019, link: "https://www.youtube.com/watch?v=h7gyJRWrjbg" },
    { name: "Tum Hi Ho", artist: "Arijit Singh", movie: "Aashiqui 2", year: 2013, link: "https://www.youtube.com/watch?v=Umqb9KENgmk" },
    { name: "Agar Tum Saath Ho", artist: "Arijit Singh, Alka Yagnik", movie: "Tamasha", year: 2015, link: "https://www.youtube.com/watch?v=sK7riqg2mr4" },
    { name: "Luka Chuppi", artist: "A.R. Rahman, Lata Mangeshkar", movie: "Rang De Basanti", year: 2006, link: "https://www.youtube.com/watch?v=lXMSkev8MU4" },
    { name: "Judaai", artist: "Rekha Bhardwaj, Arijit Singh", movie: "Badlapur", year: 2015, link: "https://www.youtube.com/watch?v=IkkdlGDnDtU" },
    { name: "Kabhi Alvida Naa Kehna", artist: "Sonu Nigam, Alka Yagnik", movie: "Kabhi Alvida Naa Kehna", year: 2006, link: "https://www.youtube.com/watch?v=nEVD3iLBovs" },
    { name: "Lambiyaan Si Judaiyaan", artist: "Arijit Singh", movie: "Raabta", year: 2017, link: "https://www.youtube.com/watch?v=EiClHtC4AFQ" },
    { name: "Main Dhoondne Ko Zamaane Mein", artist: "Arijit Singh", movie: "Heartless", year: 2014, link: "https://www.youtube.com/watch?v=6l8vD8T-Rlo" },
    { name: "Kalank", artist: "Arijit Singh", movie: "Kalank", year: 2019, link: "https://www.youtube.com/watch?v=VXbtVbG9MLs" },
    { name: "Ae Dil Hai Mushkil", artist: "Arijit Singh", movie: "Ae Dil Hai Mushkil", year: 2016, link: "https://www.youtube.com/watch?v=6FURuLYrR_Q" },
    { name: "Phir Bhi Tumko Chaahunga", artist: "Arijit Singh", movie: "Half Girlfriend", year: 2017, link: "https://www.youtube.com/watch?v=_iktURk0X-A" }
  ],
  angry: [
    { name: "Bulleya", artist: "Amit Mishra", movie: "Ae Dil Hai Mushkil", year: 2016, link: "https://www.youtube.com/watch?v=klolU5ULx2A" },
    { name: "Brothers Anthem", artist: "Vishal Dadlani", movie: "Brothers", year: 2015, link: "https://www.youtube.com/watch?v=F5VvDr4T-Zs" },
    { name: "Sultan", artist: "Sukhwinder Singh", movie: "Sultan", year: 2016, link: "https://www.youtube.com/watch?v=RYqJ5w-GrfM" },
    { name: "Chak Lein De", artist: "Kailash Kher", movie: "Chandni Chowk To China", year: 2009, link: "https://www.youtube.com/watch?v=S-lRx9giVVQ" },
    { name: "Sadda Haq", artist: "Mohit Chauhan", movie: "Rockstar", year: 2011, link: "https://www.youtube.com/watch?v=p9DQINKZxWE" },
    { name: "Jee Karda", artist: "Divya Kumar", movie: "Badlapur", year: 2015, link: "https://www.youtube.com/watch?v=pMI0UHTUhEo" },
    { name: "Malhari", artist: "Vishal Dadlani", movie: "Bajirao Mastani", year: 2015, link: "https://www.youtube.com/watch?v=l_MyUGq7pgs" },
    { name: "Vande Mataram", artist: "Siddharth Basrur", movie: "ABCD 2", year: 2015, link: "https://www.youtube.com/watch?v=SVnAyvg6gjo" },
    { name: "Dhakka Laga Bukka", artist: "A.R. Rahman", movie: "Yuva", year: 2004, link: "https://www.youtube.com/watch?v=SkCmGxuQQtE" },
    { name: "Morcha", artist: "Daler Mehndi", movie: "Sarfarosh", year: 1999, link: "https://www.youtube.com/watch?v=O2qIKKMvHjc" },
    { name: "Dangal", artist: "Daler Mehndi", movie: "Dangal", year: 2016, link: "https://www.youtube.com/watch?v=x_70LGz_HiI" },
    { name: "Ziddi Dil", artist: "Vishal Dadlani", movie: "Mary Kom", year: 2014, link: "https://www.youtube.com/watch?v=xPf0CyJlTOE" }
  ],
  relaxed: [
    { name: "Tu Hai Ki Nahi", artist: "Ankit Tiwari", movie: "Roy", year: 2015, link: "https://www.youtube.com/watch?v=klhU92R1uTs" },
    { name: "Jeena Jeena", artist: "Atif Aslam", movie: "Badlapur", year: 2015, link: "https://www.youtube.com/watch?v=6EOVlsqnpZ0" },
    { name: "Main Rang Sharbaton Ka", artist: "Atif Aslam", movie: "Phata Poster Nikhla Hero", year: 2013, link: "https://www.youtube.com/watch?v=RWO-MZfrFDg" },
    { name: "Kabira", artist: "Tochi Raina, Rekha Bhardwaj", movie: "Yeh Jawaani Hai Deewani", year: 2013, link: "https://www.youtube.com/watch?v=jHNNMj5bNQw" },
    { name: "Phir Le Aya Dil", artist: "Arijit Singh", movie: "Barfi!", year: 2012, link: "https://www.youtube.com/watch?v=jR1-5HJPAew" },
    { name: "Manwa Laage", artist: "Arijit Singh, Shreya Ghoshal", movie: "Happy New Year", year: 2014, link: "https://www.youtube.com/watch?v=d8wruwMoKGU" },
    { name: "Tere Sang Yaara", artist: "Atif Aslam", movie: "Rustom", year: 2016, link: "https://www.youtube.com/watch?v=gIOea2pgfIo" },
    { name: "Pehli Nazar Mein", artist: "Atif Aslam", movie: "Race", year: 2008, link: "https://www.youtube.com/watch?v=BadBAMnPX0I" },
    { name: "Tere Bina", artist: "A.R. Rahman", movie: "Guru", year: 2007, link: "https://www.youtube.com/watch?v=BMB_5xG-Vjs" },
    { name: "Kun Faya Kun", artist: "A.R. Rahman, Javed Ali", movie: "Rockstar", year: 2011, link: "https://www.youtube.com/watch?v=T94PHkuydcw" },
    { name: "Humdard", artist: "Arijit Singh", movie: "Ek Villain", year: 2014, link: "https://www.youtube.com/watch?v=j6QjOqmieQ4" },
    { name: "Samjhawan", artist: "Arijit Singh, Shreya Ghoshal", movie: "Humpty Sharma Ki Dulhania", year: 2014, link: "https://www.youtube.com/watch?v=H97XuZM46mc" }
  ],
  romantic: [
    { name: "Tum Se Hi", artist: "Mohit Chauhan", movie: "Jab We Met", year: 2007, link: "https://www.youtube.com/watch?v=mt9xg0mmt28" },
    { name: "Tum Hi Ho", artist: "Arijit Singh", movie: "Aashiqui 2", year: 2013, link: "https://www.youtube.com/watch?v=Umqb9KENgmk" },
    { name: "Mere Naam Tu", artist: "Abhay Jodhpurkar", movie: "Zero", year: 2018, link: "https://www.youtube.com/watch?v=QMj-yiuMPBw" },
    { name: "Bol Do Na Zara", artist: "Armaan Malik", movie: "Azhar", year: 2016, link: "https://www.youtube.com/watch?v=eDA0NgJhcq8" },
    { name: "Kaise Mujhe Tum Mil Gayi", artist: "Shreya Ghoshal, Benny Dayal", movie: "Ghajini", year: 2008, link: "https://www.youtube.com/watch?v=ILxNqIP8pQM" },
    { name: "Pehli Dafa", artist: "Atif Aslam", year: 2017, link: "https://www.youtube.com/watch?v=SxTYjptEzZs" },
    { name: "Piya O Re Piya", artist: "Atif Aslam, Shreya Ghoshal", movie: "Tere Naal Love Ho Gaya", year: 2012, link: "https://www.youtube.com/watch?v=mGPP8m9z9HY" },
    { name: "Tu Hi Yaar Mera", artist: "Arijit Singh, Neha Kakkar", movie: "Pati Patni Aur Woh", year: 2019, link: "https://www.youtube.com/watch?v=YhXUR69nbp4" },
    { name: "Hawayein", artist: "Arijit Singh", movie: "Jab Harry Met Sejal", year: 2017, link: "https://www.youtube.com/watch?v=cYOB941gyXI" },
    { name: "Dil Diyan Gallan", artist: "Atif Aslam", movie: "Tiger Zinda Hai", year: 2017, link: "https://www.youtube.com/watch?v=SAcpESN_Fk4" },
    { name: "Main Agar Kahoon", artist: "Sonu Nigam, Shreya Ghoshal", movie: "Om Shanti Om", year: 2007, link: "https://www.youtube.com/watch?v=Sbdk9jEpLD4" },
    { name: "Raabta", artist: "Arijit Singh", movie: "Agent Vinod", year: 2012, link: "https://www.youtube.com/watch?v=zk0-f92gg9A" }
  ],
  excited: [
    { name: "Jai Jai Shivshankar", artist: "Vishal-Shekhar, Benny Dayal", movie: "War", year: 2019, link: "https://www.youtube.com/watch?v=1Rs2D5Hc8Eo" },
    { name: "Malhari", artist: "Vishal Dadlani", movie: "Bajirao Mastani", year: 2015, link: "https://www.youtube.com/watch?v=l_MyUGq7pgs" },
    { name: "Bhangra Pa Le", artist: "Nakash Aziz, Mandy Gill", movie: "Bhangra Paa Le", year: 2020, link: "https://www.youtube.com/watch?v=fuJqc1W3-y0" },
    { name: "Kar Gayi Chull", artist: "Badshah, Fazilpuria", movie: "Kapoor & Sons", year: 2016, link: "https://www.youtube.com/watch?v=NTHz9ephYTw" },
    { name: "Kala Chashma", artist: "Badshah, Neha Kakkar", movie: "Baar Baar Dekho", year: 2016, link: "https://www.youtube.com/watch?v=k4yXQkG2s1E" },
    { name: "Batameez Dil", artist: "Benny Dayal", movie: "Yeh Jawani Hai Deewani", year: 2013, link: "https://www.youtube.com/watch?v=II2EO3Nw4m0" },
    { name: "Gallan Goodiyaan", artist: "Devi Sri Prasad", movie: "Dil Dhadakne Do", year: 2015, link: "https://www.youtube.com/watch?v=ucU2MEbHUAc" },
    { name: "Tattad Tattad", artist: "Aditya Dev", movie: "Goliyon Ki Raasleela Ram-Leela", year: 2013, link: "https://www.youtube.com/watch?v=sIooFGRBZJY" },
    { name: "Nachde Ne Saare", artist: "Jasleen Royal", movie: "Baar Baar Dekho", year: 2016, link: "https://www.youtube.com/watch?v=pOsP1xKZ-1Q" },
    { name: "Swag Se Swagat", artist: "Vishal Dadlani", movie: "Tiger Zinda Hai", year: 2017, link: "https://www.youtube.com/watch?v=8PsG3ycLx3o" },
    { name: "Zingaat", artist: "Ajay-Atul", movie: "Dhadak", year: 2018, link: "https://www.youtube.com/watch?v=X4hE5K3LVt0" },
    { name: "Ghagra", artist: "Rekha Bhardwaj, Vishal Dadlani", movie: "Yeh Jawaani Hai Deewani", year: 2013, link: "https://www.youtube.com/watch?v=caoGNx1LF2Q" }
  ],
  anxious: [
    { name: "Khairiyat", artist: "Arijit Singh", movie: "Chhichhore", year: 2019, link: "https://www.youtube.com/watch?v=hoNb6HuNmU0" },
    { name: "Jag Ghoomeya", artist: "Rahat Fateh Ali Khan", movie: "Sultan", year: 2016, link: "https://www.youtube.com/watch?v=ZTFhDF3OdYs" },
    { name: "Zara Zara", artist: "Bombay Jayashri", movie: "Rehnaa Hai Terre Dil Mein", year: 2001, link: "https://www.youtube.com/watch?v=fMX5VoLAEBM" },
    { name: "Ae Dil Hai Mushkil", artist: "Arijit Singh", movie: "Ae Dil Hai Mushkil", year: 2016, link: "https://www.youtube.com/watch?v=6FURuLYrR_Q" },
    { name: "Chal Ghar Chalen", artist: "Arijit Singh", movie: "Malang", year: 2020, link: "https://www.youtube.com/watch?v=mzq2v4Atp-o" },
    { name: "Hasi", artist: "Ami Mishra", movie: "Hamari Adhuri Kahani", year: 2015, link: "https://www.youtube.com/watch?v=Jn5hsfbhWx4" },
    { name: "Humdard", artist: "Arijit Singh", movie: "Ek Villain", year: 2014, link: "https://www.youtube.com/watch?v=j6QjOqmieQ4" },
    { name: "Thodi Der", artist: "Farhan Saeed, Shreya Ghoshal", movie: "Half Girlfriend", year: 2017, link: "https://www.youtube.com/watch?v=K-Ts-NFR62o" },
    { name: "Phir Se Ud Chala", artist: "Mohit Chauhan", movie: "Rockstar", year: 2011, link: "https://www.youtube.com/watch?v=2mWaqsC3U7k" },
    { name: "Main Jahaan Rahoon", artist: "Rahat Fateh Ali Khan", movie: "Namastey London", year: 2007, link: "https://www.youtube.com/watch?v=XWR-bdjIq9s" },
    { name: "Naina", artist: "Arijit Singh", movie: "Dangal", year: 2016, link: "https://www.youtube.com/watch?v=sXl5aeRkQR0" },
    { name: "Lo Maan Liya", artist: "Arijit Singh", movie: "Raaz Reboot", year: 2016, link: "https://www.youtube.com/watch?v=9eMVaTN40yM" }
  ],
  motivated: [
    { name: "Kar Har Maidaan Fateh", artist: "Sukhwinder Singh, Shreya Ghoshal", movie: "Sanju", year: 2018, link: "https://www.youtube.com/watch?v=nIkFW78x6UA" },
    { name: "Chak De India", artist: "Sukhwinder Singh", movie: "Chak De India", year: 2007, link: "https://www.youtube.com/watch?v=6S2ePUJLHO4" },
    { name: "Lakshya", artist: "Shankar Mahadevan", movie: "Lakshya", year: 2004, link: "https://www.youtube.com/watch?v=8DMF0U6xV78" },
    { name: "Zinda", artist: "Siddharth Mahadevan", movie: "Bhaag Milkha Bhaag", year: 2013, link: "https://www.youtube.com/watch?v=1iAYXHcBigM" },
    { name: "Sultan", artist: "Sukhwinder Singh", movie: "Sultan", year: 2016, link: "https://www.youtube.com/watch?v=RYqJ5w-GrfM" },
    { name: "Brothers Anthem", artist: "Vishal Dadlani", movie: "Brothers", year: 2015, link: "https://www.youtube.com/watch?v=F5VvDr4T-Zs" },
    { name: "Soorma", artist: "Shankar Mahadevan", movie: "Soorma", year: 2018, link: "https://www.youtube.com/watch?v=_niF5ix9yOI" },
    { name: "Badal Pe Paon Hai", artist: "Shilpa Rao", movie: "Chak De India", year: 2007, link: "https://www.youtube.com/watch?v=oWR4xocz8b8" },
    { name: "India Wale", artist: "Vishal Dadlani", movie: "Happy New Year", year: 2014, link: "https://www.youtube.com/watch?v=r6U0nybs2Qo" },
    { name: "Aaj Se Teri", artist: "Arijit Singh", movie: "Padman", year: 2018, link: "https://www.youtube.com/watch?v=IKp0PeANUJg" },
    { name: "Dhoom Machale", artist: "Sunidhi Chauhan", movie: "Dhoom", year: 2004, link: "https://www.youtube.com/watch?v=ymv9H3QsC5Y" },
    { name: "Jee Karda", artist: "Divya Kumar", movie: "Badlapur", year: 2015, link: "https://www.youtube.com/watch?v=pMI0UHTUhEo" }
  ],
  neutral: [
    { name: "Iktara", artist: "Amit Trivedi, Kavita Seth", movie: "Wake Up Sid", year: 2009, link: "https://www.youtube.com/watch?v=fSS_R91Nimw" },
    { name: "Shayad", artist: "Arijit Singh", movie: "Love Aaj Kal", year: 2020, link: "https://www.youtube.com/watch?v=MJyKN-8UncM" },
    { name: "Tum Se Hi", artist: "Mohit Chauhan", movie: "Jab We Met", year: 2007, link: "https://www.youtube.com/watch?v=mt9xg0mmt28" },
    { name: "Raabta", artist: "Arijit Singh", movie: "Agent Vinod", year: 2012, link: "https://www.youtube.com/watch?v=zk0-f92gg9A" },
    { name: "Kun Faya Kun", artist: "A.R. Rahman, Javed Ali", movie: "Rockstar", year: 2011, link: "https://www.youtube.com/watch?v=T94PHkuydcw" },
    { name: "Tu Jaane Na", artist: "Atif Aslam", movie: "Ajab Prem Ki Ghazab Kahani", year: 2009, link: "https://www.youtube.com/watch?v=P8PWN1OmZOA" },
    { name: "Tere Bina", artist: "A.R. Rahman, Chinmayi", movie: "Guru", year: 2007, link: "https://www.youtube.com/watch?v=BMB_5xG-Vjs" },
    { name: "Phir Se Ud Chala", artist: "Mohit Chauhan", movie: "Rockstar", year: 2011, link: "https://www.youtube.com/watch?v=2mWaqsC3U7k" },
    { name: "O Rangrez", artist: "Javed Bashir, Shreya Ghoshal", movie: "Bhaag Milkha Bhaag", year: 2013, link: "https://www.youtube.com/watch?v=uf2KQnqLvAg" },
    { name: "Phir Le Aya Dil", artist: "Arijit Singh", movie: "Barfi!", year: 2012, link: "https://www.youtube.com/watch?v=jR1-5HJPAew" },
    { name: "Sajde", artist: "KK, Shreya Ghoshal", movie: "Khatta Meetha", year: 2010, link: "https://www.youtube.com/watch?v=zfABEXO5UG4" },
    { name: "Ilahi", artist: "Arijit Singh", movie: "Yeh Jawaani Hai Deewani", year: 2013, link: "https://www.youtube.com/watch?v=6w67NOaRe-w" }
  ]
};

export function getSongRecommendations(emotion: string, count: number = 10): SongRecommendation[] {
  const emotionKey = emotion.toLowerCase();
  let availableSongs = bollywoodSongsByEmotion[emotionKey];
  
  // If the emotion is not in our database, try mapping it to a closest match
  if (!availableSongs) {
    const emotionMappings: Record<string, string> = {
      'surprised': 'excited',
      'tired': 'relaxed',
      'content': 'neutral',
      'calm': 'relaxed',
      'joyful': 'happy',
      'gloomy': 'sad',
      'furious': 'angry',
      'nervous': 'anxious',
      'passionate': 'romantic',
      'energetic': 'motivated'
    };
    
    const mappedEmotion = emotionMappings[emotionKey];
    availableSongs = mappedEmotion ? bollywoodSongsByEmotion[mappedEmotion] : bollywoodSongsByEmotion.neutral;
  }
  
  // Shuffle the array and pick the first 'count' elements
  const shuffled = [...availableSongs].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}
