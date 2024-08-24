"use client";
import React, { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  IconButton,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  List,
  ListItem,
} from "@material-tailwind/react";

const GachaMachine = () => {
  const initialProducts = [
    {
      name: "Toffee",
      desc: "THE MONSTERS - Tasty Macarons Vinyl Face",
      image: "https://global-static.popmart.com/globalAdmin/1720611794669____%E5%BD%A2%E8%B1%A12____.png",
      price: 550,
      stock: 1,
    },
    {
      name: "Green Grape",
      desc: "THE MONSTERS - Tasty Macarons Vinyl Face",
      image: "https://global-static.popmart.com/globalAdmin/1720611785753____%E5%BD%A2%E8%B1%A16____.png",
      price: 550,
      stock: 1,
    },
    {
      name: "Sea Salt Coconut",
      desc: "THE MONSTERS - Tasty Macarons Vinyl Face",
      image: "https://global-static.popmart.com/globalAdmin/1720611777879____%E5%BD%A2%E8%B1%A11____.png",
      price: 550,
      stock: 1,
    },
    {
      name: "Sesame Bean",
      desc: "THE MONSTERS - Tasty Macarons Vinyl Face",
      image: "https://global-static.popmart.com/globalAdmin/1720611767394____%E5%BD%A2%E8%B1%A14____.png",
      price: 550,
      stock: 1,
    },
    {
      name: "Soymilk",
      desc: "THE MONSTERS - Tasty Macarons Vinyl Face",
      image: "https://global-static.popmart.com/globalAdmin/1720611756611____%E5%BD%A2%E8%B1%A13____.png",
      price: 550,
      stock: 1,
    },
    {
      name: "Lychee Berry",
      desc: "THE MONSTERS - Tasty Macarons Vinyl Face",
      image: "https://global-static.popmart.com/globalAdmin/1720611748486____%E5%BD%A2%E8%B1%A15____.png",
      price: 550,
      stock: 1,
    },
  ];

  const [products, setProducts] = useState(initialProducts);
  const [credit, setCredit] = useState(0);
  const [message, setMessage] = useState('Please add your credit and click "PLAY GACHA"');
  const [lastPrize, setLastPrize] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isInsufficientCreditModalOpen, setIsInsufficientCreditModalOpen] = useState(false);
  const [availableProducts, setAvailableProducts] = useState([]);

  useEffect(() => {
    updateAvailableProducts();
  }, [products]);

  const updateAvailableProducts = () => {
    const available = products.filter(product => product.stock > 0);
    setAvailableProducts(available);
  };

  const addCredit = (amount) => {
    setCredit((prevCredit) => prevCredit + amount);
  };

  const playGacha = () => {
    if (credit < 550) {
      setIsInsufficientCreditModalOpen(true);
      return;
    }

    if (availableProducts.length === 0) {
      setMessage("Sorry, all products are out of stock!");
      return;
    }

    setCredit((prevCredit) => prevCredit - 550);
    setIsPlaying(true);
    let round = 0;
    const intervalId = setInterval(() => {
      let randomNumber = Math.floor(Math.random() * availableProducts.length);
      setHighlightedIndex(products.findIndex(p => p.name === availableProducts[randomNumber].name));
      round++;
      if (round >= 50) {
        clearInterval(intervalId);
        const randomProduct = availableProducts[randomNumber];
        setLastPrize(randomProduct);
        setMessage(`Congratulations! You won: ${randomProduct.name}`);
        setIsPlaying(false);
        setIsModalOpen(true);
        updateProductStock(randomProduct.name);
      }
    }, 100);
  };

  const updateProductStock = (productName) => {
    setProducts(prevProducts => 
      prevProducts.map(product => 
        product.name === productName 
          ? { ...product, stock: product.stock - 1 } 
          : product
      )
    );
  };

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-2/3 xl:w-3/4 mt-4">
            <Card className="w-full">
              <CardHeader floated={false} shadow={false} className="rounded-none">
                <div className="flex items-center justify-between p-4">
                  <Typography variant="h4">Gacha Machine</Typography>
                  <Button color="yellow" onClick={playGacha} disabled={isPlaying || availableProducts.length === 0}>
                    {isPlaying ? "Playing..." : "PLAY GACHA"}
                  </Button>
                </div>
              </CardHeader>
              <CardBody>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {products.map((product, index) => (
                    <Card key={index} className={`${highlightedIndex === index ? "ring-4 ring-yellow-500" : ""}`}>
                      <CardBody className="text-center">
                        <Typography variant="h5" className="mb-2 truncate">
                          {product.name}
                        </Typography>
                        <img
                          className="mx-auto w-full h-auto object-cover mb-2"
                          src={product.image}
                          alt={product.name}
                        />
                        <Typography>{product.desc}</Typography>
                        <Typography variant="h4" color="red">
                          ฿{product.price}
                        </Typography>
                        <Button 
                          className="mt-2 text-xs" 
                          fullWidth 
                          color={product.stock > 0 ? "green" : "red"}
                          disabled={product.stock === 0}
                        >
                          {product.stock > 0 ? `In Stock: ${product.stock}` : "Out of Stock"}
                        </Button>
                      </CardBody>
                    </Card>
                  ))}
                </div>
              </CardBody>
            </Card>
          </div>

          <div className="lg:w-1/3 xl:w-1/4 mt-4 lg:ml-4">
            <Card className="mb-4">
              <CardHeader floated={false} shadow={false}>
                <Typography variant="h5">How to play</Typography>
              </CardHeader>
              <CardBody>
                <List>
                  <ListItem>1. Each play costs ฿550 credit</ListItem>
                  <ListItem>2. Click "PLAY GACHA" to start</ListItem>
                  <ListItem>3. Get your lucky winner!</ListItem>
                </List>
              </CardBody>
            </Card>

            <Card className="mb-4">
              <CardHeader floated={false} shadow={false}>
                <Typography variant="h5">Add Credit</Typography>
              </CardHeader>
              <CardBody className="flex flex-wrap justify-center">
                {[100, 200, 500, 1000].map((amount) => (
                  <IconButton
                    key={amount}
                    color="green"
                    className="m-2 w-16 h-16 rounded-full"
                    onClick={() => addCredit(amount)}
                  >
                    ฿{amount}
                  </IconButton>
                ))}
              </CardBody>
              <CardFooter className="pt-0">
                <Typography variant="h6">
                  Your Credit: <span className="text-green-500">฿{credit}</span>
                </Typography>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader floated={false} shadow={false}>
                <Typography variant="h5">Message</Typography>
              </CardHeader>
              <CardBody>
                <Typography className="text-center">{message}</Typography>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>

      {/* Prize Won Modal */}
      <Dialog open={isModalOpen} handler={() => setIsModalOpen(false)}>
        <DialogHeader>Congratulations!</DialogHeader>
        <DialogBody divider>
          {lastPrize && (
            <div className="text-center">
              <Typography variant="h3" className="mb-2">
                {lastPrize.name}
              </Typography>
              <img
                className="mx-auto w-full h-auto object-cover mb-2"
                src={lastPrize.image}
                alt={lastPrize.name}
              />
              <Typography>{lastPrize.desc}</Typography>
              <Typography variant="h4" color="red">
                ฿{lastPrize.price}
              </Typography>
            </div>
          )}
        </DialogBody>
        <DialogFooter>
          <Button variant="gradient" color="green" onClick={() => setIsModalOpen(false)}>
            Claim Prize
          </Button>
        </DialogFooter>
      </Dialog>

      {/* Insufficient Credit Modal */}
      <Dialog open={isInsufficientCreditModalOpen} handler={() => setIsInsufficientCreditModalOpen(false)}>
        <DialogHeader>Insufficient Credit</DialogHeader>
        <DialogBody divider>
          <Typography color="red" className="font-bold text-center mb-4">
            You don't have enough credit to play!
          </Typography>
          <Typography>
            Each play costs ฿550. <br />
            Your current credit is ฿{credit}. <br />
            Please add more credit to continue playing.
          </Typography>
        </DialogBody>
        <DialogFooter>
          <Button variant="gradient" color="blue" onClick={() => setIsInsufficientCreditModalOpen(false)}>
            <span>Add Credit</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
};

export default GachaMachine;