import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import AuthContext from "../../../../Context/AuthContext";
import Chart from "react-google-charts";

const LineChart = () => {
    const axiosSecure = useAxiosSecure();
    const {loading, setLoading} = useContext(AuthContext);
    const [chartData, setChartData] = useState([["Author", "Articles"]]);

    

    useEffect(() => {
        const fetchAuthorNewsData = async () =>{
            setLoading(true);
            const res = await axiosSecure.get('/news/authors-with-news')
            const formattedData = res.data.map((author) => [
                author.name,
                parseInt(author.newsCount, 10), // Ensure newsCount is a number
              ]);
              setChartData([["Author", "Articles"], ...formattedData]); // Set chart data with headers
              //setLoading(false);
            } 
        fetchAuthorNewsData();

      }, [axiosSecure, setLoading]);

    return (
        <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">News Articles by Authors</h1>
      {loading ? (
        <p>Loading chart...</p>
      ) : (
        <Chart
          chartType="LineChart"
          data={chartData}
          options={{
            title: "Number of Articles by Authors",
            hAxis: { title: "Authors" },
            vAxis: { title: "Number of Articles" },
            legend: "none",
          }}
          width="100%"
          height="400px"
        />
      )}
    </div>
    );
};

export default LineChart;