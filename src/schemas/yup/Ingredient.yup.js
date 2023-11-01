import * as yup from "yup";
const schema = yup.object().shape({
  name: yup
    .string()
    .min(3, "Debe ser de cuatro letras mínimo")
    .required("El nombre es requerida"),
  price: yup
    .number()
    .min(1, "debe ser un numero positivo")
    .required("El precio es requerida"),
  unitId: yup
    .number()
    .min(1, "debe ser un numero positivo")
    .required("El codigo de la unidad es requerida"),
  stock: yup
    .number()
    .min(1, "debe ser un numero positivo")
    .required("El stock es requerida"),
  minimum: yup
    .number()
    .min(1, "debe ser un numero positivo")
    .required("El minimo es requerida"),
});
const defaultValues = {
  name: "",
  price: 0,
  unitId: 0,
  stock: 0,
  minimum: 0,
};
export { schema, defaultValues };
