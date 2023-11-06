import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import Header from "../../components/Header";
import { BasicContainer } from "./styled";

const socket = io("http://localhost:3000");

function Kitchen() {
  const [orders, setOrders] = useState<any[]>([]);
  const [ordersFinished, setOrdersFinished] = useState<any[]>([]);

  useEffect(() => {
    console.log("passei aki ");
    socket.on("order", (order) => {
      setOrders((prevOrders) => [...prevOrders, order]);
    });
  }, []);

  useEffect(() => {
    socket.emit("ordersFinished", [...ordersFinished]);
    socket.emit("ordersPending", [...orders]);
  }, [ordersFinished, orders]);

  const finishOrder = (index: number) => {
    const updatedOrders = [...orders];
    const finishedOrder = updatedOrders.splice(index, 1);
    setOrders(updatedOrders);
    setOrdersFinished((prevOrdersFinished) => [
      ...prevOrdersFinished,
      finishedOrder[0],
    ]);
  };
  const cancelOrder = (index: number) => {
    const updatedOrders = [...orders];
    updatedOrders.splice(index, 1);
    setOrders(updatedOrders);
  };

  return (
    <>
      <Header></Header>
      <BasicContainer>
        <div className="Side" id="inProd">
          <h1 className="HBase">Preparando:</h1>
          {Object.values(orders).map((order, index) => (
            <div className="orderGroup">
              <div className="clientName">
                <h2>{order[0]}</h2>
              </div>
              {Object.values(order[1]).map((item, itemIndex) => (
                <div className="orderItem" id={itemIndex.toString()}>
                  <div className="Top">
                    <p>{item.nome}</p>
                    <p>x{item.units}</p>
                  </div>

                  <div>
                    <h4>Adicionais</h4>
                    {Object.values(item.adicionais).map((add, addIndex) => (
                      <div id={addIndex.toString()}>
                        <p>
                          {add.nome} {add.weight}G
                        </p>
                      </div>
                    ))}
                  </div>
                  <h1>-----------------------</h1>
                  <p>OBS:{item.obs}</p>
                </div>
              ))}
              <div className="buttons">
                <button
                  onClick={() => {
                    cancelOrder(index);
                  }}
                >
                  X
                </button>
                <button
                  onClick={() => {
                    finishOrder(index);
                  }}
                >
                  V
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="borderContainer">
          <div className="border"></div>
        </div>

        <div className="Side" id="inProd">
          <h1 className="HBase">Pronto:</h1>
          {Object.values(ordersFinished).map((order, index) => (
            <div className="orderGroup" id={index.toString()}>
              <div className="clientName">
                <h2>{order[0]}</h2>
              </div>
              {Object.values(order[1]).map((item, itemIndex) => (
                <div className="orderItem" id={itemIndex.toString()}>
                  <div className="Top">
                    <p>{item.nome}</p>
                    <p>x{item.units}</p>
                  </div>

                  <div>
                    <h4>Adicionais</h4>
                    {Object.values(item.adicionais).map((add, addIndex) => (
                      <div id={addIndex.toString()}>
                        <p>
                          {add.nome} {add.weight}G
                        </p>
                      </div>
                    ))}
                  </div>
                  <h1>-----------------------</h1>
                  <p>OBS:{item.obs}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </BasicContainer>
    </>
  );
}

export default Kitchen;
