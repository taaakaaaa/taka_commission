import styled from "styled-components";
import { DrawerCardProps } from ".";

export const DrawerContainer = styled.div<DrawerCardProps>`
  position: fixed;
  inset: 0;
  background: ${(props) =>
    props.open ? "rgba(0, 0, 0, 0.75)" : "transparent"};
  pointer-events: ${(props) => (props.open ? "unset" : "none")};
  z-index: 999;
  backdrop-filter: ${({ open }) => (open ? "blur(2px)" : "")};

  display: flex;
  align-items: center;
  justify-content: flex-end;

  .no-items {
    background: #1f1f1f;
    border-radius: 30px;
    padding: 30px;
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    justify-content: center;

    flex-direction: column;

    color: #f9e2fc;
  }

  .content {
    overflow-y: auto;
    position: relative;

    .close {
      position: absolute;
      top: 30px;
      right: 30px;
      height: 100%;

      .icon {
        position: sticky;
        top: 8px;
        color: red;
      }
    }

    /* width */
    ::-webkit-scrollbar {
      width: 6px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: #323232;
      border-radius: 10px;
      margin: 30px 0px;
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

    height: calc(100% - 40px);
    margin: 30px;
    padding: 50px 30px 30px 30px;
    width: 550px;

    border-radius: 30px;
    background: #323232;

    h3 {
      margin: 0px;

      font-family: Rubik;
      font-style: normal;
      font-weight: bold;
      font-size: 42px;
      line-height: 62px;
      /* identical to box height */

      text-align: center;
      letter-spacing: 0.1em;

      color: #f9e2fc;
    }

    .line {
      margin: 30px 0px;
      background-image: linear-gradient(to right, transparent 33%, #ffffff 0%);
      background-position: bottom;
      background-size: 20px 20px;
      background-repeat: repeat-x;

      width: 100%;
      height: 1px;
    }
  }
`;

export const CartCardContainer = styled.div`
  background: #1f1f1f;
  border-radius: 30px;
  padding: 30px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  gap: 15px;

  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  h4 {
    padding: 0px;
    margin: 0px;

    font-family: Rubik;
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 38px;
    /* identical to box height */

    letter-spacing: 0.1em;

    color: #f9e2fc;
  }

  p,
  .p {
    font-size: 18px;
    line-height: 28px;
    font-weight: lighter;
    padding: 0px;
    margin: 0px;
  }

  p {
    cursor: pointer;
  }

  .MuiFilledInput-multiline {
    padding: 15px 25px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
  }

  .MuiInputBase-input {
    padding: 15px 0px;
  }
`;
