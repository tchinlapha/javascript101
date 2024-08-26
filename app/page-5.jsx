// 5. How to play List Items and Initial Message State
"use client";
import React, { useState } from "react";
import { Card, CardBody, CardHeader, Typography, Button, List, ListItem } from "@material-tailwind/react";

const GachaMachine = () => {
  const initialProducts = [
    {
      id: 1,
      name: "Toffee",
      desc: "THE MONSTERS - Tasty Macarons Vinyl Face",
      image: "https://global-static.popmart.com/globalAdmin/1720611794669____%E5%BD%A2%E8%B1%A12____.png",
      price: 550,
      stock: 1,
    },
    {
      id: 2,
      name: "Green Grape",
      desc: "THE MONSTERS - Tasty Macarons Vinyl Face",
      image: "https://global-static.popmart.com/globalAdmin/1720611785753____%E5%BD%A2%E8%B1%A16____.png",
      price: 550,
      stock: 1,
    },
    {
      id: 3,
      name: "Sea Salt Coconut",
      desc: "THE MONSTERS - Tasty Macarons Vinyl Face",
      image: "https://global-static.popmart.com/globalAdmin/1720611777879____%E5%BD%A2%E8%B1%A11____.png",
      price: 550,
      stock: 1,
    },
    {
      id: 4,
      name: "Sesame Bean",
      desc: "THE MONSTERS - Tasty Macarons Vinyl Face",
      image: "https://global-static.popmart.com/globalAdmin/1720611767394____%E5%BD%A2%E8%B1%A14____.png",
      price: 550,
      stock: 1,
    },
    {
      id: 5,
      name: "Soymilk",
      desc: "THE MONSTERS - Tasty Macarons Vinyl Face",
      image: "https://global-static.popmart.com/globalAdmin/1720611756611____%E5%BD%A2%E8%B1%A13____.png",
      price: 550,
      stock: 1,
    },
    {
      id: 6,
      name: "Lychee Berry",
      desc: "THE MONSTERS - Tasty Macarons Vinyl Face",
      image: "https://global-static.popmart.com/globalAdmin/1720611748486____%E5%BD%A2%E8%B1%A15____.png",
      price: 550,
      stock: 1,
    },
  ];

  const [products, setProducts] = useState(initialProducts)
  const [message, setMessage] = useState('Please add your credit and click "PLAY GACHA"')

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
                {/* Product Item */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {products.map((product, index) => (
                    <Card key={index}>
                      <CardBody className="text-center">
                        <Typography variant="h5" className="mb-2 truncate">
                          {product?.name}
                        </Typography>
                        <img
                          className="mx-auto w-full h-auto object-cover mb-2"
                          src={product?.image}
                          alt="Product Name"
                        />
                        <Typography>{product?.desc}</Typography>
                        <Typography variant="h4" color="red">
                          ฿{product?.price}
                        </Typography>
                        <Button 
                          className="mt-2 text-xs" 
                          fullWidth 
                          color="green"
                        >
                          In Stock: {product?.stock}
                        </Button>
                      </CardBody>
                    </Card>
                  ))}
                </div>

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
                <List>
                  <ListItem>1. Each play costs ฿550 credit</ListItem>
                  <ListItem>2. Click "PLAY GACHA" to start</ListItem>
                  <ListItem>3. Get your lucky winner!</ListItem>
                </List>
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
                <Typography className="text-center">{message}</Typography>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GachaMachine;