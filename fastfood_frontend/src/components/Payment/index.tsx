import { useState } from "react";
import Invoice from "../Invoice";
import axios from "axios";
import { PaymentBase } from "./styles";
import { ButtonNegative, ButtonPositive } from "../../styled";
import io from "socket.io-client";
import html2canvas from "html2canvas";

const socket = io("http://localhost:3000");
interface Props {
  completeOrder: any;
  closePayment: () => void;
}

export default function Payment({ completeOrder, closePayment }: Props) {
  const [currentMethod, setCurrentMethod] = useState("");
  const [currentError, setcurrentError] = useState("");
  const [clientName, setclientName] = useState("");
  const [valueInput, setValueInput] = useState(0);
  const [totalValue, setTotalValue] = useState(0);
  const [paymentComplete, setPaymentComplete] = useState(false);

  const selectMethod = (divId: string) => {
    // Remove a seleção de outras divs antes de selecionar a nova
    const divs = document.querySelectorAll(".method");
    divs.forEach((div) => div.classList.remove("selected"));

    const divSelecionada = document.getElementById(divId);
    if (divSelecionada) {
      divSelecionada.classList.add("selected");
      setCurrentMethod(divId);
      console.log(divId);
    }
  };
  const close = () => {
    console.log("chegou no cancelar");
    setPaymentComplete(false);
    closePayment();
  };
  const finishPay = async () => {
    setcurrentError("");
    const apiURL = "http://localhost:3000/pay";
    console.log("pagamentoFeito");
    if (currentMethod === "")
      return setcurrentError("Precisa escolher um metodo de pagamento");
    if (clientName.length < 3 || clientName.length > 100) {
      setcurrentError("Nome do cliente precisa ter entre 3 e 100 characteres");
      return;
    }
    if (valueInput - totalValue < 0 && currentMethod === "Dinheiro") {
      setcurrentError("o pagamento é insuficiente");
      return;
    }

    try {
      const response = await axios.post(apiURL);
      socket.emit("order", [clientName, [...completeOrder]]);
      setPaymentComplete(true);
    } catch (error) {
      console.error("Erro na solicitação:", error);
    }
  };
  const printNote = () => {
    /* 
    Apesar de gerar a imagem do html, não prossegui com a lógica de impressão
    por não possuir uma impressora térmica disponível para testar a implementação
     */
    const note = document.getElementById("invoice");
    if (note === null) return;
    html2canvas(note).then(function (canvas) {
      const imagem = canvas.toDataURL("image/png");

      // Crie um novo objeto de janela para abrir uma nova janela de impressão
      const note = window.open("", "", "width=600,height=600");
      note?.document.open();
      note?.document.write('<img src="' + imagem + '" style="width:100%;" />');

      // note.document.close();
      // note.print();
      // note.close();
    });
  };

  return (
    <>
      <PaymentBase>
        <div>
          {paymentComplete === true ? (
            <div className="confirmed">
              <div className="shape">
                <div>
                  <h1>Pagamento completo</h1>
                  <h1>O pedido foi encaminhado para a cozinha</h1>
                  <p>Obrigado!!</p>
                </div>
                <ButtonPositive onClick={printNote}>Imprimir</ButtonPositive>
                <ButtonPositive onClick={close}>Proxima Compra</ButtonPositive>
              </div>
            </div>
          ) : null}
          <h1>Pagamento</h1>
          <div className="containerBase">
            <div className="group">
              <h3>Resumo da compora</h3>
              <div id="invoice">
                <Invoice
                  order={completeOrder}
                  updateTotalValue={setTotalValue}
                ></Invoice>
              </div>
            </div>
            <div className="group">
              <h3>Selecione a forma de pagamento:</h3>
              <div>
                <div className="divMethod">
                  <button
                    className="method"
                    id="Debito"
                    onClick={() => selectMethod("Debito")}
                  >
                    <h1>Débito</h1>
                  </button>
                </div>
                <div className="divMethod">
                  <button
                    className="method"
                    id="Credito"
                    onClick={() => selectMethod("Credito")}
                  >
                    <h1>Credito</h1>
                  </button>
                </div>
                <div className="divMethod">
                  <button
                    className="method"
                    id="Dinheiro"
                    onClick={() => selectMethod("Dinheiro")}
                  >
                    <h1>Dinheiro</h1>
                  </button>
                </div>
                {currentMethod === "Dinheiro" && (
                  <div className="value">
                    <div>
                      <h1>Valor entregue</h1>
                      <input
                        className="valueInput"
                        type="number"
                        value={valueInput}
                        onChange={(e) => {
                          setValueInput(parseFloat(e.target.value));
                        }}
                      />
                    </div>
                    <div>
                      <h1>Troco</h1>
                      {valueInput - totalValue > 0 ? (
                        <h1>
                          {(valueInput - totalValue)
                            .toFixed(2)
                            .replace(".", ",")}
                        </h1>
                      ) : (
                        <h1>0</h1>
                      )}
                    </div>
                  </div>
                )}
                <div>
                  <div>
                    <h3>Nome do cliente</h3>
                    <input
                      className="clientNameInput"
                      type="text"
                      placeholder="Nome"
                      value={clientName}
                      onChange={(e) => {
                        setclientName(e.target.value);
                      }}
                    />
                  </div>
                  <div>
                    <h3>200</h3>
                  </div>
                  <div>
                    <h3 className="erroValidation">{currentError}</h3>
                  </div>
                </div>
                <div className="buttonsContainer">
                  <ButtonNegative onClick={close}>Cancelar</ButtonNegative>
                  <ButtonPositive onClick={finishPay}>
                    Finalizar pedido
                  </ButtonPositive>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PaymentBase>
    </>
  );
}
