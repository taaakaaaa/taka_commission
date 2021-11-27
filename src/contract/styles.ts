import styled from "@emotion/styled";

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

export const FormContractContainer = styled.div`
  .card-item {
    background: black;
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
  }
`;
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
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
