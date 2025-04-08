import { Package } from '../types/package';

export const packages: Package[] = [
  {
    id: 1,
    title: "Day Adventure Package",
    description: "Perfect for a quick adventure in Meemure",
    price: 50,
    duration: "1 Day",
    image: "https://overatours.com/wp-content/uploads/2020/02/2-1.jpg",
    activities: [
      "Guided village walk",
      "Traditional lunch",
      "Waterfall visit",
      "Tea experience"
    ],
    includes: [
      "Professional guide",
      "Lunch and snacks",
      "Water and refreshments",
      "Safety equipment"
    ]
  },
  {
    id: 2,
    title: "One Night Explorer",
    description: "Experience the magic of Meemure overnight",
    price: 150,
    duration: "2 Days, 1 Night",
    image: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0a/cf/5b/f6.jpg",
    activities: [
      "Hiking to viewpoints",
      "Camping under stars",
      "Night safari",
      "Morning bird watching"
    ],
    includes: [
      "Camping equipment",
      "All meals",
      "Guide services",
      "Transport within village"
    ]
  },
  {
    id: 3,
    title: "Weekend Wilderness",
    description: "Deep dive into Meemure's natural wonders",
    price: 280,
    duration: "3 Days, 2 Nights",
    image: "https://it.lakpura.com/cdn/shop/files/LK7300A8B5-07-E.jpg?v=1720005039&width=1445",
    activities: [
      "Mountain trekking",
      "River activities",
      "Cultural performances",
      "Cooking class"
    ],
    includes: [
      "Homestay accommodation",
      "All meals and snacks",
      "Local transport",
      "Activity equipment"
    ]
  },
  {
    id: 4,
    title: "Week-long Immersion",
    description: "Complete cultural and natural immersion",
    price: 600,
    duration: "7 Days, 6 Nights",
    image: "https://images.ctfassets.net/2ctencdtf9g8/3zfOjmZiHvDizTHNsYXZI6/7096905e15094a1504decc9c7eabb3c8/meemure3-8.webp",
    activities: [
      "Multiple treks",
      "Farming experience",
      "Craft workshops",
      "Wildlife spotting",
      "Photography sessions"
    ],
    includes: [
      "Luxury homestay",
      "All meals",
      "Transport",
      "Guide services",
      "Activity materials"
    ]
  },
  {
    id: 5,
    title: "Adventure Sports Package",
    description: "Thrilling activities for adventure seekers",
    price: 120,
    duration: "2 Days",
    image: "https://www.lanka-excursions-holidays.com/uploads/4/0/2/1/40216937/meemure-seven-falls-dscf8363-1200_orig.jpg",
    activities: [
      "Rock climbing",
      "River rafting",
      "Mountain biking",
      "Rappelling"
    ],
    includes: [
      "Safety equipment",
      "Professional instructors",
      "Meals and snacks",
      "First aid support"
    ]
  }
];