import {
  BotMessageSquare,
  BatteryCharging,
  Fingerprint,
  ShieldHalf,
  PlugZap,
  GlobeLock,
} from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Features", href: "#" },
  { label: "Workflow", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Testimonials", href: "#" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "Absolutely thrilled with the service! The team was highly responsive and went above and beyond to deliver exceptional results.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "The project exceeded our wildest dreams. The team's innovative approach and problem-solving prowess made it all possible!",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "An absolute pleasure to work with! Their keen eye for detail and dedication to excellence truly sets them apart.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Partnering with XYZ Company was transformative. Their sharp attention to detail and cutting-edge solutions accelerated our project beyond expectations!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "The professionalism and passion of this team is unmatched. They didn’t just meet our expectations—they shattered them!",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "They didn’t just deliver—they exceeded every expectation. Looking forward to collaborating again in the future!",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Intuitive Drag-and-Drop",
    description:
      "Craft and customize VR environments effortlessly with our seamless drag-and-drop interface.",
  },
  {
    icon: <Fingerprint />,
    text: "Cross-Platform Flexibility",
    description:
      "Build VR applications compatible with all major platforms—from mobile to desktops and headsets.",
  },
  {
    icon: <ShieldHalf />,
    text: "Pre-Designed Templates",
    description:
      "Kickstart your VR journey with a variety of professional templates tailored to your project needs.",
  },
  {
    icon: <BatteryCharging />,
    text: "Live Preview Mode",
    description:
      "Make changes on the fly with real-time previews, allowing for instant feedback and refinements.",
  },
  {
    icon: <PlugZap />,
    text: "Collaborative Workspace",
    description:
      "Collaborate with your team in real-time on VR projects, ensuring seamless teamwork and innovation.",
  },
  {
    icon: <GlobeLock />,
    text: "Advanced Analytics Dashboard",
    description:
      "Track user interactions and gain deep insights into how users engage with your VR experience.",
  },
];

export const checklistItems = [
  {
    title: "Effortless Code Merges",
    description:
      "Streamline code merges while keeping a close eye on performance and user behavior insights.",
  },
  {
    title: "Stress-Free Code Reviews",
    description:
      "Conduct thorough code reviews with ease, ensuring project success through data-driven insights.",
  },
  {
    title: "AI-Powered Efficiency",
    description:
      "Leverage AI to accelerate development processes, reducing time and boosting productivity.",
  },
  {
    title: "Instant Work Sharing",
    description:
      "Share progress with your team in just minutes, keeping everyone in sync and on track.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 GB Storage",
      "Basic Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 GB Storage",
      "Advanced Web Analytics",
      "Enhanced Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "Premium Network Performance",
      "Full Privacy Controls",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Get Started" },
  { href: "#", text: "Official Documentation" },
  { href: "#", text: "Step-by-Step Tutorials" },
  { href: "#", text: "API Documentation" },
  { href: "#", text: "Community Hub" },
];

export const platformLinks = [
  { href: "#", text: "Feature Overview" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Download Center" },
  { href: "#", text: "Release Updates" },
];

export const communityLinks = [
  { href: "#", text: "Upcoming Events" },
  { href: "#", text: "Local Meetups" },
  { href: "#", text: "Industry Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Career Opportunities" },
];
