import { Button, TextInput } from "@ignite-ui/react";
import { Form, } from "./styles";
import { ArrowRight} from "phosphor-react";

export function ClaimUsernameForm() {
  return (
    <Form>
        <TextInput size="sm" prefix="ignite.com" placeholder="seu-usuario"
        />
        <Button 
         size="sm" type="submit">
           Reservar usuario 
            <ArrowRight/>
        </Button>
    </Form>
}
