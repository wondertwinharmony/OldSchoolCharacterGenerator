import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import {
  GiBattleGear,
  GiDigDug,
  GiDonkey,
  GiDrinkMe,
  GiHangingSign,
  GiMagicLamp,
  GiOldLantern,
  GiOldWagon,
  GiPirateCoat,
  GiTiedScroll,
  GiWhiteTower
} from "react-icons/gi";
import styled from "styled-components";
import adventuringGear1 from "../static/itemsForPurchase/adventuringGear1.png";
import adventuringGear2 from "../static/itemsForPurchase/adventuringGear2.png";
import ammunitionAndArmor from "../static/itemsForPurchase/ammunitionAndArmor.png";
import animals from "../static/itemsForPurchase/animals.png";
import buildings from "../static/itemsForPurchase/buildings.png";
import buyingSellingMagicItems from "../static/itemsForPurchase/buyingSellingMagicItems.png";
import clericScrolls from "../static/itemsForPurchase/clericScrolls.png";
import clothing from "../static/itemsForPurchase/clothing.png";
import druidScrolls from "../static/itemsForPurchase/druidScrolls.png";
import illusionistScrolls from "../static/itemsForPurchase/illusionistScrolls.png";
import light from "../static/itemsForPurchase/light.png";
import lodging from "../static/itemsForPurchase/lodging.png";
import magicUserScrolls from "../static/itemsForPurchase/magicUserScrolls.png";
import potions from "../static/itemsForPurchase/potions.png";
import tackAndHarness from "../static/itemsForPurchase/tackAndHarness.png";
import transport from "../static/itemsForPurchase/transport.png";
import weapons from "../static/itemsForPurchase/weapons.png";

interface Props {}

interface ImplProps extends Props {}

const ItemsForPurchaseImpl: React.SFC<ImplProps> = () => {
  const [isWepAmmArmVisible, setIsWepAmmArmVisible] = useState(false);
  const [isAdventuringGearVisible, setIsAdventuringGearVisible] = useState(
    false
  );
  const [isLightVisible, setIsLightVisible] = useState(false);
  const [isLodgingVisible, setIsLodgingVisible] = useState(false);
  const [isClothingVisible, setIsClothingVisible] = useState(false);
  const [isTransportVisible, setIsTransportVisible] = useState(false);
  const [isAnimalsVisible, setIsAnimalsVisible] = useState(false);
  const [isBuildingsVisible, setIsBuildingsVisible] = useState(false);
  const [isPotionsVisible, setIsPotionsVisible] = useState(false);
  const [isScrollsVisible, setIsScrollsVisible] = useState(false);
  const [
    isBuyingAndSellingMagicItemsVisible,
    setIsBuyingAndSellingMagicItemsVisible
  ] = useState(false);
  return (
    /* Weapons, Ammunition, Armor */
    <ItemsForPurchaseContainer>
      <ItemsForPurchaseHeader
        onClick={() => {
          setIsWepAmmArmVisible(!isWepAmmArmVisible);
        }}
      >
        <ItemsForPurchaseHeaderText>
          <div style={{ display: "flex" }}>
            <HeaderIcon>
              <GiBattleGear />
            </HeaderIcon>
            Weapons, Ammunition, Armor
          </div>
        </ItemsForPurchaseHeaderText>
        <FontAwesomeIcon
          icon={isWepAmmArmVisible ? "caret-up" : "caret-down"}
          size="lg"
          style={{ margin: "0 0.5rem" }}
        />
      </ItemsForPurchaseHeader>
      {isWepAmmArmVisible && <Weapons />}
      {isWepAmmArmVisible && <AmmunitionAndArmor />}
      {/* Adventuring Gear */}
      <ItemsForPurchaseHeader
        onClick={() => {
          setIsAdventuringGearVisible(!isAdventuringGearVisible);
        }}
      >
        <ItemsForPurchaseHeaderText>
          <div style={{ display: "flex" }}>
            <HeaderIcon>
              <GiDigDug />
            </HeaderIcon>
            Adventuring Gear
          </div>
        </ItemsForPurchaseHeaderText>
        <FontAwesomeIcon
          icon={isAdventuringGearVisible ? "caret-up" : "caret-down"}
          size="lg"
          style={{ margin: "0 0.5rem" }}
        />
      </ItemsForPurchaseHeader>
      {isAdventuringGearVisible && <AdventuringGearOne />}
      {isAdventuringGearVisible && <AdventuringGearTwo />}
      {/* Light */}
      <ItemsForPurchaseHeader
        onClick={() => {
          setIsLightVisible(!isLightVisible);
        }}
      >
        <ItemsForPurchaseHeaderText>
          <div style={{ display: "flex" }}>
            <HeaderIcon>
              <GiOldLantern />
            </HeaderIcon>
            Light
          </div>
        </ItemsForPurchaseHeaderText>
        <FontAwesomeIcon
          icon={isLightVisible ? "caret-up" : "caret-down"}
          size="lg"
          style={{ margin: "0 0.5rem" }}
        />
      </ItemsForPurchaseHeader>
      {isLightVisible && <Light />}
      {/* Lodging */}
      <ItemsForPurchaseHeader
        onClick={() => {
          setIsLodgingVisible(!isLodgingVisible);
        }}
      >
        <ItemsForPurchaseHeaderText>
          <div style={{ display: "flex" }}>
            <HeaderIcon>
              <GiHangingSign />
            </HeaderIcon>
            Lodging
          </div>
        </ItemsForPurchaseHeaderText>
        <FontAwesomeIcon
          icon={isLodgingVisible ? "caret-up" : "caret-down"}
          size="lg"
          style={{ margin: "0 0.5rem" }}
        />
      </ItemsForPurchaseHeader>
      {isLodgingVisible && <Lodging />}
      {/* Clothing */}
      <ItemsForPurchaseHeader
        onClick={() => {
          setIsClothingVisible(!isClothingVisible);
        }}
      >
        <ItemsForPurchaseHeaderText>
          <div style={{ display: "flex" }}>
            <HeaderIcon>
              <GiPirateCoat />
            </HeaderIcon>
            Clothing
          </div>
        </ItemsForPurchaseHeaderText>
        <FontAwesomeIcon
          icon={isClothingVisible ? "caret-up" : "caret-down"}
          size="lg"
          style={{ margin: "0 0.5rem" }}
        />
      </ItemsForPurchaseHeader>
      {isClothingVisible && <Clothing />}
      {/* Transport */}
      <ItemsForPurchaseHeader
        onClick={() => {
          setIsTransportVisible(!isTransportVisible);
        }}
      >
        <ItemsForPurchaseHeaderText>
          <div style={{ display: "flex" }}>
            <HeaderIcon>
              <GiOldWagon />
            </HeaderIcon>
            Transport
          </div>
        </ItemsForPurchaseHeaderText>
        <FontAwesomeIcon
          icon={isTransportVisible ? "caret-up" : "caret-down"}
          size="lg"
          style={{ margin: "0 0.5rem" }}
        />
      </ItemsForPurchaseHeader>
      {isTransportVisible && <Transport />}
      {/* Animals */}
      <ItemsForPurchaseHeader
        onClick={() => {
          setIsAnimalsVisible(!isAnimalsVisible);
        }}
      >
        <ItemsForPurchaseHeaderText>
          <div style={{ display: "flex" }}>
            <HeaderIcon>
              <GiDonkey />
            </HeaderIcon>
            Animals
          </div>
        </ItemsForPurchaseHeaderText>
        <FontAwesomeIcon
          icon={isAnimalsVisible ? "caret-up" : "caret-down"}
          size="lg"
          style={{ margin: "0 0.5rem" }}
        />
      </ItemsForPurchaseHeader>
      {isAnimalsVisible && <Animals />}
      {isAnimalsVisible && <TackAndHarness />}
      {/* Buildings */}
      <ItemsForPurchaseHeader
        onClick={() => {
          setIsBuildingsVisible(!isBuildingsVisible);
        }}
      >
        <ItemsForPurchaseHeaderText>
          <div style={{ display: "flex" }}>
            <HeaderIcon>
              <GiWhiteTower />
            </HeaderIcon>
            Buildings
          </div>
        </ItemsForPurchaseHeaderText>
        <FontAwesomeIcon
          icon={isBuildingsVisible ? "caret-up" : "caret-down"}
          size="lg"
          style={{ margin: "0 0.5rem" }}
        />
      </ItemsForPurchaseHeader>
      {isBuildingsVisible && <Buildings />}
      {/* Potions */}
      <ItemsForPurchaseHeader
        onClick={() => {
          setIsPotionsVisible(!isPotionsVisible);
        }}
      >
        <ItemsForPurchaseHeaderText>
          <div style={{ display: "flex" }}>
            <HeaderIcon>
              <GiDrinkMe />
            </HeaderIcon>
            Potions
          </div>
        </ItemsForPurchaseHeaderText>
        <FontAwesomeIcon
          icon={isPotionsVisible ? "caret-up" : "caret-down"}
          size="lg"
          style={{ margin: "0 0.5rem" }}
        />
      </ItemsForPurchaseHeader>
      {isPotionsVisible && <Potions />}
      {/* Scrolls */}
      <ItemsForPurchaseHeader
        onClick={() => {
          setIsScrollsVisible(!isScrollsVisible);
        }}
      >
        <ItemsForPurchaseHeaderText>
          <div style={{ display: "flex" }}>
            <HeaderIcon>
              <GiTiedScroll />
            </HeaderIcon>
            Scrolls
          </div>
        </ItemsForPurchaseHeaderText>
        <FontAwesomeIcon
          icon={isScrollsVisible ? "caret-up" : "caret-down"}
          size="lg"
          style={{ margin: "0 0.5rem" }}
        />
      </ItemsForPurchaseHeader>
      {isScrollsVisible && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          † reversible spell
        </div>
      )}
      {isScrollsVisible && <MagicUserScrolls />}
      {isScrollsVisible && <ClericScrolls />}
      {isScrollsVisible && <IllusionistScrolls />}
      {isScrollsVisible && <DruidScrolls />}
      {/* Buying and Selling Magic Items */}
      <ItemsForPurchaseHeader
        onClick={() => {
          setIsBuyingAndSellingMagicItemsVisible(
            !isBuyingAndSellingMagicItemsVisible
          );
        }}
      >
        <ItemsForPurchaseHeaderText>
          <div style={{ display: "flex" }}>
            <HeaderIcon>
              <GiMagicLamp />
            </HeaderIcon>
            Buying and Selling Magic Item Rules
          </div>
        </ItemsForPurchaseHeaderText>
        <FontAwesomeIcon
          icon={isBuyingAndSellingMagicItemsVisible ? "caret-up" : "caret-down"}
          size="lg"
          style={{ margin: "0 0.5rem" }}
        />
      </ItemsForPurchaseHeader>
      {isBuyingAndSellingMagicItemsVisible && <BuyingAndSellingMagicItems />}
    </ItemsForPurchaseContainer>
  );
};

const ItemsForPurchaseContainer = styled.div``;

const ItemsForPurchaseHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Sancreek", cursive;
  font-size: 1rem;
`;

const HeaderIcon = styled.div`
  margin: 0 0.5rem;
`;

const ItemsForPurchaseHeaderText = styled.div`
  text-align: center;
`;

const Weapons = styled.div`
  height: 35.75rem;
  background-image: url(${weapons});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 20rem 36rem;
`;

const AmmunitionAndArmor = styled.div`
  height: 35.75rem;
  background-image: url(${ammunitionAndArmor});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 20rem 34rem;
`;

const AdventuringGearOne = styled.div`
  height: 67.75rem;
  background-image: url(${adventuringGear1});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 20rem 68rem;
`;

const AdventuringGearTwo = styled.div`
  height: 61.75rem;
  background-image: url(${adventuringGear2});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 20rem 61rem;
`;

const Light = styled.div`
  height: 12.75rem;
  background-image: url(${light});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 20rem 13rem;
`;

const Lodging = styled.div`
  height: 11.75rem;
  background-image: url(${lodging});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 20rem 12rem;
`;

const Clothing = styled.div`
  height: 10.75rem;
  background-image: url(${clothing});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 20rem 11rem;
`;

const Transport = styled.div`
  height: 21.75rem;
  background-image: url(${transport});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 20rem 22rem;
`;

const Animals = styled.div`
  height: 21.75rem;
  background-image: url(${animals});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 20rem 22rem;
`;

const TackAndHarness = styled.div`
  height: 15.75rem;
  background-image: url(${tackAndHarness});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 20rem 11rem;
`;

const Buildings = styled.div`
  height: 21.75rem;
  background-image: url(${buildings});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 20rem 22rem;
`;

const Potions = styled.div`
  height: 24.75rem;
  background-image: url(${potions});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 20rem 24rem;
`;

const MagicUserScrolls = styled.div`
  height: 15.75rem;
  background-image: url(${magicUserScrolls});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 20rem 16rem;
`;

const ClericScrolls = styled.div`
  height: 15.75rem;
  background-image: url(${clericScrolls});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 20rem 14rem;
`;

const IllusionistScrolls = styled.div`
  height: 15.75rem;
  background-image: url(${illusionistScrolls});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 20rem 16rem;
`;

const DruidScrolls = styled.div`
  height: 15.75rem;
  background-image: url(${druidScrolls});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 20rem 14rem;
`;

const BuyingAndSellingMagicItems = styled.div`
  height: 21.75rem;
  background-image: url(${buyingSellingMagicItems});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 20rem 22rem;
`;

const StyledItemsForPurchase = styled(ItemsForPurchaseImpl)``;

export default StyledItemsForPurchase;
