import styled from "styled-components";

export const ContractContainer = styled.div`
  max-width: 800px;
  margin: 0px auto;

  h1 {
    font-size: 2.6rem;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.6rem;
  }
`;

export const FormContract = styled.form`
  max-width: 800px;
  margin: 0px auto;

  input[type="text"] {
    width: 100%;
    padding: 20px 30px;
    margin: 14px 0px;
    box-sizing: border-box;

    font-size: 1.4rem;
  }

  .items {
    display: flex;
    flex-direction: column;

    .item {
      display: flex;
      gap: 15px;
      padding: 20px 0px;
      cursor: pointer;

      :hover {
        background: rgba(0, 0, 0, 0.1);
      }
    }
  }

  .warning {
    border: 1px dashed#545400;
    margin-top: 30px;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    font-size: 1rem;
    color: #545400;
    .icon {
      margin-top: 3px;
    }
  }
`;
