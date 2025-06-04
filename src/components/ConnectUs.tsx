export function ConnectUs() {
  return (
    <section className="md:pt-4 px-4 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2  pb-[70px]">
        <div className="flex flex-col justify-end py-10 md:py-0">
          <div className="mb-5">
            <p className="font-semibold">Siga em nossas redes:</p>
          </div>
          <div className="flex flex-wrap gap-5">
            <a href="#" className="py-2 px-4 md:px-5 border rounded-full">
              Instagram
            </a>
            <a href="#" className="py-2 px-4 md:px-5 border rounded-full">
              X
            </a>
            <a href="#" className="py-2 px-4 md:px-5 border rounded-full">
              Facebook
            </a>
            <a href="#" className="py-2 px-4 md:px-5 border rounded-full">
              Youtube
            </a>
          </div>
        </div>
        <div className="font-footer flex flex-col md:flex-row gap-10 md:gap-28 md:justify-end">
          <div>
            <p className="font-medium mb-5">Empresa</p>
            <div className="flex flex-col text-gray-400 gap-3">
              <a href="#">Home</a>
              <a href="#">Quem somos</a>
              <a href="#">Serviços</a>
              <a href="#">Contato</a>
            </div>
          </div>
          <div>
            <p className="font-medium mb-5">Novidades</p>
            <div className="flex flex-col text-gray-400 gap-3">
              <a href="#">Passaporte</a>
              <a href="#">Visto</a>
              <a href="#">Entrevista</a>
              <a href="#">Polícia Federal</a>
            </div>
          </div>
          <div>
            <p className="font-medium mb-5">Suporte</p>
            <div className="flex flex-col text-gray-400 gap-3">
              <a href="#">FAQ</a>
              <a href="#">Contato</a>
              <a href="#">Dúvidas</a>
              <a href="#">Frequentes</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
