'use client'

import { useForm, ValidationError } from '@formspree/react'

export default function ContactForm() {
  const [state, handleSubmit] = useForm('mvgkwjel')

  if (state.succeeded) {
    return (
      <p className="text-green-600 text-sm">
        이메일이 성공적으로 전송되었습니다. 빠른 시일 내에 답변드리겠습니다!
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <label htmlFor="email" className="text-sm font-medium text-gray-700">
        이메일 주소
      </label>
      <input
        id="email"
        type="email"
        name="email"
        required
        className="border border-gray-300 rounded-md px-3 py-2 text-sm"
        placeholder="이메일을 입력해주세요"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <label htmlFor="message" className="text-sm font-medium text-gray-700">
        메시지
      </label>
      <textarea
        id="message"
        name="message"
        rows={4}
        required
        className="border border-gray-300 rounded-md px-3 py-2 text-sm"
        placeholder="문의하실 내용을 적어주세요"
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />

      <button
        type="submit"
        disabled={state.submitting}
        className="bg-black text-white px-4 py-2 text-sm font-medium rounded-md hover:bg-gray-800 disabled:opacity-50"
      >
        {state.submitting ? '전송 중...' : '보내기'}
      </button>
    </form>
  )
}