import React from "react"
import styled from "styled-components"

import colors from "../colors"
import shadows from "../shadows"
import textStyles from "../textStyles"

export default class PressableRootView extends React.Component {
  render() {


    let Inner$pressed
    let InnerText$text
    let Inner$backgroundColor
    let Inner$hovered
    let Outer$pressed
    let Outer$backgroundColor
    let Outer$hovered
    let Inner$onPress
    let Outer$onPress
    Inner$backgroundColor = colors.blue500
    InnerText$text = ""
    Outer$backgroundColor = colors.grey50

    Outer$onPress = this.props.onPressOuter
    Inner$onPress = this.props.onPressInner
    if (Outer$hovered) {

      Outer$backgroundColor = colors.grey100
    }
    if (Outer$pressed) {

      Outer$backgroundColor = colors.grey300
    }
    if (Inner$hovered) {

      Inner$backgroundColor = colors.blue300
      InnerText$text = "Hovered"
    }
    if (Inner$pressed) {

      Inner$backgroundColor = colors.blue800
      InnerText$text = "Pressed"
    }
    if (Inner$hovered) {

      if (Inner$pressed) {

        InnerText$text = "Hovered & Pressed"
      }
    }
    return (
      <Outer
        style={{ backgroundColor: Outer$backgroundColor }}
        onClick={Outer$onPress}
      >
        <Inner
          style={{ backgroundColor: Inner$backgroundColor }}
          onClick={Inner$onPress}
        >
          <InnerText>
            {InnerText$text}
          </InnerText>
        </Inner>
      </Outer>
    );
  }
};

let Outer = styled.div({
  alignItems: "flex-start",
  backgroundColor: colors.grey50,
  display: "flex",
  flex: "1 1 0%",
  flexDirection: "column",
  justifyContent: "flex-start",
  paddingTop: "24px",
  paddingRight: "24px",
  paddingBottom: "24px",
  paddingLeft: "24px"
})

let Inner = styled.div({
  alignItems: "flex-start",
  backgroundColor: colors.blue500,
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  width: "100px",
  height: "100px"
})

let InnerText = styled.span({
  textAlign: "left",
  ...textStyles.body1,
  alignItems: "flex-start",
  display: "block",
  flex: "0 0 auto",
  flexDirection: "column",
  justifyContent: "flex-start"
})