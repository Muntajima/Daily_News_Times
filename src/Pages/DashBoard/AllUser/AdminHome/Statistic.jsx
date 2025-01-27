import { useContext, useEffect, useState } from "react";
import AuthContext from "../../../../Context/AuthContext";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Chart from "react-google-charts";

const Statistic = () => {
    const axiosSecure = useAxiosSecure();
    const {loading, setLoading} = useContext(AuthContext);
    const [chartData, setChartData] = useState([["Publisher", "Articles"]]);

    const fetchNews = async () =>{
        const res = await axiosSecure.get('/news');
        const news = await res.data;
        //console.log(news)

        const publisherCount = {};
        news.forEach(item => {
            publisherCount[item.publisher] = (publisherCount[item.publisher] || 0) + 1;
        })

        const totalArticles = Object.values(publisherCount).reduce((sum, count) => sum + count, 0);

        const formattedData = [["Publisher", "Articles"]];
        for( const publisher in publisherCount ) {
            const percentage = ((publisherCount[publisher] / totalArticles) * 100).toFixed(2);
        formattedData.push([`${publisher} (${percentage}%)`, publisherCount[publisher]]);
        }

        setChartData(formattedData);
        setLoading(false)
    }

    useEffect(() => {

        fetchNews();

      }, []);


    return (
        <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-center py-8">Publisher Articles Pie Chart</h1>
      {loading ? (
        <p>Loading chart...</p>
      ) : (
        <Chart
          chartType="PieChart"
          data={chartData}
          options={{
            title: "Distribution of Articles by Publisher",
            is3D: true,
          }}
          width="100%"
          height="400px"
        />
      )}
    </div>
    );
};

export default Statistic;