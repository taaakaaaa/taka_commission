import { motion } from "framer-motion";
import styled from "@emotion/styled";

export const AppBarContainer = styled.div`
  height: 50px;
  position: sticky;
  top: 0;
  z-index: 3;

  background: #1f1f1f;

  .select {
    width: 100px;
  }

  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    margin: 0px auto;
    max-width: 1366px;
    @media only screen and (max-width: 1366px) {
      padding: 0px 30px;
    }

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

export const SidenavContainer = styled(motion.div)`
  position: fixed;
  z-index: 999;

  margin: 0;
  padding: 0;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  overflow: hidden; /* or auto or scroll */

  background-image: url(/background.png);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 60px;
  height: 100vh;
  max-width: 100vh;

  .closeIcon {
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 10px;
    cursor: pointer;
    border-radius: 50%;

    :hover {
      background: rgba(0, 0, 0, 0.1);
    }
  }
`;
