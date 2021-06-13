import { motion } from "framer-motion";
import styled from "styled-components";

export const CommissionsContainer = styled.div`
  max-width: 1366px;
  margin: 100px auto;

  h2 {
    color: #9d9d9d;
    padding: 0px;
    margin: 50px 0px;

    font-style: normal;
    font-weight: bold;
    font-size: 26px;
  }

  .title {
    display: flex;
    width: 100%;
    justify-content: flex-end;
    h1 {
      letter-spacing: 6px;
      padding: 0px;
      margin: 0px;
      font-size: clamp(42px, 7vw, 72px);
      color: #f9e2fc;

      @media only screen and (max-width: 1400px) {
        padding: 0px 50px;
      }

      @media only screen and (max-width: 1024px) {
        padding: 0px 30px;
      }
    }
  }
`;

export const CommissionsCardContainer = styled(motion.div)`
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */

  border: 1px solid white;
  border-radius: 30px;
  height: 280px;
  width: 100%;
  margin-bottom: 50px;

  display: flex;
  gap: 60px;
  align-items: center;
  cursor: pointer;
  transition: all 0.15s ease-in-out;

  :hover {
    transition: all 0.15s ease-in-out;
    background: black;
  }

  .miniature {
    width: 280px;
    height: 100%;

    object-fit: cover;
    border-radius: 29px;
  }

  .info {
    flex: 3;
    flex-grow: 3;
    h3 {
      color: #f9e2fc;
      font-size: 52px;
      padding: 0px;
      margin: 0px;

      padding-bottom: 30px;
    }

    p {
      font-size: 22px;
      padding: 0px;
      margin: 0px;
    }
  }

  .price {
    flex: 1;
    flex-grow: 1;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 52px;
    font-weight: bold;
    letter-spacing: 0.1em;
    padding-right: 30px;
    h4 {
      ::after {
        content: ",00";
        align-self: flex-end;
        font-size: 14px;
      }

      ::before {
        content: "R$";
        padding-right: 5px;
        font-size: 22px;
        font-weight: 300;

        color: lightgreen;
      }
    }
  }
`;
