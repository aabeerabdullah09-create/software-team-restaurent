import { useEffect, useState } from "react";
import Header from "../component/Header.jsx";
import StoryHero from "../component/StoryHero.jsx";
import StoryBlocks from "../component/StoryBlocks.jsx";
import CustomerGrid from "../component/CustomerGrid.jsx";
import { useNavigate } from "react-router-dom";
import TopTabs from "../component/TopTabls.jsx";


export default function VanillaStoryPage() {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();


  useEffect(() => {
    let ignore = false;

    async function load() {
      try {
        const res = await fetch("/api/vanilla.json");
        if (!res.ok) throw new Error(`Failed to load: ${res.status}`);
        const json = await res.json();
        if (!ignore) setData(json);
      } catch (e) {
        if (!ignore) setError(e.message || "Unknown error");
      }
    }

    load();
    return () => {
      ignore = true;
    };
  }, []);

  if (error) return <div className="p-6 text-red-400">Error: {error}</div>;
  if (!data) return <div className="p-6">Loading...</div>;

  return (
    <>
      <Header />
        <div
            className="relative mt-10 md:mt-4 z-20">
            <TopTabs />
        </div>
      <StoryHero hero={data.hero} />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <StoryBlocks blocks={data.blocks} />
        <CustomerGrid title={data.customerPhotosTitle} photos={data.customerPhotos} />
      </main>
      <div className="flex justify-center pb-10">
        <button
          onClick={() => navigate("/")}
          className="text-white text-sm font-medium"
        >
          ← Back to Home
         </button>
      </div>
    </>
  );
}
