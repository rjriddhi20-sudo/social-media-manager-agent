function Calendar() {
  const week = [
    {
      day: "Monday",
      platform: "Instagram",
      content: "Reel: 3 coding hacks in 30 seconds",
      time: "6:00 PM"
    },
    {
      day: "Tuesday",
      platform: "YouTube",
      content: "Short: Debugging tips beginners miss",
      time: "4:00 PM"
    },
    {
      day: "Wednesday",
      platform: "Instagram",
      content: "Carousel: VS Code extensions list",
      time: "7:00 PM"
    },
    {
      day: "Thursday",
      platform: "YouTube",
      content: "Short: React interview trick",
      time: "5:00 PM"
    },
    {
      day: "Friday",
      platform: "Instagram",
      content: "Reel: Productivity setup",
      time: "8:00 PM"
    },
    {
      day: "Saturday",
      platform: "YouTube",
      content: "Short: GitHub growth tip",
      time: "3:00 PM"
    },
    {
      day: "Sunday",
      platform: "Rest Day",
      content: "Engage with audience + reply to comments",
      time: "-"
    }
  ];

  return (
    <div className="flex-1 flex items-center justify-center p-10">
      <div className="pixel-frame">
        <div className="pixel-card w-[900px] p-8">

          <h2 className="text-2xl font-bold text-center text-pink-600 mb-6">
            📅 BLOOMELLA Weekly Planner
          </h2>

          <div className="grid grid-cols-2 gap-6">
            {week.map((item, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-xl shadow-md"
              >
                <h3 className="font-semibold text-pink-500">
                  {item.day}
                </h3>

                <p className="text-sm text-gray-600">
                  Platform: {item.platform}
                </p>

                <p className="text-sm mt-2">
                  {item.content}
                </p>

                <p className="text-xs text-gray-400 mt-2">
                  Time: {item.time}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}

export default Calendar;
