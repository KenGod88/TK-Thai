const schedule = [
  { day: "Maandag", class: "Kickboxing", time: "19:00 - 20:30" },
  { day: "Woensdag", class: "Kickboxing", time: "19:00 - 20:30" },
  { day: "Vrijdag", class: "Kickboxing", time: "19:00 - 20:00" },
];

const Schedule: React.FC = () => {
  return (
    <section id="schedule" className="bg-zinc-950 text-white py-24 px-6">

      <div className="max-w-5xl mx-auto">

        <h2 className="text-3xl font-bold text-center mb-16 tracking-widest">
          TRAINING SCHEDULE
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {schedule.map((item, i) => (
            <div
              key={i}
              className="bg-zinc-900 border border-zinc-800 p-6 rounded-lg flex justify-between items-center hover:border-orange-500 transition"
            >
              <div>
                <p className="text-lg font-semibold">{item.class}</p>
                <p className="text-gray-400">{item.day}</p>
              </div>

              <p className="text-orange-400 font-semibold">
                {item.time}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Schedule;