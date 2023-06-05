import React from "react"
import {
  CardText,
  ColumnCard,
  OfficialSupplierWrapper,
  SupplierColumn,
  SupplierSubTitle,
  SupplierTitle,
} from "./style"
import { Container } from "../../../common/style/global"
import Ic1 from "./assets/1.svg"
import Ic2 from "./assets/2.svg"
import Ic3 from "./assets/3.svg"
import Ic4 from "./assets/4.svg"
import Ic5 from "./assets/5.svg"
import Ic6 from "./assets/6.svg"
import { SvgComponent } from "../../../common/componemts/svg-component/SvgComponent"

export const OfficialSupplier = () => {
  const columnData = [
    { id: "0", img: Ic1, text: "2 года гарантии от сервисного центра" },
    { id: "1", img: Ic2, text: "Бесплатное обучение и поддержка" },
    { id: "2", img: Ic3, text: "Быстрая окупаемость" },
    { id: "3", img: Ic4, text: "Сертификация аппарата и излучателя по ЕАС" },
    { id: "4", img: Ic5, text: "Проверенные комплектующие" },
    { id: "5", img: Ic6, text: "Оплата при получении" },
  ]
  return (
    <OfficialSupplierWrapper>
      <Container>
        <SupplierTitle>Официальный поставщик</SupplierTitle>
        <SupplierSubTitle>Сервисный центр “Техника Красоты”</SupplierSubTitle>
        <SupplierColumn>
          {columnData.map((el) => (
            <ColumnCard key={el.id}>
              <SvgComponent src={el.img} width={"243px"} height={"234px"} />
              <CardText>{el.text}</CardText>
            </ColumnCard>
          ))}
        </SupplierColumn>
      </Container>
    </OfficialSupplierWrapper>
  )
}
