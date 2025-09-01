import React from 'react';


const StudentList = ({ students }) => {
  return (
    <div className="max-w-3xl mx-auto mt-12 p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Student List</h2>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Name</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Marks</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {students.map((student, index) => (
            <tr key={index} className="hover:bg-gray-50 transition-colors">
              <td className={`px-6 py-4 ${student.marks > 50 ? 'text-green-600 font-semibold' : 'text-gray-800'}`}>
                {student.name}
              </td>
              <td className="px-6 py-4 text-gray-800">{student.marks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
