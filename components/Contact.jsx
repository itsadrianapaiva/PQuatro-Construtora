import { RiChat1Line, RiMapPin2Line, RiSmartphoneLine } from "react-icons/ri";
import Socials from "./Socials";
import Form from "./Form";

const Contact = () => {
  return (
    <section className="pt-16 xl:pt-32" id="contact">
      <div className="container mx-auto">
        <div className="w-full border-t-4 border-accent p-4 shadow-custom xl:h-[730px] xl:p-8 xl:px-[90px] xl:py-[36px]">
          <div className="flex h-full flex-col gap-[40px] xl:flex-row xl:gap-[90px]">
            {/* info */}
            <div className="h-[640px] w-full xl:max-w-[380px] xl:border-r xl:border-border/40 xl:pr-[70px]">
              <h4 className="mb-6 font-primary text-[26px] font-bold">
                Entre em Contato
              </h4>
              <p className="mb-9">
                Nosso time está ansioso para ouvir sobre o seu projeto.
              </p>
              {/* contact items */}
              <div className="mb-16 flex flex-col gap-[40px]">
                {/* contact item 1 */}
                <div className="flex items-start gap-[20px]">
                  <div className="">
                    <RiChat1Line className="text-[28px] text-accent" />
                  </div>
                  <div className="">
                    <h5 className="mb-2 font-primary text-[22px] font-semibold leading-none">
                      Fale Conosco
                    </h5>
                    <p className="mb-4">Nossa equipe está a sua espera.</p>
                    <p className="font-semibold text-primary">
                      pquatroconstrutora@gmail.com
                    </p>
                  </div>
                </div>
                {/* contact item 2 */}
                <div className="flex items-start gap-[20px]">
                  <div className="">
                    <RiMapPin2Line className="text-[28px] text-accent" />
                  </div>
                  <div className="">
                    <h5 className="mb-2 font-primary text-[22px] font-semibold leading-none">
                      Sede
                    </h5>
                    <p className="mb-4">
                      Construindo sonhos em Campo Grande desde 2019.
                    </p>
                    <p className="font-semibold text-primary">
                      Campo Grande - Mato Grosso do Sul
                    </p>
                  </div>
                </div>
                {/* contact item 3 */}
                <div className="flex items-start gap-[20px]">
                  <div className="">
                    <RiSmartphoneLine className="text-[28px] text-accent" />
                  </div>
                  <div className="">
                    <h5 className="mb-2 font-primary text-[22px] font-semibold leading-none">
                      Telefone
                    </h5>
                    <p className="mb-4">
                      Estamos disponiveis de Segunda a Sexta das 8h a 19h.
                    </p>
                    <p className="font-semibold text-primary">
                      (67) 99335-2525
                    </p>
                  </div>
                </div>
              </div>
              <Socials
                containerStyles="flex gap-[40px] ml-10 -mt-8
                "
                iconStyles="text-primary text-[28px]"
              />
            </div>

            {/* form */}
            <div className="flex-2">
              <h2 className="h2 mb-3">Solicite um Orçamento</h2>
              <p className="mb-9">
                Estamos aqui para ajudar você a transformar a sua visão em
                realidade. Se você tem alguma dúvida ou gostaria de discutir um
                projeto, não hesite em entrar em contato conosco. Preencha o
                formulário abaixo e entraremos em contato o mais breve possível.
              </p>
              <Form />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
