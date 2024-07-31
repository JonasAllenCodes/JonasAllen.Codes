import { defineAction, z } from "astro:actions";

import directus from "@lib/directus";
import { createItem } from "@directus/sdk";

export const server = {
    contactForm: defineAction({
        accept: "form",
        input: z.object({
            username: z.null({
                message: "There is has been an error with your submission. If you are using an auto-fill for this form, please disable the form auto-fill. Then refresh the page, while holding the shift key to clear the cache on this page. Thank you and my apologies for any inconveniences.",
            }),
            status: z.literal("open"),
            firstName: z.string({
                message: "First Name is required",
            }),
            lastName: z.string({
                message: "Last Name is required",
            }),
            email: z.string({
                message: "Email is required",
            }).email({
                message: "Invalid email address (example@address.com)",
            }),
            message: z.string().optional(),
        }),
        handler: async (submission) => {
            const { status, firstName, lastName, email, message } = submission;

            try {
                console.log(email);
                const result = await directus.request(createItem("contact_form", {
                    status: status,
                    first_name: firstName,
                    last_name: lastName,
                    email: email,
                    message: message,
                }));
    
                return result;
            } catch (error) {

            console.log(email);
                if (error instanceof Error) {
                    console.error(
                        `${error.name}: ${error.message} \n\n${error.cause}`
                    );
                   
                }
            }
            
            console.log(result);
            

            return "Thank you!";
        },
    }),
}