import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';

const RecoveryAssessment = () => {
  const assessmentAreas = [
    { id: 1, title: "Follow-up Care", description: "Regularly attending healthcare appointments" },
    { id: 2, title: "Aftercare Programs", description: "Participation in support groups and therapy" },
    { id: 3, title: "Self-Care", description: "Maintaining physical and emotional well-being" },
    { id: 4, title: "Medication Management", description: "Following prescribed medication schedules" },
    { id: 5, title: "Trigger Management", description: "Identifying and coping with triggers" },
    { id: 6, title: "Support Network", description: "Building and maintaining supportive relationships" },
    { id: 7, title: "Mindfulness Practice", description: "Engaging in present-moment awareness" },
    { id: 8, title: "Goal Achievement", description: "Setting and working towards recovery goals" },
    { id: 9, title: "Progress Monitoring", description: "Tracking and celebrating recovery milestones" },
    { id: 10, title: "Patient Perseverance", description: "Maintaining commitment through challenges" }
  ];

  const [values, setValues] = useState(
    Object.fromEntries(assessmentAreas.map(area => [area.id, [5]]))
  );

  const getColorClass = (value) => {
    if (value <= 3) return "text-red-500";
    if (value <= 6) return "text-yellow-500";
    return "text-green-500";
  };

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Recovery Progress Assessment</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {assessmentAreas.map((area) => (
            <div key={area.id} className="space-y-2">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">{area.title}</h3>
                  <p className="text-sm text-gray-500">{area.description}</p>
                </div>
                <span className={`font-bold ${getColorClass(values[area.id][0])}`}>
                  {values[area.id][0]}
                </span>
              </div>
              <Slider
                value={values[area.id]}
                onValueChange={(newValue) => {
                  setValues(prev => ({
                    ...prev,
                    [area.id]: newValue
                  }));
                }}
                max={10}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-gray-500">
                <span>Needs Attention</span>
                <span>Making Progress</span>
                <span>Strong</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecoveryAssessment;
