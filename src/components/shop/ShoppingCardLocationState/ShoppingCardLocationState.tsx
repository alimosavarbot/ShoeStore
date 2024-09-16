// In the name of ALLAH!
// Mahdi Salehi

import { Formik, Field, Form, ErrorMessage, FormikHelpers } from "formik"
import * as Yup from "yup"

import selectLocationIcon from "../../../assets/images/selectLocation.svg"


interface FormFields {
  nationalCode: string
  iranian: boolean
  fullName: string
  phoneNumber: string
  state: string
  city: string
  address: string
  postalCode: string
  landingPhone: string
}

function ShoppingCardLocationState() {


  const validationSchema = Yup.object({
    nationalCode: Yup.string()
      .length(11, "طول کد ملی باید 11 رقم باشد")
      .required("لطفا کد ملی را وارد کنید"),
    iranian: Yup.boolean(),
    fullName: Yup.string()
      .required("لطفا نام و نام خانوادگی گیرنده را وارد کنید"),
    phoneNumber: Yup.string()
      .matches(/\d{11}/, "شماره تلفن نا معتبر است")
      .length(11, "شماره تلفن همراه باید 11 رقم باشد")
      .required("لطفا شماره تلفن را وارد کنید"),
    state: Yup.string()
      .oneOf([], "لطفا استان را انتخاب کنید"),
    city: Yup.string()
      .oneOf([], "لطفا شهر را انتخاب کنید"),
    address: Yup.string()
      .required("لطفا آدرس را وارد کنید"),
    postalCode: Yup.string()
      .length(10, "کد پستی باید 10 رقم باشد")
      .required("لطفا کد پستی را وارد کنید"),
    landingPhone: Yup.string()
      .length(11, "شماره تلفن ثابت باید 11 رقم باشد")
      .required("لطفا شماره تلفن ثابت را وارد کنید")
  })

  const initialValues : FormFields = {
    nationalCode: "",
    iranian: true,
    fullName: "",
    phoneNumber: "",
    state: "",
    city: "",
    address: "",
    postalCode: "",
    landingPhone: "",
  }

  const onSubmit = ((values : FormFields, { setSubmitting } : FormikHelpers<FormFields>) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  })


  return (
    <div className="flex flex-col justify-center items-center text-xl mb-10">
      <img
        src={selectLocationIcon}
        alt="select-location-icon"
        className="w-20 h-20"
      />
      <span className="mt-5 mb-8">هنوز آدرسی ثبت نکردید!</span>
      <button
        className="border border-black py-3 px-16"
      >افزودن آدرس جدید</button>

      <div className="my-20 text-xl w-full px-20 border py-8">
        <h5 className="font-bold text-2xl mb-8">افزودن آدرس جدید</h5>

        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {/* Form Elements... */}
        </Formik>
      </div>
    </div>
  )
}

export default ShoppingCardLocationState