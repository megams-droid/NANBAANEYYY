// Configurable Password (Default: ROSEMILK - can be edited anytime)
export const DEFAULT_PASSWORD = "ROSEMILK";

// Friendship Start Date for the Friendship Counter (YYYY-MM-DD)
export const FRIENDSHIP_START_DATE = "2023-08-15";

// Main Chapters for "Watch Us Grow" Journey & Story Begins
export const CHAPTERS = [
  {
    id: "mem-01",
    tag: "MEMORY 01",
    title: "Where It Started",
    subtitle: "Every friendship has a beginning.",
    date: "August 2023",
    location: "Campus Courtyard",
    image: "/memories/memory1.jpg",
    caption: "The first photograph that captured our spark. We didn't know then that this single selfie was the prelude to a thousand shared smiles.",
    quote: "A single chance encounter that turned into a lifelong comfort.",
    layout: "hero-polaroid",
    rotate: "-2deg"
  },
  {
    id: "mem-02",
    tag: "MEMORY 02",
    title: "More Memories & Good Company",
    subtitle: "Expanding our world, keeping the warmth.",
    date: "October 2023",
    location: "The Quiet Hallway",
    image: "/memories/memory2.jpg",
    caption: "Standing together against the clean white tiles. Bringing people together and making every casual weekday feel like an event.",
    quote: "Good company transforms ordinary spaces into extraordinary memories.",
    layout: "film-strip",
    rotate: "1.5deg"
  },
  {
    id: "mem-03",
    tag: "MEMORY 03",
    title: "Growing Closer & Pure Smiles",
    subtitle: "When teasing becomes an art form.",
    date: "December 2023",
    location: "College Corridor",
    image: "/memories/memory3.jpg",
    caption: "Bunny ears behind your head and that unmistakable laugh. The moment we realized we could be completely unrefined and silly without judgment.",
    quote: "Real friendship is where you can be 100% goofy without explanation.",
    layout: "polaroid-wide",
    rotate: "-1deg"
  },
  {
    id: "mem-04",
    tag: "MEMORY 04",
    title: "The Crazy & Playful Moments",
    subtitle: "Unscripted, unfiltered, unstoppable.",
    date: "March 2024",
    location: "Fest Day Celebrations",
    image: "/memories/memory4.jpg",
    caption: "Second take of the ear pranks! You crossed your arms pretending to be serious, but the smile gave away how much fun we were having.",
    quote: "We didn't plan every memory. We simply lived them.",
    layout: "overlapping",
    rotate: "2.5deg"
  },
  {
    id: "mem-05",
    tag: "MEMORY 05",
    title: "Unforgettable Days",
    subtitle: "Full height poses & standing tall together.",
    location: "Annual Gathering",
    image: "/memories/memory5.jpg",
    caption: "Matching outfits, beige sandals, black trousers, and endless banter. A snapshot of a bond that stands tall through all seasons.",
    quote: "Some days pass in a blink, but the feeling stays with you forever.",
    layout: "scrapbook-full",
    rotate: "-1.5deg"
  },
  {
    id: "mem-06",
    tag: "MEMORY 06",
    title: "Sanctuary of Friendship",
    subtitle: "Sitting side-by-side at the wooden doors.",
    location: "Heritage Courtyard",
    image: "/memories/memory6.jpg",
    caption: "A serene, beautiful photo sitting together at the ornate wooden temple door. Pure peace, comfort, and an unmistakable bond.",
    quote: "Side by side through every chapter of life.",
    layout: "hero-polaroid",
    rotate: "2deg"
  },
  {
    id: "mem-07",
    tag: "MEMORY 07",
    title: "Pure Comfort & Smiles",
    subtitle: "Effortless warmth, side by side.",
    location: "Courtyard Entry",
    image: "/memories/memory7.jpg",
    caption: "Soft smiles and unmatched comfort. Knowing that whatever life brings, we will always have this beautiful connection.",
    quote: "Whatever the future brings, this friendship remains one of the most beautiful parts of our story.",
    layout: "polaroid-wide",
    rotate: "-2deg"
  },
  {
    id: "mem-08",
    tag: "MEMORY 08",
    title: "Moments Worth Keeping",
    subtitle: "A story that isn't finished yet.",
    location: "Our Little Universe",
    image: "/memories/memory6.jpg",
    caption: "Looking back at where we started and looking forward to all the unwritten chapters waiting for us in the future.",
    quote: "From one photo to a thousand memories, and millions more to come.",
    layout: "circular-focus",
    rotate: "0deg"
  }
];

// Spotify Tracks provided by the user
export const SPOTIFY_TRACKS = [
  {
    id: "1",
    spotifyId: "1AdLxSuPIZRsIp7IM743dE",
    title: "Track 01 — Golden Hour Vibrations",
    subtitle: "The soundtrack to our sunny afternoon walks.",
    caption: "Song that reminds us of our very first long conversation.",
    tag: "Nostalgic Vibe"
  },
  {
    id: "2",
    spotifyId: "1sZonxsyhGgySb3V2cEql8",
    title: "Track 02 — The Late Night Anthem",
    subtitle: "Playing on loop during our endless chats.",
    caption: "Song that played when we lost track of time.",
    tag: "Midnight Energy"
  },
  {
    id: "3",
    spotifyId: "1TgVIOdcdsPx1sXyVE6aDz",
    title: "Track 03 — Laughter in the Air",
    subtitle: "Uncontrollable giggles and inside joke music.",
    caption: "Song that immediately brings back that goofy corridor memory.",
    tag: "Pure Joy"
  },
  {
    id: "4",
    spotifyId: "7K8JquRSzAw8bFQYK0eHrV",
    title: "Track 04 — Unstoppable Energy",
    subtitle: "Our hype song before every big event.",
    caption: "The song we blasted when we conquered our stress.",
    tag: "Hype Mood"
  },
  {
    id: "5",
    spotifyId: "0CFIjGxF9r69fSWSK5Qyxj",
    title: "Track 05 — Retro Melodies",
    subtitle: "Cozy rhythms for quiet comfort.",
    caption: "Song that reminds us that comfortable silence is true friendship.",
    tag: "Cozy Beats"
  },
  {
    id: "6",
    spotifyId: "0JiGoqPHbvK65rBHadXYoB",
    title: "Track 06 — Quiet Conversations",
    subtitle: "Heart-to-heart moments under the evening sky.",
    caption: "Song that feels like a warm hug on a tough day.",
    tag: "Warm Comfort"
  },
  {
    id: "7",
    spotifyId: "5cfKBuE5XKtlaNOVjQwA9H",
    title: "Track 07 — The Forever Anthem",
    subtitle: "Dedicated to all the unwritten memories ahead.",
    caption: "Our official friendship theme song.",
    tag: "Forever Track"
  }
];

// Interactive Memory Cards (Flip/Reveal)
export const MEMORY_CARDS = [
  {
    id: "card-1",
    tag: "THE FIRST CHAPTER",
    title: "Where Curiosity Met Comfort",
    frontText: "Click to unveil how our story started...",
    backText: "We started as two strangers exchanging polite hellos in the hall, unaware that we were building the safest corner of our lives.",
    accent: "gold"
  },
  {
    id: "card-2",
    tag: "THE RANDOM MOMENTS",
    title: "Unplanned Coffee & Spontaneous Trips",
    frontText: "Click to revisit our random adventures...",
    backText: "The best plans were always no plans at all. Standing in front of gray tiled walls, pulling silly faces, and turning routine breaks into mini-vacations.",
    accent: "amber"
  },
  {
    id: "card-3",
    tag: "THE UNEXPECTED LAUGHS",
    title: "Laughter That Made Our Stomachs Hurt",
    frontText: "Click to hear the echo of our laughter...",
    backText: "Remember making bunny ears behind each other's heads while trying to look serious? That quiet eye contact across the room that broke us into tears of laughter!",
    accent: "rose"
  },
  {
    id: "card-4",
    tag: "THE CRAZY DAYS",
    title: "When Rules Were Made to Be Bent",
    frontText: "Click to remember our wildest days...",
    backText: "Running late for lectures, sharing half a snack, taking 50 photos just to keep one where we both looked decent, and boasting about it all day.",
    accent: "indigo"
  },
  {
    id: "card-5",
    tag: "THE MEMORIES WE KEEP",
    title: "Safe Inside Our Hearts",
    frontText: "Click to unlock the core memory...",
    backText: "No matter how busy life gets, knowing there is someone who remembers your stories, your quirks, and your dreams gives unmatched comfort.",
    accent: "emerald"
  },
  {
    id: "card-6",
    tag: "THE MOMENTS WE'D REPLAY",
    title: "If Time Had a Rewind Button",
    frontText: "Click to press rewind...",
    backText: "If we had a time machine, we'd go back to those casual college afternoons—sitting on the floor, listening to our favorite tracks, without a care in the world.",
    accent: "violet"
  }
];

// Our Little Corner - Interactive Items & Highlights
export const CORNER_HIGHLIGHTS = [
  {
    key: "favorite",
    label: "Favorite Memory",
    title: "The First Photo Day",
    text: "Standing together in the hallway with lanyard badges, taking that quick selfie that became the cover image of our friendship history."
  },
  {
    key: "funniest",
    label: "Funniest Moment",
    title: "The Bunny Ears Prank",
    text: "Attempting to pose like sophisticated adults while sneaky peace signs were being raised behind our heads in every single photo shoot."
  },
  {
    key: "unexpected",
    label: "Most Unexpected Moment",
    title: "Becoming Inseparable",
    text: "How quickly two people went from 'I think I've seen you around' to 'Wait, I need to tell you what happened today right now!'"
  },
  {
    key: "replay",
    label: "A Moment We'd Replay",
    title: "The Sunset Walk",
    text: "Walking back after a long day, sharing playlists through one pair of earphones, talking about everything and nothing at all."
  },
  {
    key: "understand",
    label: "Things Only We Understand",
    title: "The Silent Eye-Contact Language",
    text: "When someone says something weird in a crowd and we just glance at each other for 0.5 seconds and know exactly what the other is thinking."
  }
];

// Inside Jokes List
export const INSIDE_JOKES = [
  {
    id: "ij-1",
    joke: "“Wait, act natural!”",
    explanation: "Proceeds to strike the stiffest, funniest pose known to mankind."
  },
  {
    id: "ij-2",
    joke: "The 911 T-Shirt Era",
    explanation: "When white tees and black shirts became our unofficial dress code for iconic photo days."
  },
  {
    id: "ij-3",
    joke: "“Just one more photo!”",
    explanation: "Famous last words before taking 47 identical bunny-ear pictures."
  },
  {
    id: "ij-4",
    joke: "The Lanyard Distinction",
    explanation: "Wearing orange lanyards like honor badges of survival in engineering college."
  }
];

// Reasons I'm Glad We Met
export const REASONS_WE_MET = [
  {
    num: "01",
    title: "You listen without judging",
    desc: "I can share my weirdest thoughts, lowest days, and biggest dreams knowing they are safe with you."
  },
  {
    num: "02",
    title: "Your laughter is contagious",
    desc: "Even on the dullest mondays, 5 minutes around you makes everything lighter."
  },
  {
    num: "03",
    title: "You remember the small details",
    desc: "You notice when something is wrong before I even say a word."
  },
  {
    num: "04",
    title: "We make mundane moments magical",
    desc: "Standing in a plain gray hallway becomes an unforgettable memory when we're together."
  },
  {
    num: "05",
    title: "You are genuinely happy for my wins",
    desc: "Having a friend who celebrates your achievements like their own is a rare gift."
  },
  {
    num: "06",
    title: "You are part of who I am today",
    desc: "Our friendship changed my life for the better, and I wouldn't trade it for anything in the world."
  }
];

// 20+ Photo Wall Items featuring the uploaded real memories in creative polaroids, crops, film strips, and scrapbooks
export const PHOTO_WALL_ITEMS = [
  {
    id: "pw-1",
    image: "/memories/memory1.jpg",
    title: "The Genesis Selfie",
    date: "Aug 15, 2023",
    caption: "White shirt, orange lanyard, and the selfie that started it all.",
    style: "polaroid",
    rotate: "-3deg",
    span: "col-span-1 row-span-1"
  },
  {
    id: "pw-2",
    image: "/memories/memory2.jpg",
    title: "Trio in the Hallway",
    date: "Oct 12, 2023",
    caption: "Good friends, traditional attire, and bright warm smiles.",
    style: "film-strip",
    rotate: "2deg",
    span: "col-span-1 md:col-span-2 row-span-1"
  },
  {
    id: "pw-3",
    image: "/memories/memory3.jpg",
    title: "Bunny Ears Take 1",
    date: "Dec 04, 2023",
    caption: "Posing with folded arms while ears pop up behind!",
    style: "polaroid",
    rotate: "-1.5deg",
    span: "col-span-1 row-span-1"
  },
  {
    id: "pw-4",
    image: "/memories/memory4.jpg",
    title: "Bunny Ears Take 2",
    date: "Dec 04, 2023",
    caption: "The candid laugh right after realizing the prank.",
    style: "scrapbook",
    rotate: "3deg",
    span: "col-span-1 row-span-1"
  },
  {
    id: "pw-5",
    image: "/memories/memory5.jpg",
    title: "Standing Tall Together",
    date: "Mar 20, 2024",
    caption: "Full portrait against the gray tile wall. Timeless pose.",
    style: "polaroid",
    rotate: "-2deg",
    span: "col-span-1 row-span-2"
  },
  {
    id: "pw-6",
    image: "/memories/memory1.jpg",
    title: "The Warmest Smile",
    date: "Aug 15, 2023",
    caption: "Close-up detail: bright eyes and genuine friendship.",
    style: "circle",
    rotate: "1deg",
    span: "col-span-1 row-span-1"
  },
  {
    id: "pw-7",
    image: "/memories/memory3.jpg",
    title: "Pure Joy Shot",
    date: "Dec 04, 2023",
    caption: "Cream Kurta & Black Shirt aesthetic.",
    style: "film-strip",
    rotate: "-2.5deg",
    span: "col-span-1 row-span-1"
  },
  {
    id: "pw-8",
    image: "/memories/memory2.jpg",
    title: "Hallway Chronicles",
    date: "Oct 12, 2023",
    caption: "Shared laughs between lectures in the corridors.",
    style: "polaroid",
    rotate: "1.5deg",
    span: "col-span-1 row-span-1"
  },
  {
    id: "pw-9",
    image: "/memories/memory4.jpg",
    title: "Unfiltered Moments",
    date: "Dec 04, 2023",
    caption: "When the camera catches the real unscripted fun.",
    style: "polaroid",
    rotate: "-3deg",
    span: "col-span-1 row-span-1"
  },
  {
    id: "pw-10",
    image: "/memories/memory5.jpg",
    title: "Style & Grace",
    date: "Mar 20, 2024",
    caption: "Black shirt & beige outfit perfection.",
    style: "scrapbook",
    rotate: "2deg",
    span: "col-span-1 row-span-1"
  },
  {
    id: "pw-11",
    image: "/memories/memory1.jpg",
    title: "Day One Vibe",
    date: "Aug 15, 2023",
    caption: "Rotated selfie angle, forever iconic.",
    style: "polaroid",
    rotate: "-1deg",
    span: "col-span-1 row-span-1"
  },
  {
    id: "pw-12",
    image: "/memories/memory2.jpg",
    title: "Symphony of Smiles",
    date: "Oct 12, 2023",
    caption: "Framed together with warmth and sincerity.",
    style: "film-strip",
    rotate: "2.5deg",
    span: "col-span-1 row-span-1"
  },
  {
    id: "pw-13",
    image: "/memories/memory3.jpg",
    title: "The Golden Moment",
    date: "Dec 04, 2023",
    caption: "Gold necklace, subtle grin, and endless banter.",
    style: "polaroid",
    rotate: "-2deg",
    span: "col-span-1 row-span-1"
  },
  {
    id: "pw-14",
    image: "/memories/memory4.jpg",
    title: "Playful Spirit",
    date: "Dec 04, 2023",
    caption: "Never letting each other take life too seriously.",
    style: "circle",
    rotate: "0deg",
    span: "col-span-1 row-span-1"
  },
  {
    id: "pw-15",
    image: "/memories/memory5.jpg",
    title: "The Core Duo",
    date: "Mar 20, 2024",
    caption: "Side by side through every milestone.",
    style: "polaroid",
    rotate: "-3deg",
    span: "col-span-1 row-span-1"
  },
  {
    id: "pw-16",
    image: "/memories/memory1.jpg",
    title: "College Memories",
    date: "Aug 15, 2023",
    caption: "KIT Coimbatore vibes and sunny corridors.",
    style: "film-strip",
    rotate: "1deg",
    span: "col-span-1 row-span-1"
  },
  {
    id: "pw-17",
    image: "/memories/memory3.jpg",
    title: "Inside Joke Snapshot",
    date: "Dec 04, 2023",
    caption: "The exact second the joke hit.",
    style: "polaroid",
    rotate: "2.5deg",
    span: "col-span-1 row-span-1"
  },
  {
    id: "pw-18",
    image: "/memories/memory2.jpg",
    title: "Kindred Spirits",
    date: "Oct 12, 2023",
    caption: "Friendship that feels like home.",
    style: "scrapbook",
    rotate: "-1.5deg",
    span: "col-span-1 row-span-1"
  },
  {
    id: "pw-19",
    image: "/memories/memory6.jpg",
    title: "Temple Door Memories",
    caption: "Sitting together at the wooden temple doors. Pure serenity.",
    style: "polaroid",
    rotate: "2.5deg",
    span: "col-span-1 row-span-1"
  },
  {
    id: "pw-20",
    image: "/memories/memory7.jpg",
    title: "Side by Side",
    caption: "Matching colors, warm smiles, and an unbreakable bond.",
    style: "scrapbook",
    rotate: "-2deg",
    span: "col-span-1 row-span-1"
  },
  {
    id: "pw-21",
    image: "/memories/memory6.jpg",
    title: "Sanctuary of Us",
    caption: "A quiet corner in the world where friendship shines.",
    style: "circle",
    rotate: "0deg",
    span: "col-span-1 row-span-1"
  },
  {
    id: "pw-22",
    image: "/memories/memory7.jpg",
    title: "Our Story Continues",
    caption: "Whatever the future brings, this friendship remains forever.",
    style: "film-strip",
    rotate: "1.5deg",
    span: "col-span-1 row-span-1"
  }
];
