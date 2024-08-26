// 2. Add Card Component for make a place to add content
"use client";
import React from "react";
import { Card, CardBody, CardHeader, Typography } from "@material-tailwind/react";

const GachaMachine = () => {

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row">
          {/* Left Column */}
          <div className="lg:w-2/3 xl:w-3/4 mt-4">
            {/* Product List */}
            <Card>
              <CardHeader shadow={false} floated={false}>
                <Typography variant="h4">Gacha Machine</Typography>
              </CardHeader>
              <CardBody>
                Product List...
              </CardBody>
            </Card>
          </div>

          {/* Right Column */}
          <div className="lg:w-1/3 xl:w-1/4 mt-4 lg:ml-4">
            {/* How to play */}
            <Card className="mb-4">
              <CardHeader shadow={false} floated={false}>
                <Typography variant="h4">How to play</Typography>
              </CardHeader>
              <CardBody>
                How to play content...
              </CardBody>
            </Card>

             {/* Add Credit */}
             <Card className="mb-4">
              <CardHeader shadow={false} floated={false}>
                <Typography variant="h4">Add Credit</Typography>
              </CardHeader>
              <CardBody>
                Add credit content...
              </CardBody>
            </Card>

            {/* Message */}
            <Card className="mb-4">
              <CardHeader shadow={false} floated={false}>
                <Typography variant="h4">Message</Typography>
              </CardHeader>
              <CardBody>
                Message content...
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GachaMachine;