import React from "react"
import {
  CharacteristicContent,
  ImgWrap,
  CharacteristicTitle,
  JetCharacteristicWrapper,
  Card,
  CardContent,
  CardTitle,
  CardText,
  Row1,
  Row2,
  Row3,
} from "./style"
import { Container } from "../../../common/style/global"
import Ap from "../assets/characteristic.png"
import Length from "../assets/lenght.svg"
import Energy from "../assets/energy.svg"
import Power from "../assets/power.svg"
import Resource from "../assets/resource.svg"
import Speed from "../assets/speed.svg"
import Width from "../assets/width.svg"
import { SvgComponent } from "../../../common/componemts/svg-component/SvgComponent"

export const JetCharacteristic = () => {
  return (
    <JetCharacteristicWrapper>
      <Container>
        <CharacteristicTitle>Технические характеристики</CharacteristicTitle>
      </Container>
      <CharacteristicContent src={Ap}>
        <Row1>
          <Card>
            <SvgComponent src={Length} width={"100px"} height={"80px"} />
            <CardContent>
              <CardTitle>808 нм</CardTitle>
              <CardText>Длина волны</CardText>
            </CardContent>
          </Card>
          <Card className={"bottom"}>
            <SvgComponent src={Resource} width={"100px"} height={"80px"} />
            <CardContent>
              <CardTitle>30 млн импульсов</CardTitle>
              <CardText>Ресурс излучателя</CardText>
            </CardContent>
          </Card>
        </Row1>
        <Row2>
          <Card>
            <SvgComponent src={Power} width={"100px"} height={"80px"} />
            <CardContent>
              <CardTitle>
                {" "}
                от 600 Вт <br /> до 1200 Вт
              </CardTitle>
              <CardText>Мощность излучателя</CardText>
            </CardContent>
          </Card>
          <Card className={"bottom"}>
            <SvgComponent src={Speed} width={"100px"} height={"80px"} />
            <CardContent>
              <CardTitle>1–10 Гц</CardTitle>
              <CardText>Скорость вспышек</CardText>
            </CardContent>
          </Card>
        </Row2>
        <Row3>
          <Card>
            <SvgComponent src={Width} width={"100px"} height={"80px"} />
            <CardContent>
              <CardTitle>13×13 мм</CardTitle>
              <CardText>Размер рабочего пятна</CardText>
            </CardContent>
          </Card>
          <Card>
            <SvgComponent src={Energy} width={"100px"} height={"80px"} />
            <CardContent>
              <CardTitle>5–400 мс</CardTitle>
              <CardText>Энергия импульса</CardText>
            </CardContent>
          </Card>
        </Row3>

        {/*<div className="parent">*/}
        {/*  <div className="div1">*/}
        {/*    <Card>*/}
        {/*      <SvgComponent src={Length} width={"100px"} height={"80px"} />*/}
        {/*      <CardContent>*/}
        {/*        <CardTitle>808 нм</CardTitle>*/}
        {/*        <CardText>Длина волны</CardText>*/}
        {/*      </CardContent>*/}
        {/*    </Card>*/}
        {/*  </div>*/}
        {/*  <div className="div2">*/}
        {/*    <Card>*/}
        {/*      <SvgComponent src={Power} width={"100px"} height={"80px"} />*/}
        {/*      <CardContent>*/}
        {/*        <CardTitle> от 600 Вт <br/> до 1200 Вт</CardTitle>*/}
        {/*        <CardText>Мощность излучателя</CardText>*/}
        {/*      </CardContent>*/}
        {/*    </Card>*/}
        {/*  </div>*/}
        {/*  <div className="div3">*/}
        {/*    <Card>*/}
        {/*      <SvgComponent src={Width} width={"100px"} height={"80px"} />*/}
        {/*      <CardContent>*/}
        {/*        <CardTitle>13×13 мм</CardTitle>*/}
        {/*        <CardText>Размер рабочего пятна</CardText>*/}
        {/*      </CardContent>*/}
        {/*    </Card>*/}
        {/*  </div>*/}
        {/*  <div className="div4">*/}
        {/*    <Card>*/}
        {/*      <SvgComponent src={Energy} width={"100px"} height={"80px"} />*/}
        {/*      <CardContent>*/}
        {/*        <CardTitle>5–400 мс</CardTitle>*/}
        {/*        <CardText>Энергия импульса</CardText>*/}
        {/*      </CardContent>*/}
        {/*    </Card>*/}
        {/*  </div>*/}
        {/*  <div className="div5">*/}
        {/*    <Card>*/}
        {/*      <SvgComponent src={Speed} width={"100px"} height={"80px"} />*/}
        {/*      <CardContent>*/}
        {/*        <CardTitle>1–10 Гц</CardTitle>*/}
        {/*        <CardText>Скорость вспышек</CardText>*/}
        {/*      </CardContent>*/}
        {/*    </Card>*/}
        {/*  </div>*/}
        {/*  <div className="div6">*/}
        {/*    <Card>*/}
        {/*      <SvgComponent src={Length} width={"100px"} height={"80px"} />*/}
        {/*      <CardContent>*/}
        {/*        <CardTitle>808 нм</CardTitle>*/}
        {/*        <CardText>Длина волны</CardText>*/}
        {/*      </CardContent>*/}
        {/*    </Card>*/}
        {/*  </div>*/}
        {/*</div>*/}
      </CharacteristicContent>
    </JetCharacteristicWrapper>
  )
}
