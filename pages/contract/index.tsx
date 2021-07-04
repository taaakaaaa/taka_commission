import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "../../src/commissions/styles";
import dynamic from "next/dynamic";

export const FormC = dynamic(() => import("../../src/contract/formC"), {
  ssr: false,
});

export default function ContractPage() {
  const [data, setData] = useState(null);
  const [accept, setAccept] = useState(false);

  useEffect(() => {
    axios.get("/api/contract").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "0px auto",
        padding: "0px 30px",
        background: "#1F1F1F",
      }}
    >
      {accept ? (
        <FormC />
      ) : (
        <>
          <h1>Termos</h1>
          {data?.term ? (
            <div dangerouslySetInnerHTML={{ __html: data.term }} />
          ) : (
            <div>Loading...</div>
          )}
          <Button
            style={{ position: "relative", margin: "50px 0px" }}
            onClick={() => setAccept(true)}
            whileHover={{
              y: -5,
              filter: "hue-rotate(-30deg)",
            }}
            whileTap={{
              scale: 0.95,
            }}
          >
            li e aceito os termos
          </Button>
        </>
      )}
    </div>
  );
}
