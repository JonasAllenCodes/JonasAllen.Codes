import { createDirectus, rest, staticToken } from "@directus/sdk";

type ContactForm = {
    status: string;
    first_name: FormDataEntryValue;
    last_name: FormDataEntryValue;
    email: FormDataEntryValue;
    message: FormDataEntryValue;
}

type Schema = {
    contact_form: ContactForm[];
}

const directus =
    createDirectus<Schema>(import.meta.env.DIRECTUS_ADDRESS)
        .with(staticToken(import.meta.env.DIRECTUS_STATIC_TOKEN))
        .with(rest());

export default directus;