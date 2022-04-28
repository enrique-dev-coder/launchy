import { useState } from "react";
import ModalConfirmation from "./Modalformconfirmation";
//se agregan condicionales de estilos con la propiedad de modal que se pasa de cuando se usa el componente d ela form
export default function Form({ modal }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [modalConfirmation, setModalConfirmation] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    let xhr = new XMLHttpRequest();
    const url =
      "https://api.hsforms.com/submissions/v3/integration/submit/21017130/9b8b2c63-62c9-40af-9d1f-5aef2d4b6cd2";
    let data = {
      fields: [
        {
          name: "email",
          value: email,
        },
        {
          name: "firstname",
          value: name,
        },
      ],
      context: {
        pageUri: "https://launchy.me/",
        pageName: "launchy",
      },
    };
    //pasamos el dato a JSON para enviar
    let final_data = JSON.stringify(data);
    //metodo de postear  a la url de hubspot
    xhr.open("POST", url);
    //mandar peticion de typo application/json
    xhr.setRequestHeader("Content-Type", "application/json");
    //funcion que sirce para verificar que se haya mandado el form
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.responseText);
        setModalConfirmation(true);
      } else if (xhr.readyState === 4 && xhr.status === 403) {
        console.log(xhr.responseText);
      }
    };
    //mandar la request final a la api de hubspot
    xhr.send(final_data);
    //dejar vacio el estado que mandael form
    setName("");
    setEmail("");
  };

  return (
    <>
      {modalConfirmation && (
        <ModalConfirmation
          open={modalConfirmation}
          close={() => setModalConfirmation(false)}
        />
      )}
      <form
        onSubmit={handleSubmit}
        className={
          modal
            ? "relative z-10  my-5 mx-auto rounded md:max-w-sm lg:mt-0"
            : "relative z-10  my-5 mx-auto py-5 rounded md:max-w-sm lg:mt-0"
        }
        style={
          !modal
            ? {
                background:
                  "linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%, rgba(33, 21, 57, 0.2) 100%)",
              }
            : { backgroundColor: "transparent" }
        }
      >
        <div className="formField">
          <label>Nombre</label>
          <input
            type="text"
            required
            className="inputField"
            style={{ background: "transparent" }}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="formField">
          <label>Email</label>
          <input
            type="email"
            required
            className="inputField"
            style={{ background: "transparent" }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="w-11/12 m-auto">
          <button
            type="submit"
            className=" bg-launchyOrange text-white w-full  text-sm py-4 rounded"
          >
            INSCRIBIRSE
          </button>
        </div>
      </form>
    </>
  );
}
