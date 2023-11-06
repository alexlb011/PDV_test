import { useState, useEffect } from "react";
import { Background, ModalShape, ModelInfo, Order } from "./styles";
// import image from "../../public/images/img.png";
import Invoice from "../Invoice";
import { ButtonNegative, ButtonPositive } from "../../styled";

interface ModalProps {
  isOpen: boolean;
  item: any;
  closeModal: () => void;
  addToCompleteOrder: (item: any) => void;
}

export default function Modal({
  isOpen,
  item,
  closeModal,
  addToCompleteOrder,
}: ModalProps) {
  const [units, setUnits] = useState(1);
  const [obs, setObs] = useState("");
  const [selectedAddons, setSelectedAddons] = useState<number[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    // Verifique a largura da tela ao montar o componente
    checkScreenWidth();
    window.addEventListener("resize", checkScreenWidth);
    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, []);

  const checkScreenWidth = () => {
    setIsMobile(window.innerWidth <= 767);
  };
  useEffect(() => {
    if (!isOpen) {
      setUnits(1);
      setObs("");
      setSelectedAddons([]);
    }
  }, [isOpen]);

  const handleClose = () => {
    closeModal();
  };
  const addOrder = () => {
    addToCompleteOrder(pedido);
    closeModal();
  };
  const pedido = [
    {
      nome: item?.nome,
      valor: item?.valor,
      units: units,
      obs: obs,
      adicionais: selectedAddons.map((index) => item.adicionais[index]),
    },
  ];

  return (
    <>
      {isOpen === true ? (
        <Background>
          <ModalShape>
            <div className="closeButtonDiv">
              <button className="closeButton" onClick={handleClose}>
                X
              </button>
            </div>
            <ModelInfo>
              <h1>Revise seu pedido!</h1>

              <Order className="Order">
                {isMobile ? null : (
                  <img
                    src={`http://localhost:3000/imagens/${item.imagem}`}
                    className="orderIMG"
                    alt=""
                  />
                )}
                <div className="orderData">
                  <h3>{item.nome}</h3>
                  <h2>
                    R$:{(units * item.valor).toFixed(2).replace(".", ",")}
                  </h2>
                  <div className="description">
                    <p>{item.descricao}</p>
                    <div className="buttonContainer">
                      <button
                        style={{ cursor: "pointer" }}
                        className="button"
                        onClick={() => {
                          if (units > 1) {
                            setUnits(units - 1);
                          }
                        }}
                      >
                        -
                      </button>
                      <p>{units}</p>
                      <button
                        style={{ cursor: "pointer" }}
                        className="button"
                        onClick={() => {
                          setUnits(units + 1);
                        }}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </Order>
              <div className="descricao">
                <h3>Adicionais</h3>
                <p>
                  Selecione os ingredientes que voce quer adicionar a mais no
                  seu lanche
                </p>
              </div>
              {Object.values(item.adicionais).map((add, index) => (
                <div className="Adicionais">
                  {isMobile ? null : (
                    <img
                      src={`http://localhost:3000/imagens/${item.imagem}`}
                      className="AdicionalImg"
                      alt=""
                    />
                  )}
                  <div className="info">
                    <h3>{add.nome}</h3>
                    <p>{add.weight}g</p>
                  </div>
                  <div className="value">
                    <h2>R$:{add.valor}</h2>
                  </div>
                  <input
                    className="selecteButton"
                    type="checkbox"
                    name="meuCheckbox"
                    onChange={() => {
                      if (selectedAddons.includes(index)) {
                        setSelectedAddons(
                          selectedAddons.filter((item) => item !== index)
                        );
                      } else {
                        setSelectedAddons([...selectedAddons, index]);
                      }
                    }}
                  />
                </div>
              ))}
              <div className="obs">
                <h3>Observaçoes</h3>
                <textarea
                  className="obsInput"
                  placeholder="Adicione uma observaçao ao pedido"
                  value={obs}
                  onChange={(e) => {
                    setObs(e.target.value);
                  }}
                  wrap="hard"
                  maxLength={100}
                />
              </div>
              <div className="notaFinal"></div>
              <div className="buttons"></div>
            </ModelInfo>
            <div className="invoicePlace">
              <Invoice order={pedido}></Invoice>
            </div>
            <div className="buttonsContainer">
              <ButtonNegative onClick={handleClose}>Cancelar</ButtonNegative>
              <ButtonPositive onClick={addOrder}>
                Adicionar ao pedido
              </ButtonPositive>
            </div>
          </ModalShape>
        </Background>
      ) : null}
    </>
  );
}
