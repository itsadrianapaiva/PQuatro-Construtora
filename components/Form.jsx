import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import Button from "./Button";

const Form = () => {
  return (
    <form className="flex flex-col">
      <div className="mb-[20px] flex flex-col gap-[20px]">
        <Input label="Nome" placeholder="Seu nome" />
        <Input label="E-mail" placeholder="Seu e-mail" />
        <div className="flex flex-col gap-[20px] xl:flex-row">
          <Input label="Telefone" placeholder="Seu telefone" />
          <Select>
            <SelectTrigger className="h-[54px] w-full rounded-none text-secondary outline-none">
              <SelectValue placeholder="Selecione o tipo de projeto" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Tipo de projeto</SelectLabel>
                <SelectItem value="construção">Construção</SelectItem>
                <SelectItem value="reforma">Reforma</SelectItem>
                <SelectItem value="restauração">Restauração</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        {/* textarea */}
        <Textarea
          className="h-[80px] resize-none rounded-none"
          placeholder="Deixa uma mensagem"
        />
        {/* btn */}
        <Button text="Enviar" />
      </div>
    </form>
  );
};

export default Form;
