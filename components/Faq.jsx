import Pretitle from "./Pretitle";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import FaqItem from "./FaqItem";

const faqItemsData = [
  {
    title: "Qual o diferencial vocês oferecem?",
    description:
      "Queremos fazer parte da construção do seu sonho. Por isso, oferecemos um atendimento personalizado e próximo, para entender suas necessidades e desejos. Oferecemos uma gestão completa includindo físico, financeiro e pessoal. Contamos com a melhor equipe de profissionais do mercadp, capacitados e especializados em casas de alto padrão. E também oferemos um acompanhamento integral da obra, com indicadores de desempenho, custo e produtividade para que você possa acompanhar o andamento da sua obra de forma transparente e segura.",
  },
  {
    title: "Como funciona o processo de construção?",
    description:
      "Acompanhamos a obra desde a escolha do terreno, projeto da arquitetura, aprovações e registros, projetos complementares (elétrico, hidraúlico, estrutural, etc), orçamento, planejamento, escolha das equipes, execução da obra, entrega e pós-obra. Tudo isso com um acompanhamento integral da obra, com indicadores de desempenho, custo e produtividade para que você possa acompanhar o andamento da sua obra de forma transparente e segura.",
  },
  {
    title: "Quais são os prazos de entrega?",
    description:
      "Os prazos de entrega variam de acordo com o tamanho e complexidade da obra. Em média, uma casa de alto padrão leva entre 6 meses a 1 ano para ser construída. Mas garantimos que faremos o possível para atender suas expectativas e prazos.",
  },
  {
    title: "Quais materiais são utilizados?",
    description:
      "Utilizamos apenas materiais de alta qualidade e com garantia, para garantir a durabilidade e segurança da sua obra. Trabalhamos com fornecedores de confiança e com experiência no mercado.",
  },
  {
    title: "Posso fazer alterações no projeto depois de iniciado?",
    description:
      "Sim, mas é importante que as alterações sejam feitas o quanto antes para evitar atrasos e custos adicionais. Nossa equipe estará sempre disponível para discutir e avaliar as alterações necessárias.",
  },
  {
    title: "Como o pagamento é feito?",
    description:
      "O pagamento é feito de acordo com o cronograma físico e financeiro da obra. Trabalhamos com um sistema de gestão que permite acompanhar o andamento da obra e os pagamentos de forma transparente e segura.",
  },
];

//animation variants for FAQ items
const faqItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.2,
      duration: 0.3,
    }, //staggered animation
  }),
};

const Faq = () => {
  return (
    <section className="pt-16 xl:pt-32">
      <div className="container mx-auto">
        {/* text */}
        <div className="mx-auto max-w-[540px] text-center xl:mb-20">
          <Pretitle text="Faq" center />
          <h2 className="h2 mb-3">Tem dúvidas? Nós temos as respostas!</h2>
          <p className="mx-auto mb-11 max-w-[480px]">
            Estamos aqui para ajudar você a entender melhor o nosso trabalho e
            como podemos tornar seu sonho em realidade. Confira as perguntas
            mais frequentes e entre em contato se precisar de mais informações.
          </p>
        </div>
        {/* faq items */}
        <ul className="w-full flex flex-col">
          {faqItemsData.map((item, index) => {
            return (
              <li key={index}>
                <FaqItem title={item.title} description={item.description} />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Faq;
