import React from 'react';
import { Plane, Camera, Mountain, Coffee, Map, Bus } from 'lucide-react';
import TimelineDay from './TimelineDay';

interface TimelineProps {
  selectedDay: number;
  onDaySelect: (day: number) => void;
}

const Timeline = ({ selectedDay, onDaySelect }: TimelineProps) => {
  const itinerary = [
    {
      day: 1,
      title: 'Arrival in Manali',
      activities: [
        'Airport pickup and transfer to hotel',
        'Check-in at luxury resort',
        'Welcome dinner with local specialties',
        'Evening briefing about the trip'
      ],
      icon: <Plane className="w-6 h-6 text-white" />
    },
    {
      day: 2,
      title: 'Local Sightseeing',
      activities: [
        'Visit Hadimba Temple',
        'Explore Mall Road',
        'Local market shopping',
        'Cultural show in evening'
      ],
      icon: <Camera className="w-6 h-6 text-white" />
    },
    {
      day: 3,
      title: 'Adventure Day',
      activities: [
        'Paragliding session',
        'River rafting experience',
        'Adventure sports',
        'Bonfire dinner'
      ],
      icon: <Mountain className="w-6 h-6 text-white" />
    },
    {
      day: 4,
      title: 'Solang Valley',
      activities: [
        'Full day at Solang Valley',
        'Snow activities (seasonal)',
        'Cable car ride',
        'Photography session'
      ],
      icon: <Map className="w-6 h-6 text-white" />
    },
    {
      day: 5,
      title: 'Rohtang Pass',
      activities: [
        'Early morning departure',
        'Rohtang Pass visit',
        'Snow point activities',
        'Scenic photography'
      ],
      icon: <Bus className="w-6 h-6 text-white" />
    },
    {
      day: 6,
      title: 'Departure',
      activities: [
        'Breakfast at hotel',
        'Local market visit',
        'Airport transfer',
        'Departure assistance'
      ],
      icon: <Coffee className="w-6 h-6 text-white" />
    }
  ];

  return (
    <div className="space-y-6">
      {itinerary.map((day, index) => (
        <TimelineDay
          key={day.day}
          {...day}
          isSelected={selectedDay === day.day}
          onClick={() => onDaySelect(day.day)}
          isLast={index === itinerary.length - 1}
        />
      ))}
    </div>
  );
};

export default Timeline;