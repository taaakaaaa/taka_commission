import styled from "styled-components";

export const HomeContainer = styled.div`
  header {
    height: 90vh;
    border: 1px solid #323232;
    margin-right: 60px;

    @media only screen and (max-width: 1100px) {
      margin-right: 30px;
    }
    border-bottom-right-radius: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    /* ::after {
      content: "";
      position: absolute;

      inset: -10px;
      border: 1px solid #f9e2fc;

      border-bottom-right-radius: 60px;
      z-index: 0;
    } */

    .content {
      margin: 0px auto;
      max-width: 1366px;
      padding: 0px 60px;
      gap: 120px;
      display: flex;

      @media only screen and (max-width: 1100px) {
        flex-direction: column;
        gap: 30px;
      }

      img {
        flex-grow: 1;
        flex: 1;
        max-width: 40%;
        @media only screen and (max-width: 1100px) {
          align-self: flex-end;
          justify-self: center;
        }
        border-radius: 30px;
        position: relative;
      }

      .info {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: space-between;
        flex: 2;
        flex-grow: 2;
        @media only screen and (max-width: 1100px) {
          min-height: 36vh;
        }

        h1 {
          font-family: Rubik;
          font-style: normal;
          font-weight: bold;
          font-size: clamp(52px, 6vw, 100px);
          line-height: 118px;
          /* identical to box height */

          text-align: right;
          letter-spacing: 0.1em;

          color: #f9e2fc;

          padding: 0px;
          margin: 0px;
        }

        p {
          font-family: Rubik;
          font-style: normal;
          font-weight: normal;
          font-size: clamp(16px, 1vw, 22px);
          line-height: 26px;
          text-align: right;
          letter-spacing: 0.1em;

          color: #f9e2fc;
        }
      }
    }
  }

  h2 {
    font-family: Rubik;
    font-style: normal;
    font-weight: 500;
    font-size: clamp(32px, 4vw, 46.9943px);
    line-height: 56px;
    text-align: right;
    letter-spacing: 0.1em;
  }

  .contact {
    padding: 0px 30px;

    max-width: 1366px;
    margin: 100px auto;
    display: flex;
    align-items: center;

    h2 {
      height: 100%;
      border-right: 1px solid #ffa9a9;
      padding-right: 30px;
    }

    .items {
      display: flex;
      justify-content: flex-end;
      flex-wrap: wrap;
      gap: 60px;
      padding-left: 30px;

      .item {
        cursor: pointer;

        max-width: 40vw;
      }
    }
  }

  .twitch {
    #twitch-embed {
      iframe {
        width: 100%;
      }
    }
  }
`;
