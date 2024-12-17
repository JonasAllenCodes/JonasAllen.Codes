import {defineAction} from 'astro:actions'
import {z} from 'astro:schema'

import directus from '@lib/directus'
import {createItem} from '@directus/sdk'

export const server = {
  contactForm: defineAction({
    accept: 'form',
    input: z.object({
      username: z.null({
        message:
          'There is has been an error with your submission. If you are using an auto-fill for this form, please disable the form auto-fill. Then refresh the page, while holding the shift key to clear the cache on this page. Thank you and my apologies for any inconveniences.',
      }),
      status: z.literal('open'),
      firstName: z.string({
        message: 'First Name is required',
      }),
      lastName: z.string({
        message: 'Last Name is required',
      }),
      email: z
        .string({
          message: 'Email is required',
        })
        .email({
          message: 'Invalid email address (example@address.com)',
        }),
      message: z.string().optional(),
    }),
    handler: async (submission) => {
      const {status, firstName, lastName, email, message} = submission

      try {
        await directus.request(
          createItem('contact_form', {
            status: status,
            first_name: firstName,
            last_name: lastName,
            email: email,
            message: message,
          }),
        )
      } catch (e) {
        if (e instanceof Error) {
          console.error('Error', code)
        }
      }
      return "Your message has been successfully sent! I'll get back to you as soon as possible. Thank you for reahing out to me!"
    },
  }),
}
