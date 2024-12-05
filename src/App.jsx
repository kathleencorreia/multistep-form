// componentes
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { FiSend } from "react-icons/fi";
import UserForm from "./components/UserForm/UserForm";
import RevieWForm from "./components/Review/ReviewForm";
import Thanks from "./components/Thanks/Thanks";
import Steps from "./components/Steps/Steps";

//hooks
import { UseForm } from "./hooks/UseForm";
import { useState } from "react";

import "./App.css";

const formTemplate = {
  name: "",
  email: "",
  review: "",
  comment: "",
};

function App() {
  const [data, setData] = useState(formTemplate);

  const updateFieldHandler = (key, value) => {
    setData((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const formComponents = [
    <UserForm data={data} updateFieldHandler={updateFieldHandler} />,
    <RevieWForm data={data} updateFieldHandler={updateFieldHandler} />,
    <Thanks data={data} />,
  ];

  const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep } =
    UseForm(formComponents);

  const handleCleanForm = () => {
    alert("Formulário enviado!");
    setData({ name: "", email: "", review: "", comment: "" });
    changeStep(0);
    setTimeout(() => {
      document.activeElement.blur(); // Remove o foco do campo ativo
    }, 0);
  };

  return (
    <>
      <div className="app">
        <div className="header">
          <h2>Deixe sua avaliação</h2>
          <p>
            Ficamos felizes com a sua compra, ultilize o formulário abaixo para
            avaliar o produto
          </p>
        </div>
        <div className="form-container">
          <Steps currentStep={currentStep} />
          <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
            <div className="inputs-container">{currentComponent}</div>
            <div className="actions">
              {!isFirstStep && (
                <button
                  type="button"
                  onClick={() => changeStep(currentStep - 1)}
                >
                  <GrFormPrevious />
                  <span>Voltar</span>
                </button>
              )}

              {!isLastStep ? (
                <button type="submit">
                  <GrFormNext />
                  <span>Avançar</span>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    handleCleanForm();
                  }}
                >
                  <FiSend />
                  <span>Enviar</span>
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
