import { Button, TextInput } from "@ignite-ui/react";
import { Form, } from "./styles";
import { ArrowRight } from "phosphor-react";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const claimUsernameFormSchema = z.object({
  username: z.string()
    .min(3,)
    .regex(/^([a-z\\-]+)$/i, {
      message: 'O usuario pode ter apenas letras e hifens.',
    }),
})

type ClaimUsernameFormData = z.infer<typeof claimUsernameFormSchema>

export function ClaimUsernameForm() {
  const { register, handleSubmit } = useForm<ClaimUsernameFormData>({
    resolver: zodResolver(claimUsernameFormSchema),
  })

  async function handleClaimUsername(data: ClaimUsernameFormData) {
    console.log(data)
  }

  return (
    <Form as="form" onSubmit={handleSubmit(handleClaimUsername)}>
      <TextInput
        size="sm"
        prefix="ignite.com"
        placeholder="seu-usuario"
        {...register('username')} />

      <Button
        size="sm" type="submit">
        Reservar usuario
        <ArrowRight />
      </Button>
    </Form>
  )
}
