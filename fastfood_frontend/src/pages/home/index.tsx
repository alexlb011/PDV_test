/* eslint-disable @typescript-eslint/no-explicit-any */
import Header from "../../components/Header";
import Modal from "../../components/Modal";
import Invoice from "../../components/Invoice";
import Payment from "../../components/Payment";
import React, { useState, useEffect } from "react";
import {
  MainDiv,
  SearchDiv,
  SearchBox,
  CategoryDiv,
  CategoryElementsDiv,
  MenuDiv,
  MenuElementsDiv,
  MenuProdImg,
  MenuDivContainer,
  ButtonPositive,
  ButtonNegative,
} from "./styled";
import { Font_basic_titleH1, Font_basic_subTitleH2 } from "../../styles/Global";
import axios from "axios";
const image = "/images/camemburger.jpg";

function Home() {
  const categoriasDeHamburguers = {
    categoria1: {
      nome: "Clássicos",
      imagem: image,
    },
    categoria2: {
      nome: "Especiais",
      imagem: image,
    },
    categoria3: {
      nome: "Especiais com Bacon",
      imagem: image,
    },
    categoria4: {
      nome: "Infantil",
      imagem: image,
    },
  };

  const [searchTerm, setSearchTerm] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [inPayment, setInPayment] = useState(false);
  const [selectedHamburger, setSelectedHamburger] = useState(null);
  const [hamburguers, setHamburguers] = useState<any[]>([]);
  const [completeOrder, setcompleteOrder] = useState<any[]>([]);

  const filteredHamburguers = Object.values(hamburguers).filter((hamburguer) =>
    hamburguer.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const apiURL = "http://localhost:3000";

    (async () => {
      try {
        const response = await axios.get(apiURL);
        console.log("Dados recebidos:", response.data);
        setHamburguers(response.data);
      } catch (error) {
        console.error("Erro na solicitação:", error);
      }
    })();
  }, []);

  useEffect(() => {
    // Verifica quando o modal é aberto ou fechado
    if (modalIsOpen) {
      // Impede a rolagem da página de fundo quando o modal estiver aberto
      document.body.style.overflow = "hidden";
    } else {
      // Restaura a rolagem da página quando o modal estiver fechado
      document.body.style.overflow = "auto";
    }
    // Define o estado do modal com base na propriedade isOpen
    setModalIsOpen(modalIsOpen);
  }, [modalIsOpen]);

  useEffect(() => {
    if (selectedHamburger) {
      setModalIsOpen(true);
    }
  }, [selectedHamburger]);

  const clearOrder = () => {
    setcompleteOrder([]);
  };
  return (
    <>
      <Header></Header>
      {inPayment === true ? (
        <Payment
          completeOrder={completeOrder}
          closePayment={() => {
            setInPayment(false);
            clearOrder();
          }}
        ></Payment>
      ) : (
        <MainDiv>
          <SearchDiv>
            <Font_basic_titleH1>Seja bem vindo!</Font_basic_titleH1>
            <SearchBox
              type="text"
              placeholder="o que voce procura?"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
            />
          </SearchDiv>
          {searchTerm === "" ? (
            <CategoryDiv>
              <Font_basic_titleH1>Categorias</Font_basic_titleH1>
              <Font_basic_subTitleH2>
                navegue por categoria
              </Font_basic_subTitleH2>
              <CategoryElementsDiv>
                <div className="containerArea">
                  {Object.values(categoriasDeHamburguers).map(
                    (hamburguers, index) => (
                      <MenuElementsDiv>
                        <div key={index}>
                          <MenuProdImg src={hamburguers.imagem}></MenuProdImg>
                          <Font_basic_subTitleH2>
                            {hamburguers.nome}
                          </Font_basic_subTitleH2>
                        </div>
                      </MenuElementsDiv>
                    )
                  )}
                </div>
              </CategoryElementsDiv>
            </CategoryDiv>
          ) : null}
          <MenuDiv>
            <Font_basic_titleH1>Produtos</Font_basic_titleH1>
            <Font_basic_subTitleH2>
              selecione um produto para adicionar ao seu pedido
            </Font_basic_subTitleH2>
            <MenuDivContainer>
              <div className="containerArea">
                {Object.values(filteredHamburguers).map((hamburguer, index) => (
                  <MenuElementsDiv
                    onClick={() => {
                      setSelectedHamburger(hamburguer);
                    }}
                  >
                    <div key={index}>
                      <MenuProdImg
                        src={`http://localhost:3000/imagens/${hamburguer.imagem}`}
                      ></MenuProdImg>
                      <div className="prodData">
                        <Font_basic_subTitleH2>
                          {hamburguer.nome}
                        </Font_basic_subTitleH2>
                        <p>{hamburguer.descricao}</p>
                        <Font_basic_subTitleH2>
                          {hamburguer.valor}
                        </Font_basic_subTitleH2>
                      </div>
                    </div>
                  </MenuElementsDiv>
                ))}
              </div>
            </MenuDivContainer>
          </MenuDiv>
          <div className="border"></div>
          <Invoice order={completeOrder}></Invoice>
          <div>
            <ButtonNegative
              onClick={() => {
                clearOrder();
              }}
            >
              {" "}
              Cancelar{" "}
            </ButtonNegative>
            <ButtonPositive
              onClick={() => {
                if (completeOrder.length === 0) return;
                setInPayment(true);
              }}
            >
              Finalizar pedido
            </ButtonPositive>
          </div>
        </MainDiv>
      )}
      <Modal
        isOpen={modalIsOpen}
        item={selectedHamburger}
        closeModal={() => setModalIsOpen(false)}
        addToCompleteOrder={(item) => {
          setcompleteOrder([...completeOrder, ...item]);
        }}
      ></Modal>
    </>
  );
}

export default Home;
