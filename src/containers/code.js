import React, { useEffect } from "react";
import { authorization } from "../api";
import { useNavigate } from "react-router-dom";

const Code = () => {
  const navigate = useNavigate();

  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());
  const code = params.code;
  console.log(params.code);

  useEffect(() => {
    if (code) {
      authorization(code).then((result) => {
        navigate("/main");
      });
    }
  }, []);

  if (!code) return <div>Code not found</div>;
  return <div>Авторизуемся..</div>;
};

export default Code;
