import React from "react";
import { useState } from "react";
import { IconBasket, IconCircleCheck } from '@tabler/icons-react';
import { Badge, Button, CloseButton, Drawer, Indicator, Input, List, SimpleGrid, ThemeIcon } from '@mantine/core';
import '@mantine/core/styles.css';
import './App.css';
import CardComponent from './components/card';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

const storeItems = [{ name: "car", price: 20 + "TL", src: "car.jpg" },
{ name: "watch", src: "watch.jpg ", price: 10 + "TL" },
{ name: "desk ", src: "desk.jpg", price: 25 + "TL" },
{ name: "bottle", src: "bottle.jpg", price: 45 + "TL" },
{ name: "bicycle", price: 20 + "TL", src: "bicycle.jpg" },
{ name: "backpack", price: 20 + "TL", src: "backpack.jpg" },
];

function App() {
  let [opened, setOpened] = useState(false);
  let [basketItems, setBasketItems] = useState([]);
  let [searchValue, setSearchValue] = useState("");
  let filteredİtems = storeItems.filter((item) => item.name.indexOf(searchValue) >= 0)
  let addToBasket = ({ name }) => {
    setBasketItems([...basketItems, { name, count: 1 }]);
  };


  return (
    <>
      <div>
        <Input.Wrapper className="search-button">
          <Input className="searchButton"
            placeholder="Write the product you are looking for"
            searchValue
            onChange={(event) => setSearchValue(event.currentTarget.value)}
            rightSectionPointerEvents="all"
            mt="md"

            rightSection={
              <CloseButton
                aria-label="Clear input"
                onClick={() => setSearchValue('')}
                style={{ display: searchValue ? undefined : 'none' }}
              />
            }
          />
        
          <Indicator className="indicator" color="red" label={basketItems.length} size={22}>
            <Button className="basketButton" onClick={() => setOpened(true)}><IconBasket size={16} /></Button>
          </Indicator>
        </Input.Wrapper>



        <SimpleGrid cols={3} className='Store'>
          {filteredİtems.map(({ name, price, src }) => {
            return (<CardComponent name={name}
              price={price}
              src={src}
              onAdd={() => addToBasket({ name })}
            />)
          })}
        </SimpleGrid>
        <Drawer
          opened={opened}
          onClose={() => setOpened(false)}
          title="Products In Your Basket"
          overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
          padding="md"
          size="s"
        >
          <List className='List'
            spacing="xs"
            size="sm"
            center
            icon={
              <ThemeIcon color="teal" size={24} radius="md">
                <IconCircleCheck size="1rem" />
              </ThemeIcon>

            }
          >

            {basketItems.map(({ name, count }, index) =>
            (<List.Item key={index}>
              {name}
              <Badge className="Badge" color="blue">
                {count}
              </Badge>
            </List.Item>))
            }
          </List>
        </Drawer>
      </div>
    </>
  );
}

export default App;
