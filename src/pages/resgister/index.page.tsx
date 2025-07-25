import { Button, Heading, MultiStep, Text, TextInput } from "@ignite-ui/react";
import { Container, Header, Form, FormError } from "./styles";

import { ArrowRight } from "phosphor-react";
import { z } from "zod";
import { useForm } from "react-hook-form";


const registerFormSchema = z.object({
    username: z
        .string()
        .min(3, { message: 'O usuario pode ter no minimo 3 caracteres.' })
        .regex(/^([a-z\\-]+)$/i, { message: 'O usuario pode ter apenas letras e hifens.' })
        .transform(username => username.toLowerCase()),

    name: z
        .string()
        .min(3, { message: 'O nome precisa ter pelo menos 3 letras.' })
})

type RegisterFormData = z.infer<typeof registerFormSchema>

export default function Register() {
    const { register, handleSubmit, formState: { erros }, } = useForm<RegisterFormData>()

    async function handleRegister(data: RegisterFormData) {
        console.log(data)
    }

    return (
        <Container>
            <Header>
                <Heading as="strong">Bem-vindo ao Ignite Call

                </Heading>
                <Text>
                    Precisamos de algumas informações para criar seu perfil! ah, você pode editar essas informações depois.
                </Text>

                <MultiStep size={4} currentStep={1} />

            </Header>

            <Form as="form" onSubmit={handleSubmit(handleRegister)}>
                <label>
                    <Text size="sm">Nome de usuario</Text>
                    <TextInput prefix="ignite.com/" placeholder="seu-usuario"{...register('username')} />
                    {erros.username && (<FormError>{erros.username.message}</FormError>)}
                </label>

                <label>
                    <Text size="sm">Nome de usuario</Text>
                    <TextInput prefix="ignite.com/" placeholder="Seu nome"{...register('name')} />
                </label>

                <Button type="submit" >
                    Proximo passo
                    <ArrowRight />
                </Button>


            </Form>
        </Container >
    )
}