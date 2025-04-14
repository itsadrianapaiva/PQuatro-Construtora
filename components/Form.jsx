import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
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
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      projectType: "",
      message: "",
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Function to format phone number as (xx) x xxxx-xxxx
  const formatPhoneNumber = (value) => {
    if (!value) return "";
    const digits = value.replace(/\D/g, "");
    let formatted = "";
    if (digits.length > 0) formatted = `(${digits.slice(0, 2)}`;
    if (digits.length > 2) formatted += `) ${digits.slice(2, 3)}`;
    if (digits.length > 3) formatted += ` ${digits.slice(3, 7)}`;
    if (digits.length > 7) formatted += `-${digits.slice(7, 11)}`;
    return formatted;
  };

  // Form submission handler
  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      console.log("Submitting:", data);
      const functionUrl =
        process.env.NODE_ENV === "development"
          ? "http://localhost:8888/.netlify/functions/submit-form"
          : "/.netlify/functions/submit-form";
      console.log("Fetching URL:", functionUrl);
      const response = await fetch(functionUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        mode: "cors",
      });
      console.log("Response status:", response.status);
      const responseData = await response.json();
      console.log("Response data:", responseData);
      if (!response.ok) {
        throw new Error(responseData.message || "Submission failed");
      }
      setSubmitStatus(
        "Formulário enviado com sucesso. Logo entraremos em contato!",
      );
      reset(); // Clear form after success
    } catch (error) {
      console.error("Submission error:", error.message);
      setSubmitStatus("Erro ao enviar o formulário. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      <div className="mb-[20px] flex flex-col gap-[20px]">
        {/* Name Field */}
        <div>
          <Input
            label="Nome"
            placeholder="Seu nome"
            {...register("name", { required: "Nome é obrigatório" })}
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>

        {/* Email Field */}
        <div>
          <Input
            label="E-mail"
            placeholder="Seu e-mail"
            {...register("email", {
              required: "E-mail é obrigatório",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "E-mail inválido",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>

        {/* Phone and Project Type */}
        <div className="flex flex-col gap-[20px] xl:flex-row">
          {/* Phone Field */}
          <div>
            <Controller
              name="phone"
              control={control}
              rules={{
                required: "Telefone é obrigatório",
                validate: {
                  minDigits: (value) => {
                    const digits = value.replace(/\D/g, "");
                    return (
                      digits.length >= 11 ||
                      "Telefone deve ter pelo menos 11 dígitos"
                    );
                  },
                  format: (value) =>
                    /^\(\d{2}\) \d \d{4}-\d{4}$/.test(value) ||
                    "Formato esperado: (xx) x xxxx-xxxx",
                },
              }}
              render={({ field }) => (
                <Input
                  label="Telefone"
                  placeholder="(XX) X XXXX-XXXX"
                  value={formatPhoneNumber(field.value)}
                  onChange={(e) => {
                    const rawValue = e.target.value.replace(/\D/g, "");
                    field.onChange(formatPhoneNumber(rawValue));
                  }}
                />
              )}
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-500">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* Project Type Select */}
          <Controller
            name="projectType"
            control={control}
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
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
            )}
          />
        </div>
      </div>

      <div className="flex flex-col gap-6">
        {/* Message Textarea */}
        <Textarea
          className="h-[80px] resize-none rounded-none"
          placeholder="Deixa uma mensagem"
          {...register("message")}
        />

        {/* Submit Button */}
        <Button
          text={isSubmitting ? "Enviando..." : "Enviar"}
          isSubmit
          disabled={isSubmitting}
        />

        {/* Submission Status Messages */}
        {submitStatus && (
          <p
            className={`mt-2 ${submitStatus.includes("Erro") ? "text-red-500" : "text-green-500"}`}
          >
            {submitStatus}
          </p>
        )}
      </div>
    </form>
  );
};

export default Form;
