import * as yup from "yup";
import moment from "moment";
const yupFormSchemas = {
  string(label, config) {
    let yupChain = yup
      .string()
      .transform((cv, ov) => {
        return ov === "" ? null : cv;
      })
      .nullable(true)
      .trim()
      .label(label);
    if (config.required) {
      yupChain = yupChain.required();
    }
    if (config.min || config.min === 0) {
      yupChain = yupChain.min(config.min);
    }
    if (config.max) {
      yupChain = yupChain.max(config.max);
    }
    if (config.matches) {
      yupChain = yupChain.matches(config.matches);
    }
    return yupChain;
  },

  date(label, config?) {
    config = config || {};
    let yupChain = yup
      .mixed()
      .nullable(true)
      .label(label)
      .test("is-date", "date", (value) => {
        if (!value) {
          return true;
        }

        return moment(value, "YYYY-MM-DD").isValid();
      })
      .transform((value) =>
        value ? moment(value).format("YYYY-MM-DD") : null
      );

    if (config.required) {
      yupChain = yupChain.required();
    }

    return yupChain;
  },
};
