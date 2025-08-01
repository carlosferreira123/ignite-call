import { Button, Heading, MultiStep, Text, TextInput } from "@ignite-ui/react";
import { Container, Header, Form, FormError } from "./styles";

import { ArrowRight } from "phosphor-react";




export default function Register() {




    async function handleRegister(data: RegisterFormData) {

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

            <Form as="form">
                <label>
                    <Text size="sm">Nome de usuario</Text>
                    <TextInput prefix="ignite.com/" placeholder="seu-usuario"{...register('username')} />
                    {errors.username && (<FormError size="sm">{errors.username.message}</FormError>)}
                </label>

                <label>
                    <Text size="sm">Nome completo</Text>
                    <TextInput prefix="ignite.com/" placeholder="Seu nome"{...register('name')} />
                    {errors.name && (<FormError size="sm">{errors.name.message}</FormError>)}
                </label>

                <Button type="submit" disabled={isSubmitting} >
                    Proximo passo
                    <ArrowRight />
                </Button>


            </Form>
        </Container >
    )
}