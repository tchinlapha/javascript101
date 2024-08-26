// 10. Add Highlight Product when random...
"use client";
import React, { useState } from "react";
import { Card, CardBody, CardHeader, CardFooter, Typography, Button, IconButton, List, ListItem, Dialog, DialogHeader, DialogBody, DialogFooter } from "@material-tailwind/react";

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

  const [products, setProducts] = useState(initialProducts);
  const [message, setMessage] = useState('Please add your credit and click "PLAY GACHA"');
  const [costPerRound, setCostPerRound] = useState(550);
  const [credit, setCredit] = useState(0);
  const [lastPrize, setLastPrize] = useState(null);
  const [prizeModalOpen, setPrizeModalOpen] = useState(false);
  const [creditNotEnoughModalOpen, setCreditNotEnoughModalOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(null);

  function handleClickAddCredit(amount) {
    setCredit((prevCredit) => prevCredit + amount);
  }

  function handleClickPlayGacha() {
    if (credit < costPerRound) {
      setCreditNotEnoughModalOpen(true);
      setMessage("You don't have enough credit to play!");
      return;
    }

    // minus credit
    setCredit((prevCredit) => prevCredit - costPerRound);

    // Random Product
    // Delay after product random
    setIsPlaying(true);
    let round = 0;
    const intervalId = setInterval(() => {
      // Returns a random integer from 0 to 5:
      let randomNumber = Math.floor(Math.random() * products.length);
      setHighlightedIndex(randomNumber);
      round++;
      if (round >= 50) {
        clearInterval(intervalId);
        const randomProduct = products[randomNumber];
        setLastPrize(randomProduct);
        setPrizeModalOpen(true);
        setMessage(
          <>
            <Typography variant="h6">Congraturation</Typography>
            <Typography>You won: {randomProduct.name}</Typography>
          </>
        );
        setIsPlaying(false);
      }
    }, 100);
  }

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row">
          {/* Left Column */}
          <div className="lg:w-2/3 xl:w-3/4 mt-4">
            {/* Product List */}
            <Card>
              <CardHeader shadow={false} floated={false}>
                <div className="flex items-center justify-between p-4">
                  <Typography variant="h4">Gacha Machine</Typography>
                  <Button color="yellow" onClick={handleClickPlayGacha} disabled={isPlaying}>
                    {isPlaying ? "Playing..." : "PLAY GACHA"}
                  </Button>
                </div>
              </CardHeader>
              <CardBody>
                {/* Product Item */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {products.map((product, index) => (
                    <Card key={index} className={`${highlightedIndex === index ? "ring-4 ring-yellow-500" : ""}`}>
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
                  <ListItem>1. Each play costs ฿{costPerRound} credit</ListItem>
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
                {[20, 50, 100, 500, 1000].map((amount) => (
                  <IconButton
                    key={amount}
                    color="amber"
                    variant="gradient"
                    size="lg"
                    className="font-semibold text-md m-2 p-8 rounded-full border-2 border-yellow-500 text-blue-gray-900"
                    onClick={() => handleClickAddCredit(amount)}
                  >
                    ฿{amount}
                  </IconButton>
                ))}
              </CardBody>
              <CardFooter>
                <Typography variant="h6">
                  Your Credit: <span className="text-green-500">฿{credit}</span>
                </Typography>
              </CardFooter>
            </Card>

            {/* Message */}
            <Card className="mb-4">
              <CardHeader shadow={false} floated={false}>
                <Typography variant="h4">Message</Typography>
              </CardHeader>
              <CardBody>
                <Typography className="text-center" as="div">{message}</Typography>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>

      {/* Prize Won Modal */}
      <Dialog open={prizeModalOpen}>
        <DialogHeader>Congratulations!</DialogHeader>
        <DialogBody divider>
          {lastPrize && (
            <div className="text-center">
              <Typography variant="h3" className="mb-2">
                {lastPrize.name}
              </Typography>
              <img
                className="mx-auto w-full h-auto max-w-lg object-cover mb-2"
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
          <Button variant="gradient" onClick={() => setPrizeModalOpen(false)}>
            Claim Prize
          </Button>
        </DialogFooter>
      </Dialog>

      {/* Credit Not Enough Modal */}
      <Dialog open={creditNotEnoughModalOpen}>
        <DialogHeader>Credit not enough</DialogHeader>
        <DialogBody divider>
          <Typography color="red" className="font-bold text-center mb-4">
            You don't have enough credit to play!
          </Typography>
          <Typography>
            Each play costs ฿{costPerRound}. <br />
            Your current credit is ฿{credit}. <br />
            Please add more credit to continue playing.
          </Typography>
        </DialogBody>
        <DialogFooter>
          <Button variant="gradient" onClick={() => setCreditNotEnoughModalOpen(false)}>
            <span>Add Credit</span>
          </Button>
        </DialogFooter>
      </Dialog>

    </div>
  );
};

export default GachaMachine;