// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Dashboard = () => {
//   const [analytics, setAnalytics] = useState(null);

//   useEffect(() => {
//     axios.get('http://localhost:5000/api/analytics')
//       .then(response => {
//         setAnalytics(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching analytics data:', error);
//       });
//   }, []);

//   if (!analytics) return <div>Loading...</div>;

//   return (
//     <div className="container mx-auto p-4 bg-gradient-to-br from-blue-500 to-purple-500">
//       <h1 className="text-2xl font-bold text-white mb-4">Social Media Analytics Dashboard</h1>
//       <div className="grid grid-cols-1 gap-4">
//         {analytics.map((user, index) => (
//           <div key={index} className="p-4 rounded-lg shadow-lg bg-white">
//             <div className="bg-gray-200 rounded-t-lg p-4">
//               <h2 className="text-xl font-semibold mb-2">{user.user.name}</h2>
//               <p className="text-gray-600">{user.user.category}</p>
//             </div>
//             <div className="p-4">
//               <p className="mb-2">{user.user.bio}</p>
//               <p className="mb-2">Contact: {user.user.contact}</p>
//               <div className="flex space-x-2 mb-4">
//                 {user.user.links.map((link, i) => (
//                   <a key={i} href={link.url} className="text-blue-500">{link.label}</a>
//                 ))}
//               </div>
//               <div className="grid grid-cols-2 gap-2">
//                 <div className="text-center py-2 bg-gray-100 rounded">
//                   <p className="font-semibold">Followers</p>
//                   <p>{user.followers}</p>
//                 </div>
//                 <div className="text-center py-2 bg-gray-100 rounded">
//                   <p className="font-semibold">Following</p>
//                   <p>{user.following}</p>
//                 </div>
//                 <div className="text-center py-2 bg-gray-100 rounded">
//                   <p className="font-semibold">Posts</p>
//                   <p>{user.posts}</p>
//                 </div>
//                 <div className="text-center py-2 bg-gray-100 rounded">
//                   <p className="font-semibold">Account Reached</p>
//                   <p>{user.accountReached}</p>
//                 </div>
//                 <div className="text-center py-2 bg-gray-100 rounded">
//                   <p className="font-semibold">Account Engaged</p>
//                   <p>{user.accountEngaged}</p>
//                 </div>
//                 <div className="text-center py-2 bg-gray-100 rounded">
//                   <p className="font-semibold">Content Shared</p>
//                   <p>{user.contentShared}</p>
//                 </div>
//                 <div className="text-center py-2 bg-gray-100 rounded">
//                   <p className="font-semibold">Ads Run</p>
//                   <p>{user.adsRun}</p>
//                 </div>
//                 <div className="text-center py-2 bg-gray-100 rounded">
//                   <p className="font-semibold">Active Promotions</p>
//                   <p>{user.activePromotions}</p>
//                 </div>
//                 <div className="text-center py-2 bg-gray-100 rounded">
//                   <p className="font-semibold">Total Stories</p>
//                   <p>{user.totalStories}</p>
//                 </div>
//                 <div className="text-center py-2 bg-gray-100 rounded">
//                   <p className="font-semibold">Total Follows</p>
//                   <p>{user.totalFollows}</p>
//                 </div>
//                 <div className="text-center py-2 bg-gray-100 rounded">
//                   <p className="font-semibold">Total Posts</p>
//                   <p>{user.totalPosts}</p>
//                 </div>
//                 <div className="text-center py-2 bg-gray-100 rounded">
//                   <p className="font-semibold">Total Saves</p>
//                   <p>{user.totalSaves}</p>
//                 </div>
//                 <div className="text-center py-2 bg-gray-100 rounded">
//                   <p className="font-semibold">Total Comments</p>
//                   <p>{user.totalComments}</p>
//                 </div>
//                 <div className="text-center py-2 bg-gray-100 rounded">
//                   <p className="font-semibold">Total Shares</p>
//                   <p>{user.totalShares}</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [analytics, setAnalytics] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/analytics')
      .then(response => {
        // Simulate a delay to mimic loading effect
        setTimeout(() => {
          setAnalytics(response.data);
        }, 1000); // Adjust delay time as needed
      })
      .catch(error => {
        console.error('Error fetching analytics data:', error);
      });
  }, []);

  if (!analytics) return <div className="text-center mt-8 text-gray-600">Loading...</div>;

  return (
    <div className="container mx-auto p-4 bg-gradient-to-br from-blue-500 to-purple-500">
      <h1 className="text-3xl font-bold text-white mb-8 text-center">Social Media Analytics Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {analytics.map((user, index) => (
          <div key={index} className="overflow-hidden bg-white rounded-lg shadow-lg">
            <div className="px-6 py-4 bg-gray-200">
              <div className="font-bold text-xl mb-2">{user.user.name}</div>
              <p className="text-gray-600 text-sm">{user.user.category}</p>
            </div>
            <div className="px-6 py-4">
              <p className="text-gray-700 text-base mb-2">Bio: {user.user.bio}</p>
              <p className="text-gray-700 mb-2"><span className="font-semibold">Contact:</span> {user.user.contact}</p>
              <div className="flex space-x-2 mb-4">
                {user.user.links.map((link, i) => (
                  <a key={i} href={link.url} className="text-blue-500">{link.label}</a>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-2">
                <DataCard label="Followers" value={user.followers} delay={100 * (index + 1)} />
                <DataCard label="Following" value={user.following} delay={100 * (index + 2)} />
                <DataCard label="Posts" value={user.posts} delay={100 * (index + 3)} />
                <DataCard label="Account Reached" value={user.accountReached} delay={100 * (index + 4)} />
                <DataCard label="Account Engaged" value={user.accountEngaged} delay={100 * (index + 5)} />
                <DataCard label="Content Shared" value={user.contentShared} delay={100 * (index + 6)} />
                <DataCard label="Ads Run" value={user.adsRun} delay={100 * (index + 7)} />
                <DataCard label="Active Promotions" value={user.activePromotions} delay={100 * (index + 8)} />
                <DataCard label="Total Stories" value={user.totalStories} delay={100 * (index + 9)} />
                <DataCard label="Total Follows" value={user.totalFollows} delay={100 * (index + 10)} />
                <DataCard label="Total Posts" value={user.totalPosts} delay={100 * (index + 11)} />
                <DataCard label="Total Saves" value={user.totalSaves} delay={100 * (index + 12)} />
                <DataCard label="Total Comments" value={user.totalComments} delay={100 * (index + 13)} />
                <DataCard label="Total Shares" value={user.totalShares} delay={100 * (index + 14)} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Component for individual data cards with transition effect
const DataCard = ({ label, value, delay }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={`text-center py-2 bg-gray-100 rounded transition-opacity duration-500 ${show ? 'opacity-100' : 'opacity-0'}`}>
      <p className="font-semibold">{label}</p>
      <p>{value}</p>
    </div>
  );
};

export default Dashboard;
