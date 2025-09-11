import React, { useState } from "react";

export default function App() {
  const [view, setView] = useState("menu"); // menu | directions

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-1">
      <div className="w-full max-w-md min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-800 to-gray-700 p-4 rounded-2xl shadow-lg">
        
        {/* ✅ Show Title + Subtitle ONLY in Menu */}
        {view === "menu" && (
          <div className=" flex flex-col gap-3 justify-center items-center">
            <h1 className="text-xl font-bold text-center mb-6">
              Daniel Kimeli Sum
            </h1>
            <p className="text-center text-sm mb-6">
              🌟 Explore all links related to the late Daniel's legacy. 🌟
            </p>

            {/* ✅ Image only in home view */}
            <img
              className="w-40 mx-auto rounded-full h-40 mb-6"
              src="https://firebasestorage.googleapis.com/v0/b/comrade-trends.appspot.com/o/Screenshot_2025-09-10-09-20-05-904_org.readera-edit.jpg?alt=media&token=66261262-6fa7-4313-87d9-3a1eb22ecbfb"
              alt="Daniel"
            />

            {/* Buttons that open in new tabs */}
            <button
              onClick={() =>
                window.open("https://www.youtube.com/watch?v=PY0qcx_5Kbs/", "_blank")
              }
              className="w-full px-4 py-3 rounded-full border border-gray-600 hover:bg-gray-800 transition"
            >
              Final Burial Livestream
            </button>

            <button
              onClick={() =>
                window.open("https://app.sli.do/event/8ofQqj7S1TiWSqtNHMvou4", "_blank")
              }
              className="w-full px-4 py-3 rounded-full border border-gray-600 hover:bg-gray-800 transition"
            >
              Write your tributes!
            </button>

            <button
              onClick={() =>
                window.open(
                  "https://scanned.page/p/d2emNk",
                  "_blank"
                )
              }
              className="w-full px-4 py-3 rounded-full border border-gray-600 hover:bg-gray-800 transition"
            >
              Eulogy
            </button>

            <button
              onClick={() => window.open("https://scanned.page/6iE6G8", "_blank")}
              className="w-full px-4 py-3 rounded-full border border-gray-600 hover:bg-gray-800 transition"
            >
              Wednesday and Thursday Programs
            </button>

            {/* <button
              onClick={() => window.open("https://scanned.page/6iE6G8", "_blank")}
              className="w-full px-4 py-3 rounded-full border border-gray-600 hover:bg-gray-800 transition"
            >
              Thursday Program
            </button> */}

            <button
              onClick={() => window.open("https://photos.app.goo.gl/rx3zEdGUUfVJYhdLA", "_blank")}
              
              className="w-full px-4 py-3 rounded-full border border-gray-600 hover:bg-gray-800 transition"
            >
              Life and Times of Daniel
            </button>

            {/* Directions stays inside app */}
            <button
              onClick={() => setView("directions")}
              className="w-full px-4 py-3 rounded-full border border-gray-600 hover:bg-gray-800 transition"
            >
              Directions
            </button>

            <button
              onClick={() => window.open("https://www.youtube.com/live/9wFA6Sw3iwU?si=hMontbKEx6Oknw41", "_blank")}
              className="w-full px-4 py-3 rounded-full border border-gray-600 hover:bg-gray-800 transition"
            >
              Wednesday Livestream
            </button>
          </div>
        )}

        {/* DIRECTIONS VIEW */}
        {view === "directions" && (
          <div className="flex flex-col items-center w-full">
            <iframe
              src="https://www.google.com/maps?q=0.874420,35.132154&hl=en&z=15&output=embed"
              title="Burial Directions"
              className="block w-full h-[500px] rounded-none border-0 m-0 p-0"
              allowFullScreen
            ></iframe>

            <a
              href="https://www.google.com/maps?q=0.874420,35.132154"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 w-full px-4 py-3 rounded-full bg-blue-600 hover:bg-blue-500 transition text-center text-white"
            >
              Open in Google Maps
            </a>

            <button
              onClick={() => setView("menu")}
              className="mt-4 w-full px-4 py-3 rounded-full bg-red-600 hover:bg-red-500 transition"
            >
              Close Directions
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
