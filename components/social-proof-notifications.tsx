'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import { X, Heart, Cake, Star, Calendar, Gift, Users } from 'lucide-react';

// 150 Social proof notifications
const notifications = [
  // Birthday Celebrations
  { name: "Aditya", action: "booked birthday surprise", detail: "for Shreya", time: "2 mins ago", icon: "cake" },
  { name: "Rahul", action: "booked birthday celebration", detail: "for his girlfriend", time: "5 mins ago", icon: "cake" },
  { name: "Priya", action: "booked surprise party", detail: "for Vikram's birthday", time: "8 mins ago", icon: "gift" },
  { name: "Sneha", action: "booked birthday surprise", detail: "for her husband", time: "12 mins ago", icon: "cake" },
  { name: "Amit", action: "booked birthday celebration", detail: "for Neha", time: "15 mins ago", icon: "cake" },
  { name: "Kavya", action: "booked Forever Us package", detail: "for boyfriend's birthday", time: "18 mins ago", icon: "gift" },
  { name: "Rohan", action: "surprised his wife", detail: "with birthday decoration", time: "22 mins ago", icon: "cake" },
  { name: "Meera", action: "booked birthday surprise", detail: "for Arjun", time: "25 mins ago", icon: "cake" },
  { name: "Vivek", action: "booked Glass House", detail: "for wife's birthday", time: "28 mins ago", icon: "gift" },
  { name: "Ananya", action: "booked rooftop celebration", detail: "for Raj's birthday", time: "32 mins ago", icon: "cake" },
  { name: "Karan", action: "booked birthday package", detail: "for Mira", time: "35 mins ago", icon: "cake" },
  { name: "Riya", action: "planned surprise party", detail: "for boyfriend", time: "38 mins ago", icon: "gift" },
  { name: "Aryan", action: "booked birthday dinner", detail: "for Pooja", time: "42 mins ago", icon: "cake" },
  { name: "Nisha", action: "booked surprise celebration", detail: "for Kunal", time: "45 mins ago", icon: "cake" },
  { name: "Dev", action: "booked birthday surprise", detail: "for his love", time: "48 mins ago", icon: "gift" },
  
  // Candlelight Dinners
  { name: "A couple", action: "booked candlelight dinner", detail: "for next weekend", time: "3 mins ago", icon: "heart" },
  { name: "Siddharth & Tanvi", action: "reserved candlelight dinner", detail: "for Friday evening", time: "6 mins ago", icon: "heart" },
  { name: "Mohit", action: "booked romantic dinner", detail: "for his girlfriend", time: "10 mins ago", icon: "heart" },
  { name: "A couple from Alkapuri", action: "booked candlelight dinner", detail: "for tomorrow", time: "14 mins ago", icon: "heart" },
  { name: "Shrey", action: "planned candlelight date", detail: "for Khushi", time: "17 mins ago", icon: "heart" },
  { name: "Ankit & Prerna", action: "booked rooftop dinner", detail: "for Saturday", time: "20 mins ago", icon: "heart" },
  { name: "A couple", action: "booked candlelight dinner", detail: "for this evening", time: "24 mins ago", icon: "heart" },
  { name: "Harsh", action: "reserved romantic dinner", detail: "for Shreya", time: "27 mins ago", icon: "heart" },
  { name: "Couple from Gotri", action: "booked candlelight experience", detail: "for Sunday", time: "30 mins ago", icon: "heart" },
  { name: "Mayank & Aditi", action: "booked dinner date", detail: "for tomorrow evening", time: "33 mins ago", icon: "heart" },
  { name: "Jayesh", action: "planned candlelight dinner", detail: "for his wife", time: "36 mins ago", icon: "heart" },
  { name: "A couple", action: "reserved dinner", detail: "for this weekend", time: "40 mins ago", icon: "heart" },
  { name: "Dhruv & Kiara", action: "booked romantic dinner", detail: "for Friday", time: "43 mins ago", icon: "heart" },
  { name: "Nikhil", action: "booked candlelight dinner", detail: "for anniversary", time: "46 mins ago", icon: "heart" },
  { name: "A couple from Akota", action: "reserved dinner", detail: "for Saturday night", time: "50 mins ago", icon: "heart" },
  
  // Anniversary Celebrations
  { name: "Rakesh & Sunita", action: "celebrated 10th anniversary", detail: "last evening", time: "1 hour ago", icon: "star" },
  { name: "Vishal", action: "booked anniversary surprise", detail: "for his wife", time: "4 mins ago", icon: "star" },
  { name: "A couple", action: "celebrated 5th anniversary", detail: "yesterday", time: "1 hour ago", icon: "star" },
  { name: "Manish & Priti", action: "booked anniversary dinner", detail: "for tomorrow", time: "7 mins ago", icon: "star" },
  { name: "Deepak", action: "surprised wife", detail: "on their anniversary", time: "11 mins ago", icon: "star" },
  { name: "Couple from Vadodara", action: "celebrated 1st anniversary", detail: "with us", time: "1 hour ago", icon: "star" },
  { name: "Rajat & Meghna", action: "booked anniversary celebration", detail: "for weekend", time: "16 mins ago", icon: "star" },
  { name: "Ajay", action: "planned anniversary surprise", detail: "for Rekha", time: "19 mins ago", icon: "star" },
  { name: "A couple", action: "celebrated wedding anniversary", detail: "last night", time: "2 hours ago", icon: "star" },
  { name: "Sameer & Nidhi", action: "booked anniversary dinner", detail: "for Friday", time: "23 mins ago", icon: "star" },
  { name: "Vikrant", action: "surprised his wife", detail: "on 3rd anniversary", time: "26 mins ago", icon: "star" },
  { name: "Happy couple", action: "celebrated anniversary", detail: "with rooftop dinner", time: "2 hours ago", icon: "star" },
  { name: "Pankaj & Shweta", action: "booked special dinner", detail: "for anniversary", time: "29 mins ago", icon: "star" },
  { name: "Couple from Gotri", action: "celebrated 7th anniversary", detail: "yesterday", time: "3 hours ago", icon: "star" },
  { name: "A couple", action: "booked anniversary package", detail: "for next week", time: "34 mins ago", icon: "star" },
  
  // Proposals
  { name: "Rohit", action: "planned proposal", detail: "She said YES! 💍", time: "1 hour ago", icon: "heart" },
  { name: "Akash", action: "booked proposal setup", detail: "for this weekend", time: "9 mins ago", icon: "heart" },
  { name: "Varun", action: "proposed to his girlfriend", detail: "She said YES!", time: "2 hours ago", icon: "heart" },
  { name: "Yash", action: "booked Glass House proposal", detail: "for Friday", time: "13 mins ago", icon: "heart" },
  { name: "Saurabh", action: "planned surprise proposal", detail: "for Ankita", time: "21 mins ago", icon: "heart" },
  { name: "Happy groom-to-be", action: "proposed successfully", detail: "at Friends Factory", time: "3 hours ago", icon: "heart" },
  { name: "Kunal", action: "booked rooftop proposal", detail: "for next Saturday", time: "31 mins ago", icon: "heart" },
  { name: "Tushar", action: "planned dream proposal", detail: "for his love", time: "37 mins ago", icon: "heart" },
  { name: "A couple", action: "got engaged", detail: "at Glass House", time: "4 hours ago", icon: "heart" },
  { name: "Chirag", action: "booked proposal package", detail: "for this month", time: "41 mins ago", icon: "heart" },
  
  // Pre-wedding Shoots
  { name: "Couple from Baroda", action: "did pre-wedding shoot", detail: "yesterday", time: "5 hours ago", icon: "users" },
  { name: "Akshay & Ritika", action: "booked pre-wedding shoot", detail: "for next week", time: "44 mins ago", icon: "users" },
  { name: "Happy couple", action: "completed photoshoot", detail: "at rooftop", time: "6 hours ago", icon: "users" },
  { name: "Couple from Alkapuri", action: "booked candlelight shoot", detail: "for Saturday", time: "47 mins ago", icon: "users" },
  { name: "Soon-to-wed couple", action: "did romantic shoot", detail: "at Glass House", time: "7 hours ago", icon: "users" },
  { name: "Anand & Priya", action: "booked pre-wedding package", detail: "for this month", time: "51 mins ago", icon: "users" },
  
  // Date Nights
  { name: "Young couple", action: "enjoyed surprise date", detail: "last evening", time: "8 hours ago", icon: "heart" },
  { name: "Sahil", action: "booked surprise date", detail: "for Nisha", time: "2 mins ago", icon: "heart" },
  { name: "A couple", action: "had their first date", detail: "at Friends Factory", time: "9 hours ago", icon: "heart" },
  { name: "Parth", action: "planned date night", detail: "for his girlfriend", time: "6 mins ago", icon: "heart" },
  { name: "Happy couple", action: "celebrated date night", detail: "on rooftop", time: "10 hours ago", icon: "heart" },
  { name: "Aman", action: "booked romantic date", detail: "for this weekend", time: "11 mins ago", icon: "heart" },
  { name: "A couple from Gotri", action: "enjoyed date", detail: "yesterday", time: "11 hours ago", icon: "heart" },
  { name: "Shubham", action: "surprised his love", detail: "with date night", time: "15 mins ago", icon: "heart" },
  
  // More Birthday variations
  { name: "Pooja", action: "planned surprise", detail: "for Nitin's birthday", time: "52 mins ago", icon: "cake" },
  { name: "Ishaan", action: "booked birthday surprise", detail: "for Simran", time: "55 mins ago", icon: "gift" },
  { name: "Couple from Vadodara", action: "celebrated birthday", detail: "at Glass House", time: "12 hours ago", icon: "cake" },
  { name: "Tanya", action: "planned surprise party", detail: "for Abhi's birthday", time: "58 mins ago", icon: "cake" },
  { name: "Gaurav", action: "booked birthday celebration", detail: "for his wife", time: "1 hour ago", icon: "gift" },
  { name: "Shruti", action: "surprised her boyfriend", detail: "on his birthday", time: "1 hour ago", icon: "cake" },
  { name: "Alok", action: "booked rooftop birthday", detail: "for Neha", time: "1 hour ago", icon: "cake" },
  { name: "Divya", action: "planned birthday surprise", detail: "for Rahul", time: "1 hour ago", icon: "gift" },
  
  // More Candlelight variations
  { name: "Couple from Akota", action: "enjoyed candlelight", detail: "last night", time: "13 hours ago", icon: "heart" },
  { name: "Arun & Shalini", action: "booked dinner", detail: "for Valentine's week", time: "1 hour ago", icon: "heart" },
  { name: "A couple", action: "had romantic dinner", detail: "yesterday evening", time: "14 hours ago", icon: "heart" },
  { name: "Raj", action: "planned candlelight evening", detail: "for Priya", time: "1 hour ago", icon: "heart" },
  { name: "Couple from Baroda", action: "enjoyed Glass House", detail: "last weekend", time: "1 day ago", icon: "heart" },
  { name: "Sumit", action: "booked romantic dinner", detail: "for next Friday", time: "1 hour ago", icon: "heart" },
  
  // Baby Shower / Special occasions
  { name: "Happy parents-to-be", action: "celebrated baby shower", detail: "yesterday", time: "15 hours ago", icon: "gift" },
  { name: "Expecting couple", action: "booked baby shower", detail: "for next month", time: "1 hour ago", icon: "gift" },
  { name: "Rita & Suresh", action: "did baby announcement", detail: "at rooftop", time: "1 day ago", icon: "users" },
  { name: "Couple from Vadodara", action: "celebrated pregnancy", detail: "announcement", time: "2 days ago", icon: "gift" },
  
  // More Anniversary variations
  { name: "Golden couple", action: "celebrated 25th anniversary", detail: "with family", time: "16 hours ago", icon: "star" },
  { name: "Ramesh & Kavita", action: "booked silver jubilee", detail: "celebration", time: "1 hour ago", icon: "star" },
  { name: "Happy couple", action: "celebrated 2nd anniversary", detail: "last evening", time: "17 hours ago", icon: "star" },
  { name: "Couple from Gotri", action: "marked anniversary", detail: "with dinner", time: "18 hours ago", icon: "star" },
  { name: "Newly married couple", action: "celebrated 1 month", detail: "anniversary", time: "19 hours ago", icon: "star" },
  
  // Valentine's Special
  { name: "Hundreds of couples", action: "celebrated Valentine's", detail: "last month", time: "2 weeks ago", icon: "heart" },
  { name: "Happy couple", action: "had Valentine's dinner", detail: "at rooftop", time: "2 weeks ago", icon: "heart" },
  { name: "A couple", action: "celebrated Rose Day", detail: "at Glass House", time: "2 weeks ago", icon: "heart" },
  { name: "Couple from Vadodara", action: "enjoyed Teddy Day", detail: "celebration", time: "2 weeks ago", icon: "gift" },
  
  // Success stories
  { name: "500+ couples", action: "celebrated with us", detail: "this year", time: "recently", icon: "star" },
  { name: "50+ proposals", action: "happened here", detail: "She said YES!", time: "this month", icon: "heart" },
  { name: "100+ birthdays", action: "celebrated", detail: "this month", time: "recently", icon: "cake" },
  { name: "200+ anniversaries", action: "made special", detail: "this year", time: "recently", icon: "star" },
  
  // More unique entries
  { name: "Vikram & Anjali", action: "booked surprise", detail: "for tonight", time: "just now", icon: "gift" },
  { name: "A couple", action: "celebrating love", detail: "right now", time: "just now", icon: "heart" },
  { name: "Happy customer", action: "gave 5-star review", detail: "just now", time: "1 min ago", icon: "star" },
  { name: "Returning couple", action: "booked again", detail: "for anniversary", time: "2 mins ago", icon: "star" },
  { name: "First-time couple", action: "excited to visit", detail: "this weekend", time: "3 mins ago", icon: "heart" },
  { name: "Yuvraj", action: "booked package", detail: "for Simran's birthday", time: "4 mins ago", icon: "cake" },
  { name: "Aarti", action: "planned surprise", detail: "for husband's birthday", time: "5 mins ago", icon: "gift" },
  { name: "A couple from Waghodia", action: "booked dinner", detail: "for Sunday", time: "6 mins ago", icon: "heart" },
  { name: "Prakash & Neelam", action: "reserved special dinner", detail: "for anniversary", time: "7 mins ago", icon: "star" },
  { name: "Young couple", action: "booked first date", detail: "at Friends Factory", time: "8 mins ago", icon: "heart" },
  
  // More variety
  { name: "Ritesh", action: "surprised his girlfriend", detail: "with rooftop setup", time: "10 mins ago", icon: "gift" },
  { name: "Megha", action: "booked celebration", detail: "for parents' anniversary", time: "12 mins ago", icon: "star" },
  { name: "A couple", action: "enjoyed Glass House", detail: "experience", time: "20 hours ago", icon: "heart" },
  { name: "Jatin & Swati", action: "celebrated love", detail: "at rooftop", time: "21 hours ago", icon: "heart" },
  { name: "College sweethearts", action: "had romantic dinner", detail: "yesterday", time: "22 hours ago", icon: "heart" },
  { name: "Childhood friends", action: "turned lovers", detail: "celebrated anniversary", time: "23 hours ago", icon: "star" },
  { name: "Long-distance couple", action: "reunited with dinner", detail: "at Friends Factory", time: "1 day ago", icon: "heart" },
  { name: "Engaged couple", action: "celebrated engagement", detail: "anniversary", time: "1 day ago", icon: "heart" },
  { name: "Vaibhav", action: "booked surprise package", detail: "for Palak", time: "14 mins ago", icon: "gift" },
  { name: "Shweta", action: "planned birthday bash", detail: "for Ankit", time: "16 mins ago", icon: "cake" },
  
  // Location based
  { name: "Customer from Manjalpur", action: "booked candlelight", detail: "dinner", time: "18 mins ago", icon: "heart" },
  { name: "Couple from Subhanpura", action: "reserved romantic", detail: "evening", time: "22 mins ago", icon: "heart" },
  { name: "Family from Fatehgunj", action: "booked birthday", detail: "celebration", time: "24 mins ago", icon: "cake" },
  { name: "Customer from Sayajigunj", action: "planned surprise", detail: "for wife", time: "26 mins ago", icon: "gift" },
  { name: "Couple from Harni", action: "booked anniversary", detail: "dinner", time: "28 mins ago", icon: "star" },
  { name: "Customer from Sama", action: "reserved package", detail: "for birthday", time: "30 mins ago", icon: "cake" },
  { name: "Customer from Karelibaug", action: "booked proposal", detail: "setup", time: "32 mins ago", icon: "heart" },
  { name: "Couple from Tarsali", action: "planned dinner", detail: "date", time: "34 mins ago", icon: "heart" },
  { name: "Customer from Gorwa", action: "booked celebration", detail: "for girlfriend", time: "36 mins ago", icon: "gift" },
  { name: "Couple from Vasna", action: "reserved Glass House", detail: "for Saturday", time: "38 mins ago", icon: "heart" },
  { name: "Customer from Nizampura", action: "planned anniversary", detail: "surprise", time: "40 mins ago", icon: "star" },
  { name: "Couple from OP Road", action: "booked rooftop", detail: "dinner", time: "42 mins ago", icon: "heart" },
  { name: "Customer from Chhani", action: "reserved birthday", detail: "package", time: "44 mins ago", icon: "cake" },
  { name: "Newlyweds from Vadodara", action: "celebrated together", detail: "at rooftop", time: "2 days ago", icon: "heart" },
  { name: "Couple from Gujarat", action: "visited for dinner", detail: "loved it!", time: "2 days ago", icon: "star" },
  { name: "Happy husband", action: "surprised wife", detail: "successfully", time: "2 days ago", icon: "gift" },
];

const iconMap = {
  cake: Cake,
  heart: Heart,
  star: Star,
  gift: Gift,
  calendar: Calendar,
  users: Users,
};

const iconColorMap = {
  cake: "text-pink-500 bg-pink-100",
  heart: "text-red-500 bg-red-100",
  star: "text-yellow-500 bg-yellow-100",
  gift: "text-purple-500 bg-purple-100",
  calendar: "text-blue-500 bg-blue-100",
  users: "text-green-500 bg-green-100",
};

export function SocialProofNotifications() {
  const pathname = usePathname();
  const [currentNotification, setCurrentNotification] = useState<typeof notifications[0] | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [usedIndices, setUsedIndices] = useState<Set<number>>(new Set());

  // Hide on admin/affiliate dashboard pages
  const isAdminOrAffiliate = pathname?.startsWith('/admin') || pathname?.startsWith('/affiliate');

  const showNextNotification = useCallback(() => {
    // Get available indices
    let availableIndices = notifications.map((_, i) => i).filter(i => !usedIndices.has(i));
    
    // Reset if all used
    if (availableIndices.length === 0) {
      setUsedIndices(new Set());
      availableIndices = notifications.map((_, i) => i);
    }

    // Pick random from available
    const randomIndex = availableIndices[Math.floor(Math.random() * availableIndices.length)];
    setUsedIndices(prev => new Set([...prev, randomIndex]));
    
    setCurrentNotification(notifications[randomIndex]);
    setIsVisible(true);

    // Hide after 5 seconds
    setTimeout(() => {
      setIsVisible(false);
    }, 5000);
  }, [usedIndices]);

  useEffect(() => {
    // Show first notification after 10 seconds
    const initialTimeout = setTimeout(() => {
      showNextNotification();
    }, 10000);

    // Then show every 40 seconds (5s visible + 35s gap)
    const interval = setInterval(() => {
      showNextNotification();
    }, 40000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, [showNextNotification]);

  const dismissNotification = () => {
    setIsVisible(false);
  };

  if (!currentNotification || isAdminOrAffiliate) return null;

  const IconComponent = iconMap[currentNotification.icon as keyof typeof iconMap] || Heart;
  const iconColorClass = iconColorMap[currentNotification.icon as keyof typeof iconColorMap] || "text-purple-500 bg-purple-100";

  return (
    <div 
      className={`fixed bottom-4 left-4 z-40 max-w-[260px] transition-all duration-700 ease-in-out ${
        isVisible 
          ? 'opacity-100 translate-x-0' 
          : 'opacity-0 -translate-x-8 pointer-events-none'
      }`}
    >
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 px-3 py-2.5 flex items-start gap-2">
        {/* Icon */}
        <div className={`w-8 h-8 rounded-full ${iconColorClass} flex items-center justify-center flex-shrink-0`}>
          <IconComponent className="w-4 h-4" />
        </div>
        
        {/* Content */}
        <div className="flex-1 min-w-0">
          <p className="text-xs text-gray-800 leading-snug">
            <span className="font-bold">{currentNotification.name}</span>{' '}
            <span className="text-gray-600">{currentNotification.action}</span>{' '}
            <span className="font-semibold text-purple-600">{currentNotification.detail}</span>
          </p>
          <p className="text-[10px] text-gray-400 mt-0.5 flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
            {currentNotification.time}
          </p>
        </div>

        {/* Close button */}
        <button 
          onClick={dismissNotification}
          className="text-gray-400 hover:text-gray-600 transition-colors flex-shrink-0"
          aria-label="Dismiss notification"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
