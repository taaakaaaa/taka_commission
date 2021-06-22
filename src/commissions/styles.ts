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

export const CommissionsItemContainer = styled.div`
  max-width: 1366px;
  margin: 100px auto;
  @media only screen and (max-width: 1024px) {
    margin: 50px auto;
  }
  display: flex;
  flex-direction: column;
  gap: 60px;

  @media only screen and (max-width: 1024px) {
    gap: 30px;
  }

  @media only screen and (max-width: 1366px) {
    padding: 0px 30px;
  }

  .title {
    display: flex;
    width: 100%;

    justify-content: space-between;
    align-items: center;

    img {
      padding: 20px;
      border-radius: 50%;
      cursor: pointer;

      :hover {
        background: rgba(255, 255, 255, 0.25);
      }
    }

    h1 {
      letter-spacing: 6px;
      padding: 0px;
      margin: 0px;
      font-size: clamp(32px, 7vw, 72px);
      color: #f9e2fc;
      text-align: end;
    }
  }

  h2 {
    letter-spacing: 3px;
    padding: 0px;
    margin: 0px;
    font-size: clamp(32px, 7vw, 52px);
    color: #f9e2fc;
    text-align: end;
  }

  p {
    letter-spacing: 1px;
    font-weight: normal;
    text-align: right;
    padding-left: 30px;
    line-height: 1.8rem;
    color: #e3e3e3;
    font-size: clamp(1rem, 3vw, 1.25rem);

    @media only screen and (max-width: 1024px) {
      padding-left: 0 px;
    }
  }

  .images {
    scroll-snap-type: x mandatory;
    display: flex;
    gap: 60px;
    overflow-x: auto;
    position: relative;

    /* width */
    ::-webkit-scrollbar {
      width: 6px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: #323232;
      border-radius: 10px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #888;
      border-radius: 10px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }

    .image {
      scroll-snap-align: start;
      margin: 30px 0px;
      border: 1px solid #dd5175;
      box-sizing: border-box;
      border-radius: 30px;

      max-width: 878px;
      height: 611px;

      .info {
        background-size: cover;
        object-fit: cover;
        border-radius: 30px;
      }

      .info-zoom {
        border-radius: 30px;
      }
    }
  }

  .buttons {
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 30px;
    align-items: flex-end;

    button {
      cursor: pointer;
      width: 50%;
      @media only screen and (max-width: 1024px) {
        width: 100%;
        padding: 15px 30px;
      }

      background: linear-gradient(226.4deg, #6650f3 0%, #f55077 100%);
      border-radius: 30px;
      outline: none;
      border: none;

      color: white;

      font-family: Rubik;
      font-style: normal;
      font-weight: 400;
      letter-spacing: 3px;
      font-size: clamp(18px, 3vw, 22px);

      padding: 20px 0px;
    }

    .outline {
      background: transparent;
      border: 1px solid white;

      :hover {
        background: #323232;
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
  background: #1f1f1f;
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


export const CommissionsDialogContainer = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
  
  z-index: 99;

  display: flex;
  align-items: center;
  justify-content: center;

  .content{
    width: 50vw;
    background: #323232;
    border-radius: 30px;
    position: relative;
    padding: 20px;

    .close {
      position: absolute;
      top: 30px;
      right: 30px;
      color: red;
    }
  }
`