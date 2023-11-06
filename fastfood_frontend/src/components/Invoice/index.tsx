import {
  CheckValue,
  CheckListContainer,
  CheckListElement,
  BorderBasic,
} from "./styles";
import { Font_basic_subTitleH2, Font_basic_textP } from "../../styles/Global";

interface Order {
  nome: string;
  units: number;
  valor: number;
  obs: string;
  adicionais: { nome: string; valor: number; weight: number }[];
}

interface InvoiceProps {
  order: Order[];
  updateTotalValue?: (totalValue: number) => void;
}
export default function Invoice({ order, updateTotalValue }: InvoiceProps) {
  const totalValue = order.reduce((total, item) => {
    const valorAddon = item.adicionais.reduce((totalAddon, addon) => {
      return totalAddon + addon.valor;
    }, 0);
    return total + item.valor * item.units + valorAddon * item.units;
  }, 0);

  if (updateTotalValue) updateTotalValue(totalValue);

  return (
    <>
      <CheckValue>
        <CheckListContainer>
          {Object.values(order).map((hamburguer, index) => (
            <div key={index}>
              <CheckListElement>
                <div className="line">
                  <h1>{hamburguer.nome}</h1>
                  <h2>x {hamburguer.units}</h2>
                  <h2>
                    R$:
                    {(hamburguer.valor * hamburguer.units)
                      .toFixed(2)
                      .replace(".", ",")}
                  </h2>
                </div>
                {Object.values(hamburguer.adicionais).map((addons, index) => (
                  <div className="Addons" key={index}>
                    <div className="line">
                      <h1>
                        + {addons.nome} {addons.weight}g
                      </h1>
                      <h2>x{hamburguer.units}</h2>
                      <h2>
                        R$:
                        {(addons.valor * hamburguer.units)
                          .toFixed(2)
                          .replace(".", ",")}
                      </h2>
                    </div>
                  </div>
                ))}
                {hamburguer.obs !== "" ? (
                  <h1 className="OBS">OBS: {hamburguer.obs}</h1>
                ) : null}
              </CheckListElement>
            </div>
          ))}
          <BorderBasic></BorderBasic>
          <Font_basic_textP>Total do pedido</Font_basic_textP>
          <Font_basic_subTitleH2>
            R$:{totalValue.toFixed(2).replace(".", ",")}
          </Font_basic_subTitleH2>
        </CheckListContainer>
      </CheckValue>
    </>
  );
}
