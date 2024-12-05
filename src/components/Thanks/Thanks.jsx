import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs";

import "./Thanks.css";

const emojiData = {
  unsatisfied: <BsFillEmojiFrownFill />,
  neutral: <BsFillEmojiNeutralFill />,
  satisfied: <BsFillEmojiSmileFill />,
  very_satisfied: <BsFillEmojiHeartEyesFill />,
};

function Thanks({ data }) {
  return (
    <div className="thanks-container">
      <h3>Falta pouco...</h3>
      <p>
        A sua opinião é muito importante, em breve você receberá um cupom de 10%
        de desconto para a sua próxima compra.
      </p>
      <p>Para concluir sua avaliação clique no botão de Enviar abaixo.</p>
      <h4>
        Aqui está o resumo da sua avaliação <span>{data.nome}</span>{" "}
      </h4>
      <p className="review-data">
        Satisfação com o produto: <span>{emojiData[data.review]}</span>
      </p>
      <p className="review-data">
        Comentário: <span>{data.comment}</span>
      </p>
    </div>
  );
}

export default Thanks;
