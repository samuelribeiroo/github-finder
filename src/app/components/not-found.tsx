export default function NotFound(props: { text?: string }) {
  return (
    <>
      <div className="general-container">
        <p className="text-red-600 text-center text-xl">
          Nenhum perfil foi encontrado com ese nome de usuário.
          <br />Tente novamente
        </p>
        {props.text}
      </div>
    </>
  );
}
