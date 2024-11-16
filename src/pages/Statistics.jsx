import { Helmet } from 'react-helmet-async';
import {
  BarChart,
  Bar,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
const data = [
  { name: 'Laptop Pro', price: 1200, rating: 100 },
  { name: 'Laptop Elite', price: 1100, rating: 80 },
  { name: 'Laptop Ultra', price: 1300, rating: 85 },
  { name: 'Laptop Basic', price: 800, rating: 60 },
  { name: 'Phone A1', price: 700, rating: 75 },
  { name: 'Phone Z2', price: 750, rating: 85 },
  { name: 'Phone X Max', price: 950, rating: 90 },
  { name: 'Phone Mini', price: 650, rating: 85 },
  { name: 'Earbuds', price: 150, rating: 75 },
  { name: 'Power Bank', price: 50, rating: 75 },
  { name: 'Laptop Case', price: 30, rating: 75 },
  { name: 'Watch S4', price: 300, rating: 75 },
  { name: 'Band X1', price: 100, rating: 75 },
  { name: 'Watch Pro', price: 400, rating: 75 },
  { name: 'Watch Flex', price: 350, rating: 75 },
  { name: 'Watch V1', price: 250, rating: 75 },
  { name: 'Tracker F3', price: 200, rating: 75 },
];
const Statistics = () => {
  return (
    <div>
      <Helmet>
        <title>Statistics | Gadget Heaven</title>
      </Helmet>
      <div className="py-14 bg-clrPrimary text-center text-clrWhite">
        <div className="w-11/12 mx-auto">
          <h3 className="text-4xl font-bold">Statistics</h3>
          <p className="text-sm md:text-base lg:text-lg my-5 max-w-4xl mx-auto">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
        </div>
      </div>
      <div className="bg-clrWhite py-14">
        <div className="max-w-7xl w-11/12 mx-auto">
          <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-6">
            Statistics
          </h3>
          <div className="lg:p-10 md:p-5 p-0 rounded-xl shadow-lg bg-white">
            <ResponsiveContainer width="100%" height={400}>
              <BarChart
                data={data}
                barCategoryGap="40%"
                margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <AreaChart data={data} width={500} height={400}>
                  <Area
                    type="monotone"
                    dataKey="rating"
                    fill="rgba(147, 51, 234, 0.2)"
                    stroke="rgba(147, 51, 234, 0.8)"
                  />
                </AreaChart>
                <Bar dataKey="price" fill="#8b5cf6" radius={[10, 10, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
