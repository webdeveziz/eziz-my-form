import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import ReactInputMask from 'react-input-mask'

const Register = ({ formTitle }) => {
  const [success, setSuccess] = useState(false)

  const done = 'Поле заполнено верно'

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({ mode: 'onTouched' })

  const onSubmit = (data) => {
    const newData = {
      tel: data.tel
        .split(' ')
        .join('')
        .split('-')
        .join('')
        .split(')')
        .join('')
        .split('(')
        .join(''),
      nick: data.nick,
      messag: data.messag,
    }

    if (
      newData.tel.length === 12 &&
      /^[а-яА-Яa-zA-Z]+$/.test(watch('nick', '')) &&
      /^[а-яА-Яa-zA-Z]+$/.test(watch('messag', ''))
    ) {
      const JsonData = JSON.stringify(newData)
      alert(JsonData)
      setSuccess(true)
      setTimeout(() => {
        setSuccess(false)
      }, 1500)
      reset()
    }
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '300px',
        margin: '30px auto',
        background: '#fff',
        padding: '20px 30px',
        borderRadius: '10px',
      }}
    >
      <h2 style={{ textAlign: 'center', marginBottom: '10px' }}>{formTitle}</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '13px',
          borderRadius: '10px',
        }}
      >
        <ReactInputMask
          {...register('tel')}
          mask="+7 (999) 999-99-99"
          maskChar=" "
          placeholder="+7 (999) 999-99-99"
        />

        <input
          {...register('nick', {
            pattern: {
              value: /^[а-яА-Яa-zA-Z]+$/,
              message: 'Поле заполнено не верно',
            },
            required: 'Поле не может быть пустым',
          })}
        />
        {errors.nick && (
          <span style={{ fontSize: '13px', margin: '0px', color: 'red' }}>
            {errors.nick.message}
          </span>
        )}
        {/^[а-яА-Яa-zA-Z]+$/.test(watch('nick', '')) && (
          <span style={{ fontSize: '13px', margin: '0px', color: 'green' }}>
            {done}
          </span>
        )}
        <input
          {...register('messag', {
            pattern: {
              value: /^[а-яА-Яa-zA-Z]+$/,
              message: 'Поле заполнено не верно',
            },
            required: 'Поле не может быть пустым',
          })}
        />

        {errors.messag && (
          <span style={{ fontSize: '13px', margin: '0px', color: 'red' }}>
            {errors.messag.message}
          </span>
        )}
        {/^[а-яА-Яa-zA-Z]+$/.test(watch('messag', '')) && (
          <span style={{ fontSize: '13px', margin: '0px', color: 'green' }}>
            {done}
          </span>
        )}

        <input type="submit" />

        {success && (
          <span style={{ fontSize: '13px', margin: '0px', color: 'green' }}>
            Form success sended
          </span>
        )}
      </form>
    </div>
  )
}

export default Register
