// src/components/Projects.js
import React from "react";

function Projects() {
  return (
    <div className="p-10 bg-gray-100">
      <h2 className="text-2xl font-bold mb-6">Our Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-6 bg-white shadow rounded-lg">
          <h3 className="font-semibold text-lg">Building Projects</h3>
          <p className="text-sm text-gray-600">
            End-to-end building construction and project management.
          </p>
        </div>
        <div className="p-6 bg-white shadow rounded-lg">
          <h3 className="font-semibold text-lg">Electrical Projects</h3>
          <p className="text-sm text-gray-600">
            Reliable electrical design and execution for industrial and
            residential needs.
          </p>
        </div>
        <div className="p-6 bg-white shadow rounded-lg">
          <h3 className="font-semibold text-lg">Delivery Projects</h3>
          <p className="text-sm text-gray-600">
            Efficient project delivery with focus on timelines and quality.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
