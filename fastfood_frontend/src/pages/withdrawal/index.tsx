import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import Header from "../../components/Header";
import { BasicContainer } from "./styled";

const socket = io("http://localhost:3000");

function Withdrawal() {
  const [orders, setOrders] = useState<any[]>([]);
  const [ordersFinished, setOrdersFinished] = useState<any[]>([]);

  useEffect(() => {
    socket.on("ordersPending", (order) => {
      setOrders(order);
    });
    socket.on("ordersFinished", (order) => {
      setOrdersFinished(order);
    });
  }, []);
  return (
    <>
      <Header></Header>
      <BasicContainer>
        <div className="Side">
          <h1>Preparando:</h1>
          <div>
            <div className="inProd">
              {Object.values(orders).map((order, itemIndex) => (
                <div className="orderItem" id={itemIndex.toString()}>
                  <div className="Top">
                    <h1>{order[0]}</h1>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="borderContainer">
          <div className="border"></div>
        </div>
        <div className="Side">
          <h1>Pronto:</h1>
          <div>
            <div className="finished">
              {Object.values(ordersFinished).map((order, itemIndex) => (
                <div className="orderItem" id={itemIndex.toString()}>
                  <div className="Top">
                    <h1>{order[0]}</h1>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </BasicContainer>
    </>
  );
}

export default Withdrawal;
