import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import DessertCard from "../component/DessertCard";
import { dessertData } from "../Data/dessertdata";

const DessertCategory = () => {
  const { id } = useParams();
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const data = dessertData[id];
    setCategory(data || null);
    setLoading(false);
  }, [id]);

  if (loading) return <p className="text-center py-10">Loading...</p>;
  if (!category) return <p className="text-center py-10">No data</p>;

  return (
    <section className="py-10 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">
        {category.title}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {category.items.map((item) => (
          <DessertCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default DessertCategory;