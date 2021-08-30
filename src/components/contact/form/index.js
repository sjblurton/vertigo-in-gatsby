import React, { useState } from "react"
import { Button } from "../../../shared"
import {
  StyledError,
  Title,
  StyledForm,
  StyledFormWrapper,
  StyledInput,
  StyledTextArea,
  StyledLabel,
  StyledSuccess,
  ButtonContainer,
} from "./styles/form"
import { Formik, Form } from "formik"
import * as Yup from "yup"
import { useIntl, FormattedMessage } from "gatsby-plugin-intl"

const formStatusProps = {
  success: {
    message:
      "Your message has been sent, we will get back to you as soon as we can.",
    type: "success",
  },
  error: {
    message: "Something went wrong. Please try again.",
    type: "error",
  },
}

function EmailForm() {
  const intl = useIntl()
  const [displayFormStatus, setDisplayFormStatus] = useState(false)
  const [formStatus, setFormStatus] = useState({
    message: "",
    type: "",
  })

  const sendMessage = async (data, resetForm) => {
    try {
      if (data) {
        setFormStatus(formStatusProps.success)
        resetForm({})
      }
    } catch (error) {
      const response = error.response
      if (response.status === 400) {
        setFormStatus(formStatusProps.error)
      } else {
        setFormStatus(formStatusProps.error)
      }
    } finally {
      setDisplayFormStatus(true)
      console.log(data)
    }
  }
  const phoneRegExp =
    /^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,3})|(\(?\d{2,3}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$/

  return (
    <div>
      <Formik
        initialValues={{ email: "", name: "", message: "", phone: "" }}
        onSubmit={(values, actions) => {
          sendMessage(values, actions.resetForm)
          setTimeout(() => {
            actions.setSubmitting(false)
          }, 500)
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email()
            .required(
              intl.formatMessage({ id: "ContactPage.form.errors.email" })
            ),
          name: Yup.string().required(
            intl.formatMessage({ id: "ContactPage.form.errors.name" })
          ),
          message: Yup.string().required(
            intl.formatMessage({ id: "ContactPage.form.errors.message" })
          ),
          phone: Yup.string()
            .required(
              intl.formatMessage({
                id: "ContactPage.form.errors.phone.required",
              })
            )
            .matches(
              phoneRegExp,
              intl.formatMessage({
                id: "ContactPage.form.errors.phone.invalid",
              })
            ),
        })}
      >
        {props => {
          const {
            values,
            touched,
            errors,
            handleBlur,
            handleChange,
            isSubmitting,
          } = props
          return (
            <Form>
              <StyledFormWrapper>
                <StyledForm>
                  <Title>
                    <FormattedMessage id={`ContactPage.form.title`} />
                  </Title>
                  <StyledLabel htmlFor="name">
                    <FormattedMessage id={`ContactPage.form.name`} />
                  </StyledLabel>
                  <StyledInput
                    type="name"
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                  />
                  <StyledError>
                    {errors.name && touched.name && errors.name}
                  </StyledError>

                  <StyledLabel htmlFor="email">
                    <FormattedMessage id={`ContactPage.form.email`} />
                  </StyledLabel>
                  <StyledInput
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  <StyledError>
                    {errors.email && touched.email && errors.email}
                  </StyledError>

                  <StyledLabel htmlFor="phone">
                    <FormattedMessage id={`ContactPage.form.phone`} />
                  </StyledLabel>
                  <StyledInput
                    type="phone"
                    name="phone"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phone}
                  />
                  <StyledError>
                    {errors.phone && touched.phone && errors.phone}
                  </StyledError>

                  <StyledLabel htmlFor="message">
                    <FormattedMessage id={`ContactPage.form.message`} />
                  </StyledLabel>
                  <StyledTextArea
                    type="message"
                    name="message"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.message}
                  />
                  <StyledError>
                    {errors.message && touched.message && errors.message}
                  </StyledError>
                  {displayFormStatus && (
                    <div>
                      {formStatus.type === "error" ? (
                        <StyledError>{formStatus.message}</StyledError>
                      ) : formStatus.type === "success" ? (
                        <StyledSuccess>{formStatus.message}</StyledSuccess>
                      ) : null}
                    </div>
                  )}
                  <ButtonContainer>
                    <Button disabled={isSubmitting} type="submit">
                      <FormattedMessage id={`ContactPage.form.submit`} />
                    </Button>
                  </ButtonContainer>
                </StyledForm>
              </StyledFormWrapper>
            </Form>
          )
        }}
      </Formik>
    </div>
  )
}

export default EmailForm
