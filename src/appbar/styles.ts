import styled from "styled-components";

export const AppBarContainer = styled.div`
  height: 50px;
  position: sticky;
  top: 0;
  z-index: 3;

  background: #1f1f1f;

  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    margin: 0px auto;
    max-width: 1366px;

    h3 {
      cursor: pointer;
    }

    .items {
      display: flex;
      height: 100%;

      .item {
        font-size: 14px;
        margin-left: 5px;
        border-radius: 10px;
        padding: 0px 20px;
        height: 100%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;

        :hover {
          background: rgba(255, 255, 255, 0.15);
        }
      }
    }
  }
`;
