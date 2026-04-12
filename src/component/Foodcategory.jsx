import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import FoodCard from "../component/FoodCard.jsx";
import { foodData } from "../Data/fooddata.js";

const FoodCategory = () => {
    const { id } = useParams();
    const [category, setCategory] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const data = foodData[id];
        setCategory(data || null);
        setLoading(false);
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (!category) return <p>No data</p>;

    return (
        <section className="py-5 px-2">
            <h2 className="text-3xl font-bold mb-8 text-center">
                {category.title}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {category.items?.map((item) => (
                    <FoodCard key={item.id} item={item} />
                ))}
            </div>
        </section>
    );
};

export default FoodCategory;