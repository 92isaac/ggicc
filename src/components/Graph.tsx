import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


export const Graph:React.FC = () => {
    const data = [
        { name: 'Jan', orders: 150 },
        { name: 'Feb', orders: 300 },
        { name: 'Mar', orders: 450 },
        // ... more data
      ];
  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-full md:w-1/4">
    <h2 className="text-xl font-semibold mb-4">Growth Chart</h2>
    {/* Chart */}
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="orders" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  </div>
  )
}
