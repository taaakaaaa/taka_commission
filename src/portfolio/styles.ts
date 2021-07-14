import styled from "styled-components";

export const PortContainer = styled.div`
  max-width: 1366px;
  padding: 0px 30px;
  margin: 100px auto;

  .title {
    display: flex;
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

  header {
    margin-top: 50px;
    .tabs {
      display: flex;
      border-bottom: 1px solid #8f8f8f;
      position: relative;

      .tab.active {
        color: white;
        font-weight: 500;
      }
      .tab {
        font-weight: 300;
        cursor: pointer;
        width: 130px;
        padding: 15px 30px;
        border-radius: 10px;
        margin: 5px 0px;
        display: flex;
        align-items: center;
        justify-content: center;

        :hover {
          background: rgba(255, 255, 255, 0.15);
        }
      }

      .indicator {
        position: absolute;
        width: 130px;
        height: 4px;
        background: #a0a1f8;
        bottom: 0;
      }
    }
  }

  .content {
    h2 {
      color: #9d9d9d;
      padding: 0px;
      margin: 0px;
      margin-top: 50px;

      font-style: normal;
      font-weight: bold;
      font-size: 26px;
    }
    .tabContent {
      display: grid;

      padding: 30px 0px;

      grid-template-columns: repeat(4, minmax(auto, 300px));
      grid-auto-rows: 1fr;
      grid-auto-flow: dense;
      gap: 50px;

      @media only screen and (max-width: 1400px) {
        padding: 30px 50px;
      }

      @media only screen and (max-width: 1024px) {
        grid-template-columns: repeat(3, minmax(auto, 28.5rem));
        gap: 30px;
        padding: 30px 50px;
      }

      @media only screen and (max-width: 600px) {
        grid-template-columns: repeat(2, minmax(auto, 28.5rem));
        padding: 30px 30px;
        gap: 15px;
      }

      .item {
        box-sizing: border-box;
        overflow: hidden;

        height: 300px;
        width: 100%;
        object-fit: cover;
        object-position: top;
        position: relative;
        cursor: pointer;

        border-radius: 30px;
        :hover {
          object-fit: contain;
          background: #323232;
        }
      }
    }
  }
`;

export const PortItemContainer = styled.div`
  max-width: 1366px;
  padding: 0px 30px;
  margin: 100px auto;

  .title {
    display: flex;
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

  .content {
    margin: 50px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px;
    background: #323232;
    border-radius: 30px;
    /* max-height: 95vh; */
    .info {
      max-width: 100%;
      object-fit: cover;
    }
  }
  .recomendacoes {
    overflow: hidden;

    h2 {
      color: #9d9d9d;
      padding: 0px;
      margin: 0px;
      margin-top: 50px;

      font-style: normal;
      font-weight: bold;
      font-size: 26px;
    }

    .images {
      background: #323232;
      margin: 30px 0px;
      padding: 30px;
      border-radius: 30px;
      display: flex;
      flex-wrap: nowrap;
      overflow-x: auto;
      gap: 60px;
      -webkit-overflow-scrolling: touch;

      img {
        flex: 0 0 auto;

        box-sizing: border-box;
        overflow: hidden;

        height: 250px;
        width: 250px;
        object-fit: cover;
        object-position: top;
        position: relative;
        cursor: pointer;

        border-radius: 30px;
        :hover {
          padding: 15px 0px;
          object-fit: contain;
          background: #1f1f1f;
        }
      }
    }
  }
`;

export const ButtonOutlined = styled.button`
  width: 100%;
  color: #ffffff;
  cursor: pointer;
  background: #1f1f1f;
  outline: none;
  border: 2px solid black;
  padding: 20px 30px;
  font-size: clamp(18px, 2vw, 32px);
  border-image: linear-gradient(226.4deg, #6650f3 0%, #f55077 100%);
  border-image-slice: 1;

  :hover {
    background: #2e2e2e;
  }
`;
