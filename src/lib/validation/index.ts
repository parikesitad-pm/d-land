import { z } from 'zod'

export const SignupValidation = z.object({
  name: z.string().min(4, { message: 'Nama Lengkap!' }),
  username: z.string().min(4, {
    message: 'Username teralu singkat!',
  }),
  email: z.string().email({ message: 'Masukkan email yang valid!' }),
  password: z.string().min(8, { message: 'Password minimal 8 character!' }),
})
export const SigninValidation = z.object({
  email: z.string().email({ message: 'Email salah' }),
  password: z.string().min(8, { message: 'Password salah' }),
})
