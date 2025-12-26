import EventsPage from "../components/eventPage"

const Events = () => {
    const EventData = [
        {
            title: "Game Dev 101: Build Your First 2D Game",
            description: `Join us for an exciting Game Dev 101 workshop where you’ll explore the fundamentals of game development using Unity. Build your own 2D game, learn from industry experience, and kickstart your game dev journey! 🎮`,
            images: ["https://ele7885nafmpgog1.public.blob.vercel-storage.com/events/game_dev.jpeg"],
            time: "09 September 2025",
        },
        {
            title: "Google Cloud Study Jams 2025",
            description: `Google Cloud Study Jams 2025 will provide students an opportunity to kickstart their learning in Cloud, Gen AI, AI/ML, and Big Data. Participants will gain hands-on experience by learning from scratch and implementing their knowledge through guided labs and projects on the Google Cloud Console.
Duration: 1 October – 31 October 2025.`,
            images: ["https://ele7885nafmpgog1.public.blob.vercel-storage.com/events/study_jams.jpeg"],

            time: "1 Oct - 31 Oct 2025",
        },
        {
            title: "TechSprint Hackathon 2026",
            description: `TechSprint Hackathon by GDG On Campus BVM is a multi-phase hackathon focused on building AI-powered solutions. The event runs from 26 December to 12 January, including online project submission and an offline final round.

📝 Registrations open till 3 January
🚀 Project submission by 5 January
🏆 Top 10 teams announced on 8 January
🎯 Offline final round on 12 January

👉 Register now using the button below`,
            images: [
                "https://ele7885nafmpgog1.public.blob.vercel-storage.com/events/techsprint.jpeg"
            ],
            time: "26 Dec - 12 Jan 2026",
        },
    ]
    return (
        <div>
            <EventsPage EventData={EventData} />
        </div>
    )
}

export default Events
